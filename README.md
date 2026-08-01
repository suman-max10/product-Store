<!-- @format -->

# 🛍️ Product Store App

## 📖 Description

A dynamic, responsive full-stack web application built with the MERN stack (MongoDB, Express.js, React, and Node.js). This application serves as a complete product management system, allowing users to perform full CRUD (Create, Read, Update, Delete) operations on products through an interactive user interface.

This project was developed alongside a YouTube tutorial series, providing a practical guide to building a fully functional full-stack application, from setting up the development environment to deploying the final product.

## ✨ Features

- **Full CRUD Functionality:** Create, edit, and delete products seamlessly from both the UI and the database.
- **Interactive UI:** A clean and responsive interface built with React for a smooth user experience.
- **State Management:** Utilizes Zustand for efficient and scalable client-side state management.
- **Theme Toggle:** Change the website's color theme with a simple toggle button for a personalized experience.
- **RESTful API:** A well-structured API built with Express.js and Node.js to handle all backend logic and data persistence.
- **Database Integration:** MongoDB is used as the database to store and manage product data reliably.

## 🚀 Live Demo

Check out the deployed application here: [Insert Link to Your Deployed App Here]

## 🛠️ Technologies Used

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/) ODM)

### Frontend

- [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/) build tool)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management

### Other Tools

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting

## 📁 Project Structure

mern-store-app/
├── backend/ # Express.js server & API logic
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   └── product.controller.js
│       ├── models/
│       │   └── product.model.js
│       ├── routes/
│       │   └── product.route.js
│       └── server.js
├── frontend/ # React application
│ └── ...
├── .eslintrc.json # ESLint configuration
├── .gitignore
├── .prettierrc.json # Prettier configuration
├── package.json # Root package.json (likely for managing builds)
└── README.md

# In this Project I have used CHAKRA UI

-------> VERSION v2.0.0
