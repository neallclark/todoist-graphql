const HttpsProxyAgent = require('https-proxy-agent');
const fetch = require('node-fetch');
const {
    URLSearchParams
} = require('url');

const baseUrl = 'https://todoist.com/api/v7/sync';

const addParams = function addParams(apiKey, resourceTypes) {
    const params = new URLSearchParams();
    params.append('token', apiKey);
    params.append('sync_token', '*');
    params.append('resource_types', `[${resourceTypes}]`);

    return params;
};

const fetchResources = function fetchResources(apiKey, resourceTypes) {
    const params = addParams(apiKey, resourceTypes);

    return fetch(baseUrl, {
            //agent: new HttpsProxyAgent('http://127.0.0.1:8888'),
            method: 'POST',
            body: params
        }).
        then(res => res.json());
};

module.exports = () => {
    return {
        getTasksByApiKey(apiKey) {
            return fetchResources(apiKey, '"items"');
        },

        getProjectsByApiKey(apiKey) {
            return fetchResources(apiKey, '"projects"');
        },

        getLabelsByApiKey(apiKey) {
            return fetchResources(apiKey, '"labels"');
        }
    };
}