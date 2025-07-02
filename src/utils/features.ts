export interface Feature {
  name: string;
  plans: {
    star: boolean;
    constellation: boolean;
    galaxy: boolean;
    universe: boolean;
  };
}

export interface FeatureGroup {
  name: string;
  features: Feature[];
}

export type PlanName = 'star' | 'constellation' | 'galaxy' | 'universe';
export type FeatureStatus = 'complete' | 'partial' | 'not-included';

// Static feature data to avoid import issues
const featuresData: FeatureGroup[] = [
  {
    "name": "Gestão Administrativa",
    "features": [
      {
        "name": "Empresas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Usuários",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Grupos de Usuários",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Controle de Acessos",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Auditoria",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão de Estoque",
    "features": [
      {
        "name": "Controle de Movimento de Estoque",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Rastreabilidade de Lotes",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Controle de Homeopatia",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Rótulos para Estoque",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Projeção de Estoques Mínimo e Máximo",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Atualização de Preços",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Inventário Automatizado",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Relatórios:\n- Controle de lotes\n- Movimento de Estoque",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Atualização de preço via ABCFarma *",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "APP Inventário*",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Transferências de Estoque entre Lojas",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Dashboard",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão Compras",
    "features": [
      {
        "name": "Necessidade de Compras",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Cotação Eletrônica",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Pedidos de Compras",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Entrada de Notas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Qualificação de Fornecedores",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Relatórios:\n- Compras",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Automatização de Compras*",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Dashboard",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão da Produção",
    "features": [
      {
        "name": "Locais de Estoque",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Sinônimos",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Incompatibilidades",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Relacionamento de Produtos",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Certificados de Análise (Controle de Qualidade)",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Fichas Técnicas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Veículos Especiais",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Capacidade de Produção",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Conferência Farmacêutica",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Formas Farmacêuticas Personalizáveis",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Pesagem Monitorada",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Peso Médio",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Produção Interna",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Rótulos Personalizáveis",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Ordem de Manipulação Personalizável",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "PCP (Fórmulas Manipuladas e Produção Interna)",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Reserva de Estoque",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Produção Inteligente",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Dashboard",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão de Vendas",
    "features": [
      {
        "name": "Cadastro de Prescritores",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Histórico de Clientes",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Anexos de Arquivos *",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Especialidades",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Formas de Pagamento",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Controle de Cliente / Paciente",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Gestão de Vendas no PDV",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Orçamento Automático por I.A. *",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Link de Pagamentos *",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Relatórios:\n- Gestão de Pedidos e Orçamentos\n- Comissão de Vendedores\n- Vendas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Gestão de Uso Contínuo",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "TEF*",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Farmácia Popular *",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "PBMs *",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Pesquisa de Satisfação",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Visitação Médica:\n- Agenda\n- Controle de Visitas\n- APP Visitador *\n- Comissão de Visitadores",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Dashboard",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão Fiscal",
    "features": [
      {
        "name": "Integrações Fiscais Eletrônicas*\n- S@T, NFC-e, NF-e, CF-e, MF-e, NFS-e",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Armazenamento de Documentos Fiscais S@T / NF-e / NFC-e*",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "SINTEGRA",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Geração de dados base para SPED Fiscal",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão Regulatória",
    "features": [
      {
        "name": "Lista de Controlados",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Livro  Geral de Receitas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Livro Geral de Controlados",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "BSPO/BMPO",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "RMNR A/B",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Balanço de Vendas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Siproquim",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Relatório da Polícia Civil",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "SNGPC",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "MAPA",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão Financeira",
    "features": [
      {
        "name": "Fluxo de caixa (contas a pagar e a receber)",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Plano de Contas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Centro de Custos",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Controle de Transações",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Controle de Receitas e Despesas",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Conciliação Bancária",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Dashboard",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão de Entregas",
    "features": [
      {
        "name": "Relação de Entregas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Controle de Entregadores",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Entregas por Região",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Integração com Logística *",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão de Negócio",
    "features": [
      {
        "name": "Formação de Custo Médio",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Indicador de Margem de Lucro para Vendas",
        "plans": {
          "star": true,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "DRE Gerencial",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "BI - Indicadores de Performance*",
        "plans": {
          "star": false,
          "constellation": true,
          "galaxy": true,
          "universe": true
        }
      },
      {
        "name": "Dashboard",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": true,
          "universe": true
        }
      }
    ]
  },
  {
    "name": "Gestão de Franquias",
    "features": [
      {
        "name": "Cobrança de Royalties",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": false,
          "universe": true
        }
      },
      {
        "name": "Gestão de Estoque para Compras em Grupo",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": false,
          "universe": true
        }
      },
      {
        "name": "Atualização de Fórmulas",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": false,
          "universe": true
        }
      },
      {
        "name": "Atualização de Produtos",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": false,
          "universe": true
        }
      },
      {
        "name": "Gestão de Vendas",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": false,
          "universe": true
        }
      },
      {
        "name": "Índices de Performance",
        "plans": {
          "star": false,
          "constellation": false,
          "galaxy": false,
          "universe": true
        }
      }
    ]
  }
];

// Get all feature groups
export function getFeatureGroups(): FeatureGroup[] {
  return featuresData;
}

// Calculate the status of a feature group for a specific plan
export function calculateFeatureGroupStatus(
  features: Feature[],
  planName: PlanName
): FeatureStatus {
  if (!features || !Array.isArray(features) || features.length === 0) {
    return 'not-included';
  }

  const featureStatuses = features.map(feature => feature.plans[planName]);
  
  const trueCount = featureStatuses.filter(status => status === true).length;
  const totalCount = featureStatuses.length;
  
  if (trueCount === 0) {
    return 'not-included';
  } else if (trueCount === totalCount) {
    return 'complete';
  } else {
    return 'partial';
  }
}

// Get status label in Portuguese
export function getStatusLabel(status: FeatureStatus): string {
  switch (status) {
    case 'complete':
      return 'Completo';
    case 'partial':
      return 'Parcial';
    case 'not-included':
      return 'Não incluído';
    default:
      return 'Não incluído';
  }
}

// Calculate status for all plans in a feature group
export function calculateAllPlanStatuses(features: Feature[]): {
  star: FeatureStatus;
  constellation: FeatureStatus;
  galaxy: FeatureStatus;
  universe: FeatureStatus;
} {
  return {
    star: calculateFeatureGroupStatus(features, 'star'),
    constellation: calculateFeatureGroupStatus(features, 'constellation'),
    galaxy: calculateFeatureGroupStatus(features, 'galaxy'),
    universe: calculateFeatureGroupStatus(features, 'universe'),
  };
}

// Get feature icon based on plan support
export function getFeatureIcon(feature: Feature, planName: PlanName): 'check' | 'x' {
  return feature.plans[planName] ? 'check' : 'x';
}