<!-- @format -->

# 🛍️ Product Store App

A full-stack MERN product management app with a clean Chakra UI interface, product CRUD operations, and REST API integration.

[![Stack](https://img.shields.io/badge/Stack-MERN-10b981)](https://www.mongodb.com/mern-stack)
[![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-38bdf8)](https://vitejs.dev/)
[![Backend](https://img.shields.io/badge/Backend-Express%20%2B%20Node-22c55e)](https://expressjs.com/)
[![State](https://img.shields.io/badge/State-Zustand-f59e0b)](https://zustand-demo.pmnd.rs/)

## ✨ Highlights

- Full product CRUD: create, read, update, and delete products.
- Responsive UI built with Chakra UI.
- Global state management with Zustand.
- Theme toggle (light and dark mode).
- MongoDB persistence with Mongoose.
- RESTful Express API.

## 🧰 Tech Stack

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

### Frontend

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Router](https://reactrouter.com/)

## 🚀 Quick Start

### 1) Install dependencies

From project root:

```bash
npm install
```

From frontend folder:

```bash
cd frontend
npm install
```

### 2) Configure environment variables

Create a `.env` file in project root with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 3) Run the app

Terminal 1 (backend from project root):

```bash
npm run dev
```

Terminal 2 (frontend):

```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173` and proxies `/api` requests to backend `http://localhost:5000`.

## 🔌 API Endpoints

Base path: `/api/products`

- `GET /api/products` - fetch all products
- `POST /api/products` - create product
- `PUT /api/products/:id` - update product
- `DELETE /api/products/:id` - delete product

## 📁 Project Structure

```text
product-Store/
├── backend/
│   ├── README.md
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
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── package.json
└── README.md
```

## 🎨 UI Notes

- Built with Chakra UI components.
- Includes a light/dark theme switch in the navbar.

## 📌 Live Demo

Add your deployed link here: `https://your-live-url`

## 🏷️ Version

`v2.0.0`
