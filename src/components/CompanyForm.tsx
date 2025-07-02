import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import type { CompanyData } from "../types";

interface CompanyFormProps {
  data: CompanyData;
  onUpdate: (updates: Partial<CompanyData>) => void;
}

export function CompanyForm({
  data,
  onUpdate,
}: CompanyFormProps) {
  const {
    storeCount,
    userCount,
    allSimplesNacional,
    companyName,
    cnpj,
    website,
    responsibleName,
    email,
    phone,
  } = data;

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="p-[16px] flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[16px] font-bold text-[#333333]">
            Sobre a empresa
          </h2>
        </div>
        <div className="border-t border-[#eaeaea] mb-6"></div>

        {/* Store Count */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[14px] font-semibold text-[#333333]">
              Número de Lojas
            </span>
            <span className="text-[14px] font-semibold text-[#333333]">
              {storeCount[0]} loja{storeCount[0] > 1 ? "s" : ""}
            </span>
          </div>
          <div className="relative">
            <Slider
              value={storeCount}
              onValueChange={(value) =>
                onUpdate({ storeCount: value })
              }
              max={20}
              min={1}
              step={1}
              className="w-full [&_.slider-track]:h-[6px] [&_.slider-track]:bg-slider-track [&_.slider-range]:bg-slider-range [&_.slider-thumb]:w-[20px] [&_.slider-thumb]:h-[20px] [&_.slider-thumb]:bg-slider-thumb [&_.slider-thumb]:border-0 [&_.slider-thumb]:shadow-lg"
            />
          </div>
        </div>

        {/* Simples Nacional Switch */}
        <div className="flex items-center gap-3.5 mb-6">
          <Switch
            checked={allSimplesNacional}
            onCheckedChange={(checked) =>
              onUpdate({ allSimplesNacional: checked })
            }
            className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-[#cbced4]"
          />
          <Label className="text-[14px] font-semibold text-[#333333]">
            Todas no Simples Nacional
          </Label>
        </div>

        {/* User Count */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[14px] font-semibold text-[#333333]">
              Quantidade de Usuários
            </span>
            <span className="text-[14px] font-semibold text-[#333333]">
              {userCount[0]} usuário
              {userCount[0] > 1 ? "s" : ""}
            </span>
          </div>
          <div className="relative">
            <Slider
              value={userCount}
              onValueChange={(value) =>
                onUpdate({ userCount: value })
              }
              max={50}
              min={1}
              step={1}
              className="w-full [&_.slider-track]:h-[6px] [&_.slider-track]:bg-slider-track [&_.slider-range]:bg-slider-range [&_.slider-thumb]:w-[20px] [&_.slider-thumb]:h-[20px] [&_.slider-thumb]:bg-slider-thumb [&_.slider-thumb]:border-0 [&_.slider-thumb]:shadow-lg"
            />
          </div>
        </div>

        {/* Divider */}
        {/*
        <div className="flex items-center gap-2.5 my-6">
          <div className="flex-1 h-px bg-[#eaeaea]"></div>
          <span className="text-[10px] font-bold text-[#c4c4c4] px-2">
            Dados da Empresa
          </span>
          <div className="flex-1 h-px bg-[#eaeaea]"></div>
        </div>
        */}

        {/* Company Name */}
        {/*
        <div className="mb-4">
          <Label className="text-[12px] font-semibold text-[#333333] mb-2 block">
            Nome da Empresa
            <span className="text-[#ee5252]">*</span>
          </Label>
          <Input
            value={companyName}
            onChange={(e) =>
              onUpdate({ companyName: e.target.value })
            }
            placeholder="Ex: Farmácia João da Silva"
            className="h-9 bg-white border-neutral-200 rounded-lg text-[12px] text-[#333333] placeholder:text-[#c4c4c4]"
          />
        </div>
        */}

        {/* CNPJ and Website */}
        {/*
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <Label className="text-[12px] font-semibold text-[#333333] mb-2 block">
              CNPJ
            </Label>
            <Input
              value={cnpj}
              onChange={(e) =>
                onUpdate({ cnpj: e.target.value })
              }
              placeholder="Ex: 00.623.904/0001-73"
              className="h-9 bg-white border-neutral-200 rounded-lg text-[12px] text-[#333333] placeholder:text-[#c4c4c4]"
            />
          </div>
          <div className="flex-1">
            <Label className="text-[12px] font-semibold text-[#333333] mb-2 block">
              Site da Empresa
            </Label>
            <Input
              value={website}
              onChange={(e) =>
                onUpdate({ website: e.target.value })
              }
              placeholder="Ex: farmaciajoaodasilva.com.br"
              className="h-9 bg-white border-neutral-200 rounded-lg text-[12px] text-[#333333] placeholder:text-[#c4c4c4]"
            />
          </div>
        </div>
        */}

        {/* Divider */}
        {/*
        <div className="flex items-center gap-2.5 my-6">
          <div className="flex-1 h-px bg-[#eaeaea]"></div>
          <span className="text-[10px] font-bold text-[#c4c4c4] px-2">
            Dados do Responsável
          </span>
          <div className="flex-1 h-px bg-[#eaeaea]"></div>
        </div>
        */}

        {/* Responsible Name */}
        {/*
        <div className="mb-4">
          <Label className="text-[12px] font-semibold text-[#333333] mb-2 block">
            Nome do Responsável
            <span className="text-[#ee5252]">*</span>
          </Label>
          <Input
            value={responsibleName}
            onChange={(e) =>
              onUpdate({ responsibleName: e.target.value })
            }
            placeholder="Ex: João da Silva"
            className="h-9 bg-white border-neutral-200 rounded-lg text-[12px] text-[#333333] placeholder:text-[#c4c4c4]"
          />
        </div>
        */}

        {/* Email and Phone */}
        {/*
        <div className="flex gap-3">
          <div className="flex-1">
            <Label className="text-[12px] font-semibold text-[#333333] mb-2 block">
              E-mail do Responsável
              <span className="text-[#ee5252]">*</span>
            </Label>
            <Input
              value={email}
              onChange={(e) =>
                onUpdate({ email: e.target.value })
              }
              placeholder="Ex: email@exemplo.com"
              className="h-9 bg-white border-neutral-200 rounded-lg text-[12px] text-[#333333] placeholder:text-[#c4c4c4]"
            />
          </div>
          <div className="w-[175px]">
            <Label className="text-[12px] font-semibold text-[#333333] mb-2 block">
              Telefone do Responsável
            </Label>
            <Input
              value={phone}
              onChange={(e) =>
                onUpdate({ phone: e.target.value })
              }
              placeholder="(99) 9 9999-9999"
              className="h-9 bg-white border-neutral-200 rounded-lg text-[12px] text-[#333333] placeholder:text-[#c4c4c4]"
            />
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
