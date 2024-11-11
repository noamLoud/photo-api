# Photo API

This project is a Node.js backend service built with TypeScript that provides APIs to:

1. **Fetch Photo URLs**: Retrieve a list of photo URLs from the Pixabay API.
2. **Create Orders**: Submit order details and store them in a MongoDB database.
3. **Get User Orders**: Retrieve all orders associated with a specific user.

## Endpoints

# Photo API

This project is a Node.js backend service built with TypeScript that provides APIs to:

1. **Fetch Photo URLs**: Retrieve a list of photo URLs from the Pixabay API while handling rate limits using caching.
2. **Create Orders**: Submit order details and store them in a MongoDB database.
3. **Get User Orders**: Retrieve all orders associated with a specific user.


## Endpoints

### 1. Fetch Photo URLs

- **Endpoint**: `GET /photos`
- **Description**: Retrieves a list of photo URLs from the Pixabay API.
- **Query Parameters**:
  - `count` (required): The number of photo URLs to fetch.
- **Notes**:
  - **Caching**: Implements caching to handle Pixabay's rate limits. If the same `count` is requested within the cache TTL, cached data will be returned.
  - **Error Handling**:
    - Missing `count` parameter returns `400 Bad Request`.
    - Invalid `count` value (non-positive integer) returns `400 Bad Request`.

### 2. Create an Order

- **Endpoint**: `POST /orders`
- **Description**: Creates a new order with the provided details and stores it in the database.
- **Request Body** (JSON):
  - `email`: `string` (required)
  - `fullName`: `string` (required)
  - `fullAddress`: `string` (required)
  - `imageUrls`: `string[]` (array of image URLs, required)
  - `frameColor`: `string` (required)
  - `user`: `string` (required)
- **Notes**:
  - **Validation**: All fields are required. The server will return `400 Bad Request` if any field is missing.
  - **Error Handling**:
    - Missing required fields return `400 Bad Request`.
    - Invalid data types return `400 Bad Request`.

### 3. Get User Orders

- **Endpoint**: `GET /orders/:user`
- **Description**: Retrieves all orders associated with a specific user.
- **URL Parameter**:
  - `user` (required): The username whose orders you want to retrieve.
- **Notes**:
  - **Error Handling**:
    - Missing `user` parameter returns `400 Bad Request`.
    - If the user has no orders, an empty array is returned.