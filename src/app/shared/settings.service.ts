import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resource } from '../resources/resources';

const RESOURCES_KEY = 'awslinks-resources';
const ENVS_KEY = 'awslinks-envs';
const REGION = 'us-east-1';

interface Settings {
  resources?: string | null;
  envs?: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly resources = new BehaviorSubject<Resource[]>([]);
  public readonly resources$ = this.resources.asObservable();

  constructor() {
    this.setResources(this.getSettings());
  }

  public getSettings(): Settings {
    return {
      resources: localStorage.getItem(RESOURCES_KEY),
      envs: localStorage.getItem(ENVS_KEY),
    };
  }

  public saveSettings(formData: Settings): void {
    const resources = formData.resources?.trim();
    const envs = formData.envs?.trim();

    if (resources) {
      localStorage.setItem(RESOURCES_KEY, resources);
    } else {
      localStorage.removeItem(RESOURCES_KEY);
    }

    if (envs) {
      localStorage.setItem(ENVS_KEY, envs);
    } else {
      localStorage.removeItem(ENVS_KEY);
    }

    this.setResources({ resources, envs });
  }

  private getCWLink(lambdaName: string): string {
    return `https://${REGION}.console.aws.amazon.com/cloudwatch/home?region=${REGION}#logsV2:log-groups/log-group/$252Faws$252Flambda$252F${lambdaName}/log-events$3Fstart$3D-3600000`;
  }

  private setResources(settings: Settings): void {
    const resources = settings.resources?.split(',');
    const envs = settings.envs?.split(',');

    const mapped: Resource[] = [];

    resources?.forEach((r) => {
      if (!envs?.length) {
        mapped.push({
          name: r,
          cloudwatch: { url: this.getCWLink(r) },
        });
      }

      envs?.forEach((env) => {
        const nameWithEnv = `${r}-${env}`;
        mapped.push({
          name: nameWithEnv,
          cloudwatch: { url: this.getCWLink(nameWithEnv) },
        });
      });
    });

    this.resources.next(mapped);
  }
}
