import { APIRequestContext } from '@playwright/test';
import { config } from '../../config/env';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await this.request.get(`${config.baseUrl}${endpoint}`);
    return await response.json();
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    const response = await this.request.post(`${config.baseUrl}${endpoint}`, {
      data: body,
    });
    return await response.json();
  }

  // Add put, delete as needed
}
