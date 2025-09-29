# Portfolio Replica Application

## Overview

This is a full-stack web application replicating a developer portfolio website with a VS Code-inspired interface. The application features a dark theme, terminal-like aesthetics, and a professional developer-focused design. It's built using React with TypeScript on the frontend and Express.js on the backend, with PostgreSQL as the database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom VS Code-inspired color scheme
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Built-in storage interface with in-memory implementation

### Key Design Patterns
- **Component-based architecture**: Modular React components with clear separation of concerns
- **Repository pattern**: Storage interface abstraction for database operations
- **Custom hook pattern**: Reusable logic encapsulation (mobile detection, toast notifications)
- **Layout composition**: Window frame layout with header and sidebar components

## Key Components

### Frontend Components
1. **WindowFrame**: Main layout wrapper simulating a desktop application window
2. **Header**: Top navigation bar with app branding and window controls
3. **Sidebar**: Left navigation panel with VS Code-style file explorer aesthetics
4. **Pages**: Individual route components (Home, About, Experience, Projects, Contact, Blog)
5. **UI Library**: Complete set of accessible components from Shadcn/ui

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Registration**: Centralized API route management
3. **Storage Interface**: Abstracted database operations with in-memory fallback
4. **Vite Integration**: Development server setup with HMR support

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Extensible Design**: Schema designed for future expansion with additional entities

## Data Flow

1. **Client Requests**: React components make API calls through TanStack React Query
2. **Server Processing**: Express.js handles requests and delegates to storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Data flows back through the same chain with proper error handling
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon Database serverless
- **UI Framework**: Radix UI primitives for accessibility
- **Styling**: TailwindCSS for utility-first styling
- **Fonts**: Fira Mono for monospace aesthetic
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Development Experience**: Replit-specific tooling and error overlays

### Quality Assurance
- **Form Validation**: React Hook Form with Zod schema validation
- **Error Handling**: Comprehensive error boundaries and toast notifications
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server for production
3. **Output Structure**: Separate dist directories for client and server code

### Environment Configuration
- **Development**: Local development with Vite dev server and tsx for backend
- **Production**: Node.js server serving both API and static assets
- **Database**: Environment-based connection string configuration

### Deployment Targets
- **Replit**: Optimized for Replit hosting environment
- **Containerization**: Ready for Docker deployment with proper build steps
- **Static Hosting**: Frontend can be deployed separately to CDN if needed

### Performance Considerations
- **Code Splitting**: Vite handles automatic code splitting for optimal loading
- **Asset Optimization**: Automatic minification and compression in production
- **Database Connection**: Serverless-optimized connection pooling with Neon
- **Caching Strategy**: React Query provides intelligent client-side caching

## Recent Changes & User Customizations

### July 19, 2025 - Complete Portfolio Personalization
- **Personal Information**: Integrated Sai Panindra Pechetti's complete profile from resume
- **Contact Details**: Added real email, phone, LinkedIn, GitHub, and Instagram (@astrals_08)
- **Education Background**: Updated with UAE secondary education at Al Ain Juniors School
- **Professional Experience**: Added three real internships (Slash Mark, YBI Foundation, Data Pro)

### Interactive Features Enhancement
- **Projects Section**: Implemented 7 comprehensive projects with hover animations
  - Smart Traffic Management System (IoT + AI)
  - Character-Level GPT Model (PyTorch)
  - Amazon Clone (MERN Stack)
  - Netflix Clone (React + TMDB API)
  - AI Assistant Chatbot (NLP + WebSocket)
  - Gym & Fitness App (React Native)
  - Professional Portfolio Website
- **Experience Section**: Added collapsible cards with detailed responsibilities and tech stacks
- **Visual Design**: Gradient backgrounds, animated elements, and smooth transitions

### Technical Improvements
- **Color Scheme**: Applied exact VS Code colors (#0a0d12, #0d1117, #53b0fd)
- **Navbar Structure**: Fixed header with "S." logo and proper spacing
- **Responsive Design**: Enhanced mobile and tablet compatibility
- **Performance**: Optimized hover states and animations for smooth user experience

### User Preferences Documented
- **Communication Style**: Simple, everyday language preferred
- **Design Aesthetic**: VS Code-inspired dark theme with terminal feel
- **Content Approach**: Real projects and authentic personal information over placeholder content
- **Interactivity**: Hover effects, expandable sections, and visual feedback preferred