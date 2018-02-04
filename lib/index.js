const app = require('express')();

const ncSchema = require('../schema');
const graphqlHTTP = require('express-graphql');

const todoistApi = require('../todoistApi')();

app.use('/graphql', (req, res) => {
    graphqlHTTP({
        schema: ncSchema,
        graphiql: true,
        context: {
            todoistApi
        }
    })(req, res);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
