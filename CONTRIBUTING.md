# Contributing to LED Digital Clock

Thank you for considering contributing to the **LED Digital Clock** project! This document provides guidelines for contributing code, reporting issues, and ensuring code consistency in the repository.

## Table of Contents

- [Getting Started](#getting-started)
  - [Fork the Repository](#fork-the-repository)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Run the Development Server](#run-the-development-server)
- [Contribution Guidelines](#contribution-guidelines)
  - [Reporting Issues](#reporting-issues)
  - [Feature Requests](#feature-requests)
  - [Pull Request Guidelines](#pull-request-guidelines)
  - [Commit Message Convention](#commit-message-convention)
- [License](#license)

---

## Getting Started

### Fork the Repository

1. Navigate to the repository on GitHub.
2. Click the **Fork** button in the upper right corner.
3. Clone your forked repository:

   ```sh
   git clone https://github.com/sshuvoo/led-digital-clock.git
   cd led-digital-clock
   ```

### Install Dependencies

Ensure you have **Node.js (LTS)** and **npm** installed. Then, run:

```sh
npm install
```

### Run the Development Server

Start the local development server:

```sh
npm run dev
```

The application should now be running at `http://localhost:5173/`.

## Contribution Guidelines

### Reporting Issues

If you encounter a bug or have an idea for improvement, please **check open issues first** to avoid duplication. If none exist, open a new issue and provide:

- A clear title and description
- Steps to reproduce (if applicable)
- Screenshots or error logs
- Expected vs. actual behavior

### Feature Requests

If you have a feature request, create an issue with the `[Feature Request]` prefix. Include:

- A detailed explanation of the feature
- Potential use cases
- Any relevant resources

### Pull Request Guidelines

#### 1. Create a Branch

Before making changes, create a new branch following this naming convention:

```
feature/<short-description>
fix/<short-description>
chore/<short-description>
```

Example:

```sh
 git checkout -b feature/add-settings-page
```

#### 2. Make Changes and Commit

Ensure your changes follow the coding standards. Run linting and formatting before committing:

```sh
npm lint
```

#### 3. Push and Create a Pull Request

Push your branch to GitHub and create a pull request (PR) from your forked repository to the **master** branch. Include:

- A clear title
- A description of what the PR does
- A reference to related issues (e.g., `Closes #12`)
- Screenshots (if UI changes were made)

#### 4. Code Review & Merge

Your PR will be reviewed, and you may be asked to make changes. Once approved, it will be merged!

## Code Style

We follow strict **TypeScript + ESLint + Prettier** rules. Ensure you adhere to:

- **Tailwind CSS best practices**
- **Type safety** in TypeScript
- **Consistent formatting** using Prettier
- **Functional components with hooks**

### Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for meaningful commit messages:

```
feat: add dark mode toggle
fix: resolve clock display bug
chore: update dependencies
```

## License

This project is licensed under the **MIT License**. See [`LICENSE`](LICENSE) for more details.

---

Happy coding! 🚀
