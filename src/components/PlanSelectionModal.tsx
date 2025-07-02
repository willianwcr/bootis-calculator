import React from "react";
import {
  getCurrentPlansData,
  formatCurrencyFixed,
} from "../utils/calculations";
import svgPaths from "../imports/svg-ieucdd8d75";
import universeSvgPaths from "../imports/svg-khw4bkgo8p";
import type { PlanType } from "../types";

interface PlanSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
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

function ModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#ffffff] order-3 relative rounded shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-3 sm:p-[16px] relative w-full">
          <div className="basis-0 font-sans font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px] text-left">
            <p className="block leading-[20px]">
              Escolher Plano
            </p>
          </div>
          <CloseIcon onClick={onClose} />
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
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

function PlanCard({
  planKey,
  planName,
  icon,
  isSelected,
  onSelect,
}: {
  planKey: PlanType;
  planName: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div className="basis-0 bg-[#f3f3f3] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-3 py-4 relative w-full">
          <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
            {icon}
            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
              <p className="block leading-[16px] whitespace-pre">
                {planName}
              </p>
            </div>
          </div>

          {isSelected ? (
            <div className="h-9 relative rounded-lg shrink-0 w-full">
              <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative w-full">
                  <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#d0d0d0] text-[12px] text-center text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">
                      Selecionado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="bg-[#5e50f2] h-9 relative rounded-lg shrink-0 w-full cursor-pointer hover:bg-[#4a3fd4] transition-colors"
              onClick={onSelect}
            >
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative w-full">
                  <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">
                      Escolher plano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PlanSelectionRow({
  selectedPlan,
  onSelectPlan,
}: {
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <div className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start overflow-clip px-3 py-4 relative shrink-0 w-[250px]">
          <div className="h-4 shrink-0 w-[53px]" />
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[6px] rounded-tr-[6px] shrink-0">
        <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative w-full">
          <PlanCard
            planKey="star"
            planName="Star"
            icon={<StarIcon />}
            isSelected={selectedPlan === "star"}
            onSelect={() => onSelectPlan("star")}
          />
          <PlanCard
            planKey="constellation"
            planName="Constellation"
            icon={<ConstellationIcon />}
            isSelected={selectedPlan === "constellation"}
            onSelect={() => onSelectPlan("constellation")}
          />
          <PlanCard
            planKey="galaxy"
            planName="Galaxy"
            icon={<GalaxyIcon />}
            isSelected={selectedPlan === "galaxy"}
            onSelect={() => onSelectPlan("galaxy")}
          />
          <PlanCard
            planKey="universe"
            planName="Universe"
            icon={<UniverseIcon />}
            isSelected={selectedPlan === "universe"}
            onSelect={() => onSelectPlan("universe")}
          />
        </div>
        <div className="absolute border-[#eaeaea] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
      </div>
    </div>
  );
}

function TableRow({
  label,
  values,
}: {
  label: string;
  values: React.ReactNode[];
}) {
  return (
    <div className="box-border content-stretch flex flex-row h-12 items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
      <div className="bg-[#f3f3f3] h-12 relative shrink-0 w-[250px]">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-[250px]">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
            <div className="font-sans font-semibold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap">
              <p className="block leading-[16px] whitespace-pre">
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
          <div className="flex flex-row items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-3 py-4 relative w-full">
              {value}
            </div>
          </div>
          <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}

function PriceDisplay({
  standardPrice,
  preLaunchPrice,
}: {
  standardPrice: number;
  preLaunchPrice: number;
}) {
  return (
    <div className="box-border content-stretch flex flex-col font-sans font-normal gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap">
      <div className="relative shrink-0 text-[#ee5252] text-[12px]">
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          {formatCurrencyFixed(standardPrice)}
        </p>
      </div>
      <div className="relative shrink-0 text-[#333333] text-[14px]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          {formatCurrencyFixed(preLaunchPrice)}
        </p>
      </div>
    </div>
  );
}

function SimpleValue({ value }: { value: string | number }) {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#717171] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">
          {value}
        </p>
      </div>
    </div>
  );
}

function ComparisonTable() {
  const plansData = getCurrentPlansData();

  return (
    <div className="relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        {/* N° de CNPJs */}
        <TableRow
          label="N° de CNPJs"
          values={[
            <SimpleValue key="star" value="1" />,
            <SimpleValue key="constellation" value="4" />,
            <SimpleValue key="galaxy" value="15" />,
            <SimpleValue key="universe" value="15" />,
          ]}
        />

        {/* Simples Nacional */}
        <TableRow
          label="Simples Nacional"
          values={[
            <SimpleValue key="star" value="Sim" />,
            <SimpleValue key="constellation" value="Sim" />,
            <SimpleValue key="galaxy" value="Ambos" />,
            <SimpleValue key="universe" value="Ambos" />,
          ]}
        />

        {/* Máximo de Usuários */}
        <TableRow
          label="Máximo de Usuários"
          values={[
            <SimpleValue key="star" value="10" />,
            <SimpleValue key="constellation" value="30" />,
            <SimpleValue key="galaxy" value="999" />,
            <SimpleValue key="universe" value="999" />,
          ]}
        />

        {/* Onboarding */}
        <TableRow
          label="Onboarding"
          values={[
            <PriceDisplay
              key="star"
              standardPrice={plansData.star.standard.onboarding}
              preLaunchPrice={
                plansData.star.preLaunch.onboarding
              }
            />,
            <PriceDisplay
              key="constellation"
              standardPrice={
                plansData.constellation.standard.onboarding
              }
              preLaunchPrice={
                plansData.constellation.preLaunch.onboarding
              }
            />,
            <PriceDisplay
              key="galaxy"
              standardPrice={
                plansData.galaxy.standard.onboarding
              }
              preLaunchPrice={
                plansData.galaxy.preLaunch.onboarding
              }
            />,
            <PriceDisplay
              key="universe"
              standardPrice={
                plansData.galaxy.standard.onboarding
              }
              preLaunchPrice={
                plansData.galaxy.preLaunch.onboarding
              }
            />,
          ]}
        />

        {/* Mensalidade + 1 Usuário */}
        <TableRow
          label="Mensalidade + 1 Usuário"
          values={[
            <PriceDisplay
              key="star"
              standardPrice={plansData.star.standard.monthly}
              preLaunchPrice={plansData.star.preLaunch.monthly}
            />,
            <PriceDisplay
              key="constellation"
              standardPrice={
                plansData.constellation.standard.monthly
              }
              preLaunchPrice={
                plansData.constellation.preLaunch.monthly
              }
            />,
            <PriceDisplay
              key="galaxy"
              standardPrice={plansData.galaxy.standard.monthly}
              preLaunchPrice={
                plansData.galaxy.preLaunch.monthly
              }
            />,
            <PriceDisplay
              key="universe"
              standardPrice={plansData.galaxy.standard.monthly}
              preLaunchPrice={
                plansData.galaxy.preLaunch.monthly
              }
            />,
          ]}
        />

        {/* Usuário Adicional */}
        <TableRow
          label="Usuário Adicional"
          values={[
            <PriceDisplay
              key="star"
              standardPrice={
                plansData.star.standard.additionalUser
              }
              preLaunchPrice={
                plansData.star.preLaunch.additionalUser
              }
            />,
            <PriceDisplay
              key="constellation"
              standardPrice={
                plansData.constellation.standard.additionalUser
              }
              preLaunchPrice={
                plansData.constellation.preLaunch.additionalUser
              }
            />,
            <PriceDisplay
              key="galaxy"
              standardPrice={
                plansData.galaxy.standard.additionalUser
              }
              preLaunchPrice={
                plansData.galaxy.preLaunch.additionalUser
              }
            />,
            <PriceDisplay
              key="universe"
              standardPrice={
                plansData.galaxy.standard.additionalUser
              }
              preLaunchPrice={
                plansData.galaxy.preLaunch.additionalUser
              }
            />,
          ]}
        />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function Body({
  selectedPlan,
  onSelectPlan,
}: {
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px]">
          <PlanSelectionRow
            selectedPlan={selectedPlan}
            onSelectPlan={onSelectPlan}
          />
          <ComparisonTable />
        </div>
      </div>
    </div>
  );
}

function ModalBody({
  selectedPlan,
  onSelectPlan,
}: {
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
}) {
  return (
    <div className="bg-[#ffffff] order-2 relative shrink-0 w-full flex-1 overflow-hidden">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-3 sm:p-[20px] relative w-full overflow-auto">
          <Body
            selectedPlan={selectedPlan}
            onSelectPlan={onSelectPlan}
          />
        </div>
      </div>
    </div>
  );
}

function ModalFooter({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#ffffff] order-1 relative rounded shrink-0 w-full">
      <div className="flex flex-row justify-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-end px-4 py-3 relative w-full">
          <div className="basis-0 grow min-h-px min-w-px self-stretch shrink-0" />
          <div
            className="bg-[#e7e7e7] box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative rounded-lg shrink-0 cursor-pointer hover:bg-[#d7d7d7] transition-colors"
            onClick={onClose}
          >
            <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
              <p className="block leading-[16px] whitespace-pre">
                Fechar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-[#eaeaea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

export function PlanSelectionModal({
  isOpen,
  onClose,
  currentPlan,
  onSelectPlan,
}: PlanSelectionModalProps) {
  if (!isOpen) return null;

  const handleSelectPlan = (plan: PlanType) => {
    onSelectPlan(plan);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute bg-[rgba(81,81,81,0.75)] inset-0"
        onClick={onClose}
      />
      <div className="absolute left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%] w-[95vw] sm:w-[90vw] lg:w-[1200px] max-w-[1200px] h-[95vh] sm:h-[90vh]">
        <div className="relative rounded-lg size-full">
          <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative size-full">
            <ModalHeader onClose={onClose} />
            <ModalBody
              selectedPlan={currentPlan}
              onSelectPlan={handleSelectPlan}
            />
            <ModalFooter onClose={onClose} />
          </div>
          <div className="absolute border border-[#eaeaea] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        </div>
      </div>
    </div>
  );
}
