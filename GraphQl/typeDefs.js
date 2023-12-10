const { gql } = require('apollo-server')

module.exports = gql`
type Recipe{
    RecipeName: String
    Description: String
    thumpsDown: Int
    thumpsUp: Int
}

input RecipeInput {
    RecipeName: String
    Description: String
}

type Query {
    recipe(ID: ID!): Recipe!
    getRecipe(amount: Int): [Recipe]
}

type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID :ID! ): Boolean 
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
}
`