import svgPaths from "./svg-25klhm2gwm";

function PlanNameIcon() {
  return (
    <div
      className="absolute left-[50px] size-8 top-9"
      data-name="Plan Name / Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Plan Name / Icon">
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

function PlanNameIcon1() {
  return (
    <div
      className="absolute left-[50px] size-8 top-[88px]"
      data-name="Plan Name / Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Plan Name / Icon">
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

function PlanNameIcon2() {
  return (
    <div
      className="absolute left-[50px] size-8 top-[140px]"
      data-name="Plan Name / Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Plan Name / Icon">
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

export default function Frame138() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <PlanNameIcon />
      <PlanNameIcon1 />
      <PlanNameIcon2 />
    </div>
  );
}
