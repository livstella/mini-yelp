const express = require("express");
const router = express.Router();
const pool = require("../database");



const getRecipes = (req, res, next) => {
  pool
    .query('SELECT * FROM "recipe";')
    .then((data) => res.json(data.rows))
    .catch((e) => console.log(e));
};

const displayCategory = (req, res, next) => {
  pool
    .query('SELECT * FROM "category";')
    .then((data) => res.json(data.rows))
    .catch((e) => console.log(e));
};

const displayCuisine = (req, res, next) => {
  pool
    .query('SELECT * FROM "cuisine";')
    .then((data) => res.json(data.rows))
    .catch((e) => console.log(e));
};

const getIngredient = (req, res, next) => {
  pool
    .query('SELECT recipe_id, quantity, measurement_unit.name, ingredient.name FROM list_ingredients INNER JOIN recipe ON recipe.id = list_ingredients.recipe_id INNER JOIN measurement_unit ON measurement_unit.id=list_ingredients.unit_id INNER JOIN ingredient ON ingredient.id=list_ingredients.ingredient_id')
    .then((data) => res.json(data.rows))
    .catch((e) => console.log(e));
};

const ingredientResponse=[{"recipe_id":3,"quantity":"60","name":"water"},{"recipe_id":3,"quantity":"4.5","name":"flaxseed meal"},{"recipe_id":3,"quantity":"330","name":"peanutbutter"},{"recipe_id":3,"quantity":"0.5","name":"baking powder"}];
const recipeResponse=[{"id":1,"name":"test","category":1,"cuisine":1,"ingredient_list":1,"imageurl":"test test test test","description":"test test test test","slug":"test","instructions":"test test test test","published":false},{"id":2,"name":"IT IS WORKING","category":null,"cuisine":null,"ingredient_list":null,"imageurl":null,"description":null,"slug":null,"instructions":null,"published":null},{"id":3,"name":"4 ingredient peanutbutter blondies","category":5,"cuisine":3,"ingredient_list":null,"imageurl":"https://www.powerhungry.com/wp-content/uploads/2019/06/keto-peanut-butter-vegan-blondies-2-1.png","description":"Keto and vegan peanut butter blondies, made with only 4 ingredients! Oil-free, flourless, and grain-free, they have 125 calories each, and can be made paleo-friendly with almond butter.","slug":null,"instructions":"Preheat oven to 350F (175C). Line a 9-inch (22.5 cm) baking pan with foil or parchment paper; spray exposed interior sides with cooking spray.\r\nIn a small cup or dish, combine the water and flaxseed meal. Let stand 5 minutes to thicken.\r\nIn a medium bowl, whisk water-flax mixture, peanut butter, sugar substitute, and baking soda until completely blended and smooth. The batter will be quite stiff.\r\nScrape into prepared pan, smoothing the top (it will be very thick, so use your fingertips to press down).\r\nBake in the preheated oven for 30 to 35 minutes until deep golden brown, surface appears dry and center looks just set (they will get firm as they cool).\r\nCool completely in pan on a wire rack.\r\nRemove blondies from pan and cut into 16 squares.","published":true},{"id":4,"name":"4 ingredient peanutbutter blondies","category":5,"cuisine":6,"ingredient_list":null,"imageurl":"https://donalskehan.com/wp-content/uploads/Chocolate-Caramel-Treats-1.jpg","description":"This is not you average krispy bars! With only four ingredients, one of which is Mars Bars, you have a quick and easy dessert.","slug":null,"instructions":"Grease and line a 20 x 20cm\\/8\\\" x 8\\\" baking tin with parchment paper.\\r\\nPut the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water. Mixing with a whisk, melt until the mixture is smooth.\\r\\nPour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined. Press evenly into the prepare baking tin and set aside.\\r\\nMelt the milk chocolate in the microwave or over a pan of barely simmering water.\\r\\nSpread the melted chocolate over the rice krispie mixture and leave to set in a cool place. Once set slice into squares and serve!","published":true},{"id":5,"name":"Chocolate Caramel Crispy","category":5,"cuisine":6,"ingredient_list":null,"imageurl":"https://donalskehan.com/wp-content/uploads/Chocolate-Caramel-Treats-1.jpg","description":"This is not you average krispy bars! With only four ingredients, one of which is Mars Bars, you have a quick and easy dessert.","slug":null,"instructions":"Grease and line a 20 x 20cm\\/8\\\" x 8\\\" baking tin with parchment paper.\\r\\nPut the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water. Mixing with a whisk, melt until the mixture is smooth.\\r\\nPour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined. Press evenly into the prepare baking tin and set aside.\\r\\nMelt the milk chocolate in the microwave or over a pan of barely simmering water.\\r\\nSpread the melted chocolate over the rice krispie mixture and leave to set in a cool place. Once set slice into squares and serve!","published":true},{"id":6,"name":"Cherry tomato chickpea pasta","category":15,"cuisine":3,"ingredient_list":null,"imageurl":"https://www.powerhungry.com/wp-content/uploads/2020/03/cherry-tomato-chickpea-pasta-1.png","description":"Amazing, delicious and ready in 20 minutes: high protein cherry tomato chickpea pasta! It is also vegan, grain-free and made with only 5 ingredients. ","slug":null,"instructions":"Boil a large pot of water (salt the water, if desired). Add the chickpea pasta; cook until al dente, according to the package directions.\r\nWhile the pasta cooks, heat the oil in a large, heavy skillet set over medium-high heat until hot. Add the tomatoes.\r\nCook and stir the tomatoes for 4 to 6 minutes until the tomatoes begin to brown and burst.  Continue cooking and stirring for a minute longer.\r\nDrain the pasta; add to the skillet with the tomatoes, tossing to combine and coat the pasta.\r\nRemove the skillet from the heat and add the parsley and vegan Parmesan cheese; gently toss to combine. Season to taste with salt and pepper.\r\nEat and enjoy!","published":true}];

const recipeWithIngredients = (req, res, next) => {
  const perfectResponse = recipeResponse.map((recipe) => {
    recipe.ingredients = [];
    for (let index in ingredientResponse) {
      if (ingredientResponse[index].recipe_id === recipe.id) {
        delete ingredientResponse[index].recipe_id;
        recipe.ingredients.push(ingredientResponse[index]);
      }
    }
    return recipe;
  });

  res.json(perfectResponse);

}



/*const displayRestaurants = (req, res, next) => {
  pool
    .query('SELECT * FROM "restaurant";')
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
};

const displayRestaurantID = (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM restaurant WHERE id=$1;", [id])
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(404));
};

const postRestaurants = (req, res) => {
  const { name, adress } = req.body;
  pool
    .query("INSERT INTO restaurant (name, adress) VALUES ($1, $2);", [
      name,
      adress,
    ])
    .therowsn((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
};
*/
//router.get("/", displayRestaurants);
//router.get("/:id", displayRestaurantID);
//router.post("/", postRestaurants);

router.get("/", getRecipes);
router.get("/category", displayCategory);
router.get("/cuisine", displayCuisine);
router.get("/ingredients", getIngredient);
router.get("/everything", recipeWithIngredients);


module.exports = router;
