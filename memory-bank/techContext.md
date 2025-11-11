# Technical Context: Inbound SPA

## 1. Technologies

- **Vue 3:** The core framework for building the user interface.
- **TypeScript:** For static typing and improved code quality.
- **Composition API:** To write more organized and reusable component logic.
- **Pinia:** For centralized state management.
- **Vue Router:** For client-side routing and navigation.
- **Vite:** As the build tool and development server.
- **ESLint and Prettier:** For code linting and formatting.
- **openapi-typescript-codegen:** To generate a type-safe API client from the `openapi.json` specification.

## 2. Development Setup

To set up the development environment, follow these steps:

1.  Clone the repository.
2.  Install the dependencies: `npm install`
3.  Generate the API client: `npm run generate-api-client`
4.  Run the development server: `npm run dev`

## 3. Technical Constraints

- The application must be a single-page application (SPA).
- The API client must be generated from the `openapi.json` file to ensure it stays in sync with the API.
- The project must adhere to the principles of Hexagonal Architecture.
