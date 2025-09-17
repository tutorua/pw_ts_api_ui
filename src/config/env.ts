import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  uiBaseUrl: process.env.UI_BASE_URL || 'http://localhost:4200',
};
