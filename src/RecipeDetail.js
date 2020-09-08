import React, { Component } from 'react'

import RecipeService from './services/recipe';

export default class RecipeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getRecipe(recipeId){;
        return RecipeService.prototype.getRecipeById(recipeId);
    }

    getRecipeByName(recipeName){
        return RecipeService.prototype.filterRecipes(recipeName);
    }

    async updateRecipe(updatedRecipe){
        await RecipeService.prototype.updateRecipe(updatedRecipe);
    }

    async deleteRecipe(recipeId){
        if (RecipeService.prototype.getRecipeById(recipeId) !== undefined){
            try {
                await RecipeService.prototype.deleteRecipeById(recipeId);                
            } catch (error) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

    addRecipe(recipe){
        if (!recipe.id){
            recipe.id = -1;
        }
        try {
            RecipeService.prototype.addRecipe(recipe);
            return true;    
        } catch (error) {
            return false;
        }
        
        
    }
}