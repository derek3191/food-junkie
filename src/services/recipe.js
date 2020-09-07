import recipesData from '../../data/recipes.json';
import fs from 'fs';

export default class RecipeService {
    getRecipes() {
        return recipesData['recipes'];
    }
    
    getRecipeById(recipeId){
        return recipesData['recipes'].find(({ id }) => id === recipeId);
    }

    filterRecipes(filter){
        return recipesData['recipes'].filter(recipe => recipe.name.includes(filter));
    }

    updateRecipe(updatedRecipe){
        let recipes = recipesData['recipes'];
        let newRecipes = [];

        recipes.forEach(recipe => {
            if (recipe.id === updatedRecipe.id){
                recipe = updatedRecipe;
            }
            newRecipes.push(recipe);
        });
        
        recipesData['recipes'] = newRecipes;

        fs.writeFile(`${__dirname}/../../data/recipes.json`, JSON.stringify(recipesData), (err) => {
           if (err) throw err;
        });
    }
}
