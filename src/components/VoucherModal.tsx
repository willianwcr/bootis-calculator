import React, { useState } from 'react';
import svgPaths from "../imports/svg-ezkk9oaclx";

interface VoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyVoucher: (isValid: boolean) => void;
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
        <path
          d={svgPaths.p15433a70}
          fill="#C4C4C4"
        />
      </svg>
    </div>
  );
}

export function VoucherModal({ isOpen, onClose, onApplyVoucher }: VoucherModalProps) {
  const [voucherCode, setVoucherCode] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleCancel = () => {
    setVoucherCode("");
    setError("");
    onClose();
  };

  const handleApply = () => {
    // Accept any non-empty voucher code
    const trimmedCode = voucherCode.trim();
    const isValid = trimmedCode.length > 0;
    
    if (isValid) {
      onApplyVoucher(true);
      setVoucherCode("");
      setError("");
      onClose();
    } else {
      setError("Por favor, insira um código de voucher");
      onApplyVoucher(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute bg-[rgba(81,81,81,0.75)] h-full left-0 top-0 w-full" 
        onClick={handleCancel}
      />
      <div className="absolute left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%] w-[95vw] sm:w-[400px] max-w-[400px]">
        <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative w-full">
          
          {/* Header */}
          <div className="bg-[#ffffff] order-3 relative rounded shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row items-center justify-between p-3 sm:p-[16px] relative w-full">
                <div className="basis-0 font-sans font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px] text-left">
                  <p className="block leading-[20px]">Insira o voucher da Galena</p>
                </div>
                <CloseIcon onClick={handleCancel} />
              </div>
            </div>
            <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
          </div>

          {/* Body */}
          <div className="bg-[#ffffff] order-2 relative shrink-0 w-full">
            <div className="flex flex-col items-center relative size-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-3 sm:p-[20px] relative w-full">
                
                {/* Logo */}
                <div className="relative shrink-0">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-6 relative">
                      <div
                        className="bg-center bg-cover bg-no-repeat h-8 shrink-0 w-[165px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Input Section */}
                <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left w-full">
                    <p className="block leading-[16px]">
                      Insira o voucher no campo abaixo para aplicar:
                    </p>
                  </div>
                  
                  {/* Input Box */}
                  <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                    {/* Label */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start leading-[0] p-0 relative shrink-0 text-[12px] text-left text-nowrap w-full">
                      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[#333333]">
                        <p className="block leading-[16px] text-nowrap whitespace-pre">Voucher</p>
                      </div>
                      <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#ee5252]">
                        <p className="block leading-[16px] text-nowrap whitespace-pre">*</p>
                      </div>
                    </div>
                    
                    {/* Input Field */}
                    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start overflow-clip p-0 relative w-full">
                        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-2.5 py-3 relative size-full">
                              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                <div className="flex flex-row items-center relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start px-0.5 py-0 relative w-full">
                                    <input
                                      type="text"
                                      value={voucherCode}
                                      onChange={(e) => {
                                        setVoucherCode(e.target.value);
                                        setError("");
                                      }}
                                      placeholder="Insira seu voucher"
                                      className="font-sans font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left bg-transparent border-none outline-none w-full placeholder:text-[#c4c4c4]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
                    </div>
                    
                    {/* Error Message */}
                    {error && (
                      <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#ee5252] text-[12px] text-left">
                        <p className="block leading-[16px]">{error}</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#ffffff] order-1 relative rounded shrink-0 w-full">
            <div className="flex flex-row justify-end overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-end px-4 py-3 relative w-full">
                <div className="basis-0 grow min-h-px min-w-px self-stretch shrink-0" />
                
                {/* Cancel Button */}
                <button 
                  className="bg-[#e7e7e7] h-9 relative rounded-lg shrink-0 cursor-pointer hover:bg-[#d7d7d7] transition-colors"
                  onClick={handleCancel}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
                      <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                        <p className="block leading-[16px] whitespace-pre">Cancelar</p>
                      </div>
                    </div>
                  </div>
                </button>
                
                {/* Apply Button */}
                <button 
                  className="bg-[#5e50f2] h-9 relative rounded-lg shrink-0 cursor-pointer hover:bg-[#4a3fd1] transition-colors"
                  onClick={handleApply}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-1.5 relative">
                      <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap">
                        <p className="block leading-[16px] whitespace-pre">Aplicar</p>
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
