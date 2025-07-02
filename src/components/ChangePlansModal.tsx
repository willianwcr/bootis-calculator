import React, { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-oh32u8dpe7";
import planSvgPaths from "../imports/svg-25klhm2gwm";
import type { AllPlansData } from "../types";

interface PlanData {
  cnpjCount: number;
  simplesNacional: string;
  maxUsers: number;
  onboarding: number;
  monthly: number;
  additionalUser: number;
}

interface PlanSettings {
  standard: PlanData;
  preLaunch: PlanData;
}

interface ChangePlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (planData: AllPlansData) => void;
  initialData: AllPlansData;
}

function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-6 cursor-pointer" onClick={onClick}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
          d={svgPaths.p15433a70}
          fill="#C4C4C4"
        />
      </svg>
    </div>
  );
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
          d={planSvgPaths.p3701d180}
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
          <path d={planSvgPaths.p3b7e2400} fill="#5E50F2" />
          <path d={planSvgPaths.p2ab71330} fill="#5E50F2" />
          <path d={planSvgPaths.p232c2400} fill="#5E50F2" />
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
          <path d={planSvgPaths.p1e6e7600} fill="#FDAC41" />
          <path d={planSvgPaths.p358a1900} fill="#FDAC41" />
          <path d={planSvgPaths.p8273c00} fill="#FDAC41" />
        </g>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d={svgPaths.p3601d680}
          fill="#A0A0A0"
        />
      </svg>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  type?: 'text' | 'number' | 'currency';
  width?: string;
  isDropdown?: boolean;
  options?: string[];
}

function InputField({ label, value, onChange, type = 'text', width = 'w-full', isDropdown = false, options = [] }: InputFieldProps) {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(val).replace('R$', 'R$');
  };

  const parseCurrency = (val: string) => {
    return parseFloat(val.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  };

  const displayValue = type === 'currency' && typeof value === 'number' 
    ? formatCurrency(value) 
    : value.toString();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = e.target.value;
    if (type === 'currency') {
      onChange(parseCurrency(newValue));
    } else if (type === 'number') {
      onChange(parseInt(newValue) || 0);
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className={`box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 ${width === 'w-[100px]' ? 'w-[100px]' : 'basis-0 grow min-h-px min-w-px'}`}>
      <div className="box-border content-stretch flex flex-row items-center justify-start leading-[0] p-0 relative shrink-0 text-[12px] text-left text-nowrap w-full">
        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#333333]">
          <p className="block leading-[16px] text-nowrap whitespace-pre">{label}</p>
        </div>
        <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#ee5252]">
          <p className="block leading-[16px] text-nowrap whitespace-pre">*</p>
        </div>
      </div>
      
      <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative w-full">
                      {isDropdown ? (
                        <select
                          value={value.toString()}
                          onChange={handleChange}
                          className="font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left bg-transparent border-none outline-none w-full cursor-pointer"
                          style={{ appearance: 'none' }}
                        >
                          {options.map(option => (
                            <option key={option} value={option} className="bg-white text-[#333333] p-2">
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={displayValue}
                          onChange={handleChange}
                          className="font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left bg-transparent border-none outline-none w-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
                {isDropdown && (
                  <div className="pointer-events-none">
                    <DropdownIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      </div>
    </div>
  );
}

interface PlanSectionProps {
  planName: string;
  icon: React.ReactNode;
  planData: PlanSettings;
  onUpdate: (updates: Partial<PlanSettings>) => void;
}

function PlanSection({ planName, icon, planData, onUpdate }: PlanSectionProps) {
  const simplesOptions = planName === 'Galaxy' ? ['Sim', 'Ambos'] : ['Sim'];

  const updateStandard = (field: keyof PlanData, value: string | number) => {
    onUpdate({
      standard: {
        ...planData.standard,
        [field]: value
      }
    });
  };

  const updatePreLaunch = (field: keyof PlanData, value: string | number) => {
    onUpdate({
      preLaunch: {
        ...planData.preLaunch,
        [field]: value
      }
    });
  };

  return (
    <div className="w-full">
      {/* Plan Name */}
      <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 mb-4">
        {icon}
        <div className="font-bold leading-[0] relative shrink-0 text-[#333333] text-[32px] text-left text-nowrap">
          <p className="block leading-[40px] whitespace-pre">{planName}</p>
        </div>
      </div>

      {/* Standard Values */}
      <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap mb-3">
        <p className="block leading-[16px] whitespace-pre">Valor Padrão</p>
      </div>
      
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full mb-4">
        <InputField
          label="Nº de CNPJs"
          value={planData.standard.cnpjCount}
          onChange={(value) => updateStandard('cnpjCount', value)}
          type="number"
          width="w-[100px]"
        />
        <InputField
          label="Simples Nacional"
          value={planData.standard.simplesNacional}
          onChange={(value) => updateStandard('simplesNacional', value)}
          isDropdown={true}
          options={simplesOptions}
        />
        <InputField
          label="Máximo de Usuários"
          value={planData.standard.maxUsers}
          onChange={(value) => updateStandard('maxUsers', value)}
          type="number"
        />
        <InputField
          label="Onboarding (R$)"
          value={planData.standard.onboarding}
          onChange={(value) => updateStandard('onboarding', value)}
          type="currency"
        />
        <InputField
          label="Mensalidade (R$)"
          value={planData.standard.monthly}
          onChange={(value) => updateStandard('monthly', value)}
          type="currency"
        />
        <InputField
          label="Usuário Adc. (R$)"
          value={planData.standard.additionalUser}
          onChange={(value) => updateStandard('additionalUser', value)}
          type="currency"
        />
      </div>

      {/* Pre-Launch Values */}
      <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap mb-3">
        <p className="block leading-[16px] whitespace-pre">Valor Pré-Lançamento</p>
      </div>
      
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full mb-6">
        <InputField
          label="Nº de CNPJs"
          value={planData.preLaunch.cnpjCount}
          onChange={(value) => updatePreLaunch('cnpjCount', value)}
          type="number"
          width="w-[100px]"
        />
        <InputField
          label="Simples Nacional"
          value={planData.preLaunch.simplesNacional}
          onChange={(value) => updatePreLaunch('simplesNacional', value)}
          isDropdown={true}
          options={simplesOptions}
        />
        <InputField
          label="Máximo de Usuários"
          value={planData.preLaunch.maxUsers}
          onChange={(value) => updatePreLaunch('maxUsers', value)}
          type="number"
        />
        <InputField
          label="Onboarding (R$)"
          value={planData.preLaunch.onboarding}
          onChange={(value) => updatePreLaunch('onboarding', value)}
          type="currency"
        />
        <InputField
          label="Mensalidade (R$)"
          value={planData.preLaunch.monthly}
          onChange={(value) => updatePreLaunch('monthly', value)}
          type="currency"
        />
        <InputField
          label="Usuário Adc. (R$)"
          value={planData.preLaunch.additionalUser}
          onChange={(value) => updatePreLaunch('additionalUser', value)}
          type="currency"
        />
      </div>
    </div>
  );
}

export function ChangePlansModal({ isOpen, onClose, onSave, initialData }: ChangePlansModalProps) {
  const [planData, setPlanData] = useState<AllPlansData>(initialData);

  // Reset planData when modal opens to ensure fresh data
  useEffect(() => {
    if (isOpen) {
      setPlanData(initialData);
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handlePlanUpdate = (planType: keyof AllPlansData, updates: Partial<PlanSettings>) => {
    setPlanData(prev => ({
      ...prev,
      [planType]: {
        ...prev[planType],
        ...updates
      }
    }));
  };

  const handleSave = () => {
    onSave(planData);
    onClose();
  };

  const handleCancel = () => {
    setPlanData(initialData); // Reset to initial data
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute bg-[rgba(81,81,81,0.75)] inset-0" onClick={handleCancel} />
      <div className="absolute left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%] w-[900px] max-h-[90vh] overflow-hidden">
        <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative w-[900px]">
          {/* Header */}
          <div className="bg-[#ffffff] order-3 relative rounded shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-full">
                <div className="basis-0 font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px] text-left">
                  <p className="block leading-[20px]">Alterar Planos</p>
                </div>
                <CloseIcon onClick={handleCancel} />
              </div>
            </div>
            <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
          </div>

          {/* Body */}
          <div className="bg-[#ffffff] order-2 relative shrink-0 w-full max-h-[calc(90vh-120px)] overflow-y-auto">
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[20px] relative w-full">
                
                <PlanSection
                  planName="Star"
                  icon={<StarIcon />}
                  planData={planData.star}
                  onUpdate={(updates) => handlePlanUpdate('star', updates)}
                />

                {/* Divider */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-[1.5px] relative w-full">
                      <div className="basis-0 bg-[#eaeaea] grow h-px min-h-px min-w-px shrink-0" />
                    </div>
                  </div>
                </div>

                <PlanSection
                  planName="Constellation"
                  icon={<ConstellationIcon />}
                  planData={planData.constellation}
                  onUpdate={(updates) => handlePlanUpdate('constellation', updates)}
                />

                {/* Divider */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-[1.5px] relative w-full">
                      <div className="basis-0 bg-[#eaeaea] grow h-px min-h-px min-w-px shrink-0" />
                    </div>
                  </div>
                </div>

                <PlanSection
                  planName="Galaxy"
                  icon={<GalaxyIcon />}
                  planData={planData.galaxy}
                  onUpdate={(updates) => handlePlanUpdate('galaxy', updates)}
                />
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
                  onClick={handleCancel}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
                      <div className="font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                        <p className="block leading-[16px] whitespace-pre">Cancelar</p>
                      </div>
                    </div>
                  </div>
                </button>
                <button 
                  className="bg-[#5e50f2] h-9 relative rounded-lg shrink-0 cursor-pointer hover:bg-[#4a3fd1] transition-colors"
                  onClick={handleSave}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
                      <div className="font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap">
                        <p className="block leading-[16px] whitespace-pre">Salvar</p>
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
