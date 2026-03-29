import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Fashion() {
    const navigate = useNavigate();

    return (
        <Box>

            {/* 🔥 HERO TITLE */}
            <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                    sx={{
                        fontSize: { xs: "28px", md: "40px" },
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #ff4081, #ff80ab)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Fashion Collection
                </Typography>

                <Typography
                    sx={{
                        mt: 2,
                        color: "#555",
                        fontSize: { xs: "14px", md: "18px" },
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    Discover trendy outfits, stylish accessories, and fashion essentials for every occasion.
                </Typography>
            </Box>

            {/* 👕 MEN FASHION */}
            <Box sx={{ px: 3, mb: 6 }}>
                <Typography variant="h5" fontWeight={700} mb={3}>
                    Men Fashion
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        overflowX: "auto",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {[
                        { name: "T-Shirts", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b" },
                        { name: "Shirts", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
                        { name: "Jeans", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
                        { name: "Jackets", img: "https://images.unsplash.com/photo-1520975922284-9b4e7d1d1a9f" },
                        { name: "Shoes", img: "https://images.unsplash.com/photo-1519741497674-611481863552" },
                        { name: "Hoodies", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7" },
                        { name: "Blazers", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7" },
                        { name: "Shorts", img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648" },
                        { name: "Tracksuits", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3" },
                        { name: "Sweaters", img: "https://images.unsplash.com/photo-1585386959984-a41552231658" },
                        { name: "Formal Pants", img: "https://images.unsplash.com/photo-1593030761725-41cbb8c3d7e3" },
                        { name: "Ethnic Wear", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990" },
                        { name: "Sandals", img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6" },
                        { name: "Belts", img: "https://images.unsplash.com/photo-1618354691503-bb2bdf2e0bc1" },
                        { name: "Wallets", img: "https://images.unsplash.com/photo-1627123424574-724758594e93" }
                    ].map((item, i) => (
                        <Box key={i} sx={{ minWidth: "120px", textAlign: "center" }}>
                            <Box
                                component="img"
                                src={item.img}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    mb: 1,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    },
                                }}
                            />
                            <Typography fontSize="14px">{item.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* 👗 WOMEN FASHION */}
            <Box sx={{ px: 3, mb: 6 }}>
                <Typography variant="h5" fontWeight={700} mb={3}>
                    Women Fashion
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        overflowX: "auto",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {[
                        { name: "Dresses", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d" },
                        { name: "Tops", img: "https://images.unsplash.com/photo-1520974735194-8c7c0d5c1c3b" },
                        { name: "Sarees", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990" },
                        { name: "Handbags", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
                        { name: "Heels", img: "https://images.unsplash.com/photo-1519741497674-611481863552" },
                        { name: "Kurtis", img: "https://images.unsplash.com/photo-1618354691503-bb2bdf2e0bc1" },
                        { name: "Lehengas", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
                        { name: "Jeans", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
                        { name: "Skirts", img: "https://images.unsplash.com/photo-1585386959984-a41552231658" },
                        { name: "Jackets", img: "https://images.unsplash.com/photo-1520975922284-9b4e7d1d1a9f" },
                        { name: "Sweaters", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7" },
                        { name: "Leggings", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7" },
                        { name: "Dupattas", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990" },
                        { name: "Flats", img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6" },
                        { name: "Jewelry", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338" }
                    ].map((item, i) => (
                        <Box key={i} sx={{ minWidth: "120px", textAlign: "center" }}>
                            <Box
                                component="img"
                                src={item.img}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    mb: 1,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    },
                                }}
                            />
                            <Typography fontSize="14px">{item.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* 👜 ACCESSORIES */}
            <Box sx={{ px: 3, mb: 6 }}>
                <Typography variant="h5" fontWeight={700} mb={3}>
                    Accessories
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        overflowX: "auto",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {[
                        { name: "Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
                        { name: "Sunglasses", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
                        { name: "Bags", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
                        { name: "Caps", img: "https://images.unsplash.com/photo-1520975922284-9b4e7d1d1a9f" },
                        { name: "Jewelry", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338" },
                        { name: "Belts", img: "https://images.unsplash.com/photo-1618354691503-bb2bdf2e0bc1" },
                        { name: "Wallets", img: "https://images.unsplash.com/photo-1627123424574-724758594e93" },
                        { name: "Backpacks", img: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f" },
                        { name: "Clutches", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e" },
                        { name: "Scarves", img: "https://images.unsplash.com/photo-1520974735194-8c7c0d5c1c3b" },
                        { name: "Hair Accessories", img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6" },
                        { name: "Earrings", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338" },
                        { name: "Necklaces", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908" },
                        { name: "Bracelets", img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0" },
                        { name: "Rings", img: "https://images.unsplash.com/photo-1603561596112-0a132b757442" }
                    ].map((item, i) => (
                        <Box key={i} sx={{ minWidth: "120px", textAlign: "center" }}>
                            <Box
                                component="img"
                                src={item.img}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    mb: 1,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    },
                                }}
                            />
                            <Typography fontSize="14px">{item.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* 🔥 CTA BUTTON */}
            <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
                <Button
                    variant="contained"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        navigate("/fashion");
                    }}
                    sx={{
                        px: 5,
                        py: 1.5,
                        borderRadius: "30px",
                        fontWeight: 600,
                        fontSize: "16px",
                        background: "linear-gradient(90deg, #ff4081, #ff80ab)",
                        textTransform: "none",
                        "&:hover": {
                            background: "linear-gradient(90deg, #c2185b, #f06292)",
                        },
                    }}
                >
                    Shop Fashion Now
                </Button>
            </Box>

        </Box>
    );
}

export default Fashion;
