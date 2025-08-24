Contact Manager API

This is the backend for a Contact Manager application. It provides a RESTful API for managing contacts and users.

Description

This project is a simple, secure, and efficient backend for a contact manager application built with **Node.js** and **Express.js**. It allows users to register, log in, and perform **CRUD** (Create, Read, Update, Delete) operations on their contacts. User authentication is handled using **JSON Web Tokens (JWT)**, and passwords are encrypted using **bcrypt**. The application uses a **MongoDB** database to store user and contact information.


Features

-   User authentication: Secure user registration and login functionality.
-   Password encryption: Passwords are encrypted for security.
-   JWT authentication: Secure API endpoints with JSON Web Tokens.
-   CRUD operations for contacts: Users can create, read, update, and delete their contacts.
-   Protected routes: Only authenticated users can access contact-related endpoints.
-   Error handling: Centralized error handling for different types of errors.
-   Environment variables: Securely manage configuration using environment variables.

---

Technologies Used

-   Node.js: JavaScript runtime environment.
-   Express.js: Web framework for Node.js.
-   MongoDB: NoSQL database for storing data.
-   Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
-   JSON Web Token (JWT): For user authentication.
-   bcrypt: For password hashing.
-   dotenv: For managing environment variables.
-   Nodemon: For automatic server restarts during development.
-   express-async-handler: For handling asynchronous errors in Express.


Getting Started

Prerequisites

-   Node.js installed
-   npm or yarn installed
-   MongoDB installed and running

Installation and Setup

1.  Clone the repository:
    ```bash
    git clone [https://github.com/abhishekvh376-bit/contact-manager-backend-project.git](https://github.com/abhishekvh376-bit/contact-manager-backend-project.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd contact-manager-backend-project/backend
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the `backend` directory and add the following environment variables:
    ```
    PORT=5000
    CONNECTION_STRING=<YOUR_MONGODB_CONNECTION_STRING>
    ACCESS_TOKEN_SECRET=<YOUR_ACCESS_TOKEN_SECRET>
    ```
5.  Start the server:
    ```bash
    npm start
    ```

API Endpoints

User Routes

-   `POST /api/users/register`: Register a new user.
-   `POST /api/users/login`: Log in a user.
-   `GET /api/users/current`: Get the current user's information (protected).

Contact Routes

-   `GET /api/contacts`: Get all contacts for the logged-in user (protected).
-   `POST /api/contacts`: Create a new contact for the logged-in user (protected).
-   `GET /api/contacts/:id`: Get a specific contact by ID (protected).
-   `PUT /api/contacts/:id`: Update a specific contact by ID (protected).
-   `DELETE /api/contacts/:id`: Delete a specific contact by ID (protected).


Environment Variables

-   `PORT`: The port on which the server will run.
-   `CONNECTION_STRING`: The connection string for your MongoDB database.
-   `ACCESS_TOKEN_SECRET`: A secret key for signing JSON Web Tokens.


Error Handling

The application uses a custom error handler middleware to manage different types of errors. The following error codes are handled:

-   400 (Validation Error): For validation failures.
-   401 (Unauthorized): For unauthorized access.
-   403 (Forbidden): For forbidden access.
-   404 (Not Found): For resources that are not found.
-   500 (Server Error): For general server errors.

Author

- Abhishek V H
