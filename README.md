# Playwright UI Testing POM Framework

A professional End to End flow testing framework built with Playwright and TypeScript.

##  Project Structure
```
├── data/          # Data used in the test
├── fixture       # Custom fixtures defined with page objects
├── pages          # all the pages defined seperately with their locators    
├── tests/            # UI test suites
└── checkout.spec.ts
└── login.spec.ts

```



##  How to Run
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

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions


## CI/CD Pipeline
This framework uses GitHub Actions to run tests automatically on every push to main and on every pull request. The pipeline:
- Installs Node.js and project dependencies
- Installs Playwright browsers on a fresh Ubuntu machine
- Runs the full test suite
- Uploads an HTML test report as an artifact

## Environment Variables
This framework uses environment variables for credentials.

For local runs create a .env file in the project root:
LOGIN_USERNAME=your_username
LOGIN_PASSWORD=your_password

For CI/CD add these as GitHub Secrets in your repository settings.



## Repository
https://github.com/ankitasachan93/Practice-framework
