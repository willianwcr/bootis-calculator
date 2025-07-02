import React, { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { CompanyForm } from "./components/CompanyForm";
import { RecommendedPlan } from "./components/RecommendedPlan";
import { InvestmentPanel } from "./components/InvestmentPanel";
import { ROITables } from "./components/ROITables";
import { ActionFooter } from "./components/ActionFooter";
import { AdminModal } from "./components/AdminModal";
import { AdminOptionsModal } from "./components/AdminOptionsModal";
import { ChangePlansModal } from "./components/ChangePlansModal";
import { PlanosModal } from "./components/PlanosModal";
import { VoucherModal } from "./components/VoucherModal";
import { PlanSelectionModal } from "./components/PlanSelectionModal";
import {
  getRecommendedPlan,
  calculatePricing,
  getCurrentPlansData,
  updatePlansData,
  getPeriodOption,
} from "./utils/calculations";
import type { CompanyData, AllPlansData, PlanType } from "./types";

export default function App() {
  const [companyData, setCompanyData] = useState<CompanyData>({
    storeCount: [1],
    userCount: [1],
    allSimplesNacional: true,
    companyName: "",
    cnpj: "",
    website: "",
    responsibleName: "",
    email: "",
    phone: "",
  });

  const [investmentPeriod, setInvestmentPeriod] = useState("12");
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminOptionsModalOpen, setIsAdminOptionsModalOpen] = useState(false);
  const [isChangePlansModalOpen, setIsChangePlansModalOpen] = useState(false);
  const [isPlanosModalOpen, setIsPlanosModalOpen] = useState(false);
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [isPlanSelectionModalOpen, setIsPlanSelectionModalOpen] = useState(false);
  const [hasValidVoucher, setHasValidVoucher] = useState(false);

  // Calculate derived values
  const recommendedPlan = useMemo(
    () =>
      getRecommendedPlan(
        companyData.storeCount[0],
        companyData.userCount[0],
        companyData.allSimplesNacional,
      ),
    [
      companyData.storeCount,
      companyData.userCount,
      companyData.allSimplesNacional,
    ],
  );

  // Use selected plan if available, otherwise use recommended plan
  const activePlan = selectedPlan || recommendedPlan;

  const calculations = useMemo(
    () =>
      calculatePricing(
        activePlan,
        companyData.userCount[0],
        investmentPeriod,
        true,
        hasValidVoucher,
      ),
    [
      activePlan,
      companyData.userCount,
      investmentPeriod,
      hasValidVoucher,
    ],
  );

  const currentPeriodOption = useMemo(() => {
    return getPeriodOption(investmentPeriod);
  }, [investmentPeriod]);

  // Event handlers
  const handleCompanyDataUpdate = (
    updates: Partial<CompanyData>,
  ) => {
    setCompanyData((prev) => ({ ...prev, ...updates }));
  };

  const handleReset = () => {
    setCompanyData({
      storeCount: [1],
      userCount: [1],
      allSimplesNacional: true,
      companyName: "",
      cnpj: "",
      website: "",
      responsibleName: "",
      email: "",
      phone: "",
    });
    setInvestmentPeriod("12");
    setSelectedPlan(null);
    setHasValidVoucher(false);
  };

  const handleChangePlan = () => {
    setIsPlanSelectionModalOpen(true);
  };

  const handleResetPlan = () => {
    setSelectedPlan(null);
    console.log("Plan reset to recommended");
  };

  const handleSelectPlan = (plan: PlanType) => {
    setSelectedPlan(plan);
    console.log(`Plan selected: ${plan}`);
  };

  const handleClosePlanSelectionModal = () => {
    setIsPlanSelectionModalOpen(false);
  };

  const handlePlanos = () => {
    setIsPlanosModalOpen(true);
  };

  const handleVoucher = () => {
    setIsVoucherModalOpen(true);
  };

  const handleRemoveVoucher = () => {
    setHasValidVoucher(false);
    console.log(
      "Voucher removido - desconto retirado do período de isenção.",
    );
  };

  const handleCloseVoucherModal = () => {
    setIsVoucherModalOpen(false);
  };

  const handleApplyVoucher = (isValid: boolean) => {
    if (isValid) {
      setHasValidVoucher(true);
      console.log(
        "Voucher aplicado com sucesso! +1 mês no período de isenção.",
      );
    } else {
      setHasValidVoucher(false);
      console.log("Código de voucher inválido.");
    }
  };

  const handleClosePlanosModal = () => {
    setIsPlanosModalOpen(false);
  };

  const handlePrint = () => {
    console.log("Print functionality");
  };

  const handleEmail = () => {
    console.log("Email functionality");
  };

  const handleSave = () => {
    console.log("Save functionality");
  };

  const handleAdminArea = () => {
    setIsAdminModalOpen(true);
  };

  const handleCloseAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const handleAdminAccess = () => {
    setIsAdminModalOpen(false);
    setIsAdminOptionsModalOpen(true);
  };

  const handleCloseAdminOptionsModal = () => {
    setIsAdminOptionsModalOpen(false);
  };

  const handleSelectAdminOption = (
    option: "plans" | "limits",
  ) => {
    setIsAdminOptionsModalOpen(false);

    if (option === "plans") {
      setIsChangePlansModalOpen(true);
    } else if (option === "limits") {
      // TODO: Open limits modal when provided
      console.log("Limits modal not implemented yet");
    }
  };

  const handleClosePlansModal = () => {
    setIsChangePlansModalOpen(false);
  };

  const handleSavePlansData = (newPlansData: AllPlansData) => {
    updatePlansData(newPlansData);
    console.log("Plans data updated:", newPlansData);
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 min-h-screen flex flex-col">
        <Header
          onReset={handleReset}
          onAdminArea={handleAdminArea}
          onPlanos={handlePlanos}
          onVoucher={handleVoucher}
        />

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full flex-1 mt-2 min-h-0">
          {/* Company Info Panel */}
          <div className="bg-white rounded-[12px] border border-[#eaeaea] w-full lg:w-[600px] lg:max-w-[600px] shadow-sm flex flex-col min-h-0 order-1 lg:order-1">
            <CompanyForm
              data={companyData}
              onUpdate={handleCompanyDataUpdate}
            />
            <div
              data-section="recommended-plan"
              className="shrink-0"
            >
              <RecommendedPlan
                plan={activePlan}
                calculations={calculations}
                onChangePlan={handleChangePlan}
                onResetPlan={handleResetPlan}
                selectedPlan={selectedPlan}
              />
            </div>
          </div>

          {/* Investment Panel */}
          <div className="flex-1 flex flex-col min-h-0 order-2 lg:order-2">
            <div className="shrink-0">
              <InvestmentPanel
                investmentPeriod={investmentPeriod}
                exemptionPeriod={calculations.exemptionPeriod}
                investmentValue={calculations.investmentValue}
                onInvestmentPeriodChange={setInvestmentPeriod}
                hasVoucherBonus={hasValidVoucher}
                onRemoveVoucher={handleRemoveVoucher}
                periodOption={currentPeriodOption}
                paymentPeriod={calculations.paymentPeriod}
                isCustomPlan={calculations.isCustomPlan}
                onboarding={calculations.onboarding}
              />
            </div>

            <div className="flex-1 flex flex-col space-y-4 sm:space-y-6 mt-4 sm:mt-6 min-h-0">
              <div className="flex-1 min-h-0">
                <ROITables
                  plan={activePlan}
                  calculations={calculations}
                  investmentPeriod={investmentPeriod}
                />
              </div>
              {/*
              <div className="shrink-0">
                <ActionFooter
                  onPrint={handlePrint}
                  onEmail={handleEmail}
                  onSave={handleSave}
                />
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={handleCloseAdminModal}
        onAccess={handleAdminAccess}
      />

      <AdminOptionsModal
        isOpen={isAdminOptionsModalOpen}
        onClose={handleCloseAdminOptionsModal}
        onSelectOption={handleSelectAdminOption}
      />

      <ChangePlansModal
        isOpen={isChangePlansModalOpen}
        onClose={handleClosePlansModal}
        onSave={handleSavePlansData}
        initialData={getCurrentPlansData()}
      />

      <PlanosModal
        isOpen={isPlanosModalOpen}
        onClose={handleClosePlanosModal}
      />

      <VoucherModal
        isOpen={isVoucherModalOpen}
        onClose={handleCloseVoucherModal}
        onApplyVoucher={handleApplyVoucher}
      />

      <PlanSelectionModal
        isOpen={isPlanSelectionModalOpen}
        onClose={handleClosePlanSelectionModal}
        currentPlan={activePlan}
        onSelectPlan={handleSelectPlan}
      />
    </div>
  );
}
