import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Typography
}
    from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import useCrud from "../../hooks/useCrud";
import { useEffect } from "react";
import { MEDIA_URL } from "../../config";
import { Link } from "react-router-dom";

interface Products {
    id: number;
    seller_id: number;
    product_name: string;
    product_price: number;
    product_content: string;
    product_active: boolean;
    auction_start_at: number;
    auction_end_at: number;
    category: string;
    product_images: string;
}

const ExploreProducts = () => {
    const { categoryName } = useParams();
    const url = categoryName ? `/products/all-products/?category=${categoryName}` : "/products/all-products"
    const { dataCRUD, fetchData } = useCrud<Products>([], url);

    useEffect(() => {
        fetchData();
    }, [categoryName]);

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ pt: 6 }}>
                    <Typography
                        variant="h3"
                        noWrap
                        component="h1"

                        sx={{
                            display: {
                                sm: "block",
                                fontWeight: 700,
                                fontSize: "48px",
                                letterSpacing: "-1px",
                            },
                            textAlign: { xs: "center", sm: "left" }

                        }}
                    >
                        {categoryName ? categoryName : "인기제품"}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="h2"
                        color="textSecondary"
                        sx={{
                            display: {
                                sm: "block",
                                fontWeight: 700,
                                fontSize: "20px",
                                letterSpacing: "-2px",
                            },
                            textAlign: { xs: "center", sm: "left" }

                        }}
                    >
                        {categoryName
                            ? `인기 제품 카테고리 ${categoryName}`
                            : "인기제품 카테고리를 확인해 보세요"}
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    sx={{ pt: 6, pb: 1, fontWeight: 700, letterSpacing: "-1px" }}
                >
                    Recommended Products
                </Typography>
                <Grid container spacing={{ xs: 0, sm: 2 }}>
                    {dataCRUD.map((item) => (
                        <Grid item key={item.seller_id} xs={12} sm={6} md={6} lg={3}>
                            <Card sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "none",
                                backgroundImage: "none",
                            }}>
                                <Link
                                    to={`products/all-products/${item.id}`}
                                    style={{ textDecoration: "none", color: "inhert" }}>
                                    <CardMedia component="img"
                                        image={
                                            item.product_images
                                                ? `${MEDIA_URL}${item.product_images}`
                                                : "https://source.unsplash.com/random/"
                                        }

                                        alt="random"
                                        sx={{ display: { xs: "none", sm: "block" } }} />

                                    <CardContent sx={{
                                        flexGrow: 1,
                                        p: 0,
                                        "&: last-child": { paddingBottom: 0 }
                                    }}>
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemIcon sx={{ minWidth: 0 }}>
                                                    <ListItemAvatar sx={{ minWidth: "50px" }}>
                                                        <Avatar
                                                            alt="product Icon"
                                                            src={`https://source.unsplash.com/random/`} />
                                                    </ListItemAvatar>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography
                                                            variant="body2"
                                                            textAlign="start"
                                                            sx={{
                                                                textOverflow: "ellipsis",
                                                                overflow: "hidden",
                                                                whiteSpace: "nowrap",
                                                                fontWeight: 700,
                                                            }}
                                                        >
                                                            {item.product_name}
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography
                                                            variant="body2"
                                                        >
                                                            {item.category}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </Link>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Container >
        </>
    );
};

export default ExploreProducts;