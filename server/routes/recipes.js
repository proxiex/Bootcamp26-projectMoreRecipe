const express = require('express');
const recipeController = require('../controllers/recipe');

const router = express.Router();

// api/v1/users/signup
router.post('/', recipeController.addRecipe);

module.exports = router;