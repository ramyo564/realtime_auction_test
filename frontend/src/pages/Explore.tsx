import { Box, CssBaseline } from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import Main from "./templates/Main";
import ExploreProducts from "../components/Main/ExploreProducts";
const Home = () => {

    return (
        <Box
            sx={{ dissplay: "flex" }}
        >
            <CssBaseline />
            <PrimaryAppBar/>
            <Main>
                <ExploreProducts/>
            </Main>
        </Box>
    );


};

export default Home;