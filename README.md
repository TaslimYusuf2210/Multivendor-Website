# 🛍️ Padisquare Multi-Vendor Storefront
A high-performance, SEO-optimized storefront built with Next.js 14 and Tailwind CSS v4.

## 🚀 Deployment
The project is configured for seamless deployment on Vercel.

## 🛠️ Architectural Decisions

### 1. Framework: Next.js 14 (App Router)
I chose the App Router to take advantage of React Server Components (RSC). This allows for faster initial page loads by fetching vendor data on the server and reducing the JavaScript bundle sent to the client.

### 2. Styling: Tailwind CSS v4.1
Used for rapid UI development and a "Zero-Runtime" CSS footprint.
- **Theming**: Implemented the brand-specific color `#159047` using the new `@theme` block in CSS, ensuring consistency across both Light and Dark modes.
- **Responsiveness**: Utilized a mobile-first approach with grid layouts that adapt from 1 to 4 columns based on device width.

### 3. Data Strategy: Local JSON + ISR
To simulate a real backend, I used a structured JSON mock API. I implemented **Incremental Static Regeneration (ISR)** with a 60-second revalidation period, ensuring the site stays fast while allowing data updates without a full rebuild.

### 4. Logic Implementation
- **Sorting**: Handled via client-side state to allow instant filtering by Price (High/Low) and Newest Arrivals without page refreshes.
- **Pagination**: Limited to 8 products per page to optimize viewport performance and meet the technical requirements.
- **Search**: Implemented a search-triggered UI on the homepage to keep the landing page clean and focused on vendor discovery.

### 5. SEO & Metadata
Utilized the dynamic `generateMetadata` API to ensure every vendor page has a unique title and description, improving search engine crawlability for individual stores.

## 📁 Project Structure
- `/src/app`: Routes and Server Components.
- `/src/components`: Reusable UI (Atomic Design).
- `/src/data`: Mock JSON data and constants.
- `/src/assets`: Optimized assets and logos.

## ⚙️ Setup Instructions
1. **Clone the repo**: `git clone [your-repo-url]`
2. **Install dependencies**: `npm install`
3. **Run dev server**: `npm run dev`
