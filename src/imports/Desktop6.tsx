import svgPaths from "./svg-ezkk9oaclx";
// import imgImage5 from "figma:asset/8c9292191ec42ac42d76135a9a553d56450468e5.png";

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
            <p className="block leading-[20px]">Insira o voucher da Galena</p>
          </div>
          <CloseIcon />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
    </div>
  );
}

function Frame139() {
  return (
    <div className="relative shrink-0">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-6 relative">
          <div
            className="bg-center bg-cover bg-no-repeat h-8 shrink-0 w-[165px]"
            data-name="image 5"
          />
        </div>
      </div>
    </div>
  );
}

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
          Voucher
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
              ••••••••
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

function InputBox() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="InputBox"
    >
      <Label />
      <InputTextField />
    </div>
  );
}

function Frame140() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-sans font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px]">
          Insira o voucher no campo abaixo para aplicar:
        </p>
      </div>
      <InputBox />
    </div>
  );
}

function ModalConfigureAProjecaoBody() {
  return (
    <div
      className="bg-[#ffffff] order-2 relative shrink-0 w-full"
      data-name="Modal / Configure a projeção / Body"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-[20px] relative w-full">
          <Frame139 />
          <Frame140 />
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
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Cancelar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#5e50f2] h-9 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Aplicar</p>
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
          <Button1 />
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

export default function Desktop6() {
  return (
    <div className="bg-[#f7f7f7] relative size-full" data-name="Desktop - 6">
      <div
        className="absolute bg-[rgba(81,81,81,0.75)] h-[1024px] left-0 top-0 w-[1440px]"
        data-name="ModalBackground"
      />
      <Modal />
    </div>
  );
}
