import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';

test.describe('User API Tests', () => {
  let apiClient: ApiClient;

  test.beforeEach(async ({ request }) => {
    apiClient = new ApiClient(request);
  });

  test('should get list of users', async () => {
    const response = await apiClient.get('/api/users?page=2');
    expect(response).toHaveProperty('data');
    expect(Array.isArray(response.data)).toBeTruthy();
  });

  test('should create a new user', async () => {
    const newUser = { name: 'John', job: 'Engineer' };
    const response = await apiClient.post('/api/users', newUser);
    expect(response.name).toBe('John');
    expect(response.job).toBe('Engineer');
  });
});
