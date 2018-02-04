const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

const Task = require('./types/task');
const Project = require('./types/project');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',

    fields: () => ({
        allTasks: {
            type: new GraphQLList(Task),
            description: 'All the tasks',
            args: {
                 key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(obj, args, { todoistApi }) {
                return todoistApi.getTasksByApiKey(args.key).
                        then(result => result.items);
            }
        },
        allProjects: {
            type: new GraphQLList(Project),
            description: 'All the projects',
            args: {
                key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(obj, args, { todoistApi }) {
                return todoistApi.getProjectsByApiKey(args.key).
                       then(result => result.projects);
            }
        }
    }),
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType
})

module.exports = ncSchema