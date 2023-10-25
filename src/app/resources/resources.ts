enum ResourceType {
  Lambda = 'Lambda',
}

interface BaseResource {
  name: string;
  type?: ResourceType;
}

export interface ResourceLink {
  url: string;
  logo?: string;
}

export interface Resource extends BaseResource {
  cloudwatch: ResourceLink;
}
