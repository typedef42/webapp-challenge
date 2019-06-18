import { lazy } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

import "../static/style.css";

interface IUser {
  avatar_url: string;
  login: string;
  html_url: string;
}

interface IInfo {
  title: string;
  version: string;
  description: string;
}

export class App {
  http: HttpClient;
  info: IInfo;
  users: Array<IUser> = [];

  constructor(@lazy(HttpClient) private getHttpClient: () => HttpClient) {}

  async activate(): Promise<void> {
    const http = (this.http = this.getHttpClient());

    http.configure(config => {
      config.useStandardConfiguration().withBaseUrl("/api/");
    });

    this.handleInfo();
  }

  async handleInfo() {
    const response = await this.http.fetch("info");
    this.info = await response.json();
  }
}
