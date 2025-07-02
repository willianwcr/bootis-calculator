import svgPaths from "./svg-blrq3w0wai";

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
            className="basis-0 font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px]">Área do Admin</p>
          </div>
          <CloseIcon />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
    </div>
  );
}

function Frame136() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Alterar Planos</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame136 />
    </div>
  );
}

function RightIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="RightIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="RightIcon">
          <path
            d={svgPaths.p35b75680}
            fill="var(--fill-0, #A0A0A0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-lg shrink-0 w-full">
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-end p-[12px] relative w-full">
          <Frame131 />
          <RightIcon />
        </div>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Alterar limites</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame138 />
    </div>
  );
}

function RightIcon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="RightIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="RightIcon">
          <path
            d={svgPaths.p35b75680}
            fill="var(--fill-0, #A0A0A0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-lg shrink-0 w-full">
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-end p-[12px] relative w-full">
          <Frame132 />
          <RightIcon1 />
        </div>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame129 />
      <Frame130 />
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
          <Frame137 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
          <div
            className="font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Fechar</p>
          </div>
        </div>
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
          <Button />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Modal() {
  return (
    <div
      className="absolute left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative w-[400px]">
        <ModalHeader />
        <ModalConfigureAProjecaoBody />
        <ModalFooter />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

export default function Desktop4() {
  return (
    <div className="bg-[#f7f7f7] relative size-full" data-name="Desktop - 4">
      <div
        className="absolute bg-[rgba(81,81,81,0.75)] h-[1024px] left-0 top-0 w-[1440px]"
        data-name="ModalBackground"
      />
      <Modal />
    </div>
  );
}
