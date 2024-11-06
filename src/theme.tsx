import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#757ce8',
            main: '#6f1cbf',
            dark: '#961fcd',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f66947',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: { // override typography font for headers to use Permanent Marker
        ...Object.fromEntries(
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(variant => [
                variant,
                {
                    fontFamily: 'Permanent Marker, cursive',
                    letterSpacing: 0,
                    marginBottom: '.25em',
                },
            ]),
        ),
    },
});

export default theme;
