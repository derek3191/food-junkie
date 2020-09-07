import React, { Component } from 'react'

import RecipeService from './services/recipe';

//import recipesData from '../data/recipes.json'

export default class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }

        this.getRecipes = this.getRecipes.bind(this);
        this.filterRecipes = this.filterRecipes.bind(this);
    }

    getRecipes(){
        return RecipeService.prototype.getRecipes();
    }

    filterRecipes(filter){
        return RecipeService.prototype.filterRecipes(filter);
    }

    render(){
        return (
            <div>
               <h1>Recipe List</h1>
            </div>
        )
    }
}

//export default class RecipeList {}