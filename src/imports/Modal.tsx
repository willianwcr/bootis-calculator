import svgPaths from "./svg-du7iklezgr";

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="CloseIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CloseIcon">
          <path
            d={svgPaths.p15433a70}
            fill="var(--fill-0, #C4C4C4)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ModalHeader() {
  return (
    <div
      className="bg-[#ffffff] order-3 relative rounded shrink-0 w-full"
      data-name="Modal / Header"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-full">
          <div
            className="basis-0 font-sans font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px]">Escolher Plano</p>
          </div>
          <CloseIcon />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
    </div>
  );
}

function Labels() {
  return <div className="h-4 shrink-0 w-[53px]" data-name="Labels" />;
}

function RowCell() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start overflow-clip px-3 py-4 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <Labels />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p2597d200}
            fill="var(--fill-0, #A0A0A0)"
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
      <Component2 />
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Star</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-9 relative rounded-lg shrink-0 w-full" data-name="Button">
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative w-full">
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#d0d0d0] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Selecionado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RowCell1() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-3 py-4 relative w-full">
          <Labels1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <g id="Vector">
            <path d={svgPaths.p13e72c80} fill="var(--fill-0, #5E50F2)" />
            <path d={svgPaths.p6c0ca00} fill="var(--fill-0, #5E50F2)" />
            <path d={svgPaths.pbb975f0} fill="var(--fill-0, #5E50F2)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Labels2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <Component3 />
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Constellation</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#5e50f2] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative w-full">
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">
              Escolher plano
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RowCell2() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-3 py-4 relative w-full">
          <Labels2 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <g id="Vector">
            <path d={svgPaths.p25efc430} fill="var(--fill-0, #FDAC41)" />
            <path d={svgPaths.p3930f800} fill="var(--fill-0, #FDAC41)" />
            <path d={svgPaths.p24e8cc00} fill="var(--fill-0, #FDAC41)" />
          </g>
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
      <Component4 />
      <div
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Galaxy</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#5e50f2] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative w-full">
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">
              Escolher plano
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RowCell3() {
  return (
    <div
      className="basis-0 bg-[#f3f3f3] grow min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-3 py-4 relative w-full">
          <Labels3 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[6px] rounded-tr-[6px] shrink-0">
      <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative w-full">
        <RowCell1 />
        <RowCell2 />
        {[...Array(2).keys()].map((_, i) => (
          <RowCell3 key={i} />
        ))}
      </div>
      <div className="absolute border-[#eaeaea] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
    </div>
  );
}

function TableRowStatusRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <div className="flex flex-row items-center self-stretch">
        <RowCell />
      </div>
      <Frame148 />
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
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">N° de CNPJs</p>
      </div>
    </div>
  );
}

function RowCell5() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels5 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
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
        <p className="block leading-[16px] whitespace-pre">1</p>
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
        <p className="block leading-[16px] whitespace-pre">4</p>
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

function Labels8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">15</p>
      </div>
    </div>
  );
}

function RowCell8() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels8 />
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
      <RowCell5 />
      <RowCell6 />
      <RowCell7 />
      {[...Array(2).keys()].map((_, i) => (
        <RowCell8 key={i} />
      ))}
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
        className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Simples Nacional</p>
      </div>
    </div>
  );
}

function RowCell10() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels10 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
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
        <p className="block leading-[16px] whitespace-pre">Sim</p>
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

function Labels13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Ambos</p>
      </div>
    </div>
  );
}

function RowCell13() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels13 />
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
      <RowCell10 />
      {[...Array(2).keys()].map((_, i) => (
        <RowCell11 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <RowCell13 key={i} />
      ))}
    </div>
  );
}

function Labels15() {
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
          Máximo de Usuários
        </p>
      </div>
    </div>
  );
}

function RowCell15() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels15 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function RowCell16() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels16 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">30</p>
      </div>
    </div>
  );
}

function RowCell17() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
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
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">999</p>
      </div>
    </div>
  );
}

function RowCell18() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels18 />
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
      <RowCell15 />
      <RowCell16 />
      <RowCell17 />
      {[...Array(2).keys()].map((_, i) => (
        <RowCell18 key={i} />
      ))}
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
        <p className="block leading-[16px] whitespace-pre">Onboarding</p>
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
      className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          R$ 2.990,00
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 990,00
        </p>
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
      className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          R$ 4.390,00
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 1.490,00
        </p>
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
      className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          R$ 6.890,00
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 2.290,00
        </p>
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

function TableRowStatusRow4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table / Row Status / Row"
    >
      <RowCell20 />
      <RowCell21 />
      <RowCell22 />
      {[...Array(2).keys()].map((_, i) => (
        <RowCell23 key={i} />
      ))}
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

function RowCell25() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels25 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels26() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          R$ 239,90
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 229,90
        </p>
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
      className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          R$ 399,00
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 379,90
        </p>
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

function Labels28() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          R$ 699,00
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 659,00
        </p>
      </div>
    </div>
  );
}

function RowCell28() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels28 />
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
      <RowCell25 />
      <RowCell26 />
      <RowCell27 />
      {[...Array(2).keys()].map((_, i) => (
        <RowCell28 key={i} />
      ))}
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
        <p className="block leading-[16px] whitespace-pre">Usuário Adicional</p>
      </div>
    </div>
  );
}

function RowCell30() {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
        <Labels30 />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels31() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          R$ 55,90
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          R$ 49,90
        </p>
      </div>
    </div>
  );
}

function RowCell31() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="Row / Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
          <Labels31 />
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
      <RowCell30 />
      {[...Array(4).keys()].map((_, i) => (
        <RowCell31 key={i} />
      ))}
    </div>
  );
}

function Frame147() {
  return (
    <div className="relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <TableRowStatusRow1 />
        <TableRowStatusRow2 />
        <TableRowStatusRow3 />
        <TableRowStatusRow4 />
        <TableRowStatusRow5 />
        <TableRowStatusRow6 />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function Body() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Body"
    >
      <TableRowStatusRow />
      <Frame147 />
    </div>
  );
}

function ModalConfigureAProjecaoBody() {
  return (
    <div
      className="bg-[#ffffff] order-2 relative shrink-0 w-full"
      data-name="Modal / Configure a projeção / Body"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[20px] relative w-full">
          <Body />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="bg-[#e7e7e7] box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div
        className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Fechar</p>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div
      className="bg-[#ffffff] order-1 relative rounded shrink-0 w-full"
      data-name="Modal / Footer"
    >
      <div className="flex flex-row justify-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-end px-4 py-3 relative w-full">
          <div
            className="basis-0 grow min-h-px min-w-px self-stretch shrink-0"
            data-name="Spacer"
          />
          <Button4 />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

export default function Modal() {
  return (
    <div className="relative rounded-lg size-full" data-name="Modal">
      <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative size-full">
        <ModalHeader />
        <ModalConfigureAProjecaoBody />
        <ModalFooter />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}
