import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#009D9D',
        },
        secondary: {
            main: '#009D9D00',
        },

    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    minWidth: "100px",
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    flexWrap: 'wrap',
                    alignItems: "center",
                    justifyContent: "center",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: "#666666",
                    padding: "0"
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#666666"
                },
                h5: {
                    textAlign: "center",
                    fontWeight: "900",
                },
                body1: {
                    margin: "15px 0",
                    fontSize: "18px",
                    fontWeight: "500",
                }
            },
        },
    },
    base: {
        padding: "10px",
    },
    flex: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    header: {
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        width: "100%",
        backgroundColor: '#FFFFFF',
        zIndex: 1
    },
    modal: {
        position: 'absolute',
        flexDirection: "column",
        alignItems: "center",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 375,
        bgcolor: 'background.paper',
        border: '2px solid #009D9D',
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "14px",
        p: 4,
    }
});