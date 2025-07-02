import svgPaths from "./svg-j12drncg5v";

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start leading-[0] p-0 relative shrink-0 text-[12px] text-left text-nowrap w-full"
      data-name="Label"
    >
      <div
        className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[#333333]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Nome da Empresa
        </p>
      </div>
      <div
        className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#ee5252]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">*</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="TextContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative w-full">
          <div
            className="font-sans font-normal leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#c4c4c4] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
              Ex: Farmácia João da Silva
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

function InputTextField() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function CompanyNameInput() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-6 p-0 top-10 w-[294px]"
      data-name="Company Name Input"
    >
      <Label />
      <InputTextField />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div
        className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">
          Período de Investimento
        </p>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="TextContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative w-full">
          <div
            className="font-sans font-normal leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
              6 meses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Setas / down arrow">
          <path
            d={svgPaths.p3601d680}
            fill="var(--fill-0, #A0A0A0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function InputContainer1() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer1 />
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
}

function InputTextField1() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer1 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InvestmentInput() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-6 p-0 top-[114px] w-[175px]"
      data-name="Investment Input"
    >
      <Label1 />
      <InputTextField1 />
    </div>
  );
}

function StoreCountRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-sans font-semibold items-center justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[14px] text-nowrap w-full"
      data-name="Store Count Row"
    >
      <div
        className="relative shrink-0 text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Número de Lojas
        </p>
      </div>
      <div
        className="relative shrink-0 text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          1 loja
        </p>
      </div>
    </div>
  );
}

function ProgressBarLine() {
  return (
    <div
      className="absolute h-1.5 left-0 right-[80%] top-1/2 translate-y-[-50%]"
      data-name="Progress Bar / Line"
    >
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-1.5 scale-y-[-100%] w-[58.8px]">
          <div
            className="bg-[#5e50f2] rounded-[999px] size-full"
            data-name="Progress Line"
          />
        </div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div
      className="bg-[#eaeaea] h-1.5 overflow-clip relative rounded-[999px] shrink-0 w-full"
      data-name="Progress Bar"
    >
      <ProgressBarLine />
    </div>
  );
}

function StoreCountProgress() {
  return (
    <div className="relative shrink-0 w-full" data-name="Store Count Progress">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-[5px] relative w-full">
          <ProgressBar />
          <div className="absolute left-[105px] size-4 top-1/2 translate-y-[-50%]">
            <div className="absolute bottom-[-87.5%] left-[-50%] right-[-50%] top-[-12.5%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 32 32"
              >
                <g filter="url(#filter0_d_1_11235)" id="Ellipse 2">
                  <circle cx="16" cy="10" fill="var(--fill-0, white)" r="8" />
                  <circle
                    cx="16"
                    cy="10"
                    r="7"
                    stroke="var(--stroke-0, #5E50F2)"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="32"
                    id="filter0_d_1_11235"
                    width="32"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      in="SourceAlpha"
                      operator="erode"
                      radius="8"
                      result="effect1_dropShadow_1_11235"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_1_11235"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_11235"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreCount() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-6 p-0 top-[188px] w-[294px]"
      data-name="Store Count"
    >
      <StoreCountRow />
      <StoreCountProgress />
    </div>
  );
}

export default function Frame16() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <CompanyNameInput />
      <InvestmentInput />
      <StoreCount />
    </div>
  );
}
