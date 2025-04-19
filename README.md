# Modern Portfolio Website

A stunning, Google-inspired portfolio website built with HTML, Tailwind CSS, and TypeScript.

## Features

- 🌟 Modern, clean design inspired by Google's aesthetic
- 🧩 Fully responsive for all devices (mobile, tablet, desktop)
- 🎯 Floating navbar with active section highlighting
- 🌈 Beautiful animations and transitions
- 📱 Mobile-friendly navigation
- 🎨 Customizable color schemes
- 📊 Animated skill bars
- 📝 Working contact form
- 🚀 Performance optimized

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start development:
   ```
   npm start
   ```

This will:
- Watch for CSS changes and compile Tailwind CSS
- Watch for TypeScript changes and compile to JavaScript
- Open `index.html` in your browser to view the site

## Project Structure

- `index.html` - Main HTML file with all sections (Home, About, Projects, Skills, Contact)
- `src/styles.css` - Main CSS file with Tailwind directives and custom components
- `src/index.ts` - TypeScript for interactive elements (floating navbar, animations, form handling)
- `dist/` - Compiled CSS and JavaScript files
- `tailwind.config.js` - Tailwind CSS configuration with custom colors and fonts
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

## Customization

### Personal Information
1. Update your name, title, and bio in the Home and About sections
2. Add your own profile picture (replace the placeholder icon)
3. Update contact information and social media links

### Projects
1. Add your own projects with descriptions and technologies used
2. Replace the gradient placeholders with actual project screenshots
3. Add links to live demos or GitHub repositories

### Skills
1. Adjust the skill percentages to match your expertise
2. Add or remove skill categories as needed

### Design
1. Modify the color scheme in `tailwind.config.js`
2. Customize animations and transitions in `src/styles.css`
3. Adjust the layout and spacing to your preference

## Deployment

To deploy your portfolio:

1. Build the production version:
   ```
   npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify
   npx tsc
   ```

2. Upload the following files to your hosting provider:
   - `index.html`
   - `dist/` directory (contains styles.css and index.js)
   - Any images or assets you've added

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Tailwind CSS for styling
- TypeScript for type-safe JavaScript