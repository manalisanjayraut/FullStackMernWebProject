// import { createTheme } from '@mui/material/styles';
import { deepPurple, grey, lightBlue } from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: "#4460aa",
                    white: "#fff"
                },
                secondary: {
                    main:"#1e1e1e",
                    midNightBlue: "#D3D3D3"
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#D3D3D3",
                    white:"#fff"
                },
                secondary: {
                    main:"#1e1e1e",
                    midNightBlue: "#D3D3D3"
                },
                background: {
                    default: "#1e1e1e",
                },
                text: {
                    main:"#1e1e1e",
                    secondary:"#1e1e1e",
                },
            }),
    },
});
