const Recipe = require('../Models/recipe')

module.exports = {
    Query: {
        async recipe(_, {ID}) {
            return await Recipe.findById(ID)
        },
        async getRecipe(_, {amount}) {
            return await Recipe.find().sort({createdAt: -1}).limit(amount)
        }
    },
    Mutation: {
        async createRecipe(_, {recipeInput: {RecipeName, Description}}) {
            const createdRecipe = new Recipe ({
                RecipeName: RecipeName,
                Description: Description,
                thumpsUp: 0,
                thumpsDown: 0,
            })

            const res = await createdRecipe.save()
            console.log(res._doc)

            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteRecipe(_, {ID}) {
            const wasDeleted = (await Recipe.deleteOne({_id :ID})).deletedCount
            return wasDeleted
        },
        async editRecipe(_, {ID, recipeInput: {RecipeName, Description}}) {
            const wasEdited = (await Recipe.updateOne({_id: ID}, {RecipeName: RecipeName, Description: Description})).modifiedCount
            return wasEdited
        }
    }
}