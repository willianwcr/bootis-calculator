import svgPaths from "./svg-g7wh0nj1no";

function Component2() {
  return (
    <div className="relative shrink-0 size-8" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p3701d180}
            fill="var(--fill-0, #A0A0A0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlanName() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="Plan Name"
    >
      <Component2 />
      <div
        className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[32px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px] whitespace-pre">Star</p>
      </div>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="LeftIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="LeftIcon">
          <path
            d={svgPaths.p1e85ce80}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#e7e7e7] box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-[9px] py-1.5 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <LeftIcon />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="LeftIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="LeftIcon">
          <path
            d={svgPaths.p253f9e80}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#e7e7e7] box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <LeftIcon1 />
      <div
        className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Trocar Plano</p>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <PlanName />
      <Frame149 />
    </div>
  );
}

function RecommendedPlanHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Recommended Plan Header"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px]">Plano Recomendado</p>
      </div>
      <Frame143 />
    </div>
  );
}

function CnpjCount() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start leading-[0] p-0 relative shrink-0 text-[14px] text-left text-nowrap"
      data-name="CNPJ Count"
    >
      <div
        className="font-sans font-normal relative shrink-0 text-[#717171]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Nº de CNPJs:
        </p>
      </div>
      <div
        className="font-sans font-semibold relative shrink-0 text-[#333333]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function TaxRegimeStatus() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start leading-[0] p-0 relative shrink-0 text-[14px] text-left text-nowrap"
      data-name="Tax Regime Status"
    >
      <div
        className="font-sans font-normal relative shrink-0 text-[#717171]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Simples Nacional:
        </p>
      </div>
      <div
        className="font-sans font-semibold relative shrink-0 text-[#333333]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">Sim</p>
      </div>
    </div>
  );
}

function MaxUsers() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start leading-[0] p-0 relative shrink-0 text-[14px] text-left text-nowrap w-full"
      data-name="Max Users"
    >
      <div
        className="font-sans font-normal relative shrink-0 text-[#717171]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Máximo de usuários:
        </p>
      </div>
      <div
        className="font-sans font-semibold relative shrink-0 text-[#333333]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          10 usuários
        </p>
      </div>
    </div>
  );
}

function RecommendedPlanDetails() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Recommended Plan Details"
    >
      <CnpjCount />
      <TaxRegimeStatus />
      <MaxUsers />
    </div>
  );
}

function RecommendedPlanContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Recommended Plan Content"
    >
      <RecommendedPlanHeader />
      <RecommendedPlanDetails />
    </div>
  );
}

function ContentDivider() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-[1.5px] relative shrink-0 w-full"
      data-name="Content Divider"
    >
      <div
        className="basis-0 bg-[#eaeaea] grow h-px min-h-px min-w-px shrink-0"
        data-name="Line"
      />
    </div>
  );
}

function OnboardingPricing() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-[149px]"
      data-name="Onboarding Pricing"
    >
      <div
        className="font-sans font-bold relative shrink-0 text-[#ee5252] text-[16px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
          R$ 2.990,00
        </p>
      </div>
      <div
        className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[32px]">R$ 990,00</p>
      </div>
      <div
        className="font-sans font-normal relative shrink-0 text-[#717171] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px]">Onboarding</p>
      </div>
    </div>
  );
}

function MonthlyPricing() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-[173px]"
      data-name="Monthly Pricing"
    >
      <div
        className="font-sans font-bold relative shrink-0 text-[#ee5252] text-[16px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
          R$ 239,90
        </p>
      </div>
      <div
        className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[32px]">R$ 229,90</p>
      </div>
      <div
        className="font-sans font-normal relative shrink-0 text-[#717171] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px]">Mensalidade (c/ 1 usuário)</p>
      </div>
    </div>
  );
}

function AdditionalUserPricing() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-[173px]"
      data-name="Additional User Pricing"
    >
      <div
        className="font-sans font-bold relative shrink-0 text-[#ee5252] text-[16px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
          R$ 55,90
        </p>
      </div>
      <div
        className="font-sans font-bold relative shrink-0 text-[#333333] text-[24px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[32px]">R$ 49,90</p>
      </div>
      <div
        className="font-sans font-normal relative shrink-0 text-[#717171] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px]">Usuário adicional (mensal)</p>
      </div>
    </div>
  );
}

function PricingDetails() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pricing Details"
    >
      <OnboardingPricing />
      <MonthlyPricing />
      <AdditionalUserPricing />
    </div>
  );
}

export default function RecommendedPlan() {
  return (
    <div
      className="bg-[#f7f7f7] relative size-full"
      data-name="Recommended Plan"
    >
      <div className="absolute border-[#eaeaea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative size-full">
          <RecommendedPlanContent />
          <ContentDivider />
          <PricingDetails />
        </div>
      </div>
    </div>
  );
}
