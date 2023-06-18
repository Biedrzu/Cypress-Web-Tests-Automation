import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  blockHosts: "*.googletagservices.com",
  e2e: {
    baseUrl: 'https://demoqa.com/books',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});