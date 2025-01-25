# Manaable Test Project

A full-stack web application built with Laravel (Backend) and React + TypeScript (Frontend).

## Project Structure

```
manaable-test/
├── backend/         # Laravel backend application
├── frontend/        # React + TypeScript frontend application
├── docker/         # Docker configuration files
└── README.md       # This file
```

## Prerequisites

- Docker and Docker Compose
- Node.js (for frontend development)
- Composer (for PHP dependency management)

## Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/amitrjn/manaable-test.git
cd manaable-test
```

2. Set up backend environment:
```bash
cp .env.example .env
```

3. Configure your environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Update the database configuration in .env:
DB_HOST=db        # Use 'db' as host to connect to the Docker database service
DB_DATABASE=      # Your database name
DB_USERNAME=      # Your database username
DB_PASSWORD=      # Your database password
```

Note: Make sure to set secure credentials for your database configuration.

## Running with Docker

1. Start the Docker containers:
```bash
docker-compose up -d
```

This will start:
- Backend API server on http://localhost:8000
- MySQL database server

2. Install backend dependencies and set up the application:
```bash
docker-compose exec app composer install
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan migrate
```

## Frontend Development

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend development server will start on http://localhost:5173

## Port Configuration

- Backend API: http://localhost:8000
- Frontend Dev Server: http://localhost:5173
- MySQL Database: localhost:3306 (internal to Docker network)

## Docker Services

### Backend (app)
- Image: PHP 8.2 with Apache
- Port: 8000:80
- Environment: Laravel
- Dependencies managed through Composer

### Database (db)
- Image: MySQL 8.0
- Environment variables:
  - MYSQL_DATABASE: laravel
  - MYSQL_USER: laravel
  - MYSQL_PASSWORD: secret
  - MYSQL_ROOT_PASSWORD: secret

## Development Workflow

1. Backend changes:
   - Make changes in the Laravel application
   - Docker will automatically reflect the changes

2. Frontend changes:
   - Run the Vite development server
   - Changes will be reflected immediately through HMR

## Available Scripts

Backend:
- `docker-compose up -d`: Start all services
- `docker-compose down`: Stop all services
- `docker-compose exec app <command>`: Run commands in the backend container

Frontend:
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run lint -- --fix`: Auto-fix linting issues
- `npm run preview`: Preview production build

## Additional Information

- The backend uses Laravel 10.x
- The frontend uses React 18.x with TypeScript
- Frontend UI components are built with Radix UI
- Styling is done with Tailwind CSS
