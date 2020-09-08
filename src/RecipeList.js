import React, { Component } from 'react'

import RecipeService from './services/recipe';

//import recipesData from '../data/recipes.json'

export default class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: this.getRecipes()
        }

        this.getRecipes = this.getRecipes.bind(this);
        this.filterRecipes = this.filterRecipes.bind(this);
    }

    getRecipes(){
        return RecipeService.prototype.getRecipes();
    }

    filterRecipes(filter){
        // this.setState({ recipes: RecipeService.prototype.filterRecipes(filter) }, () => {
        //     console.log(`state is ${this.state.recipes.length}`);
        // });
        this.setState({ recipes: RecipeService.prototype.filterRecipes(filter) } );
    }

    render(){
        return (
            <div>
                <input type='text' id='searchBox' onChange={(e) => this.filterRecipes(e.target.value)}/>
                <ul id="recipeList">
                    {this.state.recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
                </ul>
            </div>
        )
    }
}

