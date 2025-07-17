# Travel Planner

A modern travel planning application built with Next.js, TypeScript, and Prisma.

## Features

- 🌍 Interactive globe view for destination selection
- 🗺️ Google Maps integration for location visualization
- 📝 Trip planning and itinerary management
- 🔐 NextAuth.js authentication with Prisma adapter
- 📱 Responsive design with modern UI components
- 🗃️ PostgreSQL database with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 15.3.3, React, TypeScript
- **Authentication**: NextAuth.js with Prisma adapter
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **Maps**: Google Maps API
- **File Upload**: UploadThing

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/student-sumit04/Travel-Planner.git
cd Travel-Planner
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Fill in your database URL, NextAuth secret, Google Maps API key, and other required variables.

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

Create a `.env` file with the following variables:

```env
DATABASE_URL="your-postgresql-connection-string"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

## Database Schema

The application uses the following main models:
- User (authentication)
- Account, Session, Authenticator (NextAuth.js)
- Trip (travel plans)
- Location (destinations and waypoints)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure build passes
5. Submit a pull request

## License

This project is licensed under the MIT License.
