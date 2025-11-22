# Wanoura Studio

Wanoura is a creative studio crafting sonic identities for brands, creators, and storytellers. This is the official website codebase.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`app/`**: Next.js App Router pages and layouts.
- **`components/`**: React components.
- **`lib/`**: Utility functions, hooks, and configuration.
- **`public/`**: Static assets (images, fonts, etc.).

## Development Conventions

### Branding & Assets
- **Brand Name**: Always lowercase "**wanoura**".
- **Logos**: Use `next/image` for all logos.
  - Brand assets are in `/public/brand/`.
  - Client logos are in `/public/logos/`.
  - Ensure logos have explicit dimensions and `alt` text.
  - For dark backgrounds, use the `invert` class or a white version of the logo.

### Navigation & Configuration
- **Site Config**: Navigation links and client data are centralized in `lib/site-config.ts`.
  - Update `navLinks` to change the navbar menu.
  - Update `clients` to add/remove client logos.

### Styling & Animation
- **Tailwind CSS**: Used for styling.
- **Framer Motion**: Used for animations.
  - Keep animations subtle (e.g., simple fade-ins).
  - Use `whileInView` for scroll-triggered animations.

### Components
- **Section IDs**:
  - `#selected-work`: Portfolio section.
  - `#moving-pictures`: Video lightbox section.
  - `#contact`: Contact form.
- **Forms**: Use the `useFormStatus` hook in `lib/hooks/useFormStatus.ts` for form state management.

## Contributing

1.  Ensure all new components are responsive.
2.  Run `npm run lint` before pushing to catch errors.
3.  Follow the "wanoura" lowercase branding convention.
