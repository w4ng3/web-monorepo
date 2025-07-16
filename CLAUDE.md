# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a monorepo using pnpm workspaces with the following structure:

- **Root**: Configuration files (ESLint, UnoCSS, pnpm workspace)
- **packages/**: Individual projects and shared libraries
  - **math-project-vue/**: Vue 3 application with TypeScript, i18n, testing
  - **clothing-project-react/**: React application with TypeScript
  - **utils/**: Shared utility library (`@w4ng3/utils`)
  - **tools/**: Common tools library (`@w4ng3/tools`) with Jest testing
  - **acl/**: Vue 3 application with access control features
  - **demo/**: Demo code and examples
  - **jest/**: Jest testing examples
  - **ts/**: TypeScript learning/demo code

## Essential Commands

### Development
```bash
# Install dependencies (root)
pnpm i

# Run math project in dev mode
pnpm math:dev
# Or directly: pnpm -F math-project-vue dev

# Run any package directly
pnpm -F <package-name> <script>
```

### Testing
```bash
# Vue projects use Vitest
pnpm -F math-project-vue test

# Tools package uses Jest
pnpm -F @w4ng3/tools test
```

### Building
```bash
# Vue projects
pnpm -F math-project-vue build

# React projects
pnpm -F clothing-project-react build

# Utils library
pnpm -F @w4ng3/utils build
```

### Linting
```bash
# Root-level linting (covers all packages)
pnpm lint
pnpm lint:fix
pnpm lint:view  # Opens ESLint config inspector
```

## Technology Stack

### Core Technologies
- **Package Manager**: pnpm with workspaces
- **Build Tool**: Vite (for Vue/React projects)
- **CSS Framework**: UnoCSS with custom theme
- **Linting**: ESLint with @antfu/eslint-config
- **Git Hooks**: simple-git-hooks with lint-staged

### Vue Projects (math-project-vue, acl)
- **Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Testing**: Vitest with jsdom
- **Internationalization**: vue-i18n with YAML locale files
- **Routing**: Vue Router 4
- **UI Components**: Custom component library (`@w4ng3/invis-ui`)
- **Build**: vue-tsc + Vite

### React Projects (clothing-project-react)
- **Framework**: React 18
- **Language**: TypeScript
- **Build**: tsc + Vite

### Shared Libraries
- **utils**: Utility functions with TypeScript, built with Vite
- **tools**: Common tools with Jest testing

## Architecture Patterns

### Workspace Dependencies
- Shared packages use `workspace:^` protocol for internal dependencies
- Catalog system in pnpm-workspace.yaml for consistent versions (vite, typescript, vue, unocss)
- Utils and tools packages are consumed by application packages

### Testing Strategy
- Vue projects: Vitest with Vue Test Utils and jsdom environment
- Tools package: Jest with ES modules support
- Test files located in dedicated `test/` or `__tests__/` directories

### Internationalization
- Vue projects support multiple locales (en, ja, zh-CN)
- YAML format for locale files in `locales/` directory
- Runtime-only i18n setup with composition API

### Build Configuration
- Vite with Vue/React specific plugins
- UnoCSS integration for styling
- Vue projects include JSX support via @vitejs/plugin-vue-jsx
- TypeScript path mapping with `@` alias pointing to `src/`

### Code Style
- @antfu/eslint-config with custom overrides
- Support for Vue, React, TypeScript, and UnoCSS
- Pre-commit hooks enforce linting
- Less opinionated rules enabled
