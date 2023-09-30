import { Box } from "@mui/material";
import axios from "axios";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {


    axios.get("http://127.0.0.1:8000/products/all-products")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    return <Box sx={{ flexGrow: 1, }}>

        {children}

    </Box>;
};

export default Main;