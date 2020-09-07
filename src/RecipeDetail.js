import React, { Component } from 'react'

import RecipeService from './services/recipe';

export default class RecipeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getRecipe(recipeId){
        if (recipeId <= 0) return {};
        return RecipeService.prototype.getRecipeById(recipeId);
    }

    async updateRecipe(updatedRecipe){
        await RecipeService.prototype.updateRecipe(updatedRecipe);
    }
}