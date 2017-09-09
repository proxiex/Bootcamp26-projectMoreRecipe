import { Recipe } from '../../models/index';

const addRecipe = (req, res) => {
 const { recipeName, description, mealType, dishType, ingredients, preparations } = req.body
  console.log(recipeName, description, mealType, dishType, ingredients, preparations); 
  // console.log(req);
  // console.log(Recipe);

  if(!recipeName || !description || !mealType || !dishType || !ingredients || !preparations){
    return res.status(400).send("Enter All required field")
  }

   return Recipe.create({
        name: req.body.recipeName, 
        description: req.body.description,
        mealType: req.body.mealType,
        dishType: req.body.dishType,
        ingredients: req.body.ingredients,
        preparations: req.body.preparations,
      })
      .then(recipe => res.status(201).send(recipe))
      .catch(error => res.status(400).send(error));
  }


module.exports = addRecipe;

