import {cleanup} from '@testing-library/react';

import RecipeDetail from '../RecipeDetail';
import RecipeService from '../services/recipe';

describe('<RecipeDetail />', () => {
    afterEach(cleanup);

    describe('get recipe', () => {
        it('should load an empty object if nothing found', () => {
            let recipeId = 0;
            let recipe = RecipeDetail.prototype.getRecipe(recipeId);
            expect(recipe).toBeUndefined();
        });

        it('should return a recipe if given a valid recipeId', () => {
            let recipeId = 1;
            let recipe = RecipeDetail.prototype.getRecipe(recipeId);
            expect(recipe.id).toEqual(1);

        })
    });

    describe('update recipe', () => {
        let originalRecipe = {
            "id": 1,
            "name": "test chicken recipe"
        };
        let newRecipe = {
            "id": 1,
            "name": "new test chicken"
        };

        afterEach(() => {
            RecipeService.prototype.updateRecipe(originalRecipe);
        });
        it('should change the property of the recipe', async () => {


            let recipe = RecipeDetail.prototype.getRecipe(originalRecipe.id);
            expect(recipe.name).toEqual(originalRecipe.name);
            expect(originalRecipe.name).not.toEqual(newRecipe.name);

            await RecipeDetail.prototype.updateRecipe(newRecipe);

            recipe = RecipeDetail.prototype.getRecipe(newRecipe.id);
            expect(recipe.name).toEqual(newRecipe.name);
        })
    });

    describe('delete recipe', () => {
        let originalRecipe = {
            "id": 1,
            "name": "test chicken recipe"
        };

        // afterAll( async () => {
        //     let deletedRecipe = {
        //         "id":2,
        //         "name":"test Delete recipe"
        //     }

        //     let result = await RecipeDetail.prototype.addRecipe(deletedRecipe);

        // });

        it('should return a false when the recipe to delete is not found', async () => {
            let recipeId = 0;
            let result = await RecipeDetail.prototype.deleteRecipe(recipeId);
            expect(result).toBeFalsy();
        });

        it('should remove recipe from the file and return true', async () => {
            let recipeId = 2;
            let result = await RecipeDetail.prototype.deleteRecipe(recipeId);
            expect(result).toBeTruthy();
            
            let recipeSearch = RecipeDetail.prototype.getRecipe(recipeId);
            expect(recipeSearch).toBeUndefined();
        });
    });

    // describe('add recipe', () => {

    //});
});