# Role-Based Authentication System

A full-stack application demonstrating JWT-based authentication and role-based authorization using React and Node.js.

## Features

- User authentication with JWT
- Role-based access control (Admin, Manager, User)
- Protected API routes
- Secure password hashing
- React frontend with protected routes
- Persistent authentication state

## Tech Stack

- **Frontend**: React, React Router, Context API
- **Backend**: Node.js, Express
- **Authentication**: JWT
- **Password Hashing**: bcrypt
- **Database**: File-based JSON storage

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Environment Setup:
   
   Create a `.env` file in the server directory:
   ```env
   PORT=3001
   JWT_SECRET=your_jwt_secret_here
   ```

## Running the Application

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. Start the client:
   ```bash
   cd client
   npm run dev
   ```

The client will be available at `http://localhost:5173` and the server at `http://localhost:3001`.

## API Endpoints

### Authentication

#### POST /api/auth/register
Register a new user
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "user"
}
```

#### POST /api/auth/login
Login existing user
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Protected Routes

#### GET /api/protected
Requires authentication token

Headers:
```
Authorization: Bearer <token>
```

## Role-Based Access

The system supports three roles:
- **Admin**: Full access to all features
- **Manager**: Access to management features
- **User**: Basic access rights

## Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Role-based middleware for route protection
- Protected frontend routes

## Register
<img width="1106" height="734" alt="Screenshot 2025-11-01 155913" src="https://github.com/user-attachments/assets/dfedf804-e1c0-4b3c-8cb5-649d3eeaaf81" />

## login Page
<img width="1865" height="625" alt="Screenshot 2025-11-01 160128" src="https://github.com/user-attachments/assets/e84a5297-fedb-4ce3-bcf5-af0989eee924" />

## Simple Dashboard 
<img width="1453" height="421" alt="image" src="https://github.com/user-attachments/assets/857521df-24a8-4d44-99f7-08959220e13f" />

## Profile Page
<img width="1894" height="794" alt="Screenshot 2025-11-01 160236" src="https://github.com/user-attachments/assets/0381eca0-f17d-4e7c-b9c1-dd14ff1e14fe" />

## User Page
<img width="1492" height="453" alt="image" src="https://github.com/user-attachments/assets/394e82cf-bfc5-437f-800f-30cccf1fbfc9" />

## Form Validation
<img width="613" height="653" alt="Screenshot 2025-11-01 160629" src="https://github.com/user-attachments/assets/bc899909-c5ad-4e49-8913-395ec3f7b100" />






