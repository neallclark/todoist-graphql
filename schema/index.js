const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

const _ = require('lodash');
const Task = require('./types/task');
const Project = require('./types/project');
const Label = require('./types/label');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',

    fields: () => ({
        allTasks: {
            type: new GraphQLList(Task),
            description: 'All the tasks',
            args: {
                 key: { type: new GraphQLNonNull(GraphQLString) }
            },
            //resolve: (obj, args, { loaders }) => {
                //return loaders.tasksByApiKey.load(args.key);
            //}
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
        },
        allLabels: {
            type: new GraphQLList(Label),
            description: 'All the labels',
            args: {
                key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(obj, args, { todoistApi }) {
                return todoistApi.getLabelsByApiKey(args.key).
                       then(result => result.labels);
            }
        },
        oldTasks: {
            type: new GraphQLList(Task),
            description: 'Old Tasks',
            args: {
                key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(obj, args, { todoistApi }) {
                return todoistApi.getTasksByApiKey(args.key).
                        then(result => result.items).
                        then(r => _.filter(r, function(o){ 
                            console.log(o);
                            return true;
                        }));
                        //then(items => items.filter(function(i){
                            //return i.age > 400 && !i.repeating;
                            //return i.age > 0;
                        //}));
            }
        }
    }),
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType
})

module.exports = ncSchema