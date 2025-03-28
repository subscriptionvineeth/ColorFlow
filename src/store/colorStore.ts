import { create } from 'zustand';
import tinycolor from 'tinycolor2';
import { ColorScheme, ColorHistory, defaultColors, validateContrast } from '../types/colors';

interface ColorStore {
  colors: ColorScheme;
  history: ColorHistory;
  setColor: (key: keyof ColorStore['colors'], value: string) => void;
  randomizeColors: () => void;
  generateHarmony: (type: 'complementary' | 'analogous' | 'triadic' | 'monochromatic' | 'split-complementary' | 'tetradic') => void;
  ensureAccessibility: () => void;
  toggleDarkMode: () => void;
  undo: () => void;
  redo: () => void;
}

export const useColorStore = create<ColorStore>((set) => ({
  colors: defaultColors,
  history: { past: [], future: [] },

  setColor: (key, value) =>
    set((state) => {
      const newColors = { ...state.colors, [key]: value };
      return {
        colors: newColors,
        history: {
          past: [...state.history.past, state.colors],
          future: [],
        },
      };
    }),

  randomizeColors: () =>
    set((state) => {
      // Generate a more aesthetically pleasing random color palette
      const basePrimary = tinycolor.random();
      
      // Use hsv model for more controlled randomization
      const hsvPrimary = basePrimary.toHsv();
      
      // Secondary: slightly shift hue and adjust saturation/value
      const hsvSecondary = { ...hsvPrimary };
      hsvSecondary.h = (hsvPrimary.h + 30) % 360;
      hsvSecondary.s = Math.min(1, hsvPrimary.s * 0.9);
      
      // Accent: opposite side of color wheel but with adjusted saturation
      const hsvAccent = { ...hsvPrimary };
      hsvAccent.h = (hsvPrimary.h + 180) % 360;
      hsvAccent.s = Math.min(1, hsvPrimary.s * 1.1);
      
      // Convert back to hex
      const primary = basePrimary.toHexString();
      const secondary = tinycolor(hsvSecondary).toHexString();
      const accent = tinycolor(hsvAccent).toHexString();
      
      // Use either light or dark text/background based on contrast
      const isDark = tinycolor(primary).isDark();
      const text = isDark ? '#ffffff' : '#1a1a1a';
      const background = isDark ? '#1a1a1a' : '#ffffff';
      
      const newColors = {
        ...state.colors,
        primary,
        secondary,
        accent,
        text,
        background,
        isDarkMode: isDark
      };
      
      return {
        colors: newColors,
        history: {
          past: [...state.history.past, state.colors],
          future: [],
        },
      };
    }),
    
  generateHarmony: (type) =>
    set((state) => {
      const primaryColor = tinycolor(state.colors.primary);
      let secondary, accent;
      
      switch (type) {
        case 'complementary':
          secondary = primaryColor.clone().complement().toHexString();
          accent = primaryColor.clone().spin(210).toHexString();
          break;
          
        case 'analogous':
          const analogous = primaryColor.analogous(3);
          secondary = analogous[1].toHexString();
          accent = analogous[2].toHexString();
          break;
          
        case 'triadic':
          const triadic = primaryColor.triad();
          secondary = triadic[1].toHexString();
          accent = triadic[2].toHexString();
          break;
          
        case 'monochromatic':
          const monochromatic = primaryColor.monochromatic(3);
          secondary = monochromatic[1].toHexString();
          accent = monochromatic[2].toHexString();
          break;
          
        case 'split-complementary':
          // Get base complementary color then adjust
          const baseSplitComp = primaryColor.clone().complement();
          // Create two colors 30 degrees on either side of complementary
          secondary = baseSplitComp.clone().spin(30).toHexString();
          accent = baseSplitComp.clone().spin(-30).toHexString();
          break;
          
        case 'tetradic':
          // Tetradic is a rectangle in the color wheel - 4 colors total
          const tetradic = primaryColor.tetrad();
          secondary = tetradic[1].toHexString();
          accent = tetradic[2].toHexString();
          // We're not using the 4th color (tetradic[3]) since we only have 3 color slots
          break;
      }
      
      const newColors = {
        ...state.colors,
        secondary,
        accent,
      };
      
      return {
        colors: newColors,
        history: {
          past: [...state.history.past, state.colors],
          future: [],
        },
      };
    }),
    
  ensureAccessibility: () =>
    set((state) => {
      const primary = tinycolor(state.colors.primary);
      const background = tinycolor(state.colors.background);
      const text = tinycolor(state.colors.text);
      
      // Ensure text has good contrast with background
      let newText = text.clone();
      if (tinycolor.readability(background, text) < 4.5) {
        newText = background.isDark() ? tinycolor('#ffffff') : tinycolor('#1a1a1a');
      }
      
      // Ensure primary has good contrast with background
      let newPrimary = primary.clone();
      if (tinycolor.readability(background, primary) < 3) {
        // Adjust saturation and brightness to improve contrast
        const hsl = primary.toHsl();
        if (background.isDark()) {
          hsl.l = Math.min(1, hsl.l + 0.2);
        } else {
          hsl.l = Math.max(0, hsl.l - 0.2);
        }
        newPrimary = tinycolor(hsl);
      }
      
      const newColors = {
        ...state.colors,
        primary: newPrimary.toHexString(),
        text: newText.toHexString(),
      };
      
      return {
        colors: newColors,
        history: {
          past: [...state.history.past, state.colors],
          future: [],
        },
      };
    }),
    
  toggleDarkMode: () =>
    set((state) => {
      const isDarkMode = !state.colors.isDarkMode;
      
      // Invert background and text colors
      const background = isDarkMode ? '#1a1a1a' : '#ffffff';
      const text = isDarkMode ? '#ffffff' : '#1a1a1a';
      
      // Adjust the colors to be more suitable for dark/light mode
      const primary = state.colors.primary;
      const primaryColor = tinycolor(primary);
      
      // Adjust luminance for better visibility in the new mode
      let adjustedPrimary = primaryColor.clone();
      let adjustedSecondary = tinycolor(state.colors.secondary);
      let adjustedAccent = tinycolor(state.colors.accent);
      
      if (isDarkMode) {
        // In dark mode, increase brightness for better visibility
        adjustedPrimary = primaryColor.brighten(10);
        adjustedSecondary = adjustedSecondary.brighten(10);
        adjustedAccent = adjustedAccent.brighten(10);
      } else {
        // In light mode, darken bright colors for better visibility
        adjustedPrimary = primaryColor.darken(10);
        adjustedSecondary = adjustedSecondary.darken(10);
        adjustedAccent = adjustedAccent.darken(10);
      }
      
      const newColors = {
        ...state.colors,
        text,
        background,
        primary: adjustedPrimary.toHexString(),
        secondary: adjustedSecondary.toHexString(),
        accent: adjustedAccent.toHexString(),
        isDarkMode
      };
      
      return {
        colors: newColors,
        history: {
          past: [...state.history.past, state.colors],
          future: [],
        },
      };
    }),

  undo: () =>
    set((state) => {
      const previous = state.history.past[state.history.past.length - 1];
      if (!previous) return state;

      const newPast = state.history.past.slice(0, -1);
      return {
        colors: previous,
        history: {
          past: newPast,
          future: [state.colors, ...state.history.future],
        },
      };
    }),

  redo: () =>
    set((state) => {
      const next = state.history.future[0];
      if (!next) return state;

      const newFuture = state.history.future.slice(1);
      return {
        colors: next,
        history: {
          past: [...state.history.past, state.colors],
          future: newFuture,
        },
      };
    }),
}));