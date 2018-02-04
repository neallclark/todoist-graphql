# Todoist Dashboard

The ultimate aim is to create a dashboard that surfaces information not visible in the official UI.
But mostly the motivation is to play around with a few new (to me) things such as GraphQL.


# Todo:
- Create a todo list
- Complete everything on it

# Getting Started
1. clone repo
2. node lib/index.js
3. open http://localhost:3000/graphql
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


