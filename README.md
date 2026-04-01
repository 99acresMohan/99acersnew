# 99Acers - Real Estate Website Clone

A modern real estate website clone built with Next.js, TypeScript, and Tailwind CSS. This project replicates the functionality of popular real estate platforms like 99acres.com, featuring property listings, search functionality, and MongoDB integration for persistent data storage.

## Features

- ✅ **Property Listings**: Display properties with images, prices, and details
- ✅ **Post Properties**: Submit new properties via form
- ✅ **Search & Filter**: Filter by status (buy/rent/sell) and type (apartment/house/land)
- ✅ **MongoDB Integration**: Persistent data storage with fallback cache
- ✅ **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- ✅ **TypeScript**: Type-safe development

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- MongoDB Atlas account (optional - app works with cache fallback)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/99acers.git
cd 99acers
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with MongoDB credentials:
```bash
MONGODB_URI=mongodb+srv://[username]:[password]@[cluster].mongodb.net/99acersnew?retryWrites=true&w=majority&appName=Cluster0
MONGODB_DB=99acersnew
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js App Router
  - `api/` - API routes (properties CRUD, seed)
  - `components/` - Reusable UI components
  - `services/` - Service functions for API calls
  - `data/` - Static data
  - `buy/`, `rent/`, `sell/`, `post/`, `agents/` - Page routes
- `lib/` - Utilities (MongoDB connection, property cache)
- `public/` - Static assets

## Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Home - all properties |
| `/buy` | Buy properties |
| `/rent` | Rent properties |
| `/sell` | Sell properties |
| `/post` | Post new property |
| `/agents` | Real estate agents |
| `/api/properties` | GET/POST properties API |
| `/api/seed` | Populate sample data (requires DB) |

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS
- **MongoDB** - NoSQL database (Atlas)
- **ESLint** - Code linting

## Database

### MongoDB Connection

The app connects to MongoDB Atlas using `lib/mongodb.ts` with:
- Connection pooling for development
- Automatic retry on connection timeout
- Fallback in-memory cache when DB is unavailable

### Sample Data

Seed the database with sample properties:
```bash
curl http://localhost:3000/api/seed
```

## Testing Flow

1. **Post a property**: Go to `/post` and fill the form
2. **View listings**: Check `/buy`, `/rent`, `/sell` pages
3. **API test**: Call `/api/properties?status=sell&type=apartment`

## Deployment

Deploy to [Vercel](https://vercel.com):

```bash
vercel
```

Or any Node.js hosting with environment variables configured.

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, feel free to reach out!
