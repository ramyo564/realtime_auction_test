import { Box, CssBaseline } from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import Main from "./templates/Main";

const Home = () => {

    return (
        <Box
            sx={{ dissplay: "flex" }}
        >
            <CssBaseline />
            <PrimaryAppBar/>
            <Main/>
        </Box>
    );


};

export default Home;