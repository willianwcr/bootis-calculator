import React from "react";
import { PlanIcon } from "./icons/PlanIcon";
import { formatCurrencyFixed, getCurrentPlansData } from "../utils/calculations";
import svgPaths from "../imports/svg-g7wh0nj1no";
import type { PlanType, PlanCalculations } from "../types";

interface RecommendedPlanProps {
  plan: PlanType;
  calculations: PlanCalculations;
  onChangePlan: () => void;
  onResetPlan: () => void;
  selectedPlan: PlanType | null;
}

function ResetIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <path d={svgPaths.p1e85ce80} fill="#333333" />
      </svg>
    </div>
  );
}

function ChangeIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <path d={svgPaths.p253f9e80} fill="#333333" />
      </svg>
    </div>
  );
}

export function RecommendedPlan({
  plan,
  calculations,
  onChangePlan,
  onResetPlan,
  selectedPlan,
}: RecommendedPlanProps) {
  const planNames = {
    star: "Star",
    constellation: "Constellation",
    galaxy: "Galaxy",
    universe: "Universe",
  };

  const planName = planNames[plan];
  
  // Get plan data for features
  const plansData = getCurrentPlansData();
  const currentPlanData = plansData[plan];
  const preLaunchPricing = currentPlanData.preLaunch;
  const standardPricing = currentPlanData.standard;

  return (
    <div className="bg-[#f7f7f7] relative size-full">
      <div className="absolute border-[#eaeaea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative size-full">
          {/* Header */}
          <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left w-full">
              <p className="block leading-[16px]">Plano Recomendado</p>
            </div>
            <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
              {/* Plan Name */}
              <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
                <PlanIcon plan={plan} />
                <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[32px] text-left text-nowrap">
                  <p className="block leading-[40px] whitespace-pre">{planName}</p>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="box-border content-stretch flex flex-row gap-1 sm:gap-1.5 items-center justify-start p-0 relative shrink-0">
                {/* Reset Button - Only show if plan has been manually selected */}
                {selectedPlan && (
                  <div
                    className="bg-[#e7e7e7] box-border content-stretch flex flex-row gap-2 h-8 sm:h-9 items-center justify-center px-2 sm:px-[9px] py-1.5 relative rounded-lg shrink-0 cursor-pointer hover:bg-[#d7d7d7] transition-colors"
                    onClick={onResetPlan}
                    title="Resetar para plano recomendado"
                  >
                    <ResetIcon />
                  </div>
                )}
                
                {/* Change Plan Button */}
                <div
                  className="bg-[#e7e7e7] box-border content-stretch flex flex-row gap-1 sm:gap-2 h-8 sm:h-9 items-center justify-center px-2 sm:px-3 py-1.5 relative rounded-lg shrink-0 cursor-pointer hover:bg-[#d7d7d7] transition-colors"
                  onClick={onChangePlan}
                >
                  <ChangeIcon />
                  <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[11px] sm:text-[12px] text-center text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">Trocar Plano</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Details */}
          <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start leading-[0] p-0 relative shrink-0 text-[14px] text-left text-nowrap">
              <div className="font-sans font-normal relative shrink-0 text-[#717171]">
                <p className="block leading-[16px] text-nowrap whitespace-pre">Nº de CNPJs:</p>
              </div>
              <div className="font-sans font-semibold relative shrink-0 text-[#333333]">
                <p className="block leading-[16px] text-nowrap whitespace-pre">
                  {calculations.isCustomPlan ? "Sob consulta" : preLaunchPricing.cnpjCount}
                </p>
              </div>
            </div>

            <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start leading-[0] p-0 relative shrink-0 text-[14px] text-left text-nowrap">
              <div className="font-sans font-normal relative shrink-0 text-[#717171]">
                <p className="block leading-[16px] text-nowrap whitespace-pre">Simples Nacional:</p>
              </div>
              <div className="font-sans font-semibold relative shrink-0 text-[#333333]">
                <p className="block leading-[16px] text-nowrap whitespace-pre">
                  {calculations.isCustomPlan ? "Sob consulta" : preLaunchPricing.simplesNacional}
                </p>
              </div>
            </div>

            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start leading-[0] p-0 relative shrink-0 text-[14px] text-left text-nowrap w-full">
              <div className="font-sans font-normal relative shrink-0 text-[#717171]">
                <p className="block leading-[16px] text-nowrap whitespace-pre">Máximo de usuários:</p>
              </div>
              <div className="font-sans font-semibold relative shrink-0 text-[#333333]">
                <p className="block leading-[16px] text-nowrap whitespace-pre">
                  {calculations.isCustomPlan
                    ? "Sob consulta"
                    : preLaunchPricing.maxUsers === 999
                    ? "Ilimitado"
                    : `${preLaunchPricing.maxUsers} usuários`}
                </p>
              </div>
            </div>
          </div>

          {/* Content Divider */}
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-[1.5px] relative shrink-0 w-full">
            <div className="basis-0 bg-[#eaeaea] grow h-px min-h-px min-w-px shrink-0" />
          </div>

          {/* Pricing Details */}
          <div className="box-border content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between p-0 relative shrink-0 w-full gap-4 sm:gap-0">
            {/* Onboarding Pricing */}
            <div className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full sm:w-[149px]">
              {calculations.isCustomPlan ? (
                <div className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full">
                  <p className="block leading-[32px]">Sob consulta</p>
                </div>
              ) : (
                <>
                  <div className="font-sans font-bold relative shrink-0 text-[#ee5252] text-[16px] w-full">
                    <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
                      {formatCurrencyFixed(standardPricing.onboarding)}
                    </p>
                  </div>
                  <div className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full">
                    <p className="block leading-[32px]">
                      {formatCurrencyFixed(calculations.onboarding)}
                    </p>
                  </div>
                </>
              )}
              <div className="font-sans font-normal relative shrink-0 text-[#717171] text-[14px] w-full">
                <p className="block leading-[16px]">Onboarding</p>
              </div>
            </div>

            {/* Monthly Pricing */}
            <div className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full sm:w-[173px]">
              {calculations.isCustomPlan ? (
                <div className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full">
                  <p className="block leading-[32px]">Sob consulta</p>
                </div>
              ) : (
                <>
                  <div className="font-sans font-bold relative shrink-0 text-[#ee5252] text-[16px] w-full">
                    <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
                      {formatCurrencyFixed(standardPricing.monthly)}
                    </p>
                  </div>
                  <div className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full">
                    <p className="block leading-[32px]">
                      {formatCurrencyFixed(preLaunchPricing.monthly)}
                    </p>
                  </div>
                </>
              )}
              <div className="font-sans font-normal relative shrink-0 text-[#717171] text-[14px] w-full">
                <p className="block leading-[16px]">Mensalidade (c/ 1 usuário)</p>
              </div>
            </div>

            {/* Additional User Pricing */}
            <div className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full sm:w-[173px]">
              {calculations.isCustomPlan ? (
                <div className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full">
                  <p className="block leading-[32px]">Sob consulta</p>
                </div>
              ) : (
                <>
                  <div className="font-sans font-bold relative shrink-0 text-[#ee5252] text-[16px] w-full">
                    <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
                      {formatCurrencyFixed(standardPricing.additionalUser)}
                    </p>
                  </div>
                  <div className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full">
                    <p className="block leading-[32px]">
                      {formatCurrencyFixed(preLaunchPricing.additionalUser)}
                    </p>
                  </div>
                </>
              )}
              <div className="font-sans font-normal relative shrink-0 text-[#717171] text-[14px] w-full">
                <p className="block leading-[16px]">Usuário adicional (mensal)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
