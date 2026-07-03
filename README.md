# MERN App

A full-stack web application built with MongoDB, Express, React, and Node.js (MERN).

## Features

- User authentication (register/login)
- JWT-based authorization
- Create, read, update, and delete items
- Responsive UI with React
- RESTful API with Express
- MongoDB database
- Password hashing with bcryptjs

## Project Structure

```
mern-app/
├── server/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── index.js         # Server entry point
|   └── package.json     # Package.json
├── client/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── App.js       # Main App component
│   │   └── index.js     # React entry point
│   └── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mern-app
   ```

2. Install root dependencies:
   ```bash
   npm install
   ```

3. Install server dependencies:
   ```bash
   cd server
   npm install
   cd ..
   ```

4. Install client dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

5. Create a `.env` file in the `server` directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-app
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

## Running the Application

### Development Mode

Run both server and client concurrently:
```bash
npm run dev
```

Or run them separately:
- Server: `npm run server` (from root)
- Client: `npm run client` (from root)

### Production Mode

Build the client:
```bash
npm run build
```

Start the server:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/me` - Get current user (requires auth)

### Items
- `GET /api/items` - Get all items for current user (requires auth)
- `POST /api/items` - Create new item (requires auth)
- `PUT /api/items/:id` - Update item (requires auth)
- `DELETE /api/items/:id` - Delete item (requires auth)

## Technologies Used

- **Frontend**: React, React Router, Axios, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs
- **Other**: CORS, dotenv

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)

## License

MIT
