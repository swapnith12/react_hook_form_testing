// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['C:/Users/sam/OneDrive/Desktop/learning/react/react-form/src/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
    '<rootDir>/utils',
  ],
};

export default config;
