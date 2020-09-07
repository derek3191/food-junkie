import React from 'react'
import { fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

//import RecipeService from '../services/recipe';
import RecipeList from '../RecipeList';

describe('<RecipeList />', () => {
    afterEach(cleanup);

    describe('get recipes', () => {

        it('should return all recipes from dataset', () => {
            let recipes = RecipeList.prototype.getRecipes();
            //const recipes = RecipeList.prototype.getRecipes();
            expect(recipes.length).toBeGreaterThan(0);
        });

        it('should return nothing if there are no matching recipes', () => {
            let filter = 'longfilterthatwouldn\'tbeinhere';
            let recipes = RecipeList.prototype.filterRecipes(filter);
            expect(recipes.length).toEqual(0);
        });

        it('should return the number of matching recipes', () => {
            let filter = 'chicken';
            let recipes = RecipeList.prototype.filterRecipes(filter);
            expect(recipes.length).toBeGreaterThan(0);
            recipes.forEach(recipe => {
                expect(recipe.name).toContain(filter);
            });
        });
    });

});