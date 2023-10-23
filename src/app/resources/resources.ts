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

const resourcesLSString = localStorage.getItem('awslinks-resources') ?? '';

export const resourcesLS = resourcesLSString
  .split(',')
  .map<BaseResource>((r) => {
    return { name: r, type: ResourceType.Lambda };
  });

export const envsLS = (localStorage.getItem('awslinks-envs') ?? '').split(',');

export const defaultConfig: Config = { region: 'us-east-1' };

/** Only supports AWS Lambdas for now */
export const getResources = (
  config: Config = defaultConfig,
  resources: BaseResource[] = resourcesLS,
  envs: string[] = envsLS
): Resource[] => {
  const { region } = config;
  const mapped: Resource[] = [];

  resources
    .filter((r) => r.type === ResourceType.Lambda)
    .forEach((r) => {
      envs.forEach((env) => {
        const fullName = `${r.name}-${env}`;
        mapped.push({
          ...r,
          name: fullName,
          cloudwatch: {
            url: `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:log-groups/log-group/$252Faws$252Flambda$252F${fullName}/log-events$3Fstart$3D-3600000`,
          },
        });
      });
    });

  return mapped;
};
