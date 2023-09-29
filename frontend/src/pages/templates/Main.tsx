import { Box, Typography } from "@mui/material";


import axios from "axios";

const Main = () => {
    axios.get("http://127.0.0.1:8000/products/all-products")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

    return <Box sx={{ flexGrow: 1, }}>

        {[...Array(50)].map((_, i) => (
            <Typography key={i} paragraph>
                {i + 1}
            </Typography>
        ))}

    </Box>;
};

export default Main;