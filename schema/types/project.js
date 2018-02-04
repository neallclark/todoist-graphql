const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Project',

    fields: () => {
        return {
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            indent: {
                type: GraphQLInt,
                description: '1 is top-level, 4 is most indented'
            },
            order: {
                type: GraphQLInt,
                description: 'Projects order in the project list',
                resolve: project => project.item_order
            },
            deleted: {
                type: GraphQLBoolean,
                description: 'Is the project deleted',
                resolve: project => project.is_deleted
            },
            archived: {
                type: GraphQLBoolean,
                description: 'Is the project archived',
                resolve: project => project.is_archived
            },
            inbox: {
                type: GraphQLBoolean,
                description: 'Is this the inbox project',
                resolve: project => project.inbox_project
            }
        };
    }
});