const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Task',

    fields: () => {
        return {
            id: { type: GraphQLString },
            //projectId: { type: GraphQLInt },
            content: { type: GraphQLString },
            completed: {
                type: GraphQLBoolean,
                resolve: task => task.checked
            },
            //labels //TODO: this needs to be a sub-type
            indent: {
                type: GraphQLInt,
                description: '1 is top-level 4 is most indented'
            },
            priority: {
                type: GraphQLInt,
                description: 'Priority 1 is the highest, 4 is the lowest'
            },
            dateString: {
                type: GraphQLString,
                description:
                'The date of the task in free form text, e.g. every day @ 10',
                resolve: task => task.date_string
            },
            due: {
                //Just leave as a string for now TODO: make better
                type: GraphQLString,
                description: 'The due date in UTC',
                resolve: task => task.due_date_utc
            },
            dateAdded: {
                type: GraphQLString,
                description: 'The date the task was added',
                resolve: task => task.date_added
            },
            repeating: {
                type: GraphQLBoolean,
                description: 'Is this task set to repeat',
                resolve: task => task.date_string !== null &&
                                 task.date_string.toLowerCase().
                                 includes('every')
            },
            age: {
                type: GraphQLInt,
                description: 'Age of task in days',
                resolve: task => {
                    var added = new Date(task.date_added);
                    var timeDiff = Math.abs(Date.now() - added.getTime());
                    return Math.ceil(timeDiff / (1000 * 3600 * 24));
                }
            },

        };
    }
});