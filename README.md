# API-Auth-server

## MochiDulce Creamery
Welcome to the MochiDulce Creamery API! This API serves as the backend for an ice cream shop with a loyalty program. It manages user authentication, ice cream flavors, and sales data, providing a seamless experience for both customers and administrators.

## Retailers: Qilin Xie and Adam Jimenez

Features: 
- User Authentication: Secure authentication mechanism using JSON Web Tokens (JWT) allows users to sign in securely and access protected endpoints.

- Ice Cream Flavors: Manage a wide variety of ice cream flavors, including their names, carbohydrate content, and types (e.g., vegan, sorbet, dairy).

- Sales Data: Track sales transactions, including quantity, price, date, and corresponding ice cream IDs, to analyze business performance and customer preferences.

## Database Tables:
The API utilizes the following database tables with their respective schemas:

Users: Stores user information such as username, password hash, and role.

IceCreams: Contains details about different ice cream flavors, including name, carbohydrate content, and type.

IceCreamSellings: Tracks sales transactions, including quantity, price, and date, along with references to the respective ice cream and user IDs involved.

## API Endpoints
The API provides endpoints for performing various operations:

Authentication Endpoints: /signup and /signin endpoints for user registration and authentication.

Ice Cream Endpoints: CRUD operations for managing ice cream flavors, including creation, retrieval, update, and deletion.

Sales Endpoints: Create and retrieve sales transactions, allowing administrators to track sales data effectively.


## UML diagram: ![alt text](image-4.png)

## Getting Started
To set up the API locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using npm install.
3. Set up your environment variables, including database connection details and JWT secret.
4. Run the server using npm start.

### Technologies Used
Node.js, Express.js, Sequelize ORM, PostgreSQL (or SQLite for local development). 
JSON Web Tokens (JWT) for authentication

## Contributing
Contributions are welcome! If you have any suggestions, bug fixes, or feature requests, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.





### POST with /Signup  to create a user.: ![alt text](image.png)
### POST with /Signin  to login a user and receive a token.: ![alt text](image-1.png)
### Get with /secret  should require a valid bearer token.: ![alt text](image-2.png)
### Get with /users should require a valid token and “delete” permissions.: ![alt text](image-3.png)


