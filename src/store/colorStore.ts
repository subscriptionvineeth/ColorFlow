import { create } from 'zustand';
import tinycolor from 'tinycolor2';
import { ColorScheme, ColorHistory, defaultColors, validateContrast } from '../types/colors';

interface ColorStore {
  colors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  history: ColorHistory;
  setColor: (key: keyof ColorStore['colors'], value: string) => void;
  randomizeColors: () => void;
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
      const newColors = {
        ...state.colors,
        primary: tinycolor.random().toHexString(),
        secondary: tinycolor.random().toHexString(),
        accent: tinycolor.random().toHexString(),
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