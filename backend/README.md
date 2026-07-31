<!-- @format -->

# Backend — product-Store

This document describes the backend service for the product-Store project (Express + MongoDB).

## Requirements

- Node.js 18+ and npm
- A MongoDB connection (URI)

## Environment variables

Create a `.env` file in the project root or the `backend` folder with at least:

MONGO_URI=<your-mongo-connection-string>
PORT=5000 # optional, defaults to 5000

Do NOT commit `.env` to version control.

## Install

From project root:

```bash
npm install
```

## Run (development)

From project root (project `package.json` includes a dev script that runs the backend):

```bash
npm run dev
```

Or run the backend directly from the `backend` folder:

```bash
node src/server.js
```

The server will start on `http://localhost:<PORT>` (default `5000`).

## Database connection

Connection is performed in `backend/src/config/db.js` and uses `process.env.MONGO_URI`.

## API Endpoints

Base path: `/api/products`

- GET `/api/products`
  - Description: List all products
  - Response: `{ success: true, data: [...] }`

- POST `/api/products`
  - Description: Create a product
  - Body JSON: `{ "name": string, "price": number, "image": string }`
  - Response: `{ success: true, data: { ... } }`

- PUT `/api/products/:id`
  - Description: Update a product by id
  - Body JSON: any fields to update
  - Response: `{ success: true, data: { ... } }` or `404` if not found

- DELETE `/api/products/:id`
  - Description: Delete a product by id
  - Response: `{ success: true, message: "Product deleted successfully" }`

## Notes & Troubleshooting

- The codebase uses ESM modules (`package.json` `type: "module"`). Import paths include explicit `.js` extensions (e.g. `./models/product.model.js`).
- If you see `Product is not defined` errors in the controller, ensure the model is imported as the default export:
  - `import Product from "../models/product.model.js";`
- Ensure `MONGO_URI` is set and valid. Connection logs print `MongoDB Connected: <host>` on success.

## Quick curl examples

List products:

```bash
curl http://localhost:5000/api/products
```

Create a product:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Example","price":9.99,"image":"/img.png"}'
```

Update a product:

```bash
curl -X PUT http://localhost:5000/api/products/<id> -H "Content-Type: application/json" -d '{"price":12.5}'
```

Delete a product:

```bash
curl -X DELETE http://localhost:5000/api/products/<id>
```

## Next steps

- Run the server and verify endpoints with the examples above.
- Add more endpoint docs or authentication if needed.
