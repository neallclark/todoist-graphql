const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Label',

    fields: () => {
        return {
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            color: { type: GraphQLString }
        }
    }
});