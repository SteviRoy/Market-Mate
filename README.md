# Market Mate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is an Express.js API with Sequelize ORM to interact with a MySQL database. The API allows an internet retail company to manage their e-commerce website and perform CRUD operations on products, categories, and tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

Please follow these simple steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Create a `.env` file in the root directory and add your MySQL credentials (DB_ecommerce_db, DB_USER, and DB_PASSWORD).
4. Run the `schema.sql` file in the `db` folder using MySQL shell or another SQL client to create the `ecommerce_db` database.
5. Run `node seeds/index.js` to seed the database with sample data.
6. Start the server by running `npm start`.

## Usage

Use a REST client like Insomnia or Postman to test the API endpoints for categories, products, and tags. The available endpoints are:

1. GET, POST, PUT, and DELETE routes for categories: `/api/categories`
2. GET, POST, PUT, and DELETE routes for products: `/api/products`
3. GET, POST, PUT, and DELETE routes for tags: `/api/tags`

## Contributions

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them to your branch.
4. Create a pull request describing your changes and submit it to the main repository.

## Credits

This project was Created by Columbia Engineering Coding Bootcamp and further developed by Stevi P. Roy.

## Tests

To test the API endpoints, follow the usage instructions and use a REST client like Insomnia or Postman to send requests to the API. Ensure that you can successfully create, read, update, and delete data for categories, products, and tags.

For a more comprehensive test suite, you can create unit tests using a testing framework like Jest or Mocha.

## License

This project is licensed under the MIT license.

## Questions

If you have any questions, please feel free to reach out to me via email (Stevi.P.Roy@gmail.com) or visit my [GitHub profile](https://github.com/SteviRoy).