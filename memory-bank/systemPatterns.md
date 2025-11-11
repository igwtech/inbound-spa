# System Patterns: Inbound SPA

## 1. System Architecture

The application will follow a Hexagonal Architecture (Ports and Adapters) to ensure a clear separation of concerns. The architecture will be composed of three main layers:

- **Domain:** This layer will contain the core business logic and entities of the application. It will be completely independent of any external frameworks or libraries.
- **Application:** This layer will orchestrate the use cases of the application. It will depend on the domain layer but not on the infrastructure layer.
- **Infrastructure:** This layer will contain the adapters to external systems, such as the API client, the UI components, and the local storage. It will depend on the application layer.

## 2. Key Technical Decisions

- **State Management:** Pinia will be used for centralized state management. This will allow for a single source of truth for the application's state and will make it easier to manage complex state interactions.
- **API Client:** The API client will be generated from the `openapi.json` file using `openapi-typescript-codegen`. This will ensure that the client is always in sync with the API and that all the API operations are type-safe.
- **Styling:** The styling approach is yet to be determined, but it will likely be a utility-first CSS framework like Tailwind CSS to ensure a consistent and maintainable design system.

## 3. Design Patterns

- **Composition API:** The Composition API will be used to write more organized and reusable component logic.
- **Dependency Injection:** Dependency injection will be used to provide the dependencies to the different layers of the application. This will make the application more modular and easier to test.
