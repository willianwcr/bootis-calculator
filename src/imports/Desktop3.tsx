import svgPaths from "./svg-oh32u8dpe7";

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
            <p className="block leading-[20px]">Alterar Planos</p>
          </div>
          <CloseIcon />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
    </div>
  );
}

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
          Nº de CNPJs
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
            className="font-sans font-normal leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
              1
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
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[100px]"
      data-name="InputBox"
    >
      <Label />
      <InputTextField />
    </div>
  );
}

function Label1() {
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
          Simples Nacional
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
              Sim
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

function InputBox1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label1 />
      <InputTextField1 />
    </div>
  );
}

function Label2() {
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
          Máximo de Usuários
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

function TextContainer2() {
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
              10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer2() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer2 />
        </div>
      </div>
    </div>
  );
}

function InputTextField2() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer2 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label2 />
      <InputTextField2 />
    </div>
  );
}

function Label3() {
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
          Onboarding (R$)
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

function TextContainer3() {
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
              R$ 2.990,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer3() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer3 />
        </div>
      </div>
    </div>
  );
}

function InputTextField3() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer3 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label3 />
      <InputTextField3 />
    </div>
  );
}

function Label4() {
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
          Mensalidade (R$)
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

function TextContainer4() {
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
              R$ 239,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer4() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer4 />
        </div>
      </div>
    </div>
  );
}

function InputTextField4() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer4 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label4 />
      <InputTextField4 />
    </div>
  );
}

function Label5() {
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
          Usuário Adc. (R$)
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

function TextContainer5() {
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
              R$ 55,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer5() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer5 />
        </div>
      </div>
    </div>
  );
}

function InputTextField5() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer5 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label5 />
      <InputTextField5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <InputBox />
      <InputBox1 />
      <InputBox2 />
      <InputBox3 />
      <InputBox4 />
      <InputBox5 />
    </div>
  );
}

function Label6() {
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
          Nº de CNPJs
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

function TextContainer6() {
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
              1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer6() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer6 />
        </div>
      </div>
    </div>
  );
}

function InputTextField6() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer6 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[100px]"
      data-name="InputBox"
    >
      <Label6 />
      <InputTextField6 />
    </div>
  );
}

function Label7() {
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
          Simples Nacional
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

function TextContainer7() {
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
              Sim
            </p>
          </div>
        </div>
      </div>
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

function InputContainer7() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer7 />
          <DropdownIcon1 />
        </div>
      </div>
    </div>
  );
}

function InputTextField7() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer7 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label7 />
      <InputTextField7 />
    </div>
  );
}

function Label8() {
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
          Máximo de Usuários
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

function TextContainer8() {
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
              10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer8() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer8 />
        </div>
      </div>
    </div>
  );
}

function InputTextField8() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer8 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label8 />
      <InputTextField8 />
    </div>
  );
}

function Label9() {
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
          Onboarding (R$)
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

function TextContainer9() {
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
              R$ 990,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer9() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer9 />
        </div>
      </div>
    </div>
  );
}

function InputTextField9() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer9 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label9 />
      <InputTextField9 />
    </div>
  );
}

function Label10() {
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
          Mensalidade (R$)
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

function TextContainer10() {
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
              R$ 229,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer10() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer10 />
        </div>
      </div>
    </div>
  );
}

function InputTextField10() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer10 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label10 />
      <InputTextField10 />
    </div>
  );
}

function Label11() {
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
          Usuário Adc. (R$)
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

function TextContainer11() {
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
              R$ 49,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer11() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer11 />
        </div>
      </div>
    </div>
  );
}

function InputTextField11() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer11 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label11 />
      <InputTextField11 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <InputBox6 />
      <InputBox7 />
      <InputBox8 />
      <InputBox9 />
      <InputBox10 />
      <InputBox11 />
    </div>
  );
}

function ContentDivider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Divider">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-[1.5px] relative w-full">
          <div
            className="basis-0 bg-[#eaeaea] grow h-px min-h-px min-w-px shrink-0"
            data-name="Line"
          />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-8" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Component 2">
          <g id="Vector">
            <path d={svgPaths.p3b7e2400} fill="var(--fill-0, #5E50F2)" />
            <path d={svgPaths.p2ab71330} fill="var(--fill-0, #5E50F2)" />
            <path d={svgPaths.p232c2400} fill="var(--fill-0, #5E50F2)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PlanName1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="Plan Name"
    >
      <Component3 />
      <div
        className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[32px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px] whitespace-pre">Constellation</p>
      </div>
    </div>
  );
}

function Label12() {
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
          Nº de CNPJs
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

function TextContainer12() {
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
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer12() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer12 />
        </div>
      </div>
    </div>
  );
}

function InputTextField12() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer12 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[100px]"
      data-name="InputBox"
    >
      <Label12 />
      <InputTextField12 />
    </div>
  );
}

function Label13() {
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
          Simples Nacional
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

function TextContainer13() {
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
              Sim
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownIcon2() {
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

function InputContainer13() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer13 />
          <DropdownIcon2 />
        </div>
      </div>
    </div>
  );
}

function InputTextField13() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer13 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label13 />
      <InputTextField13 />
    </div>
  );
}

function Label14() {
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
          Máximo de Usuários
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

function TextContainer14() {
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
              30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer14() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer14 />
        </div>
      </div>
    </div>
  );
}

function InputTextField14() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer14 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label14 />
      <InputTextField14 />
    </div>
  );
}

function Label15() {
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
          Onboarding (R$)
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

function TextContainer15() {
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
              R$ 4.390,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer15() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer15 />
        </div>
      </div>
    </div>
  );
}

function InputTextField15() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer15 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label15 />
      <InputTextField15 />
    </div>
  );
}

function Label16() {
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
          Mensalidade (R$)
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

function TextContainer16() {
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
              R$ 399,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer16() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer16 />
        </div>
      </div>
    </div>
  );
}

function InputTextField16() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer16 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox16() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label16 />
      <InputTextField16 />
    </div>
  );
}

function Label17() {
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
          Usuário Adc. (R$)
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

function TextContainer17() {
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
              R$ 55,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer17() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer17 />
        </div>
      </div>
    </div>
  );
}

function InputTextField17() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer17 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox17() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label17 />
      <InputTextField17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <InputBox12 />
      <InputBox13 />
      <InputBox14 />
      <InputBox15 />
      <InputBox16 />
      <InputBox17 />
    </div>
  );
}

function Label18() {
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
          Nº de CNPJs
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

function TextContainer18() {
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
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer18() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer18 />
        </div>
      </div>
    </div>
  );
}

function InputTextField18() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer18 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[100px]"
      data-name="InputBox"
    >
      <Label18 />
      <InputTextField18 />
    </div>
  );
}

function Label19() {
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
          Simples Nacional
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

function TextContainer19() {
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
              Sim
            </p>
          </div>
        </div>
      </div>
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

function InputContainer19() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer19 />
          <DropdownIcon3 />
        </div>
      </div>
    </div>
  );
}

function InputTextField19() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer19 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label19 />
      <InputTextField19 />
    </div>
  );
}

function Label20() {
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
          Máximo de Usuários
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

function TextContainer20() {
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
              30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer20() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer20 />
        </div>
      </div>
    </div>
  );
}

function InputTextField20() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer20 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox20() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label20 />
      <InputTextField20 />
    </div>
  );
}

function Label21() {
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
          Onboarding (R$)
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

function TextContainer21() {
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
              R$ 1.490,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer21() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer21 />
        </div>
      </div>
    </div>
  );
}

function InputTextField21() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer21 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox21() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label21 />
      <InputTextField21 />
    </div>
  );
}

function Label22() {
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
          Mensalidade (R$)
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

function TextContainer22() {
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
              R$ 379,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer22() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer22 />
        </div>
      </div>
    </div>
  );
}

function InputTextField22() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer22 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox22() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label22 />
      <InputTextField22 />
    </div>
  );
}

function Label23() {
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
          Usuário Adc. (R$)
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

function TextContainer23() {
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
              R$ 49,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer23() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer23 />
        </div>
      </div>
    </div>
  );
}

function InputTextField23() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer23 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox23() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label23 />
      <InputTextField23 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <InputBox18 />
      <InputBox19 />
      <InputBox20 />
      <InputBox21 />
      <InputBox22 />
      <InputBox23 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-8" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Component 2">
          <g id="Vector">
            <path d={svgPaths.p1e6e7600} fill="var(--fill-0, #FDAC41)" />
            <path d={svgPaths.p358a1900} fill="var(--fill-0, #FDAC41)" />
            <path d={svgPaths.p8273c00} fill="var(--fill-0, #FDAC41)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PlanName2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="Plan Name"
    >
      <Component4 />
      <div
        className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[32px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px] whitespace-pre">Galaxy</p>
      </div>
    </div>
  );
}

function Label24() {
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
          Nº de CNPJs
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

function TextContainer24() {
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
              15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer24() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer24 />
        </div>
      </div>
    </div>
  );
}

function InputTextField24() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer24 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox24() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[100px]"
      data-name="InputBox"
    >
      <Label24 />
      <InputTextField24 />
    </div>
  );
}

function Label25() {
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
          Simples Nacional
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

function TextContainer25() {
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
              Ambos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownIcon4() {
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

function InputContainer25() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer25 />
          <DropdownIcon4 />
        </div>
      </div>
    </div>
  );
}

function InputTextField25() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer25 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox25() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label25 />
      <InputTextField25 />
    </div>
  );
}

function Label26() {
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
          Máximo de Usuários
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

function TextContainer26() {
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
              999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer26() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer26 />
        </div>
      </div>
    </div>
  );
}

function InputTextField26() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer26 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox26() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label26 />
      <InputTextField26 />
    </div>
  );
}

function Label27() {
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
          Onboarding (R$)
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

function TextContainer27() {
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
              R$ 6.890,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer27() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer27 />
        </div>
      </div>
    </div>
  );
}

function InputTextField27() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer27 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox27() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label27 />
      <InputTextField27 />
    </div>
  );
}

function Label28() {
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
          Mensalidade (R$)
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

function TextContainer28() {
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
              R$ 699,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer28() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer28 />
        </div>
      </div>
    </div>
  );
}

function InputTextField28() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer28 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox28() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label28 />
      <InputTextField28 />
    </div>
  );
}

function Label29() {
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
          Usuário Adc. (R$)
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

function TextContainer29() {
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
              R$ 55,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer29() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer29 />
        </div>
      </div>
    </div>
  );
}

function InputTextField29() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer29 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox29() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label29 />
      <InputTextField29 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <InputBox24 />
      <InputBox25 />
      <InputBox26 />
      <InputBox27 />
      <InputBox28 />
      <InputBox29 />
    </div>
  );
}

function Label30() {
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
          Nº de CNPJs
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

function TextContainer30() {
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
              15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer30() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer30 />
        </div>
      </div>
    </div>
  );
}

function InputTextField30() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer30 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox30() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[100px]"
      data-name="InputBox"
    >
      <Label30 />
      <InputTextField30 />
    </div>
  );
}

function Label31() {
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
          Simples Nacional
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

function TextContainer31() {
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
              Ambos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownIcon5() {
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

function InputContainer31() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer31 />
          <DropdownIcon5 />
        </div>
      </div>
    </div>
  );
}

function InputTextField31() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer31 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox31() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label31 />
      <InputTextField31 />
    </div>
  );
}

function Label32() {
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
          Máximo de Usuários
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

function TextContainer32() {
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
              999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer32() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer32 />
        </div>
      </div>
    </div>
  );
}

function InputTextField32() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer32 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox32() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label32 />
      <InputTextField32 />
    </div>
  );
}

function Label33() {
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
          Onboarding (R$)
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

function TextContainer33() {
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
              R$ 2.290,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer33() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer33 />
        </div>
      </div>
    </div>
  );
}

function InputTextField33() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer33 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox33() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label33 />
      <InputTextField33 />
    </div>
  );
}

function Label34() {
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
          Mensalidade (R$)
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

function TextContainer34() {
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
              R$ 659,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer34() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer34 />
        </div>
      </div>
    </div>
  );
}

function InputTextField34() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer34 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox34() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label34 />
      <InputTextField34 />
    </div>
  );
}

function Label35() {
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
          Usuário Adc. (R$)
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

function TextContainer35() {
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
              R$ 49,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer35() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="InputContainer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
          <TextContainer35 />
        </div>
      </div>
    </div>
  );
}

function InputTextField35() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name="Input / TextField"
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
        <InputContainer35 />
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function InputBox35() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputBox"
    >
      <Label35 />
      <InputTextField35 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <InputBox30 />
      <InputBox31 />
      <InputBox32 />
      <InputBox33 />
      <InputBox34 />
      <InputBox35 />
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
          <PlanName />
          <div
            className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Valor Padrão</p>
          </div>
          <Frame17 />
          <div
            className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">
              Valor Pré-Lançamento
            </p>
          </div>
          <Frame18 />
          <ContentDivider />
          <PlanName1 />
          <div
            className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Valor Padrão</p>
          </div>
          <Frame19 />
          <div
            className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">
              Valor Pré-Lançamento
            </p>
          </div>
          <Frame20 />
          <ContentDivider />
          <PlanName2 />
          <div
            className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Valor Padrão</p>
          </div>
          <Frame21 />
          <div
            className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">
              Valor Pré-Lançamento
            </p>
          </div>
          <Frame22 />
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
            <p className="block leading-[16px] whitespace-pre">Salvar</p>
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
      className="absolute left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%] w-[900px]"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative w-[900px]">
        <ModalHeader />
        <ModalConfigureAProjecaoBody />
        <ModalFooter />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

export default function Desktop3() {
  return (
    <div className="bg-[#f7f7f7] relative size-full" data-name="Desktop - 3">
      <div
        className="absolute bg-[rgba(81,81,81,0.75)] h-[1024px] left-0 top-0 w-[1440px]"
        data-name="ModalBackground"
      />
      <Modal />
    </div>
  );
}
