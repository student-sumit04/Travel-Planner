# Travel Planner

A modern, full-stack travel planning application built with Next.js 15, TypeScript, and Prisma. Plan your trips, create detailed itineraries, and explore destinations with an interactive map interface.

## ✨ Features

- **Trip Management**: Create, edit, and organize your travel plans
- **Interactive Itinerary Builder**: Drag-and-drop interface for reordering destinations
- **Location Search & Mapping**: Integrated Google Maps for location discovery and visualization
- **Authentication**: Secure user authentication with NextAuth.js
- **File Uploads**: Upload trip-related images and documents
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Dynamic trip data with real-time synchronization

## 🚀 Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Google Maps API** - Interactive maps integration

### Backend & Database
- **Prisma 6.12.0** - Modern database toolkit
- **PostgreSQL** - Production database (Neon)
- **NextAuth.js** - Authentication solution with Prisma adapter

### Additional Tools
- **UploadThing** - File upload handling
- **ESLint** - Code linting and formatting
- **Sortable.js** - Drag-and-drop functionality

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (or Neon account)
- Google Maps API key
- GitHub account for authentication

### 1. Clone the Repository
```bash
git clone https://github.com/student-sumit04/Travel-Planner.git
cd Travel-Planner
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/travelplanner"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"

# GitHub OAuth (for authentication)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# UploadThing
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

### Vercel Environment Variables Setup
When deploying to Vercel, add these environment variables in your project settings:

**Required Variables:**
- `DATABASE_URL` - Your PostgreSQL connection string (Neon/Supabase)
- `NEXTAUTH_URL` - Your production URL (e.g., https://your-app.vercel.app)
- `NEXTAUTH_SECRET` - Random secret key for NextAuth.js
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key
- `GITHUB_CLIENT_ID` - GitHub OAuth App Client ID
- `GITHUB_CLIENT_SECRET` - GitHub OAuth App Client Secret
- `UPLOADTHING_SECRET` - UploadThing secret key
- `UPLOADTHING_APP_ID` - UploadThing application ID

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# (Optional) Seed the database
npx prisma db seed
```

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
travel-planner-app-main/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth.js configuration
│   │   ├── trips/         # Trip management endpoints
│   │   └── uploadthing/   # File upload handling
│   ├── globe/             # Global map view
│   ├── trips/             # Trip pages and management
│   └── layout.tsx         # Root layout component
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   ├── auth-button.tsx   # Authentication component
│   ├── map.tsx           # Google Maps integration
│   ├── Navbar.tsx        # Navigation component
│   └── trip-detail.tsx   # Trip detail views
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   ├── auth-actions.ts   # Authentication logic
│   ├── prisma.ts         # Database client
│   └── utils.ts          # Helper utilities
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Database schema definition
│   └── migrations/       # Database migration files
└── public/               # Static assets
```

## 🗄️ Database Schema

The application uses the following main models:

- **User**: User authentication and profile information
- **Account**: OAuth account linking
- **Session**: User session management
- **Authenticator**: WebAuthn/passkey support
- **Trip**: Travel plan information
- **Location**: Destination details with coordinates

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📱 Usage

1. **Sign In**: Authenticate using GitHub OAuth
2. **Create Trip**: Start planning by creating a new trip
3. **Add Locations**: Search and add destinations to your itinerary
4. **Organize Itinerary**: Drag and drop to reorder your travel sequence
5. **View on Map**: Visualize your trip route on the interactive map
6. **Upload Media**: Add photos and documents to your trip

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Prisma](https://prisma.io/) - Database toolkit
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Google Maps API](https://developers.google.com/maps) - Mapping service
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework



**Happy Traveling! ✈️**
