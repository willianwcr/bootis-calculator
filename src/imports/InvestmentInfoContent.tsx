import svgPaths from "./svg-hqbeyxnaii";

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
        <p className="block leading-[20px] whitespace-pre">Investimento</p>
      </div>
    </div>
  );
}

function ContentDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Content Divider">
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

function Label() {
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

function TextContainer() {
  return (
    <div className="relative shrink-0" data-name="TextContainer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative">
          <div
            className="font-sans font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap"
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

function InputContainer() {
  return (
    <div className="h-full relative shrink-0" data-name="InputContainer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 h-full items-center justify-start px-2.5 py-3 relative">
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

function InputTextField() {
  return (
    <div
      className="bg-[#5e50f2] box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative rounded-lg shrink-0"
      data-name="Input / TextField"
    >
      <InputContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="relative shrink-0" data-name="TextContainer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative">
          <div
            className="font-sans font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
              12 meses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="h-full relative shrink-0" data-name="InputContainer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 h-full items-center justify-start px-2.5 py-3 relative">
          <TextContainer1 />
        </div>
      </div>
    </div>
  );
}

function InputTextField1() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative">
        <InputContainer1 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="relative shrink-0" data-name="TextContainer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative">
          <div
            className="font-sans font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
              18 meses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="h-full relative shrink-0" data-name="InputContainer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 h-full items-center justify-start px-2.5 py-3 relative">
          <TextContainer2 />
        </div>
      </div>
    </div>
  );
}

function InputTextField2() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative">
        <InputContainer2 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
      <InputTextField />
      <InputTextField1 />
      <InputTextField2 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <Label />
      <Frame141 />
    </div>
  );
}

function Labels() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Período</p>
      </div>
    </div>
  );
}

function RowCell() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[250px]">
          <Labels />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">6 meses</p>
      </div>
    </div>
  );
}

function RowCell1() {
  return (
    <div
      className="bg-[#ffffff] h-12 relative shrink-0 w-40"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-40">
          <Labels1 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Table / Row Status / Row"
    >
      <RowCell />
      <RowCell1 />
    </div>
  );
}

function Labels2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">
          Valor do Investimento
        </p>
      </div>
    </div>
  );
}

function RowCell2() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[250px]">
          <Labels2 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 4.764,60</p>
      </div>
    </div>
  );
}

function RowCell3() {
  return (
    <div
      className="bg-[#ffffff] h-12 relative shrink-0 w-40"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-40">
          <Labels3 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Table / Row Status / Row"
    >
      <RowCell2 />
      <RowCell3 />
    </div>
  );
}

function Labels4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">
          Período de Isenção
        </p>
      </div>
    </div>
  );
}

function RowCell4() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 h-12 items-start justify-center px-3 py-4 relative w-[250px]">
          <Labels4 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          12 meses
        </p>
      </div>
      <div
        className="font-sans font-semibold relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          13 meses
        </p>
      </div>
    </div>
  );
}

function RowCell5() {
  return (
    <div
      className="bg-[#ffffff] h-12 relative shrink-0 w-40"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-40">
          <Labels5 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Table / Row Status / Row"
    >
      <RowCell4 />
      <RowCell5 />
    </div>
  );
}

function BodyRowContainers() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="BodyRowContainers"
    >
      <TableRowStatusRow />
      <TableRowStatusRow1 />
      <TableRowStatusRow2 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative rounded-md shrink-0" data-name="Body">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative">
        <BodyRowContainers />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function ComprasTag() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Compras / tag">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_30_7957)" id="Compras / tag">
          <path
            d={svgPaths.p39827900}
            fill="var(--fill-0, #717171)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_30_7957">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InterfaceCancel() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Interface / Cancel">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g id="Interface / Cancel">
          <path
            d={svgPaths.p30598700}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div
      className="bg-[#e7e7e7] max-w-[9999px] relative rounded-[3px] shrink-0"
      data-name="Tag"
    >
      <div className="flex flex-row items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start max-w-inherit pl-1 pr-[3px] py-0.5 relative">
          <ComprasTag />
          <div
            className="basis-0 flex flex-col font-sans font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[10px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
              Voucher Galena
            </p>
          </div>
          <InterfaceCancel />
        </div>
      </div>
    </div>
  );
}

function InvestmentInfoHeader() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Investment Info Header"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <CardHeader />
          <Frame142 />
          <Body />
          <Tag />
        </div>
      </div>
    </div>
  );
}

export default function InvestmentInfoContent() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Investment Info Content"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <InvestmentInfoHeader />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}
