import React from "react";
import { Button } from "./ui/button";
import svgPaths from "../imports/svg-ubh39kji4l";

interface ActionFooterProps {
  onPrint?: () => void;
  onEmail?: () => void;
  onSave?: () => void;
}

export function ActionFooter({
  onPrint,
  onEmail,
  onSave,
}: ActionFooterProps) {
  return (
    <div className="bg-white rounded-[12px] border border-[#eaeaea] shadow-sm">
      <div className="p-[16px] flex justify-between items-center">
        <Button
          variant="secondary"
          size="sm"
          className="bg-[#e7e7e7] hover:bg-[#ddd] text-[#333333] h-[36px] px-4 rounded-[8px] border-0 shadow-none"
          onClick={onPrint}
        >
          <svg
            className="w-[18px] h-[18px] mr-2"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path d={svgPaths.pc259d00} fill="#333333" />
          </svg>
          Imprimir
        </Button>
        <div className="flex gap-1.5">
          <Button
            variant="secondary"
            size="sm"
            className="bg-[#e7e7e7] hover:bg-[#ddd] text-[#333333] h-[36px] px-4 rounded-[8px] border-0 shadow-none"
            onClick={onEmail}
          >
            <svg
              className="w-[18px] h-[18px] mr-2"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path d={svgPaths.p22b24700} fill="#333333" />
            </svg>
            Enviar por E-mail
          </Button>
          <Button
            size="sm"
            className="bg-[#5e50f2] hover:bg-[#4a42d4] text-white h-[36px] px-4 rounded-[8px] border-0 shadow-none"
            onClick={onSave}
          >
            <svg
              className="w-[18px] h-[18px] mr-2"
              fill="none"
              viewBox="0 0 18 18"
            >
              <g>
                <path d={svgPaths.p289ab580} fill="white" />
                <path
                  d={svgPaths.p2afda080}
                  fill="white"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </g>
            </svg>
            Salvar Cotação
          </Button>
        </div>
      </div>
    </div>
  );
}
