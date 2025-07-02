import {
  DEFAULT_PLANS_DATA,
  INVESTMENT_PERIODS,
} from "../constants/plans";
import type {
  AllPlansData,
  PlanType,
  CalculationResult,
  PeriodOption,
} from "../types";

let plansData: AllPlansData = { ...DEFAULT_PLANS_DATA };

// Convert INVESTMENT_PERIODS to the expected PERIOD_OPTIONS format
const PERIOD_OPTIONS: Record<string, PeriodOption> = {
  "12": {
    contractPeriod: 12,
    exemptionPeriod: 6,
    paymentPeriod: 6,
    discountPercentage:
      INVESTMENT_PERIODS.find((p) => p.value === "12")
        ?.discountPercentage || 0,
  },
  "24": {
    contractPeriod: 24,
    exemptionPeriod: 12,
    paymentPeriod: 12,
    discountPercentage:
      INVESTMENT_PERIODS.find((p) => p.value === "24")
        ?.discountPercentage || 5,
  },
  "36": {
    contractPeriod: 36,
    exemptionPeriod: 18,
    paymentPeriod: 18,
    discountPercentage:
      INVESTMENT_PERIODS.find((p) => p.value === "36")
        ?.discountPercentage || 10,
  },
};

export function getCurrentPlansData(): AllPlansData {
  return { ...plansData };
}

export function updatePlansData(newData: AllPlansData): void {
  plansData = { ...newData };
}

export function getRecommendedPlan(
  storeCount: number,
  userCount: number,
  allSimplesNacional: boolean,
): PlanType {
  const currentPlans = getCurrentPlansData();
  
  // Helper function to check if a plan supports the required Simples Nacional setting
  const supportsSimplesNacional = (planData: any, requiresSimplesOnly: boolean): boolean => {
    const planSimplesSupport = planData.preLaunch.simplesNacional; // Use preLaunch data for current recommendations
    
    if (requiresSimplesOnly) {
      // User needs Simples Nacional only - plan must support "Sim" or "Ambos"
      return planSimplesSupport === "Sim" || planSimplesSupport === "Ambos";
    } else {
      // User needs mixed taxation - plan must support "Ambos" (both)
      return planSimplesSupport === "Ambos";
    }
  };
  
  // Helper function to check if a plan can handle the requirements
  const canHandleRequirements = (planData: any, stores: number, users: number, simplesOnly: boolean): boolean => {
    const pricing = planData.preLaunch;
    
    // Skip custom plans for automatic recommendation
    if (pricing.customPlan) {
      return false;
    }
    
    // Check CNPJ count (stores)
    if (pricing.cnpjCount < stores) {
      return false;
    }
    
    // Check user count
    if (pricing.maxUsers < users && pricing.maxUsers !== 999) {
      return false;
    }
    
    // Check Simples Nacional support
    if (!supportsSimplesNacional(planData, simplesOnly)) {
      return false;
    }
    
    return true;
  };
  
  // Get all plan types in order of preference (smallest to largest)
  const planTypes: PlanType[] = ['star', 'constellation', 'galaxy', 'universe'];
  
  // Find the smallest plan that can handle the requirements
  for (const planType of planTypes) {
    const planData = currentPlans[planType];
    
    if (canHandleRequirements(planData, storeCount, userCount, allSimplesNacional)) {
      return planType;
    }
  }
  
  // If no standard plan can handle it, recommend universe (custom plan)
  return 'universe';
}

export function calculatePricing(
  plan: PlanType,
  userCount: number,
  investmentPeriod: string,
  usePreLaunch: boolean = true,
  hasVoucherBonus: boolean = false,
): CalculationResult {
  const planData = plansData[plan];
  const periodOption =
    PERIOD_OPTIONS[
      investmentPeriod as keyof typeof PERIOD_OPTIONS
    ];
  const pricing = usePreLaunch
    ? planData.preLaunch
    : planData.standard;
  const isCustomPlan = pricing.customPlan;

  // Handle custom plans (like Universe)
  if (isCustomPlan) {
    return {
      investmentValue: 0,
      exemptionValue: 0,
      exemptionPeriod:
        periodOption.exemptionPeriod +
        (hasVoucherBonus ? 1 : 0),
      paymentPeriod: periodOption.paymentPeriod,
      totalMonthlyCost: 0,
      additionalUserCost: 0,
      discountPercentage: periodOption.discountPercentage,
      isCustomPlan: true,
      onboarding: 0,
    };
  }

  const baseMonthly = pricing.monthly;
  const additionalUserPrice = pricing.additionalUser;
  const onboardingPrice = pricing.onboarding;

  const additionalUsers = Math.max(0, userCount - 1);
  const additionalUserCost =
    additionalUsers * additionalUserPrice;
  const totalMonthlyCost = baseMonthly + additionalUserCost;

  const exemptionPeriod =
    periodOption.exemptionPeriod + (hasVoucherBonus ? 1 : 0);
  const exemptionValue = totalMonthlyCost * exemptionPeriod;

  const paymentMonths =
    periodOption.contractPeriod - exemptionPeriod;
  const investmentValue =
    totalMonthlyCost * paymentMonths + onboardingPrice;

  return {
    investmentValue,
    exemptionValue,
    exemptionPeriod,
    paymentPeriod: periodOption.paymentPeriod,
    totalMonthlyCost,
    additionalUserCost,
    discountPercentage: periodOption.discountPercentage,
    isCustomPlan: false,
    onboarding: onboardingPrice,
  };
}

export function formatCurrency(
  value: number,
  isCustomPlan?: boolean,
): string {
  if (isCustomPlan) {
    return "Sob consulta";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatCurrencyFixed(
  value: number,
  isCustomPlan?: boolean,
): string {
  if (isCustomPlan) {
    return "Sob consulta";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function getPeriodOption(period: string): PeriodOption {
  return PERIOD_OPTIONS[period as keyof typeof PERIOD_OPTIONS];
}

// Export PERIOD_OPTIONS for components that need it
export { PERIOD_OPTIONS };