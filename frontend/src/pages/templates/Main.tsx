import { Box, Typography } from "@mui/material";

const Main = () => {
    return <Box sx={{ flexGrow: 1, }}>

        {[...Array(50)].map((_, i) => (
            <Typography key={i} paragraph>
                {i + 1}
            </Typography>
        ))}

    </Box>;
};

export default Main;