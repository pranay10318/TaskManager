# Task Manager App

Welcome to the Task Manager App! This application helps users manage tasks across multiple organizations.

## Getting Started

Follow these steps to get started with the Task Manager App:

### Prerequisites

- Node.js (v14 or higher)
- npm (or yarn)
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd task-manager-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Database Configuration

1. Configure PostgreSQL credentials in `config/database.js`:

   ```javascript
   const { Sequelize } = require('sequelize');

   const sequelize = new Sequelize('database_name', 'username', 'password', {
     host: 'localhost',
     dialect: 'postgres',
   });

   module.exports = sequelize;
   ```

2. Create the database and run migrations:

   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```

### Starting the Server

To start the server in development mode:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

### Usage

#### Authentication

- **Sign Up**: POST `/api/auth/signup`
  
  Example Request:
  ```bash
  curl -X POST http://localhost:3000/api/auth/signup -d '{"name": "John Doe", "email": "john@example.com", "password": "password"}' -H 'Content-Type: application/json'
  ```

- **Login**: POST `/api/auth/login`

  Example Request:
  ```bash
  curl -X POST http://localhost:3000/api/auth/login -d '{"email": "john@example.com", "password": "password"}' -H 'Content-Type: application/json'
  ```

  **Note**: Successful authentication will return a JWT token that should be used for subsequent API requests.

#### User Routes

- **Get User Details**: GET `/api/users/:id`
- **Get User Tasks**: GET `/api/users/:id/tasks`
- **Get User Organizations**: GET `/api/users/:id/organizations`
- **Get User Session**: GET `/api/users/:id/session`
- **Register for Organization**: POST `/api/users/register-org`

#### Organization Routes

- **Create Organization**: POST `/api/organizations`

  Example Request:
  ```bash
  curl -X POST http://localhost:3000/api/organizations -d '{"name": "New Organization"}' -H 'Authorization: Bearer <JWT-token>'
  ```

#### Task Routes

- **Create Task**: POST `/api/tasks`

  Example Request:
  ```bash
  curl -X POST http://localhost:3000/api/tasks -d '{"title": "New Task", "description": "Task description", "userId": 1, "orgId": 1}' -H 'Authorization: Bearer <JWT-token>'
  ```