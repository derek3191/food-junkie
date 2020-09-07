import React, { Component } from 'react'

import recipesData from '../data/recipes.json'

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
        //this.setState({recipes: [] });
        return recipesData['recipes'];

    }

    filterRecipes(filter){
        return recipesData['recipes'].filter(recipe => recipe.name.includes(filter));
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