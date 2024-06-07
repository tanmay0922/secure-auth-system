# Secure Auth System

A secure user authentication system built with Node.js, Express, and MongoDB.

## Features

- **User Registration**: Users can create an account by providing necessary information (username, email, password). The system securely stores user data in a MongoDB database and hashes passwords using bcrypt.
- **User Login**: Users can log in using their credentials (username/email and password). Upon successful login, the backend generates a JSON Web Token (JWT) containing relevant user information.
- **Protected Routes**: Logged-in users can access protected routes. A session is maintained using JWT.
- **Data Validation**: Proper data validation is implemented on the server-side to ensure data integrity.
- **Security**: User input is sanitized to prevent vulnerabilities like Cross-Site Scripting (XSS).

## Endpoints

### User Registration

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "yourusername",
    "email": "youremail@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  - `201 Created`: User registered successfully.
  - `400 Bad Request`: Validation error (e.g., username already exists, missing fields).

### User Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "youremail@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  - `200 OK`: Login successful, returns a JWT token.
  - `400 Bad Request`: Validation error (e.g., incorrect password, missing fields).
  - `404 Not Found`: User not found.

### Protected Route

- **URL**: `/api/auth/protected-route`
- **Method**: `GET`
- **Headers**:
  - `x-auth-token`: JWT token
- **Response**:
  - `200 OK`: Access granted.
  - `401 Unauthorized`: Access denied, token missing or invalid.

## Project Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd your-repository
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Start the server**:
    ```bash
    nodemon app.js
    ```

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JWT
- Express-validator

## Security

- **XSS Protection**: Implemented using `express-validator` to sanitize user inputs and prevent Cross-Site Scripting (XSS) attacks.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## Contact

E-mail - [upadhyaytanmay23@gmail.com](mailto:upadhyaytanmay23@gmail.com)
