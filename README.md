# Vehicle Sales Management System

A comprehensive vehicle sales management platform built with Next.js 15, TypeScript, and Tailwind CSS. This system provides complete CRUD operations for vehicle inventory, customer management, sales tracking, user management, supplier management and financial reporting.

## 🚀 Features

### Core Features

- **Vehicle Management**: Complete CRUD operations for vehicles with images, specifications, and status tracking
- **Customer Management**: Comprehensive customer database with purchase history and contact management
- **Inventory Control**: Real-time inventory tracking with advanced filtering and search capabilities
- **Sales Reporting**: Detailed earnings reports with charts, analytics, and export functionality
- **Dashboard**: Administrative dashboard with key metrics and visualizations
- **POS**: Point of sales for the vehicles
- **Supplier Management**: Easily manage, register, and view suppliers. Protected module, only for admin user
- **User Management**: Administrator level security and role Mmanagement for the users

### Technical Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Prisma ORM
- **Dark Theme**: Professional dark UI design based on Taskora Dark UI design system
- **Internationalization**: English and Spanish language support
- **JWT Authentication**: Secure authentication with automatic token refresh
- **Responsive Design**: Mobile-first responsive layout
- **Data Export**: Export reports to CSV format
- **RESTful API**: Complete API backend with proper error handling

## 🛠️ Technology Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: Zustand + React Query
- **Authentication**: NextAuth.js v4

### Backend

- **API**: RESTful API with Next.js API routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: JWT with bcrypt password hashing
- **Validation**: Zod schema validation

### Development Tools

- **Linting**: ESLint with Next.js configuration
- **Code Quality**: TypeScript strict mode
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vehicle-sales
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secret-jwt-key-here"
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```text
vehicle-sales/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── vehicles/      # Vehicle CRUD endpoints
│   │   │   ├── customers/     # Customer CRUD endpoints
│   │   │   ├── inventory/     # Inventory management
│   │   │   └── earnings-reports/ # Financial reports
│   │   ├── dashboard/         # Dashboard page
│   │   ├── vehicles/          # Vehicle management page
│   │   ├── customers/         # Customer management page
│   │   ├── inventory/         # Inventory control page
│   │   ├── earnings-reports/  # Earnings reports page
│   │   ├── signin/            # Sign in page
│   │   ├── signup/            # Sign up page
│   │   ├── privacy-policy/     # Privacy policy page
│   │   ├── terms/             # Terms of service page
│   │   ├── faqs/              # FAQs page
│   │   ├── about/             # About page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   └── LanguageSwitcher.tsx
│   ├── contexts/              # React contexts
│   │   ├── AuthContext.tsx   # Authentication context
│   │   └── I18nContext.tsx  # Internationalization context
│   ├── lib/                  # Utility libraries
│   │   ├── db.ts           # Database client
│   │   ├── utils.ts        # Utility functions
│   │   └── i18n.ts         # Internationalization config
│   └── hooks/               # Custom React hooks
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🗄️ Database Schema

The application uses the following main entities:

### User

- Authentication and user management
- Roles: USER, ADMIN
- JWT-based authentication

### Vehicle

- Vehicle inventory management
- Fields: make, model, year, price, mileage, status, images
- Status: AVAILABLE, SOLD, RESERVED

### Supplier

- Supplier management
- Fields: name, contactName, email, phone, address, category, taxId, notes
- Status: AVAILABLE, SOLD, RESERVED

### Customer

- Customer information management
- Fields: name, email, phone, address, notes
- Linked to sales history

### Sale

- Sales transaction records
- Links vehicles, customers, and users
- Fields: saleDate, salePrice, notes

## 🔐 Authentication

The system uses JWT-based authentication with the following features:

- Secure password hashing with bcrypt
- JWT tokens with 15-minute expiration
- Automatic token refresh on user activity
- Protected routes and API endpoints

## 🌐 Internationalization

The application supports multiple languages:

- **English** (default)
- **Spanish**
- Language switcher in the top-right corner
- Persistent language preference

## 🎨 Design System

The application uses a custom dark theme based on Taskora Dark UI:

- **Primary Colors**: Green accent (#4ADE80)
- **Background**: Dark (#0E1116)
- **Text**: High contrast white
- **Responsive**: Mobile-first design
- **Animations**: Smooth transitions and hover effects

## 📊 Available Pages

### Public Pages

- **Home** (`/`): Landing page with features overview
- **Sign In** (`/signin`): User authentication
- **Sign Up** (`/signup`): User registration
- **Privacy Policy** (`/privacy-policy`): Privacy information
- **Terms of Service** (`/terms`): Terms and conditions
- **FAQs** (`/faqs`): Frequently asked questions
- **About** (`/about`): About the platform and developer

### Protected Pages (Requires Authentication)

- **Dashboard** (`/dashboard`): Administrative overview with metrics
- **Vehicles** (`/vehicles`): Vehicle CRUD management
- **Inventory** (`/inventory`): Inventory control and sales history
- **Customers** (`/customers`): Customer management
- **Sales** (`/sales`): Point of Sale (POS)
- **Earnings Reports** (`/earnings-reports`): Financial reports and analytics
- **Suppliers** (`/suppliers`): Suppliers management
- **Users** (`/users`): User management

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:reset     # Reset database
npm run db:seed      # Run the seed to generate the admin user

# Code Quality
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Frontend Deployment

The application is optimized for deployment on platforms like:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- DigitalOcean App Platform

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
JWT_SECRET="your-production-jwt-secret"
NEXTAUTH_SECRET="your-production-nextauth-secret"
NEXTAUTH_URL="https://your-domain.com"
```

## 📱 Features Overview

### Vehicle Management

- Add, edit, delete vehicles
- Upload multiple images per vehicle
- Track vehicle status (Available, Sold, Reserved)
- Search and filter vehicles
- Detailed vehicle information

### Customer Management

- Complete customer profiles
- Contact information management
- Purchase history tracking
- Notes and custom fields
- Search and filter customers

### Inventory Control

- Real-time inventory status
- Advanced filtering options
- Sales history tracking
- Status change management
- Export inventory data

### Point of Sale (POS)

- Generate new vehicle sales
- View full sales history
- Advanced search by customer, vehicle, date, etc.
- Real-Time Validation - Check vehicle availability
- Displays vehicle, customer, and seller information

### Financial Reports

- Comprehensive earnings reports
- Interactive charts and graphs
- Date range filtering
- Revenue analytics
- Export to CSV
- Sales by vehicle make analysis

### Supplier Management

- Module available only to administrators
- Real-Time Search - Instant Filtering
- Relationship History - Vehicle View by Supplier
- Data Update - Complete Information Editing
- System Integration - Connection with existing vehicle module
- Bidirectional Relationships - Vehicles can see their suppliers

### User Management

- Module available only to administrators
- Role management
- Administrator level security
- Protection against self-elimination
- User status
- Administrative table
- Real-time search
- User state management
- Password update

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:

- Email: <support@vehicle-sales.com>
- Developer: [Ivin Dev](https://ivin-dev.com/)
- Documentation: Check the inline help and FAQs page

## 🎯 Future Enhancements

- Mobile app development (iOS/Android)
- Advanced AI-powered vehicle valuation
- Integration with automotive valuation APIs
- Multi-dealership support
- Advanced reporting and analytics
- Customer portal
- Inventory synchronization with external systems
- Automated marketing features
- Service and maintenance tracking

---

**Built with ❤️ by [Ivin Dev](https://ivin-dev.com/)**

*Professional software engineer with 8+ years of experience in full-stack development, AI integration, and automotive industry solutions.*
