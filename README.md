# Mkorean WWN Clone

This is a clone of the Mkorean WWN website UI built with Next.js, Tailwind CSS, and shadcn/ui components.

## Project Structure

The project is structured as follows:

- `/src/app`: Contains the main application pages
  - `/dashboard`: Dashboard page
  - `/bot`: Bot management page
  - `/login`: Login page
  - `/signup`: Signup page
- `/src/components`: Reusable components
  - `Header.tsx`: Website header with logo and authentication links
  - `Navigation.tsx`: Main navigation with tabs
  - `BotStatus.tsx`: Status indicator showing if bot is running
  - `BotTabs.tsx`: Secondary navigation for bot pages
  - `BotOptions.tsx`: Options for creating or loading bots
  - `TourModal.tsx`: Welcome modal for new users
  - `RiskDisclaimer.tsx`: Disclaimer shown at the bottom of the page
  - `BotStats.tsx`: Statistics about bot performance
  - `RunStats.tsx`: Statistics about bot runs

## Features

- Responsive design that closely matches the original website
- Login and signup forms
- Bot management interface
- Dashboard with summary statistics
- Navigation between different sections

## Technologies Used

- Next.js 15
- React 18
- Tailwind CSS
- shadcn/ui components
- TypeScript

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

The project includes the following pages:

- Main Bot Management page
- Dashboard
- Login
- Signup

## Learn More

To learn more about Next.js, visit the [Next.js Documentation](https://nextjs.org/docs) and the [Learn Next.js](https://nextjs.org/learn) interactive tutorial.

## Deploy on Vercel

For easy deployment, consider using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
