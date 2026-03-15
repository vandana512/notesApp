# 📝 Backend CRUD Notes App

A simple backend application that allows users to **Create, Read, Update, and Delete (CRUD)** notes through RESTful APIs.  
This project was built to practice **backend development fundamentals**, including server setup, routing, database operations, and API testing.

---

## 🚀 Features

- Create a new note
- Get all notes
- Get a single note by ID
- Update an existing note
- Delete a note

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB / Mongoose
- Postman (for API testing)

---

## ⚙️ Installation

1. Clone the repository

```
git clone https://github.com/your-username/backend-crud-notes-app.git
```

2. Navigate to the project folder

```
cd backend-crud-notes-app
```

3. Install dependencies

```
npm install
```

4. Start the server

```
node server.js
```


---

## 🔌 API Endpoints

### Create Note

POST /api/notes


### Get All Notes

GET /api/notes


### Get Note by ID

GET /api/notes/:id


### Update Note

PUT /api/notes/:id


### Delete Note

DELETE /api/notes/:id


---

## 📬 Example Request Body
```
{
"title": "My First Note",
"content": "This is a sample note."
}
```

---

## 🧪 API Testing

You can test the endpoints using:

- Postman
- Thunder Client
- cURL

---
