# Dr. Yetunde Abioye — Official Website

Personal and professional website for Dr. Yetunde Abioye, Veterinary Doctor, Incident Manager for the National Lassa Fever EOC, and Lead of the One Health Coordination Unit at the Nigeria Centre for Disease Control and Prevention (NCDC).

**Live site:** [yetundeabioye.com](https://yetundeabioye.com) <!-- update once domain is live -->

## About

This site showcases Dr. Abioye's professional background, speaking engagements, and insights on One Health, public health security, and zoonotic disease work. It includes a content management system so posts and events can be added without touching code.

## Tech Stack

- **React** + **Vite**: frontend framework and build tool
- **Tailwind CSS**: styling
- **React Router**: client-side routing
- **Firebase**: Authentication (admin login) and Firestore (blog posts, speaking engagements)
- **Cloudinary**: image hosting for uploaded content

## Features

- Home, About, Blog, Speaking, and Contact pages
- Admin dashboard (protected route) for managing blog posts and speaking engagements — full create, read, update, delete
- Individual blog post pages with dedicated URLs
- Responsive design across mobile, tablet, and desktop
- SEO metadata and structured data (schema.org) for search and AI discoverability

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A Firebase project with Authentication and Firestore enabled
- A Cloudinary account for image uploads

### Installation

```bash
git clone <repo-url>
cd dr-yetunde-website
npm install
