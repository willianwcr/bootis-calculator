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
  color: string;
  standard: PlanData;
  preLaunch: PlanData;
}

export interface AllPlansData {
  star: PlanPricing;
  constellation: PlanPricing;
  galaxy: PlanPricing;
  universe: PlanPricing;
}

// Default plans data
export const DEFAULT_PLANS_DATA: AllPlansData = {
  star: {
    name: "Star",
    color: "#A0A0A0",
    standard: {
      cnpjCount: 1,
      simplesNacional: "Sim",
      maxUsers: 10,
      onboarding: 2990.00,
      monthly: 239.90,
      additionalUser: 55.90,
      customPlan: false,
    },
    preLaunch: {
      cnpjCount: 1,
      simplesNacional: "Sim",
      maxUsers: 10,
      onboarding: 990.00,
      monthly: 229.90,
      additionalUser: 49.90,
      customPlan: false,
    },
  },
  constellation: {
    name: "Constellation",
    color: "#489ACC",
    standard: {
      cnpjCount: 4,
      simplesNacional: "Sim",
      maxUsers: 30,
      onboarding: 4390.00,
      monthly: 399.00,
      additionalUser: 55.90,
      customPlan: false,
    },
    preLaunch: {
      cnpjCount: 4,
      simplesNacional: "Sim",
      maxUsers: 30,
      onboarding: 1490.00,
      monthly: 379.90,
      additionalUser: 49.90,
      customPlan: false,
    },
  },
  galaxy: {
    name: "Galaxy",
    color: "#5E50F2",
    standard: {
      cnpjCount: 15,
      simplesNacional: "Ambos",
      maxUsers: 999,
      onboarding: 6890.00,
      monthly: 699.00,
      additionalUser: 55.90,
      customPlan: false,
    },
    preLaunch: {
      cnpjCount: 15,
      simplesNacional: "Ambos",
      maxUsers: 999,
      onboarding: 2290.00,
      monthly: 659.00,
      additionalUser: 49.90,
      customPlan: false,
    },
  },
  universe: {
    name: "Universe",
    color: "#FDAC41",
    standard: {
      cnpjCount: 0,
      simplesNacional: "Ambos",
      maxUsers: 999,
      onboarding: 0,
      monthly: 0,
      additionalUser: 0,
      customPlan: true,
    },
    preLaunch: {
      cnpjCount: 0,
      simplesNacional: "Ambos",
      maxUsers: 999,
      onboarding: 0,
      monthly: 0,
      additionalUser: 0,
      customPlan: true,
    },
  },
};

// Storage key for plans data
export const PLANS_STORAGE_KEY = 'galena_bootis_plans_data';

// Investment period options
export const INVESTMENT_PERIODS = [
  { value: "12", label: "12 meses", discountPercentage: 0 },
  { value: "24", label: "24 meses", discountPercentage: 5 },
  { value: "36", label: "36 meses", discountPercentage: 10 }
];

// ROI calculation constants
export const ROI_CONSTANTS = {
  // Base values for ROI calculations
  MONTHLY_OPERATIONAL_SAVINGS: 5000, // Base monthly savings
  EFFICIENCY_IMPROVEMENT: 0.15, // 15% efficiency improvement
  COMPLIANCE_COST_REDUCTION: 2000, // Monthly compliance cost reduction
  
  // Multipliers by plan
  PLAN_MULTIPLIERS: {
    star: 1.0,
    constellation: 1.5,
    galaxy: 2.2,
    universe: 3.0,
  },
};

// Voucher configuration
export const VOUCHER_CONFIG = {
  VALID_CODE: "galenabootis",
  BONUS_MONTHS: 1, // Additional exemption months
};

// Company size thresholds for plan recommendations
export const RECOMMENDATION_THRESHOLDS = {
  SMALL_BUSINESS: {
    maxStores: 1,
    maxUsers: 10,
  },
  MEDIUM_BUSINESS: {
    maxStores: 4,
    maxUsers: 30,
  },
  LARGE_BUSINESS: {
    maxStores: 15,
    maxUsers: 100,
  },
};