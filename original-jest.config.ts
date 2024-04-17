import type { Config } from 'jest';

const config: Config = {
  setupFiles: [
    "./setupTestEnvironment.js"
  ],
  setupFilesAfterEnv: [
    "./originalSetupTests.ts"
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": 'ts-jest'
  }
};

export default config;
