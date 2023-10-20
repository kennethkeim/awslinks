enum ResourceType {
  Lambda = 'Lambda',
}

interface BaseResource {
  name: string;
  type: ResourceType;
}

export interface ResourceLink {
  url: string;
  logo?: string;
}

export interface Resource extends BaseResource {
  cloudwatch: ResourceLink;
}

interface Config {
  region: string;
}

export const mockConfig: Config = {
  region: 'us-east-1',
};

export const mockResources: BaseResource[] = [
  {
    name: 'vendors-v1',
    type: ResourceType.Lambda,
  },
  {
    name: 'products-v1',
    type: ResourceType.Lambda,
  },
  {
    name: 'customers-v1',
    type: ResourceType.Lambda,
  },
  {
    name: 'orders-v1',
    type: ResourceType.Lambda,
  },
  {
    name: 'messages-v1',
    type: ResourceType.Lambda,
  },
  {
    name: 'preferences-v1',
    type: ResourceType.Lambda,
  },
];

/** Only supports AWS Lambdas for now */
export const getResources = (
  resources: BaseResource[],
  config: Config
): Resource[] => {
  const { region } = config;

  return resources
    .filter((r) => r.type === ResourceType.Lambda)
    .map((r) => {
      return {
        ...r,
        cloudwatch: {
          url: `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:log-groups/log-group/$252Faws$252Flambda$252F${r.name}/log-events$3Fstart$3D-3600000`,
        },
      };
    });
};
