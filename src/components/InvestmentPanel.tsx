import React from "react";
import svgPaths from "../imports/svg-9n8ynom6sw";
import {
  formatCurrency,
  PERIOD_OPTIONS,
} from "../utils/calculations";
import type { PeriodOption } from "../types";

interface InvestmentPanelProps {
  investmentPeriod: string;
  exemptionPeriod: number;
  investmentValue: number;
  onInvestmentPeriodChange: (period: string) => void;
  hasVoucherBonus?: boolean;
  onRemoveVoucher?: () => void;
  periodOption: PeriodOption;
  paymentPeriod: number;
  isCustomPlan?: boolean;
  onboarding: number;
}

// Convert PERIOD_OPTIONS object to array for mapping
const PERIOD_OPTIONS_ARRAY = Object.entries(PERIOD_OPTIONS).map(
  ([key, value]) => ({
    value: key,
    label: `${value.contractPeriod} meses`,
    ...value,
  }),
);

function TitleBlock() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="TitleBlock"
    >
      <div
        className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Investimento
        </p>
      </div>
    </div>
  );
}

function ContentDivider() {
  return (
    <div
      className="h-0 relative shrink-0 w-full"
      data-name="Content Divider"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 760 1"
        >
          <g id="Content Divider">
            <line
              id="line"
              stroke="var(--stroke-0, #EAEAEA)"
              x2="760"
              y1="0.5"
              y2="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 h-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="CardHeader"
    >
      <TitleBlock />
      <ContentDivider />
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div
        className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">
          Período de Contratação
        </p>
      </div>
    </div>
  );
}

function TextContainer({
  children,
  isSelected,
}: {
  children: React.ReactNode;
  isSelected: boolean;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="TextContainer"
    >
      <div
        className={`font-sans font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 ${isSelected ? "text-[#ffffff]" : "text-[#333333]"} text-[12px] text-left text-nowrap`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          {children}
        </p>
      </div>
    </div>
  );
}

function InputContainer({
  children,
  isSelected,
}: {
  children: React.ReactNode;
  isSelected: boolean;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 h-full items-center justify-start px-2.5 py-3 relative shrink-0"
      data-name="InputContainer"
    >
      <TextContainer isSelected={isSelected}>
        {children}
      </TextContainer>
    </div>
  );
}

function InputTextField({
  children,
  period,
  selectedPeriod,
  onSelect,
}: {
  children: React.ReactNode;
  period: string;
  selectedPeriod: string;
  onSelect: (period: string) => void;
}) {
  const isSelected = selectedPeriod === period;

  if (isSelected) {
    return (
      <div
        className="bg-[#5e50f2] box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative rounded-lg shrink-0 cursor-pointer transition-colors hover:opacity-80"
        data-name="Input / TextField"
        onClick={() => onSelect(period)}
      >
        <InputContainer isSelected={true}>
          {children}
        </InputContainer>
      </div>
    );
  }

  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 cursor-pointer transition-colors hover:opacity-80"
      data-name="Input / TextField"
      onClick={() => onSelect(period)}
    >
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative">
        <InputContainer isSelected={false}>
          {children}
        </InputContainer>
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Frame141({
  investmentPeriod,
  onInvestmentPeriodChange,
}: {
  investmentPeriod: string;
  onInvestmentPeriodChange: (period: string) => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col sm:flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
      {PERIOD_OPTIONS_ARRAY.map((option) => (
        <InputTextField
          key={option.value}
          period={option.value}
          selectedPeriod={investmentPeriod}
          onSelect={onInvestmentPeriodChange}
        >
          {option.label}
        </InputTextField>
      ))}
    </div>
  );
}

function Frame142({
  investmentPeriod,
  onInvestmentPeriodChange,
}: {
  investmentPeriod: string;
  onInvestmentPeriodChange: (period: string) => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Label />
      <Frame141
        investmentPeriod={investmentPeriod}
        onInvestmentPeriodChange={onInvestmentPeriodChange}
      />
    </div>
  );
}

function Labels({ children }: { children: React.ReactNode }) {
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
          {children}
        </p>
      </div>
    </div>
  );
}

function RowCell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-full sm:w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-full sm:w-[250px]">
        <Labels>{children}</Labels>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function RowCell1({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-[#ffffff] h-12 relative shrink-0 w-full sm:w-40"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-full sm:w-40">
        <Labels>{children}</Labels>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-col sm:flex-row h-auto sm:h-12 items-start sm:items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Table / Row Status / Row"
    >
      <RowCell>{label}</RowCell>
      <RowCell1>{value}</RowCell1>
    </div>
  );
}

function RowCell2({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-[#f3f3f3] h-12 relative shrink-0 w-full sm:w-[250px]"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 h-12 items-start justify-center overflow-clip px-3 py-4 relative w-full sm:w-[250px]">
        <Labels>{children}</Labels>
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels3({
  exemptionPeriod,
  hasVoucherBonus,
  periodOption,
}: {
  exemptionPeriod: number;
  hasVoucherBonus: boolean;
  periodOption: PeriodOption;
}) {
  const baseExemptionPeriod = periodOption.exemptionPeriod;

  if (!hasVoucherBonus) {
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
            {exemptionPeriod} meses
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Labels"
    >
      <div
        className="font-sans font-normal relative shrink-0 text-[#ee5252] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[16px] text-nowrap whitespace-pre">
          {baseExemptionPeriod} meses
        </p>
      </div>
      <div
        className="font-sans font-semibold relative shrink-0 text-[#333333] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          {exemptionPeriod} meses
        </p>
      </div>
    </div>
  );
}

function RowCell3({
  exemptionPeriod,
  hasVoucherBonus,
  periodOption,
}: {
  exemptionPeriod: number;
  hasVoucherBonus: boolean;
  periodOption: PeriodOption;
}) {
  return (
    <div
      className="bg-[#ffffff] h-12 relative shrink-0 w-full sm:w-40"
      data-name="Row / Cell"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start overflow-clip px-3 py-4 relative w-full sm:w-40">
        <Labels3
          exemptionPeriod={exemptionPeriod}
          hasVoucherBonus={hasVoucherBonus}
          periodOption={periodOption}
        />
      </div>
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableRowStatusRow1({
  exemptionPeriod,
  hasVoucherBonus,
  periodOption,
}: {
  exemptionPeriod: number;
  hasVoucherBonus: boolean;
  periodOption: PeriodOption;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Table / Row Status / Row"
    >
      <RowCell2>Período de Isenção</RowCell2>
      <RowCell3
        exemptionPeriod={exemptionPeriod}
        hasVoucherBonus={hasVoucherBonus}
        periodOption={periodOption}
      />
    </div>
  );
}

function BodyRowContainers({
  periodOption,
  investmentValue,
  exemptionPeriod,
  hasVoucherBonus,
  paymentPeriod,
  isCustomPlan,
  onboarding,
}: {
  periodOption: PeriodOption;
  investmentValue: number;
  exemptionPeriod: number;
  hasVoucherBonus: boolean;
  paymentPeriod: number;
  isCustomPlan?: boolean;
  onboarding: number;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="BodyRowContainers"
    >
      <TableRowStatusRow
        label="Período de Pagamento"
        value={`${paymentPeriod} meses`}
      />
      <TableRowStatusRow1
        exemptionPeriod={exemptionPeriod}
        hasVoucherBonus={hasVoucherBonus}
        periodOption={periodOption}
      />
      <TableRowStatusRow
        label="Valor do Investimento"
        value={formatCurrency(investmentValue, isCustomPlan)}
      />
    </div>
  );
}

function Body({
  periodOption,
  investmentValue,
  exemptionPeriod,
  hasVoucherBonus,
  paymentPeriod,
  isCustomPlan,
  onboarding,
}: {
  periodOption: PeriodOption;
  investmentValue: number;
  exemptionPeriod: number;
  hasVoucherBonus: boolean;
  paymentPeriod: number;
  isCustomPlan?: boolean;
  onboarding: number;
}) {
  return (
    <div
      className="relative rounded-md shrink-0"
      data-name="Body"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative">
        <BodyRowContainers
          periodOption={periodOption}
          investmentValue={investmentValue}
          exemptionPeriod={exemptionPeriod}
          hasVoucherBonus={hasVoucherBonus}
          paymentPeriod={paymentPeriod}
          isCustomPlan={isCustomPlan}
          onboarding={onboarding}
        />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function ComprasTag() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="Compras / tag"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Compras / tag">
          <path
            d={svgPaths.p178fa480}
            fill="var(--fill-0, #717171)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function InterfaceCancel({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="relative shrink-0 size-3 cursor-pointer"
      data-name="Interface / Cancel"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Interface / Cancel">
          <path
            d={svgPaths.p12ccd100}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Tag({ onRemove }: { onRemove: () => void }) {
  return (
    <div
      className="bg-[#e7e7e7] box-border content-stretch flex flex-row gap-[3px] items-center justify-start max-w-[9999px] pl-1 pr-[3px] py-0.5 relative rounded shrink-0"
      data-name="Tag"
    >
      <ComprasTag />
      <div
        className="basis-0 flex flex-col font-sans font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit] [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Voucher Galena
        </p>
      </div>
      <InterfaceCancel onClick={onRemove} />
    </div>
  );
}

function InvestmentInfoHeader({
  investmentPeriod,
  onInvestmentPeriodChange,
  investmentValue,
  exemptionPeriod,
  hasVoucherBonus,
  onRemoveVoucher,
  periodOption,
  paymentPeriod,
  isCustomPlan,
  onboarding,
}: {
  investmentPeriod: string;
  onInvestmentPeriodChange: (period: string) => void;
  investmentValue: number;
  exemptionPeriod: number;
  hasVoucherBonus: boolean;
  onRemoveVoucher: () => void;
  periodOption: PeriodOption;
  paymentPeriod: number;
  isCustomPlan?: boolean;
  onboarding: number;
}) {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Investment Info Header"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <CardHeader />
          <Frame142
            investmentPeriod={investmentPeriod}
            onInvestmentPeriodChange={onInvestmentPeriodChange}
          />
          <Body
            periodOption={periodOption}
            investmentValue={investmentValue}
            exemptionPeriod={exemptionPeriod}
            hasVoucherBonus={hasVoucherBonus}
            paymentPeriod={paymentPeriod}
            isCustomPlan={isCustomPlan}
            onboarding={onboarding}
          />
          {hasVoucherBonus && (
            <Tag onRemove={onRemoveVoucher} />
          )}
        </div>
      </div>
    </div>
  );
}

export function InvestmentPanel({
  investmentPeriod,
  exemptionPeriod,
  investmentValue,
  onInvestmentPeriodChange,
  hasVoucherBonus = false,
  onRemoveVoucher = () => {},
  periodOption,
  paymentPeriod,
  isCustomPlan = false,
  onboarding,
}: InvestmentPanelProps) {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Investment Info Content"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <InvestmentInfoHeader
          investmentPeriod={investmentPeriod}
          onInvestmentPeriodChange={onInvestmentPeriodChange}
          investmentValue={investmentValue}
          exemptionPeriod={exemptionPeriod}
          hasVoucherBonus={hasVoucherBonus}
          onRemoveVoucher={onRemoveVoucher}
          periodOption={periodOption}
          paymentPeriod={paymentPeriod}
          isCustomPlan={isCustomPlan}
          onboarding={onboarding}
        />
      </div>
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}
