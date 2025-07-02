import React, { useState, memo } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import svgPaths from "../imports/svg-ieucdd8d75";
import featureSvgPaths from "../imports/svg-pz7at7m5fc";
import universeSvgPaths from "../imports/svg-khw4bkgo8p";
import {
  getCurrentPlansData,
  formatCurrency,
} from "../utils/calculations";
import {
  getFeatureGroups,
  calculateAllPlanStatuses,
  getStatusLabel,
  getFeatureIcon,
  type FeatureStatus,
  type PlanName,
} from "../utils/features";
import type { AllPlansData } from "../types";

interface PlanosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="relative shrink-0 size-6 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPaths.p15433a70} fill="#C4C4C4" />
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPaths.p2597d200} fill="#A0A0A0" />
      </svg>
    </div>
  );
}

function ConstellationIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path d={svgPaths.p13e72c80} fill="#489ACC" />
          <path d={svgPaths.p6c0ca00} fill="#489ACC" />
          <path d={svgPaths.pbb975f0} fill="#489ACC" />
        </g>
      </svg>
    </div>
  );
}

function GalaxyIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path d={svgPaths.p25efc430} fill="#5E50F2" />
          <path d={svgPaths.p3930f800} fill="#5E50F2" />
          <path d={svgPaths.p24e8cc00} fill="#5E50F2" />
        </g>
      </svg>
    </div>
  );
}

function UniverseIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path d={universeSvgPaths.p229a4a00} fill="#FDAC41" />
          <path d={universeSvgPaths.p1f178d80} fill="#FDAC41" />
          <path d={universeSvgPaths.p3ad00480} fill="#FDAC41" />
          <path d={universeSvgPaths.p1147c800} fill="#FDAC41" />
          <path d={universeSvgPaths.p1e29bb00} fill="#FDAC41" />
        </g>
      </svg>
    </div>
  );
}

// Feature status icons using the new SVG paths
function CheckIcon() {
  return (
    <div className="relative shrink-0 size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path d={featureSvgPaths.p2deb2800} fill="#5CC689" />
      </svg>
    </div>
  );
}

function XIcon() {
  return (
    <div className="relative shrink-0 size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path d={featureSvgPaths.p2d9d340} fill="#EE5252" />
      </svg>
    </div>
  );
}

function PartialIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path d={featureSvgPaths.pb8b4180} fill="#FDAC41" />
      </svg>
    </div>
  );
}

function CompleteIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path d={featureSvgPaths.p1ea839f0} fill="#5CC689" />
      </svg>
    </div>
  );
}

function NotIncludedIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path d={featureSvgPaths.p2d9d340} fill="#EE5252" />
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path d={featureSvgPaths.p3601d680} fill="#A0A0A0" />
      </svg>
    </div>
  );
}

interface PriceDisplayProps {
  standardPrice: number;
  preLaunchPrice: number;
  showPreLaunch: boolean;
  isCustomPlan: boolean;
  isText?: boolean;
}

const PriceDisplay = memo(function PriceDisplay({
  standardPrice,
  preLaunchPrice,
  showPreLaunch,
  isCustomPlan,
  isText = false,
}: PriceDisplayProps) {
  // Handle custom plans
  if (isCustomPlan) {
    return (
      <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">
          Sob consulta
        </p>
      </div>
    );
  }

  const isSamePrice = standardPrice === preLaunchPrice;

  if (isText) {
    const displayValue = showPreLaunch
      ? preLaunchPrice
      : standardPrice;
    // Convert 999 to "Ilimitado" for display
    const displayText =
      displayValue === 999
        ? "Ilimitado"
        : displayValue.toString();
    return (
      <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">
          {displayText}
        </p>
      </div>
    );
  }

  // For currency values
  if (isSamePrice || !showPreLaunch) {
    return (
      <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">
          {formatCurrency(
            showPreLaunch ? preLaunchPrice : standardPrice,
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-center justify-center leading-[0] p-0 relative shrink-0 text-center text-nowrap">
      <div className="relative shrink-0 text-[#ee5252] text-[12px]">
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          {formatCurrency(standardPrice)}
        </p>
      </div>
      <div className="relative shrink-0 text-[#333333] text-[14px]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          {formatCurrency(preLaunchPrice)}
        </p>
      </div>
    </div>
  );
});

// Status icon component
function StatusIcon({ status }: { status: FeatureStatus }) {
  switch (status) {
    case "complete":
      return <CompleteIcon />;
    case "partial":
      return <PartialIcon />;
    case "not-included":
      return <NotIncludedIcon />;
    default:
      return <NotIncludedIcon />;
  }
}

// Feature table components matching Figma design
function FeatureTableHeader({
  title,
  planStatuses,
  isExpanded,
  onToggle,
}: {
  title: string;
  planStatuses: {
    star: FeatureStatus;
    constellation: FeatureStatus;
    galaxy: FeatureStatus;
    universe: FeatureStatus;
  };
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
      <div className="bg-[#f3f3f3] relative shrink-0 w-[300px]">
        <div
          className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-4 relative w-[300px] cursor-pointer hover:bg-[#e8e8e8] transition-colors"
          onClick={onToggle}
        >
          <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div
              className="basis-0 font-sans font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="block leading-[16px]">{title}</p>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div
              className={`flex-none transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            >
              <DropdownIcon />
            </div>
          </div>
        </div>
        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      </div>

      {/* Status indicators for each plan */}
      <div className="basis-0 bg-[#f3f3f3] grow h-12 min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
              <StatusIcon status={planStatuses.star} />
              <div
                className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="block leading-[16px] whitespace-pre">
                  {getStatusLabel(planStatuses.star)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      </div>

      <div className="basis-0 bg-[#f3f3f3] grow h-12 min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
              <StatusIcon status={planStatuses.constellation} />
              <div
                className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="block leading-[16px] whitespace-pre">
                  {getStatusLabel(planStatuses.constellation)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      </div>

      <div className="basis-0 bg-[#f3f3f3] grow h-12 min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
              <StatusIcon status={planStatuses.galaxy} />
              <div
                className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="block leading-[16px] whitespace-pre">
                  {getStatusLabel(planStatuses.galaxy)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      </div>

      <div className="basis-0 bg-[#f3f3f3] grow h-12 min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
              <StatusIcon status={planStatuses.universe} />
              <div
                className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="block leading-[16px] whitespace-pre">
                  {getStatusLabel(planStatuses.universe)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

type FeatureRowProps = {
  label: string;
  values: React.ReactNode[];
};
const FeatureRow: React.FC<FeatureRowProps> = memo(function FeatureRow({ label, values }) {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
      <div className="bg-[#f3f3f3] relative shrink-0 w-[300px]">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start overflow-clip px-3 py-3.5 relative w-[300px]">
          <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div
              className="basis-0 font-sans font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px] text-left"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="block leading-[20px] whitespace-pre-wrap">
                {label}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      </div>

      {values.map((value, index) => (
        <div
          key={index}
          className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
        >
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
              {value}
            </div>
          </div>
          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>
      ))}
    </div>
  );
});

type FeatureTableProps = {
  title: string;
  features: Array<{
    name: string;
    plans: {
      star: boolean;
      constellation: boolean;
      galaxy: boolean;
      universe: boolean;
    };
  }>;
  isExpanded: boolean;
  onToggle: () => void;
};
const FeatureTable: React.FC<FeatureTableProps> = memo(function FeatureTable({ title, features, isExpanded, onToggle }) {
  const planStatuses = calculateAllPlanStatuses(features);

  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
          <FeatureTableHeader
            title={title}
            planStatuses={planStatuses}
            isExpanded={isExpanded}
            onToggle={onToggle}
          />

          <div
            className={`transition-all duration-300 ease-in-out ${isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden w-full`}
          >
            {features.map((feature, index) => (
              <FeatureRow
                key={index}
                label={feature.name}
                values={[
                  getFeatureIcon(feature, "star") ===
                  "check" ? (
                    <CheckIcon key="star" />
                  ) : (
                    <XIcon key="star" />
                  ),
                  getFeatureIcon(feature, "constellation") ===
                  "check" ? (
                    <CheckIcon key="constellation" />
                  ) : (
                    <XIcon key="constellation" />
                  ),
                  getFeatureIcon(feature, "galaxy") ===
                  "check" ? (
                    <CheckIcon key="galaxy" />
                  ) : (
                    <XIcon key="galaxy" />
                  ),
                  getFeatureIcon(feature, "universe") ===
                  "check" ? (
                    <CheckIcon key="universe" />
                  ) : (
                    <XIcon key="universe" />
                  ),
                ]}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
});

// Helper function to initialize expanded sections
function initializeExpandedSections(): Record<string, boolean> {
  try {
    const featureGroups = getFeatureGroups();
    const initialState: Record<string, boolean> = {};

    if (Array.isArray(featureGroups)) {
      featureGroups.forEach((group, index) => {
        const key = group.name
          .toLowerCase()
          .replace(/\s+/g, "-");
        initialState[key] = index === 0; // Only first section expanded
      });
    }

    return initialState;
  } catch (error) {
    console.error(
      "Error initializing expanded sections:",
      error,
    );
    // Return a default state if there's an error
    return {
      "gestao-administrativa": false,
      "gestao-de-estoque": false,
      "gestao-compras": false,
      "gestao-da-producao": false,
      "gestao-de-vendas": false,
      "gestao-fiscal": false,
      "gestao-regulatoria": false,
      "gestao-financeira": false,
      "gestao-de-entregas": false,
      "gestao-de-negocio": false,
      "gestao-de-franquias": false,
    };
  }
}

export function PlanosModal({
  isOpen,
  onClose,
}: PlanosModalProps) {
  const [showPreLaunch, setShowPreLaunch] = useState(true);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(initializeExpandedSections);

  const plansData = getCurrentPlansData();
  const featureGroups = getFeatureGroups();

  const plans = React.useMemo(() => [
    {
      key: "star" as keyof AllPlansData,
      name: "Star",
      icon: <StarIcon />,
      data: plansData.star,
    },
    {
      key: "constellation" as keyof AllPlansData,
      name: "Constellation",
      icon: <ConstellationIcon />,
      data: plansData.constellation,
    },
    {
      key: "galaxy" as keyof AllPlansData,
      name: "Galaxy",
      icon: <GalaxyIcon />,
      data: plansData.galaxy,
    },
    {
      key: "universe" as keyof AllPlansData,
      name: "Universe",
      icon: <UniverseIcon />,
      data: plansData.universe,
    },
  ], [plansData]);

  if (!isOpen) return null;

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute bg-[rgba(81,81,81,0.75)] inset-0"
        onClick={onClose}
      />
      <div className="absolute left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1200px] max-w-[90vw] h-[90vh]">
        <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative w-full h-full">
          {/* Header */}
          <div className="bg-[#ffffff] order-3 relative rounded shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-full">
                <div className="basis-0 font-sans font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px] text-left">
                  <p className="block leading-[20px]">Planos</p>
                </div>
                <CloseIcon onClick={onClose} />
              </div>
            </div>
            <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
          </div>

          {/* Body */}
          <div className="bg-[#ffffff] order-2 relative shrink-0 w-full flex-1 overflow-hidden">
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[20px] relative w-full h-full overflow-auto">
                {/* Toggle Switch */}
                <div className="flex items-center gap-3.5 mb-2">
                  <Switch
                    checked={showPreLaunch}
                    onCheckedChange={(checked) => setShowPreLaunch(checked)}
                    className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-[#cbced4]"
                  />
                  <Label className="text-[14px] font-semibold text-[#333333]">
                    Mostrar valores de pré-lançamento
                  </Label>
                </div>

                {/* Pricing Table */}
                <div className="relative rounded-md shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
                    {/* Header Row */}
                    <div className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[300px]">
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      {plans.map((plan) => (
                        <div
                          key={plan.key}
                          className="basis-0 bg-[#f3f3f3] grow h-12 min-h-px min-w-px relative shrink-0"
                        >
                          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
                              <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
                                {plan.icon}
                                <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
                                  <p className="block leading-[16px] whitespace-pre">
                                    {plan.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>

                    {/* N° de CNPJs Row */}
                    <div className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[300px]">
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[300px]">
                            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">
                                N° de CNPJs
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      {plans.map((plan) => (
                        <div
                          key={plan.key}
                          className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
                        >
                          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
                              <PriceDisplay
                                standardPrice={
                                  plan.data.standard.cnpjCount
                                }
                                preLaunchPrice={
                                  plan.data.preLaunch.cnpjCount
                                }
                                showPreLaunch={showPreLaunch}
                                isCustomPlan={
                                  plan.data.standard.customPlan
                                }
                                isText={true}
                              />
                            </div>
                          </div>
                          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>

                    {/* Simples Nacional Row */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[300px]">
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[300px]">
                            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">
                                Simples Nacional
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      {plans.map((plan) => (
                        <div
                          key={plan.key}
                          className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
                        >
                          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
                              <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-center text-nowrap">
                                <p className="block leading-[16px] whitespace-pre">
                                  {
                                    plan.data.standard
                                      .simplesNacional
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>

                    {/* Máximo de Usuários Row */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[300px]">
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[300px]">
                            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">
                                Máximo de Usuários
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      {plans.map((plan) => (
                        <div
                          key={plan.key}
                          className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
                        >
                          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
                              <PriceDisplay
                                standardPrice={
                                  plan.data.standard.maxUsers
                                }
                                preLaunchPrice={
                                  plan.data.preLaunch.maxUsers
                                }
                                showPreLaunch={showPreLaunch}
                                isCustomPlan={
                                  plan.data.standard.customPlan
                                }
                                isText={true}
                              />
                            </div>
                          </div>
                          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>

                    {/* Onboarding Row */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[300px]">
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[300px]">
                            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">
                                Onboarding
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      {plans.map((plan) => (
                        <div
                          key={plan.key}
                          className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
                        >
                          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
                              <PriceDisplay
                                standardPrice={
                                  plan.data.standard.onboarding
                                }
                                preLaunchPrice={
                                  plan.data.preLaunch.onboarding
                                }
                                showPreLaunch={showPreLaunch}
                                isCustomPlan={
                                  plan.data.standard.customPlan
                                }
                              />
                            </div>
                          </div>
                          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>

                    {/* Mensalidade + 1 Usuário Row */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[300px]">
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[300px]">
                            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">
                                Mensalidade + 1 Usuário
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      {plans.map((plan) => (
                        <div
                          key={plan.key}
                          className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
                        >
                          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
                              <PriceDisplay
                                standardPrice={
                                  plan.data.standard.monthly
                                }
                                preLaunchPrice={
                                  plan.data.preLaunch.monthly
                                }
                                showPreLaunch={showPreLaunch}
                                isCustomPlan={
                                  plan.data.standard.customPlan
                                }
                              />
                            </div>
                          </div>
                          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>

                    {/* Usuário Adicional Row */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[300px]">
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-[300px]">
                            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">
                                Usuário Adicional
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                      </div>
                      {plans.map((plan) => (
                        <div
                          key={plan.key}
                          className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative shrink-0"
                        >
                          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
                              <PriceDisplay
                                standardPrice={
                                  plan.data.standard
                                    .additionalUser
                                }
                                preLaunchPrice={
                                  plan.data.preLaunch
                                    .additionalUser
                                }
                                showPreLaunch={showPreLaunch}
                                isCustomPlan={
                                  plan.data.standard.customPlan
                                }
                              />
                            </div>
                          </div>
                          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
                </div>

                {/* Feature Comparison Tables - Each section as separate table */}
                <div className="flex flex-col gap-6 w-full mt-6">
                  {Array.isArray(featureGroups) &&
                    featureGroups.map((group) => {
                      const sectionKey = group.name
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      return (
                        <FeatureTable
                          key={sectionKey}
                          title={group.name}
                          features={group.features}
                          isExpanded={
                            expandedSections[sectionKey] ||
                            false
                          }
                          onToggle={() =>
                            toggleSection(sectionKey)
                          }
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#ffffff] order-1 relative rounded shrink-0 w-full">
            <div className="flex flex-row justify-end overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-end px-4 py-3 relative w-full">
                <div className="basis-0 grow min-h-px min-w-px self-stretch shrink-0" />
                <button
                  className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0 cursor-pointer hover:bg-[#d7d7d7] transition-colors"
                  onClick={onClose}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
                      <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                        <p className="block leading-[16px] whitespace-pre">
                          Fechar
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute border-[#eaeaea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded" />
          </div>
        </div>
        <div className="absolute border border-[#eaeaea] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
    </div>
  );
}
