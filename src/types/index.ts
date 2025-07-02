export interface CompanyData {
  storeCount: number[];
  userCount: number[];
  allSimplesNacional: boolean;
  companyName: string;
  cnpj: string;
  website: string;
  responsibleName: string;
  email: string;
  phone: string;
}

export interface PlanData {
  cnpjCount: number;
  simplesNacional: string;
  maxUsers: number;
  onboarding: number;
  monthly: number;
  additionalUser: number;
  customPlan: boolean;
}

export interface PlanPricing {
  name: string;
  standard: PlanData;
  preLaunch: PlanData;
}

export interface AllPlansData {
  star: PlanPricing;
  constellation: PlanPricing;
  galaxy: PlanPricing;
  universe: PlanPricing;
}

export type PlanType = 'star' | 'constellation' | 'galaxy' | 'universe';

export interface CalculationResult {
  investmentValue: number;
  exemptionValue: number;
  exemptionPeriod: number;
  paymentPeriod: number;
  totalMonthlyCost: number;
  additionalUserCost: number;
  discountPercentage: number;
  isCustomPlan: boolean;
  onboarding: number;
}

// Alias for backwards compatibility
export type PlanCalculations = CalculationResult;

export interface PeriodOption {
  contractPeriod: number;
  paymentPeriod: number;
  exemptionPeriod: number;
  discountPercentage: number;
}