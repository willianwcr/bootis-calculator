import React from 'react';
import svgPaths from "../../imports/svg-khw4bkgo8p";
import type { PlanType } from "../../types";

interface PlanIconProps {
  plan: PlanType;
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <path
          d={svgPaths.p3701d180}
          fill="#A0A0A0"
        />
      </svg>
    </div>
  );
}

function ConstellationIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g>
          <path d={svgPaths.p3b7e2400} fill="#489ACC" />
          <path d={svgPaths.p2ab71330} fill="#489ACC" />
          <path d={svgPaths.p232c2400} fill="#489ACC" />
        </g>
      </svg>
    </div>
  );
}

function GalaxyIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g>
          <path d={svgPaths.p1e6e7600} fill="#5E50F2" />
          <path d={svgPaths.p358a1900} fill="#5E50F2" />
          <path d={svgPaths.p8273c00} fill="#5E50F2" />
        </g>
      </svg>
    </div>
  );
}

function UniverseIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g>
          <path d={svgPaths.p229a4a00} fill="#FDAC41" />
          <path d={svgPaths.p1f178d80} fill="#FDAC41" />
          <path d={svgPaths.p3ad00480} fill="#FDAC41" />
          <path d={svgPaths.p1147c800} fill="#FDAC41" />
          <path d={svgPaths.p1e29bb00} fill="#FDAC41" />
        </g>
      </svg>
    </div>
  );
}

export function PlanIcon({ plan }: PlanIconProps) {
  const normalizedPlan = plan.toLowerCase() as Lowercase<PlanType>;
  
  switch (normalizedPlan) {
    case 'star':
      return <StarIcon />;
    case 'constellation':
      return <ConstellationIcon />;
    case 'galaxy':
      return <GalaxyIcon />;
    case 'universe':
      return <UniverseIcon />;
    default:
      return <StarIcon />;
  }
}
