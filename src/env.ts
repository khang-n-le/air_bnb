import * as pkg from '../package.json';

/**
 * Environment variables
 */

export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  airBnbService: 'https://airbnbnew.cybersoft.edu.vn',
};
