import * as React from "react";
import {
  Card,CardContent,CardMedia,Typography,Box,IconButton,Chip} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import image from '../../assets/image/image.webp';
import { Container, Grid } from "@mui/system";
import { Link } from "react-router";

export default function ProductCard() {
  return (
  <Container maxWidth="lg">
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
      sx={{width: 300,borderRadius: 4,position: "relative",boxShadow: "0 10px 25px rgba(0,0,0,0.08)",mt: 2}}>
      <Chip label="NEW" size="small" sx={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", bgcolor: "#ff4d6d", color: "#fff", fontWeight: 600 }} />
      <Box sx={{ p: 2 }}>
        <Link to="/productDetails">
        <CardMedia component="img" image={image} alt="T-shirt"  sx={{ borderRadius: 3, height: 260, objectFit: "cover" }} /> 
        </Link>
      </Box>
      <CardContent>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: 1 }} >
          <Typography variant="caption" color="text.secondary">
            T-SHIRT
          </Typography>
          <Typography variant="caption" color="text.secondary">
            S&nbsp; M&nbsp; XL
          </Typography>
        </Box>
        <Typography variant="subtitle1" fontWeight={600}>
          Cotton fabric T-shirt
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Typography fontWeight={600}>$120</Typography>
          <Typography
            color="text.secondary"
          >
            $130
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Box component="button" sx={{ width: 18, height: 18, borderRadius: "50%", bgcolor: "#f3a6c8", border: "1px solid #ddd", cursor: "pointer", p: 0 }} />
  <Box
    component="button"
    sx={{ width: 18,  height: 18, borderRadius: "50%", bgcolor: "#6c7ae0", border: "1px solid #ddd", cursor: "pointer",  p: 0 }} />
  <Box component="button"  sx={{ width: 18, height: 18, borderRadius: "50%", bgcolor: "#fff", border: "1px solid #ddd", cursor: "pointer", p: 0 }} />
        </Box>
      </CardContent>
      <IconButton
        sx={{ position: "absolute",  bottom: 16, right: 16 }} >
      <FavoriteBorderIcon />
      </IconButton>
    </Card>
      </Grid>
    </Grid>
  </Container>
  );
}
