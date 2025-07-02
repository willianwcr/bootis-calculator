import React from 'react';
import svgPaths from "../imports/svg-blrq3w0wai";

interface AdminOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOption: (option: 'plans' | 'limits') => void;
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

function RightIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d={svgPaths.p35b75680}
          fill="#A0A0A0"
        />
      </svg>
    </div>
  );
}

function OptionItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <div 
      className="bg-[#f7f7f7] relative rounded-lg shrink-0 w-full cursor-pointer hover:bg-[#eeeeee] transition-colors"
      onClick={onClick}
    >
      <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-end p-[12px] relative w-full">
          <div className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
              <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap">
                <p className="block leading-[16px] whitespace-pre">{label}</p>
              </div>
            </div>
          </div>
          <RightIcon />
        </div>
      </div>
    </div>
  );
}

export function AdminOptionsModal({ isOpen, onClose, onSelectOption }: AdminOptionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute bg-[rgba(81,81,81,0.75)] inset-0" onClick={onClose} />
      <div className="absolute left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
        <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative w-[400px]">
          {/* Header */}
          <div className="bg-[#ffffff] order-3 relative rounded shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-full">
                <div className="basis-0 font-sans font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px] text-left">
                  <p className="block leading-[20px]">Área do Admin</p>
                </div>
                <CloseIcon onClick={onClose} />
              </div>
            </div>
            <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
          </div>

          {/* Body */}
          <div className="bg-[#ffffff] order-2 relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[20px] relative w-full">
                <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <OptionItem 
                    label="Alterar Planos" 
                    onClick={() => onSelectOption('plans')} 
                  />
                  <OptionItem 
                    label="Alterar limites" 
                    onClick={() => onSelectOption('limits')} 
                  />
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
                  className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0"
                  onClick={onClose}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
                      <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                        <p className="block leading-[16px] whitespace-pre">Fechar</p>
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
