# Factorio RESTful API
## About

- RESTful Factorio API with full CRUD (Create, Read, Update, Delete) functionality for interacting with factorio game data.
- This project allowed me to learn how APIs work, how to set up routes and endpoints and interact with sql databases programmatically using HTTP methods.

### Features

- Full Create, Read, Update, Destroy (CRUD) functionality.
- Interacts with a SQL database which stores game data.
- Each entry has an incremented id.

### Planned additions

1. deprecate the `requesttype` column since all requests adding data will be POST requests.
2. integrate api keys.
3. Normalize data by making each column its own table to avoid `NULL` values in all other columns when adding to a column.

### Technologies used

- **Node.js**  
- **Express.js**  
- **SQL** AND **MySql Workbench**
- **Babel-node**  
- **Morgan**  
- **Dotenv**  
- **MySql2** 
- **Git Bash**  
- **VS Code**  
- **GitHub**
- **POSTMAN**

### **API documentation**

#### **OVERVIEW**

- Base URL: `http://localhost:3001/api/`
- items, fluids, enemies and terrains are the columns that stores the entries.
- Each column already has a dummy entry.
- Currently only 1 entry can be added or updated at a time.

##### Get all entries

A GET request sent to the url retrieves and logs all entries.
```json
[
    {
        "items": "test_item",
        "fluids": null,
        "enemies": null,
        "terrains": null,
        "requesttype": "POST",
        "id": 1
    },
    {
        "items": null,
        "fluids": "test_fluid",
        "enemies": null,
        "terrains": null,
        "requesttype": "POST",
        "id": 2
    },
    {
        "items": null,
        "fluids": null,
        "enemies": "test_enemy",
        "terrains": null,
        "requesttype": "POST",
        "id": 3
    },
    {
        "items": null,
        "fluids": null,
        "enemies": null,
        "terrains": "test_terrain",
        "requesttype": "POST",
        "id": 4
    }
]
```

Each entry will the fields: `items`, `fluids`, `enemies`, `terrains`, `requesttype` and `id`. Fields irrelevant to a specific entry will return `null`.

##### Get specific entries

A GET request sent to http://localhost:3001/api/id retrieves and logs that particular entry.
GET http://localhost:3001/api/4 logs:

```json [
    {
        "items": null,
        "fluids": null,
        "enemies": null,
        "terrains": "test_terrain",
        "requesttype": "POST",
        "id": 4
    }
]
```

##### Post entry

A POST request sent to the url with the response body containing a column and value will insert to the database like below:
```json {
"terrains": "test_terrain"
}
```

##### Update entry

A PUT request sent to http://localhost:3001/api/id with the response body containg the new column/value pair.

```json{
"terrains": "test_desert_terrain"
}
```
updated from:
```json{
"terrains": "test_terrain"
}
```

##### Delete entry

A DELETE request sent to http://localhost:3001/api/id deletes the entry from the database.

#### **Accessing the API**

Video demonstration at [Google Drive](https://drive.google.com/drive/folders/1WPtrEO1JeMeknNhpuNRsf7SndHTUCeuy)

