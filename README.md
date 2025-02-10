# WorldWise Backend API

This is the backend API for the WorldWise application, built using Express.js and MongoDB. It provides endpoints for managing cities and user authentication.

## Live Repository
### [GitHub Repository](https://github.com/BESUFKADMEKONNEN/Worldwise-backend.git)

## Features
- User Authentication (Register/Login)
- CRUD operations for cities (Add, Read, Update, Delete)
- Token-based authentication using JWT
- Secure password hashing with bcrypt
- MongoDB database with Mongoose ODM

## Installation
To get started with the WorldWise Backend API, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/BESUFKADMEKONNEN/Worldwise-backend.git
```

### 2. Navigate to the project directory:
```bash
cd Worldwise-backend
```

### 3. Install dependencies:
Make sure you have Node.js installed. Then, run:
```bash
npm install
```

### 4. Environment Setup
Create a `.env` file in the root directory and add the following variables:
```
PORT=9000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Development
To start the development server, run:
```bash
npm run dev
```
**The server will run on `http://localhost:9000`.**

### 6. API Endpoints
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login and get a token
- **POST** `/api/cities` - Add a new city (Requires authentication)
- **GET** `/api/cities` - Get all cities
- **GET** `/api/cities/:id` - Get a single city by ID
- **PUT** `/api/cities/:id` - Update a city (Requires authentication)
- **DELETE** `/api/cities/:id` - Delete a city (Requires authentication)

## Notice
- You need **MongoDB** and **MongoDB Compass** installed to run the project locally.
- To use the embedded JSON file instead of MongoDB, run:
  ```bash
  npm run server
  ```

##. Usage
Use **Postman** or any API client to test the endpoints. Make sure to include the `Authorization: Bearer <token>` header for protected routes.

## License
This project is licensed under the ISC License.

## Author
**Besufkad Mekonnen**

