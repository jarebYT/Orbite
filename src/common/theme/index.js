import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import dimensions from './dimensions';
import components from './components';

const fontFamily = [
  '"Inter Variable"',
  'Inter',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
].join(',');

// Soft, low-opacity shadows tuned for a clean light/dark UI.
const shadowColor = (alpha) => `rgba(15, 23, 42, ${alpha})`;
const softShadows = [
  'none',
  `0 1px 2px ${shadowColor(0.06)}`,
  `0 1px 3px ${shadowColor(0.08)}, 0 1px 2px ${shadowColor(0.06)}`,
  `0 2px 6px ${shadowColor(0.08)}, 0 1px 2px ${shadowColor(0.06)}`,
  `0 4px 10px ${shadowColor(0.08)}, 0 2px 4px ${shadowColor(0.06)}`,
  ...Array.from(
    { length: 20 },
    (_, i) => `0 ${8 + i * 2}px ${24 + i * 3}px ${shadowColor(0.1 + Math.min(i, 8) * 0.01)}`,
  ),
];

export default (server, darkMode, direction) =>
  useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily,
          h1: { fontWeight: 600, letterSpacing: '-0.02em' },
          h2: { fontWeight: 600, letterSpacing: '-0.02em' },
          h3: { fontWeight: 600, letterSpacing: '-0.015em' },
          h4: { fontWeight: 600, letterSpacing: '-0.01em' },
          h5: { fontWeight: 600 },
          h6: { fontWeight: 600 },
          subtitle1: { fontWeight: 500 },
          subtitle2: { fontWeight: 600 },
          button: { fontWeight: 600, textTransform: 'none' },
        },
        shape: {
          borderRadius: 10,
        },
        shadows: softShadows,
        palette: palette(server, darkMode),
        direction,
        dimensions,
        components,
      }),
    [server, darkMode, direction],
  );
