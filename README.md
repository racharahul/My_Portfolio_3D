# Interactive 3D Portfolio

This project is a modern, visually engaging personal portfolio built with React, Three.js, and React Three Fiber. It features an interactive 3D word cloud for navigation, a bold hero section with a background image, and a responsive, professional design.

## Project Overview

This is a modern, visually engaging personal portfolio built with React, Three.js, and React Three Fiber. The project features an interactive 3D word cloud for navigation, and a responsive, professional design.

## Key Features

- **Interactive 3D Navigation:** A spherical word cloud powered by Three.js and React Three Fiber, allowing users to explore portfolio sections in an immersive way.
- **Fixed Minimized 3D Model:** When navigating away from the landing page, the 3D scene minimizes to a fixed circular icon in the corner, remaining visible and accessible while scrolling.
- **Bold Hero Section:** The landing page features a large background image with prominent, shadowed text and a clear call-to-action, providing an epic first impression.
- **Sectioned Info Cards:** Below the hero, three cards highlight web development, 3D/interactive, and DevOps skills, each with icons and links.
- **Responsive Design:** The layout adapts seamlessly to all device sizes.
- **Dynamic Routing:** Navigation between pages is handled smoothly with React Router, without full page reloads.

## Technologies Used

- **React**
- **Three.js**
- **React Three Fiber**
- **React Three Drei**
- **React Router**
- **Modern CSS**

## Navigation System

The navigation system is the most crucial part of this project. It requires a deep understanding of:

- How routes are defined and managed using React Router
- How transitions work between pages
- How the 3D navigation model integrates with the rest of the app
- How the minimized state of the 3D model is handled when navigating away from the landing page

## Getting Started

To run the project locally:

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your_username_/your_project_name.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Recent Updates

### July 2025 Updates
- Fixed Vercel build failure (error code 126):
  - Added missing `manifest.json` and `favicon.ico` files to the public directory
  - Updated navigation approach in `MobileEnhancer.js` to use History API instead of direct location changes
  - Added configuration files (`.nvmrc`, `.npmrc`, `.env`, `.env.production`, `.vercelignore`)
  - Updated Vercel configuration in `vercel.json` for more reliable builds
  - Improved compatibility with React Router for better navigation
- Enhanced navigation system for better cross-device experience:
  - Modified click and touch handlers to ensure consistent behavior
  - Updated `Scene` component to allow clicks anywhere on the minimized 3D model to navigate to home
  - Improved mobile touch interaction for the 3D model

### Previous Updates
- Added mobile-specific enhancements for 3D portfolio navigation:
  - Created mobile-specific enhancement components for touch interaction
  - Improved touch event handling for better mobile navigation
  - Enhanced scene container for mobile devices with proper touch areas
  - Optimized TrackballControls for touch interaction
  - Added mobile-specific CSS with proper pointer events and z-index handling
  - Fixed navigation issues for both desktop and mobile experiences
- Fixed 3D model positioning: now properly fixed in bottom-right corner when minimized
- Implemented comprehensive inline styling for the 3D scene container
- Added hover effects and responsive sizing for the minimized 3D model
- Improved z-index handling to ensure the 3D model stays on top of other elements
- Hero section redesigned: left-aligned, direct text on image, improved readability
- Enhanced responsiveness and visual polish across all sections
- Updated feature cards and navigation links
- Improved Contact page with vertically aligned social media links including both icons and text
- Fixed Projects page layout by correcting class naming inconsistencies and restructuring HTML
- Removed "Other Noteworthy Projects" section from Projects page for a cleaner layout
- Updated GitHub link for the "3D Interactive Portfolio" project
- Enhanced project descriptions and technology lists
- Redesigned project cards with full-width banner images
- Added semi-transparent overlay and blend modes to project images for better visual integration
- Reorganized project content flow for improved readability

## Future Plans

- Add more projects and detailed content
- Introduce additional animations and transitions
- Further optimize 3D performance

## Project Structure

The project has six implemented pages:

1. Landing Page - http://localhost:3000/ (Interactive 3D word cloud navigation)
2. Home Page - http://localhost:3000/home (Main portfolio overview)
3. About Page - http://localhost:3000/about (Personal information and skills)
4. Contact Page - http://localhost:3000/contact (Contact form and social media links)
5. Projects Page - http://localhost:3000/projects (Featured projects with descriptions)
6. Skills Page - http://localhost:3000/skills (Detailed skills breakdown by category)

## Contributing

Contributions are welcome! Please fork the repo, create a feature branch, and submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for details.

## AI Assistant Integration

This project includes an [AI Assistant Prompt](./AI_Assistant_Prompt.md) file that can be used when working with AI assistants on this project. It provides a comprehensive overview of the project structure, features, and recent updates to help AI assistants understand the codebase quickly.

## Contact

Rahul - [your_email@example.com](mailto:your_email@example.com)

Project Link: [https://github.com/your_username_/your_project_name](https://github.com/your_username_/your_project_name)