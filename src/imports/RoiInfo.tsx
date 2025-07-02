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

function Labels() {
  return <div className="h-4 shrink-0 w-[53px]" data-name="Labels" />;
}

function RowCell() {
  return (
    <div
      className="bg-[#f3f3f3] h-9 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels />
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
        <p className="block leading-[16px] whitespace-pre">Padrão</p>
      </div>
    </div>
  );
}

function RowCell1() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels1 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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
        <p className="block leading-[16px] whitespace-pre">Investimento</p>
      </div>
    </div>
  );
}

function RowCell2() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels2 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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
        <p className="block leading-[16px] whitespace-pre">Economia</p>
      </div>
    </div>
  );
}

function RowCell3() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels3 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell />
      <RowCell1 />
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
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels4 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 8.932,30</p>
      </div>
    </div>
  );
}

function RowCell5() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels5 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 3.774,60</p>
      </div>
    </div>
  );
}

function RowCell6() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels6 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 5.157,70</p>
      </div>
    </div>
  );
}

function RowCell7() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels7 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell4 />
      <RowCell5 />
      <RowCell6 />
      <RowCell7 />
    </div>
  );
}

function Labels8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Onboarding</p>
      </div>
    </div>
  );
}

function RowCell8() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels8 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 2.990,00</p>
      </div>
    </div>
  );
}

function RowCell9() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels9 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 990,00</p>
      </div>
    </div>
  );
}

function RowCell10() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels10 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 2.000,00</p>
      </div>
    </div>
  );
}

function RowCell11() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels11 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell8 />
      <RowCell9 />
      <RowCell10 />
      <RowCell11 />
    </div>
  );
}

function Labels12() {
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
          Total Durante Período Isenção
        </p>
      </div>
    </div>
  );
}

function RowCell12() {
  return (
    <div
      className="bg-[#f3f3f3] h-9 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels12 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 11.992,30</p>
      </div>
    </div>
  );
}

function RowCell13() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels13 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels14() {
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

function RowCell14() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels14 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels15() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-sans font-semibold gap-1.5 items-center justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 7.157,70
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#5cc689] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          (150,2%)
        </p>
      </div>
    </div>
  );
}

function RowCell15() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels15 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell12 />
      <RowCell13 />
      <RowCell14 />
      <RowCell15 />
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
      <TableRowStatusRow3 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative rounded-md shrink-0 w-full" data-name="Body">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <BodyRowContainers />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function Labels16() {
  return <div className="h-4 shrink-0 w-[53px]" data-name="Labels" />;
}

function RowCell16() {
  return (
    <div
      className="bg-[#f3f3f3] h-9 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels16 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Padrão</p>
      </div>
    </div>
  );
}

function RowCell17() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels17 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Investimento</p>
      </div>
    </div>
  );
}

function RowCell18() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels18 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Economia</p>
      </div>
    </div>
  );
}

function RowCell19() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels19 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow4() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell16 />
      <RowCell17 />
      <RowCell18 />
      <RowCell19 />
    </div>
  );
}

function Labels20() {
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
          Mensalidade + 1 Usuário
        </p>
      </div>
    </div>
  );
}

function RowCell20() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels20 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 239,90</p>
      </div>
    </div>
  );
}

function RowCell21() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels21 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 229,90</p>
      </div>
    </div>
  );
}

function RowCell22() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels22 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels23() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 10,00</p>
      </div>
    </div>
  );
}

function RowCell23() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels23 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow5() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell20 />
      <RowCell21 />
      <RowCell22 />
      <RowCell23 />
    </div>
  );
}

function Labels24() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Usuário Adicional
        </p>
      </div>
      <div
        className="font-sans font-normal relative shrink-0 text-[#717171] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          (9 usuários)
        </p>
      </div>
    </div>
  );
}

function RowCell24() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels24 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels25() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 447,20</p>
      </div>
    </div>
  );
}

function RowCell25() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels25 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels26() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 399,20</p>
      </div>
    </div>
  );
}

function RowCell26() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels26 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels27() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 48,00</p>
      </div>
    </div>
  );
}

function RowCell27() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels27 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell24 />
      <RowCell25 />
      <RowCell26 />
      <RowCell27 />
    </div>
  );
}

function Labels28() {
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
          Total Mensal Recorrente
        </p>
      </div>
    </div>
  );
}

function RowCell28() {
  return (
    <div
      className="bg-[#f3f3f3] h-9 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels28 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels29() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 687,10</p>
      </div>
    </div>
  );
}

function RowCell29() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels29 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels30() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 629,10</p>
      </div>
    </div>
  );
}

function RowCell30() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels30 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels31() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">R$ 58,00</p>
      </div>
    </div>
  );
}

function RowCell31() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-3 py-4 relative w-full">
          <Labels31 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow7() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell28 />
      <RowCell29 />
      <RowCell30 />
      <RowCell31 />
    </div>
  );
}

function BodyRowContainers1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="BodyRowContainers"
    >
      <TableRowStatusRow4 />
      <TableRowStatusRow5 />
      <TableRowStatusRow6 />
      <TableRowStatusRow7 />
    </div>
  );
}

function Body1() {
  return (
    <div className="relative rounded-md shrink-0 w-full" data-name="Body">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <BodyRowContainers1 />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function RoiInfoContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="ROI Info Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <CardHeader />
          <Body />
          <Body1 />
        </div>
      </div>
    </div>
  );
}

export default function RoiInfo() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="ROI Info"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <RoiInfoContent />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}
