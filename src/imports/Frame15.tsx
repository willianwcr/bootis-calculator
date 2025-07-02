import svgPaths from "./svg-3vpch7k7u7";

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
      className="absolute box-border content-stretch flex flex-row gap-1.5 items-center justify-start left-8 p-0 top-[54px]"
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
      className="absolute box-border content-stretch flex flex-row gap-1.5 items-center justify-start left-8 p-0 top-[114px]"
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
      className="absolute box-border content-stretch flex flex-row gap-1.5 items-center justify-start left-8 p-0 top-[174px]"
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

export default function Frame15() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <PlanName />
      <PlanName1 />
      <PlanName2 />
    </div>
  );
}
