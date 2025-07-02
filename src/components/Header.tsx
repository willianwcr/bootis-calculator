import React from "react";
import { LogoComponent } from "./icons/LogoComponent";
import svgPaths from "../imports/svg-ht1ftlrzdk";

interface HeaderProps {
  onReset: () => void;
  onAdminArea: () => void;
  onPlanos?: () => void;
  onVoucher?: () => void;
}

function PlanosIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <path d={svgPaths.p3513e5f0} fill="#333333" />
      </svg>
    </div>
  );
}

function VoucherIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <path d={svgPaths.p1b65ea00} fill="#333333" />
      </svg>
    </div>
  );
}

function ResetIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <path d={svgPaths.p1e85ce80} fill="#333333" />
      </svg>
    </div>
  );
}

function AdminIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <path d={svgPaths.p34c98d80} fill="#333333" />
      </svg>
    </div>
  );
}

export function Header({
  onReset,
  onAdminArea,
  onPlanos,
  onVoucher,
}: HeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-2 gap-3 sm:gap-0">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 sm:gap-6">
        <LogoComponent />
        <h1 className="font-sans font-bold text-[16px] sm:text-[20px] text-[#333333] leading-[20px] sm:leading-[28px]">
          Calculadora de Investimento
        </h1>
      </div>

      {/* Header Buttons */}
      <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
        {/* Planos Button */}
        <button
          className="bg-[#e7e7e7] h-8 sm:h-9 rounded-lg cursor-pointer hover:bg-[#d7d7d7] transition-colors"
          onClick={onPlanos}
        >
          <div className="flex flex-row items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1.5 gap-1 sm:gap-2">
            <PlanosIcon />
            <div className="font-sans font-bold text-[11px] sm:text-[12px] text-[#333333] text-center text-nowrap leading-[16px] hidden sm:block">
              <p>Planos</p>
            </div>
          </div>
        </button>

        {/* Voucher Button */}
        <button
          className="bg-[#e7e7e7] h-8 sm:h-9 rounded-lg cursor-pointer hover:bg-[#d7d7d7] transition-colors"
          onClick={onVoucher}
        >
          <div className="flex flex-row items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1.5 gap-1 sm:gap-2">
            <VoucherIcon />
            <div className="font-sans font-bold text-[11px] sm:text-[12px] text-[#333333] text-center text-nowrap leading-[16px] hidden sm:block">
              <p>Voucher</p>
            </div>
          </div>
        </button>

        {/* Reset Button */}
        <button
          className="bg-[#e7e7e7] h-8 sm:h-9 rounded-lg cursor-pointer hover:bg-[#d7d7d7] transition-colors"
          onClick={onReset}
        >
          <div className="flex flex-row items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1.5 gap-1 sm:gap-2">
            <ResetIcon />
            <div className="font-sans font-bold text-[11px] sm:text-[12px] text-[#333333] text-center text-nowrap leading-[16px] hidden sm:block">
              <p>Reiniciar</p>
            </div>
          </div>
        </button>

        {/* Admin Area Button */}
        <button
          className="bg-[#e7e7e7] h-8 sm:h-9 rounded-lg cursor-pointer hover:bg-[#d7d7d7] transition-colors"
          onClick={onAdminArea}
        >
          <div className="flex flex-row items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1.5 gap-1 sm:gap-2">
            <AdminIcon />
            <div className="font-sans font-bold text-[11px] sm:text-[12px] text-[#333333] text-center text-nowrap leading-[16px] hidden sm:block">
              <p>Admin</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
