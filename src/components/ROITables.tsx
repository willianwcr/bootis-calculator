import React from "react";
import {
  formatCurrency,
  getCurrentPlansData,
  getPeriodOption,
} from "../utils/calculations";
import type { PlanType, PlanCalculations } from "../types";

interface ROITablesProps {
  plan: PlanType;
  calculations: PlanCalculations;
  investmentPeriod: string;
}

function TitleBlock() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="TitleBlock"
    >
      <div
        className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Retorno do Investimento
        </p>
      </div>
    </div>
  );
}

function ContentDivider() {
  return (
    <div
      className="h-0 relative shrink-0 w-full"
      data-name="Content Divider"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 760 1"
        >
          <g id="Content Divider">
            <line
              id="line"
              stroke="var(--stroke-0, #EAEAEA)"
              x2="760"
              y1="0.5"
              y2="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 h-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="CardHeader"
    >
      <TitleBlock />
      <ContentDivider />
    </div>
  );
}

function HeaderRowCell() {
  return (
    <div
      className="bg-[#f3f3f3] h-9 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <div className="h-4 shrink-0 w-[53px]" />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HeaderCellContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="block leading-[16px] whitespace-pre">
          {children}
        </span>
      </div>
    </div>
  );
}

function HeaderCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <HeaderCellContent>{children}</HeaderCellContent>
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableHeaderRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <HeaderRowCell />
      <HeaderCell>Padrão</HeaderCell>
      <HeaderCell>Investimento</HeaderCell>
      <HeaderCell>Economia</HeaderCell>
    </div>
  );
}

function DataRowLabel({
  children,
  height = 12,
}: {
  children: React.ReactNode;
  height?: number;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="block leading-[16px] whitespace-pre">
          {children}
        </span>
      </div>
    </div>
  );
}

function DataRowCell({
  children,
  height = 12,
}: {
  children: React.ReactNode;
  height?: number;
}) {
  const heightClass = height === 9 ? "h-9" : "h-12";
  return (
    <div
      className={`bg-[#f3f3f3] ${heightClass} relative shrink-0 w-[250px]`}
      data-name="Row / Cell"
    >
      <div
        className={`box-border content-stretch flex flex-row gap-2 ${heightClass} items-center justify-start overflow-clip px-3 py-4 relative w-[250px]`}
      >
        <DataRowLabel height={height}>{children}</DataRowLabel>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DataCellContent({
  children,
  isGreen = false,
}: {
  children: React.ReactNode;
  isGreen?: boolean;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className={`font-sans ${isGreen ? "font-semibold" : "font-normal"} leading-[0] relative shrink-0 text-[#${isGreen ? "333333" : "717171"}] text-[14px] text-left text-nowrap`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="block leading-[16px] whitespace-pre">
          {children}
        </span>
      </div>
    </div>
  );
}

function DataCell({
  children,
  height = 12,
  isGreen = false,
}: {
  children: React.ReactNode;
  height?: number;
  isGreen?: boolean;
}) {
  const heightClass = height === 9 ? "h-9" : "h-12";
  const bgClass = isGreen ? "bg-[#f3f3f3]" : "bg-[#ffffff]";

  return (
    <div
      className={`basis-0 ${bgClass} grow ${heightClass} min-h-px min-w-px relative shrink-0`}
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div
          className={`box-border content-stretch flex flex-row gap-2 ${heightClass} items-center justify-start px-3 py-4 relative w-full`}
        >
          <DataCellContent isGreen={isGreen}>
            {children}
          </DataCellContent>
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function EconomyWithPercentage({
  value,
  percentage,
}: {
  value: string;
  percentage: string;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row font-sans font-semibold gap-1.5 items-center justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="block leading-[16px] text-nowrap whitespace-pre">
          {value}
        </span>
      </div>
      <div
        className="relative shrink-0 text-[#5cc689] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="block leading-[16px] text-nowrap whitespace-pre">
          ({percentage})
        </span>
      </div>
    </div>
  );
}

function EconomyCell({
  value,
  percentage,
  height = 9,
}: {
  value: string;
  percentage: string;
  height?: number;
}) {
  const heightClass = height === 9 ? "h-9" : "h-12";

  return (
    <div
      className={`basis-0 bg-[#f3f3f3] grow ${heightClass} min-h-px min-w-px relative shrink-0`}
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div
          className={`box-border content-stretch flex flex-row gap-2 ${heightClass} items-center justify-start px-3 py-4 relative w-full`}
        >
          <EconomyWithPercentage
            value={value}
            percentage={percentage}
          />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export function ROITables({
  plan,
  calculations,
  investmentPeriod,
}: ROITablesProps) {
  const plansData = getCurrentPlansData();
  const planKey = plan.toLowerCase() as keyof typeof plansData;
  const standardPricing = plansData[planKey].standard;
  const preLaunchPricing = plansData[planKey].preLaunch;
  const isCustomPlan = calculations.isCustomPlan;

  // For custom plans, show a different message
  if (isCustomPlan) {
    return (
      <div
        className="bg-[#ffffff] relative rounded-xl size-full"
        data-name="ROI Info"
      >
        <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
          <div
            className="relative shrink-0 w-full"
            data-name="ROI Info Content"
          >
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
                <CardHeader />
                <div className="flex items-center justify-center w-full py-16">
                  <div className="text-center">
                    <div className="text-[24px] font-bold text-[#333333] leading-[32px] mb-4">
                      Plano Personalizado
                    </div>
                    <div className="text-[16px] text-[#717171] leading-[20px]">
                      Entre em contato para análise de ROI
                      personalizada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-xl" />
      </div>
    );
  }

  // Get the contract period from calculations or assume 12 months default
  const contractPeriod =
    calculations.paymentPeriod + calculations.exemptionPeriod;

  // Calculate standard plan costs (for "Padrão" column)
  const standardMonthlyCost = standardPricing.monthly;
  const standardOnboarding = standardPricing.onboarding;

  // Calculate additional users for standard pricing
  const additionalUsers =
    calculations.additionalUserCost > 0
      ? Math.floor(
          calculations.additionalUserCost /
            preLaunchPricing.additionalUser,
        )
      : 0;
  const standardAdditionalUserCost =
    standardPricing.additionalUser * additionalUsers;
  const standardTotalMonthlyRecurring =
    standardMonthlyCost + standardAdditionalUserCost;

  // Use Standard Total Mensal Recorrente × Contract Period for exemption calculation
  const standardExemptionTotal =
    standardTotalMonthlyRecurring * contractPeriod;
  const standardTotalDuringExemption =
    standardOnboarding + standardExemptionTotal;

  // Investment column uses current calculation values
  // Calcular o valor de isenção SEM o bônus do voucher
  const periodOptionPadrao = getPeriodOption(investmentPeriod);
  const exemptionPeriodSemVoucher = periodOptionPadrao.exemptionPeriod;
  const investmentMonthlyCost = calculations.totalMonthlyCost;
  const investmentExemptionTotalSemVoucher = investmentMonthlyCost * exemptionPeriodSemVoucher;
  const investmentOnboarding = preLaunchPricing.onboarding;
  const investmentExemptionTotal = calculations.exemptionValue;
  const investmentTotalDuringExemption =
    investmentOnboarding + investmentExemptionTotal;

  // Economy calculations
  const economyMonthlyCost =
    standardMonthlyCost - investmentMonthlyCost;
  const economyOnboarding =
    standardOnboarding - investmentOnboarding;
  const economyExemptionTotal =
    standardExemptionTotal - investmentExemptionTotalSemVoucher;
  const economyTotalDuringExemption =
  economyOnboarding +
  economyExemptionTotal;

  // Calculate discount percentage: ((investment - standard) / standard) * 100
  const discountPercentage =
    standardTotalDuringExemption > 0
      ? (
          ((investmentTotalDuringExemption -
            standardTotalDuringExemption) /
            standardTotalDuringExemption) *
          100
        ).toFixed(1)
      : "0.0";

  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="ROI Info"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <div
          className="relative shrink-0 w-full"
          data-name="ROI Info Content"
        >
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
              <CardHeader />

              {/* First Table */}
              <div
                className="relative rounded-md shrink-0 w-full"
                data-name="Body"
              >
                <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <TableHeaderRow />

                    {/* Período de Isenção Row */}
                    <div className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <DataRowCell>
                        Período de Isenção
                      </DataRowCell>
                      <DataCell>
                        {formatCurrency(
                          standardExemptionTotal,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell>
                        {
                          formatCurrency(
                            investmentExemptionTotalSemVoucher,
                            isCustomPlan,
                          )
                        }
                      </DataCell>
                      <DataCell>
                        {formatCurrency(
                          economyExemptionTotal,
                          isCustomPlan,
                        )}
                      </DataCell>
                    </div>

                    {/* Onboarding Row */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <DataRowCell>Onboarding</DataRowCell>
                      <DataCell>
                        {formatCurrency(
                          standardOnboarding,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell>
                        {formatCurrency(
                          investmentOnboarding,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell>
                        {formatCurrency(
                          economyOnboarding,
                          isCustomPlan,
                        )}
                      </DataCell>
                    </div>

                    {/* Total Durante Período Isenção Row */}
                    <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <DataRowCell height={9}>
                        Total Durante Período Isenção
                      </DataRowCell>
                      <DataCell height={9} isGreen>
                        {formatCurrency(
                          standardTotalDuringExemption,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell height={9} isGreen>
                        {(() => {
                          // Calcular o valor de isenção SEM o bônus do voucher
                          const periodOptionPadrao = getPeriodOption(investmentPeriod);
                          if (!periodOptionPadrao) {
                            return 'N/A';
                          }
                          const exemptionPeriodSemVoucher = periodOptionPadrao.exemptionPeriod;
                          const investmentMonthlyCost = calculations.totalMonthlyCost;
                          const investmentExemptionTotalSemVoucher = investmentMonthlyCost * exemptionPeriodSemVoucher;
                          const onboarding = calculations.onboarding;
                          const totalDuranteIsencao = investmentExemptionTotalSemVoucher + onboarding;
                          return formatCurrency(
                            totalDuranteIsencao,
                            isCustomPlan,
                          );
                        })()}
                      </DataCell>
                      <EconomyCell
                        value={formatCurrency(
                          economyTotalDuringExemption,
                          isCustomPlan,
                        )}
                        percentage={`${discountPercentage}%`}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
              </div>

              {/* Second Table */}
              <div
                className="relative rounded-md shrink-0 w-full"
                data-name="Body"
              >
                <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <TableHeaderRow />

                    {/* Mensalidade + 1 Usuário Row */}
                    <div className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <DataRowCell>
                        Mensalidade + 1 Usuário
                      </DataRowCell>
                      <DataCell>
                        {formatCurrency(
                          standardPricing.monthly,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell>
                        {formatCurrency(
                          preLaunchPricing.monthly,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell>
                        {formatCurrency(
                          standardPricing.monthly -
                            preLaunchPricing.monthly,
                          isCustomPlan,
                        )}
                      </DataCell>
                    </div>

                    {/* Usuário Adicional Row */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div
                        className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
                        data-name="Row / Cell"
                      >
                        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap">
                            <div
                              className="font-sans font-semibold relative shrink-0 text-[#333333] text-[14px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                              }}
                            >
                              <span className="block leading-[16px] text-nowrap whitespace-pre">
                                Usuário Adicional
                              </span>
                            </div>
                            <div
                              className="font-sans font-normal relative shrink-0 text-[#717171] text-[12px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                              }}
                            >
                              <span className="block leading-[16px] text-nowrap whitespace-pre">
                                ({additionalUsers} usuários)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      <DataCell>
                        {formatCurrency(
                          standardAdditionalUserCost,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell>
                        {formatCurrency(
                          calculations.additionalUserCost,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell>
                        {formatCurrency(
                          standardAdditionalUserCost -
                            calculations.additionalUserCost,
                          isCustomPlan,
                        )}
                      </DataCell>
                    </div>

                    {/* Total Mensal Recorrente Row */}
                    <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <DataRowCell height={9}>
                        Total Mensal Recorrente
                      </DataRowCell>
                      <DataCell height={9} isGreen>
                        {formatCurrency(
                          standardTotalMonthlyRecurring,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell height={9} isGreen>
                        {formatCurrency(
                          investmentMonthlyCost,
                          isCustomPlan,
                        )}
                      </DataCell>
                      <DataCell height={9} isGreen>
                        {formatCurrency(
                          standardTotalMonthlyRecurring -
                            investmentMonthlyCost,
                          isCustomPlan,
                        )}
                      </DataCell>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}
