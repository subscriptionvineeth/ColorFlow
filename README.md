# ColorFlow - Interactive Color Palette Generator

<img src="public/assets/color-flow.png" alt="ColorFlow Logo" width="200">

ColorFlow is a modern, interactive color palette generator designed for designers, developers, and creatives. Create beautiful color schemes for your projects with an intuitive interface and powerful color manipulation tools.

## 🌟 Live Demo

Check out the live demo: [ColorFlow App](https://color-flow-rho.vercel.app/)

## ✨ Features

- **Interactive Color Picker**: Easily select and customize colors with a visual interface
- **Color Harmonies**: Generate complementary, analogous, triadic, and monochromatic color schemes
- **Predefined Color Palettes**: Choose from professionally designed color combinations
- **Accessibility Checking**: Ensure your colors meet WCAG contrast guidelines
- **Dark/Light Mode Toggle**: Preview your colors in both dark and light contexts
- **Export Options**: Export your color palettes as CSS variables or Tailwind config
- **Undo/Redo**: Experiment freely with full history support
- **Responsive Design**: Works beautifully on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ColorFlow.git
   cd ColorFlow
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [TinyColor2](https://github.com/bgrins/TinyColor) - Color manipulation
- [Lucide React](https://lucide.dev/) - Icons
- [TailwindCSS](https://tailwindcss.com/) - Styling

## 🎨 Usage Guide

### Basic Color Selection

1. Use the color pickers at the bottom of the screen to select your primary, secondary, accent, text, and background colors.
2. Watch the preview update in real-time to see how your colors work together.

### Color Harmonies

1. Click the palette icon to open the color harmonies menu.
2. Select from complementary, analogous, triadic, or monochromatic harmonies.
3. The system will automatically generate a cohesive palette based on your primary color.

### Accessibility

1. Click the eye icon to automatically adjust your colors for better accessibility.
2. The system will ensure sufficient contrast between text and background colors according to WCAG guidelines.

### Export

1. Click the "Export" button to open the export modal.
2. Choose between CSS Variables or Tailwind Config format.
3. Copy the code to use in your projects.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- Design inspiration from various color tools and design systems
- Icon library from [Lucide Icons](https://lucide.dev/)
- Color manipulation powered by [TinyColor2](https://github.com/bgrins/TinyColor)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/ColorFlow/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 