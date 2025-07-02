import svgPaths from "./svg-pz7at7m5fc";

function Labels() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="basis-0 font-sans font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px]">Gestão Administrativa</p>
      </div>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative size-4" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="DropdownIcon">
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

function RowHeader() {
  return (
    <div
      className="bg-[#f3f3f3] relative shrink-0 w-[300px]"
      data-name="Row / Header"
    >
      <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-4 relative w-[300px]">
        <Labels />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg]">
            <DropdownIcon />
          </div>
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.pb8b4180}
            fill="var(--fill-0, #FDAC41)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Labels1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <DropdownIcon1 />
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Parcial</p>
      </div>
    </div>
  );
}

function RowCell() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          <Labels1 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon3() {
  return (
    <div className="relative shrink-0 size-4" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.p1ea839f0}
            fill="var(--fill-0, #5CC689)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Labels3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <DropdownIcon3 />
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Completo</p>
      </div>
    </div>
  );
}

function RowCell2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
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
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowHeader />
      {[...Array(2).keys()].map((_, i) => (
        <RowCell key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <RowCell2 key={i} />
      ))}
    </div>
  );
}

function Labels5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="basis-0 font-sans font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Empresas</p>
      </div>
    </div>
  );
}

function RowHeader1() {
  return (
    <div
      className="bg-[#f3f3f3] relative shrink-0 w-[300px]"
      data-name="Row / Header"
    >
      <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-3.5 relative w-[300px]">
        <Labels5 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon5() {
  return (
    <div className="relative shrink-0 size-5" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.p2deb2800}
            fill="var(--fill-0, #5CC689)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RowCell4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          <DropdownIcon5 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowHeader1 />
      {[...Array(4).keys()].map((_, i) => (
        <RowCell4 key={i} />
      ))}
    </div>
  );
}

function Labels6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="basis-0 font-sans font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Usuários</p>
      </div>
    </div>
  );
}

function RowHeader2() {
  return (
    <div
      className="bg-[#f3f3f3] relative shrink-0 w-[300px]"
      data-name="Row / Header"
    >
      <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-3.5 relative w-[300px]">
        <Labels6 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon9() {
  return (
    <div className="relative shrink-0 size-5" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.p2deb2800}
            fill="var(--fill-0, #5CC689)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RowCell8() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          <DropdownIcon9 />
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
      <RowHeader2 />
      {[...Array(4).keys()].map((_, i) => (
        <RowCell8 key={i} />
      ))}
    </div>
  );
}

function Labels7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="basis-0 font-sans font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Grupos de Usuários</p>
      </div>
    </div>
  );
}

function RowHeader3() {
  return (
    <div
      className="bg-[#f3f3f3] relative shrink-0 w-[300px]"
      data-name="Row / Header"
    >
      <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-3.5 relative w-[300px]">
        <Labels7 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon13() {
  return (
    <div className="relative shrink-0 size-5" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.p2deb2800}
            fill="var(--fill-0, #5CC689)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RowCell12() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          <DropdownIcon13 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowHeader3 />
      {[...Array(4).keys()].map((_, i) => (
        <RowCell12 key={i} />
      ))}
    </div>
  );
}

function Labels8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="basis-0 font-sans font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Controle de Acessos</p>
      </div>
    </div>
  );
}

function RowHeader4() {
  return (
    <div
      className="bg-[#f3f3f3] relative shrink-0 w-[300px]"
      data-name="Row / Header"
    >
      <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-3.5 relative w-[300px]">
        <Labels8 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon17() {
  return (
    <div className="relative shrink-0 size-5" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.p2deb2800}
            fill="var(--fill-0, #5CC689)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RowCell16() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          <DropdownIcon17 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowHeader4 />
      {[...Array(4).keys()].map((_, i) => (
        <RowCell16 key={i} />
      ))}
    </div>
  );
}

function Labels9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="basis-0 font-sans font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Auditoria</p>
      </div>
    </div>
  );
}

function RowHeader5() {
  return (
    <div
      className="bg-[#f3f3f3] relative shrink-0 w-[300px]"
      data-name="Row / Header"
    >
      <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-3.5 relative w-[300px]">
        <Labels9 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon21() {
  return (
    <div className="relative shrink-0 size-5" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.p2d9d340}
            fill="var(--fill-0, #EE5252)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RowCell20() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          <DropdownIcon21 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DropdownIcon23() {
  return (
    <div className="relative shrink-0 size-5" data-name="DropdownIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DropdownIcon">
          <path
            d={svgPaths.p2deb2800}
            fill="var(--fill-0, #5CC689)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RowCell22() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          <DropdownIcon23 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowHeader5 />
      {[...Array(2).keys()].map((_, i) => (
        <RowCell20 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <RowCell22 key={i} />
      ))}
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
      <TableRowStatusRow4 />
      <TableRowStatusRow5 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="relative rounded-md size-full" data-name="Body">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <BodyRowContainers />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}
