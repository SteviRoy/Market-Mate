const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create a Category class that extends Model from Sequelize
class Category extends Model {}

// Initialize the Category model with its properties and options
Category.init(
  {
    // Define the columns of the Category model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Provide the connection instance to the Category model
    sequelize,
    // Disable timestamps (createdAt and updatedAt)
    timestamps: false,
    // Prevent Sequelize from transforming table names into plural
    freezeTableName: true,
    // Enable underscored naming convention for automatically generated fields
    underscored: true,
    // Set the name of the model for Sequelize to use internally
    modelName: 'category',
  }
);

// Export the Category model for use in other parts of the application
module.exports = Category;
