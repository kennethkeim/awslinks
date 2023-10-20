enum ResourceType {
  Lambda = 'Lambda',
}

export interface Resource {
  name: string;
  type: ResourceType;
}

export const mockResources: Resource[] = [
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
