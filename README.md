# Custom - Server ( Node JS app)
This is a server side application for custom-client created for learning purpose. This app connected to local mongodb instance.
Started app with Todo's management.
### Prerequisites
Softwares required : Mongodb, Node js and VS Code (or any editor)

## Installing dependencies

Before running this project, the dependencies should be installed.

Run this command from the root of the project:
- `npm install`

To run the app : 
- `node index.js`

----
### REST details:

## Create an todo
#### Request

```http
POST /api/todo HTTP/1.1
Host: localhost
Authorization: No Auth
```
#### Permissions

#### Fields

| Field          | Type     | Required  |
| -------------- | -------- | --------- |
| `taskName`     | `String` | `true`    |
| `taskDesc`     | `String` | `false`   |
| `taskPriority` | `Number` | `false`   |

#### Body Sample

```json
{
    "taskName":"Task Name",
    "taskDesc":"This is for example",
    "taskPriority":2
}
```

#### Response

```json
{
    "success": true,
    "id": "5fde31c0a275f0638c97c76b",
    "message": "Todo created!"
}
```

#### Status Codes

| Code  | Description  |
| ----- | ------------ |
| `201` | Todo created      |
| '404` | Todo not created  |


## Updating a todo
#### Request

```http
POST /api/todo/{id} HTTP/1.1
Host: localhost
Authorization: No Auth
```
#### Permissions

#### Fields

| Field          | Type     | Required  |
| -------------- | -------- | --------- |
| `taskName`     | `String` | `true`    |
| `taskDesc`     | `String` | `false`   |
| `taskPriority` | `Number` | `false`   |

#### Body Sample

```json
{
    "taskName": "Make an art as its festival time!",
    "taskDesc": "Do it on weekend",
    "taskPriority":1
}
```

#### Response

```json
{
    "success": true,
    "id": "5fde31c0a275f0638c97c76b",
    "data": {
        "_id": "5fde31c0a275f0638c97c76b",
        "taskName": "Make an art as its festival time!",
        "taskDesc": "Do it on weekend",
        "taskPriority":1,
        "createdAt": "2020-12-19T17:00:48.389Z",
        "updatedAt": "2020-12-19T17:16:21.749Z",
        "__v": 0
    },
    "message": "Movie Updated!"
}
```

#### Status Codes

| Code  | Description                 |
| ----- | --------------------------- |
| `200` | Todo Updated!               |
| `404` | Provide Todo data to update |
| `404` | Todo not found!             |
| `404` | Todo was not updated!       |


## Getting all todos
#### Request

```http
POST /api/todos HTTP/1.1
Host: localhost
Authorization: No Auth
```
#### Permissions


#### Response

```json
{
    "success": true,
    "data": [
        {
            "taskPriority": 0,
            "_id": "5fde31c0a275f0638c97c76b",
            "taskName": "Make an art as its festival time!",
            "taskDesc": "Do it on weekend",
            "createdAt": "2020-12-19T17:00:48.389Z",
            "updatedAt": "2020-12-19T17:16:21.749Z",
            "__v": 0
        },
        {
            "taskPriority": 0,
            "_id": "5fde35eba275f0638c97c76c",
            "taskName": "Work on Todo management",
            "taskDesc": "Do this to learn Node js with Mongodb",
            "createdAt": "2020-12-19T17:18:35.091Z",
            "updatedAt": "2020-12-19T17:18:35.091Z",
            "__v": 0
        }
    ]
}
```

#### Status Codes

| Code  | Description                 |
| ----- | --------------------------- |
| `200` | Success                     |
| `404` | No Todo's                   |
| `404` | Some error                  |


## Getting todo by Id
#### Request

```http
POST /api/todo/{id} HTTP/1.1
Host: localhost
Authorization: No Auth
```
#### Permissions


#### Response

```json
{
    "success": true,
    "data": {
        "taskPriority": 0,
        "_id": "5fde35eba275f0638c97c76c",
        "taskName": "Work on Todo management",
        "taskDesc": "Do this to learn Node js with Mongodb",
        "createdAt": "2020-12-19T17:18:35.091Z",
        "updatedAt": "2020-12-19T17:18:35.091Z",
        "__v": 0
    }
}
```

#### Status Codes

| Code  | Description                 |
| ----- | --------------------------- |
| `200` | Success                     |
| `404` | Todo not found              |
| `404` | Some error                  |



## Deleting todo by Id
#### Request

```http
POST /api/todo/{id} HTTP/1.1
Host: localhost
Authorization: No Auth
```
#### Permissions


#### Response

```json
{
    "success": true,
    "data": {
        "taskPriority": 0,
        "_id": "5fde31c0a275f0638c97c76b",
        "taskName": "Make an art as its festival time!",
        "taskDesc": "Do it on weekend",
        "createdAt": "2020-12-19T17:00:48.389Z",
        "updatedAt": "2020-12-19T17:16:21.749Z",
        "__v": 0
    }
}
```

#### Status Codes

| Code  | Description                 |
| ----- | --------------------------- |
| `200` | Deleted                     |
| `404` | Todo not found              |
| `404` | Some error                  |