import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: "#009be5",
        },
        common: {
            white: "white",
        },
        secondary: {
            main: "#10A75F",
        },
    },
    spacing: 10,
});

export default theme;
