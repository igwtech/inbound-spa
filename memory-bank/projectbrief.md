# Project Brief: Inbound SPA

## 1. Overview

This project is a Vue 3 single-page application (SPA) designed to serve as a self-service portal for API users of the Woodlandsoftware platform. It will provide a user-friendly interface for managing accounts, API tokens, and other related resources. The application will be built with TypeScript and the Composition API, following Hexagonal Architecture principles for a clean and maintainable codebase.

## 2. Core Requirements

The key features of the Inbound SPA are:

- **User Account Management:** Allow users to create and manage their accounts.
- **API Token Management:** Enable users to generate and revoke their API tokens.
- **Post Management:** Provide a way for users to view their posts and manually create new ones for testing purposes.
- **Client and Hub Management:** Allow users to view their connected clients and hubs.
- **Webhook Configuration:** Enable users to configure their webhooks for receiving real-time updates.

## 3. Branding

The application must be branded as "Woodlandsoftware," incorporating the company's visual identity and design language. The branding should be consistent with the official website: [https://wdlnds.com](https://wdlnds.com).

## 4. Technical Stack

- **Framework:** Vue 3
- **Language:** TypeScript
- **API Style:** Composition API
- **State Management:** Pinia
- **Routing:** Vue Router
- **Styling:** To be determined (likely Tailwind CSS or a similar utility-first framework)
- **API Client:** Generated from `openapi.json` using `openapi-typescript-codegen`

## 5. Architecture

The project will follow the principles of Hexagonal Architecture (Ports and Adapters) to ensure a clear separation of concerns and a modular, testable codebase. The core application logic will be isolated from external dependencies, such as the API and UI components.
