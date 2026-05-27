export default {
  MuiUseMediaQuery: {
    defaultProps: {
      noSsr: true,
    },
  },
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      body: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '*::-webkit-scrollbar': {
        width: 10,
        height: 10,
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(148,163,184,0.35)' : 'rgba(100,116,139,0.35)',
        borderRadius: 8,
        border: '2px solid transparent',
        backgroundClip: 'content-box',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(148,163,184,0.55)' : 'rgba(100,116,139,0.55)',
      },
      '*::-webkit-scrollbar-corner': {
        backgroundColor: 'transparent',
      },
    }),
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: 'none',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundImage: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
      sizeMedium: {
        height: '40px',
        paddingInline: '18px',
      },
      contained: ({ theme }) => ({
        boxShadow: 'none',
        '&:hover': {
          boxShadow: theme.shadows[2],
        },
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: 10,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.divider,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor:
            theme.palette.mode === 'dark' ? 'rgba(148,163,184,0.4)' : theme.palette.grey[400],
        },
      }),
    },
  },
  MuiFormControl: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        marginInline: theme.spacing(0.75),
        '&.Mui-selected': {
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(111,163,223,0.16)' : 'rgba(61,111,181,0.10)',
          '&:hover': {
            backgroundColor:
              theme.palette.mode === 'dark' ? 'rgba(111,163,223,0.24)' : 'rgba(61,111,181,0.16)',
          },
        },
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 12,
        marginTop: theme.spacing(0.5),
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[6],
      }),
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 12,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[6],
      }),
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      enterDelay: 500,
      enterNextDelay: 500,
    },
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[800],
        borderRadius: 8,
        fontSize: '0.75rem',
        paddingInline: 10,
        paddingBlock: 6,
      }),
      arrow: ({ theme }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[800],
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        '@media print': {
          color: theme.palette.alwaysDark.main,
        },
      }),
      head: ({ theme }) => ({
        fontWeight: 600,
        color: theme.palette.text.secondary,
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }),
    },
  },
};
