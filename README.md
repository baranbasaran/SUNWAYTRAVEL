# SunwayTravel

SunwayTravel is a full-stack application that provides hotel information and booking features. It includes a **frontend** built with React and Tailwind CSS and a **backend** built with ASP.NET Core.

## Project Structure

```
SunwayTravel/
│
├── frontend/     # Frontend code (React + Tailwind CSS)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── backend/      # Backend code (ASP.NET Core)
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   ├── Repository/
│   ├── appsettings.json
│   └── Program.cs
│
└── README.md
```

---

## Features

### Frontend

- Built with **React**.
- Styled using **Tailwind CSS**.
- Fetches data from the backend via REST APIs.
- Provides a responsive user interface for browsing hotels.

### Backend

- Built with **ASP.NET Core**.
- Handles data fetching, validation, and error handling.
- REST API endpoints:
  - `GET /api/hotels` - Fetch all hotels.
  - `GET /api/hotels/{id}` - Fetch a specific hotel by ID.
- Includes middleware for global error handling.

---

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Restore dependencies:
   ```bash
   dotnet restore
   ```
3. Run the backend server:
   ```bash
   dotnet run
   ```
