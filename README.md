# devops-cloud-ci-cd - sample app

Tiny Node.js app used for CI/CD pipeline demos.

Run locally:
1. `npm install`
2. `npm start`
3. Open http://localhost:3000

Build Docker image:
`docker build -t devops-sample:latest .`
Run container:
`docker run -p 3000:3000 devops-sample:latest`
