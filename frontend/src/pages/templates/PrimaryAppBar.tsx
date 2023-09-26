import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const PrimaryAppBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, letterSpacing: "-0.5px" }}
                        >
                            Sign Up
                        </Typography>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, letterSpacing: "-0.5px" }}
                        >
                            Log In
                        </Typography>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default PrimaryAppBar;
