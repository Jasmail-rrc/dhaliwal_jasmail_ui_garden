# Coding Assignment 13 – UI Component Library

## Student

**Jasmail Singh Dhaliwal**

---

# Description

This project demonstrates a React UI Component Library with automated code quality tools and CI/CD integration.

The project includes:

- React + TypeScript
- Reusable UI Components
- ESLint
- Prettier
- Husky Pre-Commit Hooks
- Jest & React Testing Library
- GitHub Actions CI Workflow
- Docker
- Nginx Production Server

---

# Prerequisites

Before running the project, make sure you have installed:

- Node.js
- npm
- Docker Desktop
- Git

---

# Clone Repository

```bash
git clone https://github.com/Jasmail-rrc/dhaliwal_jasmail_ui_garden.git
cd dhaliwal_jasmail_ui_garden
```

---

# Install Dependencies

```bash
npm install
```

---

# Start Development Server

```bash
npm start
```

The application will open at:

```
http://localhost:3000
```

---

# Run Tests

```bash
npm test
```

Run tests once:

```bash
npm test -- --watchAll=false
```

---

# Run ESLint

```bash
npm run lint
```

---

# Run Prettier Check

```bash
npm run format:check
```

---

# Format Source Code

```bash
npm run format
```

---

# Run All Quality Checks

```bash
npm run quality
```

This command runs:

- ESLint
- Prettier
- Tests

---

# Build Production Version

```bash
npm run build
```

---

# Build Docker Image

```bash
docker build -t dhaliwal_jasmail_coding_assignment13 .
```

---

# Run Docker Container

```bash
docker run --name dhaliwal_jasmail_coding_assignment13 -p 8018:8018 dhaliwal_jasmail_coding_assignment13
```

---

# View Running Containers

```bash
docker ps
```

---

# Stop Docker Container

```bash
docker stop dhaliwal_jasmail_coding_assignment13
```

---

# Start Existing Container

```bash
docker start dhaliwal_jasmail_coding_assignment13
```

---

# Remove Docker Container

```bash
docker rm dhaliwal_jasmail_coding_assignment13
```

---

# Remove Docker Image

```bash
docker rmi dhaliwal_jasmail_coding_assignment13
```

---

# Git Commands

Check status:

```bash
git status
```

Add files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Updated project"
```

Push changes:

```bash
git push origin main
```

---

# GitHub Repository

https://github.com/Jasmail-rrc/dhaliwal_jasmail_ui_garden

---

# Docker Application

After running the container, open:

http://localhost:8018

---

# Project Features

- Reusable React Components
- TypeScript Support
- ESLint Code Quality
- Prettier Formatting
- Husky Pre-Commit Validation
- Automated Unit Testing
- GitHub Actions Continuous Integration
- Dockerized Deployment
- Nginx Production Server