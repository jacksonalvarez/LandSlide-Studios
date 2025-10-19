# LandSlide Studios - Company Website

A professional website for LandSlide Studios game development company, built
with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### 🎮 Company Information

- **Homepage** with company overview and services preview
- **About Us** page with mission, vision, and company story
- **Leadership Team** page with detailed founder profiles and organizational
  chart
- **Services** pages covering all game development offerings
- **Careers** page with contractor opportunities and application process
- **Contact** page with detailed contact information and inquiry form

### 🔐 Authentication System

- Secure login system with JWT tokens
- Role-based admin dashboard for CEO and CTO
- Protected routes with authentication middleware
- Secure password handling with bcrypt

### 📱 Responsive Design

- Mobile-first responsive design
- Professional UI with Tailwind CSS
- Modern gradient backgrounds and animations
- Optimized for all screen sizes

### 🚀 SEO Optimized

- Meta tags for all pages
- Structured data markup
- SEO-friendly URLs
- Performance optimized

## Leadership Team

### Thomas Maglietto - CEO & Co-Founder (⅔ Equity)

**Primary Responsibilities:**

- Product Lifecycle: Full game development lifecycle management
- Creative Direction: Vision, storytelling, systems design, gameplay experience
- Team Building: Assembling and leading development teams and contractors
- Product Presentation: MVP demos and creative presentations

### Jackson Alvarez - CTO & Co-Founder (⅓ Equity)

**Primary Responsibilities:**

- Business Operations: LLC management, invoicing, financial tooling, scheduling
- Technical Infrastructure: Website, backend services, APIs, automation tools
- Support for Product Teams: Technical tools and workflows for efficient
  development

## Services Offered

1. **Game Development** - Full-cycle development from concept to launch
2. **Game Design** - Creative direction and gameplay systems design
3. **Technical Infrastructure** - Backend systems and architecture
4. **Business Operations** - Complete operational support for studios
5. **MVP Development** - Rapid prototyping and minimum viable products
6. **Consulting** - Strategic guidance and technical expertise

## Technology Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Authentication:** JWT with Jose library
- **Password Hashing:** bcryptjs
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables: Create a `.env.local` file with:
   ```
   JWT_SECRET=your-super-secure-jwt-secret-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Authentication

#### Demo Credentials

- **Thomas (CEO):** thomas@landslidestudios.com / password123
- **Jackson (CTO):** jackson@landslidestudios.com / password123

#### Admin Dashboard Features

- Role-based access control
- Project management overview
- System administration tools
- Business operations monitoring

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.
