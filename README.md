# Portfolio Website

A modern, responsive single-page portfolio website built with React and TypeScript featuring a dynamic non-uniform grid layout.

## Features

- **Dynamic Grid Layout**: Non-uniform grid with varying card sizes (large vertical, medium horizontal, small square, and wide horizontal cards)
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes
- **Sticky Header**: Fixed navigation with smooth scrolling to sections
- **Hover Effects**: Subtle animations and hover effects for enhanced user experience
- **Modern Design**: Clean, professional aesthetic with gradient backgrounds
- **TypeScript**: Full type safety and better development experience

## Project Structure

```
src/
├── components/
│   ├── Header.tsx & Header.css
│   ├── ProjectGrid.tsx & ProjectGrid.css
│   ├── ProjectCard.tsx & ProjectCard.css
│   └── Footer.tsx & Footer.css
├── App.tsx & App.css
├── index.tsx & index.css
└── ...
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Grid Layout

The project features a dynamic grid layout with:
- 1 large vertical card (left side)
- 2 medium horizontal cards (top right, stacked)
- 2 small square cards (bottom right)
- 1 wide horizontal card (bottom, full width)

The layout automatically adapts for tablets and mobile devices while maintaining visual hierarchy.

## Customization

- Update project data in `src/components/ProjectGrid.tsx`
- Modify colors and gradients in `src/components/ProjectCard.css`
- Adjust responsive breakpoints in the respective CSS files
- Update contact information in `src/components/Footer.tsx`

## Technologies Used

- React 18
- TypeScript
- CSS Grid & Flexbox
- CSS Custom Properties
- Responsive Design Principles