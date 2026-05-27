const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

// Neutral slate scale + a calm, desaturated blue accent.
const slate = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e6e9ee',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#0b1220',
};

const accent = {
  light: '#3d6fb5',
  lightHover: '#335f9e',
  dark: '#6fa3df',
  darkHover: '#84b2e6',
};

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? slate[900] : '#f4f6f9',
    paper: darkMode ? slate[800] : '#ffffff',
  },
  primary: {
    main:
      validatedColor(server?.attributes?.colorPrimary) || (darkMode ? accent.dark : accent.light),
    contrastText: '#ffffff',
  },
  secondary: {
    main:
      validatedColor(server?.attributes?.colorSecondary) || (darkMode ? accent.dark : '#2c5f9e'),
    contrastText: '#ffffff',
  },
  success: {
    main: darkMode ? '#4cc08a' : '#2e9e6b',
  },
  warning: {
    main: darkMode ? '#e0b057' : '#cf941f',
  },
  error: {
    main: darkMode ? '#e57373' : '#d0544f',
  },
  info: {
    main: darkMode ? accent.dark : accent.light,
  },
  text: {
    primary: darkMode ? '#e2e8f0' : slate[800],
    secondary: darkMode ? slate[400] : slate[500],
  },
  divider: darkMode ? 'rgba(148, 163, 184, 0.18)' : slate[200],
  neutral: {
    main: darkMode ? slate[500] : slate[400],
  },
  geometry: {
    main: darkMode ? accent.dark : accent.light,
  },
  alwaysDark: {
    main: slate[900],
  },
});
