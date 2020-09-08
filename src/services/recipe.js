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

    async updateRecipe(updatedRecipe){
        let recipes = recipesData['recipes'];
        let newRecipes = [];

        recipes.forEach(recipe => {
            if (recipe.id === updatedRecipe.id){
                recipe = updatedRecipe;
            }
            newRecipes.push(recipe);
        });
        
        recipesData['recipes'] = newRecipes;

        await this.writeToFile(recipesData);
    }

    async deleteRecipeById(recipeId){
        let recipes = recipesData['recipes'];
        let newRecipes = [];

        newRecipes.push(...recipes.filter(recipe => recipe.id !== recipeId));

        recipesData['recipes'] = newRecipes;

        await this.writeToFile(recipesData);
    }

    async addRecipe(recipe){
        let recipes = recipesData['recipes'];
        
        recipes.push(recipe);

        recipesData['recipes'] = recipes;

        await this.writeToFile(recipesData);
    }

    async writeToFile(data){
        fs.writeFile(`${__dirname}/../../data/recipes.json`, JSON.stringify(data), (err) => {
            if (err) throw err;
        });
    }
}
