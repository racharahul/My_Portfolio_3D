# AI Assistant Prompt

Below is a comprehensive prompt that can be used when working with AI assistants on this project:

```
Before we proceed further, please take the time to thoroughly understand the current codebase. This is a modern, visually engaging personal portfolio built with React, Three.js, and React Three Fiber. The project features an interactive 3D word cloud for navigation, and a responsive, professional design.

## Project Structure

The project has six implemented pages:

1. Landing Page - http://localhost:3000/ (Interactive 3D word cloud navigation)
2. Home Page - http://localhost:3000/home (Main portfolio overview)
3. About Page - http://localhost:3000/about (Personal information and skills)
4. Contact Page - http://localhost:3000/contact (Contact form and social media links)
5. Projects Page - http://localhost:3000/projects (Featured projects with descriptions)
6. Skills Page - http://localhost:3000/skills (Detailed skills breakdown by category)

## Key Features

- Interactive 3D Navigation: A spherical word cloud powered by Three.js and React Three Fiber, allowing users to explore portfolio sections in an immersive way.
- Fixed Minimized 3D Model: When navigating away from the landing page, the 3D scene minimizes to a fixed circular icon in the corner, remaining visible and accessible while scrolling.
- Sectioned Info Cards: Below the hero, three cards highlight web development, 3D/interactive, and DevOps skills, each with icons and links.
- Responsive Design: The layout adapts seamlessly to all device sizes.
- Dynamic Routing: Navigation between pages is handled smoothly with React Router, without full page reloads.
- Project Cards: Featured projects are displayed with full-width banner images, descriptions, and links to GitHub and live demos.
- Mobile-Optimized Experience: Enhanced touch interaction for the 3D navigation model on mobile devices with specialized components and event handling.

## Recent Updates

- Added mobile-specific enhancements for 3D portfolio navigation:
  - Created mobile-specific enhancement components for touch interaction
  - Improved touch event handling for better mobile navigation
  - Enhanced scene container for mobile devices with proper touch areas
  - Optimized TrackballControls for touch interaction
  - Added mobile-specific CSS with proper pointer events and z-index handling
  - Fixed navigation issues for both desktop and mobile experiences
- Improved Contact page with vertically aligned social media links including both icons and text
- Fixed Projects page layout by correcting class naming inconsistencies and restructuring HTML
- Removed "Other Noteworthy Projects" section from Projects page for a cleaner layout
- Updated GitHub link for the "3D Interactive Portfolio" project
- Enhanced project descriptions and technology lists
- Redesigned project cards with full-width banner images
- Added semi-transparent overlay and blend modes to project images for better visual integration

## Navigation System

The navigation system is the most crucial part of this project. It requires a deep understanding of:

- How routes are defined and managed using React Router
- How transitions work between pages
- How the 3D navigation model integrates with the rest of the app
- How the minimized state of the 3D model is handled when navigating away from the landing page
- How mobile touch interactions are handled differently from desktop mouse interactions

Before proceeding with any improvements, a thorough understanding of the current codebase is essential, including running the project locally and exploring all pages, styles, and implementations to see how everything works together.

## Mobile Enhancement Components

The project includes specialized components for mobile devices:

- MobileEnhancer.js: Enhances touch areas for text elements and ensures proper event handling
- MobileEnhancer.css: Provides mobile-specific styles with appropriate touch-action and pointer-events settings

These components use data attributes and event listeners to create a seamless experience across both desktop and mobile devices.
```

This prompt provides a comprehensive overview of the project, highlighting its structure, features, recent updates, and the critical navigation system. It emphasizes the importance of understanding the codebase before making changes and provides specific guidance on the mobile enhancement components that have been implemented.