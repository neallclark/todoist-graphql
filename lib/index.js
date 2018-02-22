const app = require('express')();

const DataLoader = require('dataloader');

const ncSchema = require('../schema');
const graphqlHTTP = require('express-graphql');

const todoistApi = require('../todoistApi')();

const cors = require('cors')

app.use(cors());
app.use('/graphql', (req, res) => {
    const loaders = {
        tasksByApiKey: new DataLoader(keys => todoistApi.getTasksByApiKeys(keys))
    };
    graphqlHTTP({
        schema: ncSchema,
        graphiql: true,
        context: {
            todoistApi,
            loaders
        }
    })(req, res);
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
