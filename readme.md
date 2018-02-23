# Todoist Dashboard

The ultimate aim is to create a dashboard that surfaces information not visible in the official UI.
But mostly the motivation is to play around with a few new (to me) things such as GraphQL.


# Todo:
- Create a todo list
- Complete everything on it

# Getting Started
1. clone repo
2. create a .env file and put the port you want it to run on (e.g. PORT=4000)
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


