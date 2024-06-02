
# Todo-List API Service Documentation

## Quickstart

```
  git clone https://github.com/s4nthiti/Todo-API-Service
  cd Todo-API-Service
  npm install
  npm run dev
```

### Available API

#### Get All
```http
GET /api/todos
```

#### Get by ID
```http
GET /api/todos/:id
```

#### Create
```http
POST /api/todos/create
```
Content-Type: application/json
| Body | Type | Description |
| :--- | :--- | :--- |
| `task` | `string` | **Required**. Your task |

#### Update
```http
PUT /api/todos/:id
```
Content-Type: application/json
| Body | Type | Description |
| :--- | :--- | :--- |
| `task` | `string` | **Optional**. Your task |
| `completed` | `boolean` | **Optional**. Task complete status |

#### Delete
```http
DELETE /api/todos/:id
```
