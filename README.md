# ToDoList App


This is a simple Todo List application built with ReactJS, NodeJS, ExpressJS, Axios, and MongoDB.

Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Persistent storage using MongoDB


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/svvsaiteja/ToDoList.git
   ```

2. Navigate to the server directory and install server dependencies:

   ```bash
   cd ToDoList/Backend
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open a new terminal, navigate to the client directory, and install client dependencies:

   ```bash
   cd ToDoList/Frontend
   npm install
   ```

5. Start the client:

   ```bash
   npm start
   ```

6. Visit `http://localhost:3000` in your browser to use the ToDoList app.

## Usage

- Add tasks by typing in the input field and pressing "Enter".
- The task will be added to the list.
- Click on a edit button to edit its content.
- Click on the delete button to remove a task.

## API Endpoints

- `GET /tasks`: Get all tasks
- `POST /tasks`: Add a new task
- `PUT /tasks/:id`: Update a task
- `DELETE /tasks/:id`: Delete a task

## Technologies Used

- ReactJS
- NodeJS
- ExpressJS
- Axios
- MongoDB
```
