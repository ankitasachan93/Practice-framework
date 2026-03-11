# Playwright API Testing Framework

A professional API testing framework built with Playwright and TypeScript.

## 📁 Project Structure
```
├── helpers/          # Generic reusable HTTP request class
├── data/             # Test data, payloads and URLs  
├── tests/            # API test suites
└── playwright.config.ts
```

## ✅ Test Coverage

| Method | Endpoint | What it tests |
|--------|----------|---------------|
| GET | /todos | Returns 200 todos |
| GET | /todos/1 | Returns correct fields and values |
| POST | /todos | Creates a new todo |
| PUT | /todos/1 | Fully updates a todo |
| PATCH | /todos/1 | Partially updates a todo |
| DELETE | /todos/1 | Deletes a todo |

## 🚀 How to Run
```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run with browser visible  
npx playwright test --headed

# View HTML report
npx playwright show-report
```

## 🛠️ Tech Stack

- Playwright
- TypeScript
- JSONPlaceholder API
```
**Once public your portfolio link will be:**
```
https://github.com/ankitasachan93/Practice-framework
