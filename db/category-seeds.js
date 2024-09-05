// Requires App-specific Modules
const Category = require("../models/Category");

// Defines Seed Data for Note Taker for Development
const categoryData = [
  {
    category_name: "HTML",
  },
  {
    category_name: "CSS",
  },
  {
    category_name: "Node.js",
  },
  {
    category_name: "Express",
  },
];

// Defines Function to seed Note Taker with initial Notes using Note Model
const seedCategories = () => Category.bulkCreate(categoryData);

// Exports Seed Function for use outside of App through Dev Initialization
module.exports = seedCategories;
