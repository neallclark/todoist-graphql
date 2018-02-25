# Todoist GraphQL Server

This hides a few calls to the Todoist API behind GraphQL. I use it with my todoist-reports project to create some extra charts and reports.

But mostly the motivation is to play around with a few new (to me) things such as GraphQL.

A version of this project has been deployed on Heroku using a free plan (So no guarantees that it will be up).
https://radiant-beyond-86884.herokuapp.com/graphql

# Getting Started
1. clone repo
2. node lib/index.js
3. open http://localhost:4000/graphql (or whatever port you set)
4. enter queries such as -
    
```
query MyTasks {
  allTasks(key: "YOUR TODOIST API KEY HERE") {
    id
    content
    completed
    priority
    dateString
    due
    dateAdded
    repeating
  }
}

query MyProjects {
  allProjects(key: "YOUR TODOIST API KEY HERE") {
    id
    name
    indent
    order
    deleted
    archived
    inbox
  }
}
```


