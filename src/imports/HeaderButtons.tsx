import svgPaths from "./svg-ht1ftlrzdk";

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
            d={svgPaths.p3513e5f0}
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
      className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
          <LeftIcon />
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Planos</p>
          </div>
        </div>
      </div>
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
            d={svgPaths.p1b65ea00}
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
      className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
          <LeftIcon1 />
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Voucher</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon2() {
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

function Button2() {
  return (
    <div
      className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
          <LeftIcon2 />
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Reiniciar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon3() {
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
            d={svgPaths.p34c98d80}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
          <LeftIcon3 />
          <div
            className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Área do Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeaderButtons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative size-full"
      data-name="Header Buttons"
    >
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}
