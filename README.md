# Next Creator Rapor

A modern web application for creating and managing reports with role-based access control.

## Features

- Authentication with role-based access control (Root, Admin, User)
- Company management
- User management
- Custom report type creation
- Report generation and management
- PDF export functionality

## Prerequisites

- Node.js 18 or later
- Docker and Docker Compose
- PostgreSQL

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextcreaterapor.git
cd nextcreaterapor
```

2. Install dependencies:
```bash
npm install
```

3. Start the PostgreSQL database using Docker Compose:
```bash
docker-compose up -d
```

4. Initialize the database:
```bash
npm run db:push
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Default Login Credentials

- Email: root@example.com
- Password: admin123

## Project Structure

```
nextcreaterapor/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── companies/
│   │   ├── reports/
│   │   └── users/
│   ├── auth/
│   ├── companies/
│   ├── reports/
│   └── users/
├── components/
├── prisma/
├── public/
└── scripts/
```

## API Endpoints

### Authentication
- POST /api/auth/login - User login
- POST /api/auth/logout - User logout

### Companies
- GET /api/companies - Get all companies
- POST /api/companies - Create a new company

### Users
- GET /api/users - Get all users
- POST /api/users - Create a new user

### Reports
- GET /api/reports - Get all reports
- POST /api/reports - Create a new report

### Report Types
- GET /api/report-types - Get all report types
- POST /api/report-types - Create a new report type

## Technologies Used

- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- NextAuth.js
- Tailwind CSS
- Docker

## License

MIT
