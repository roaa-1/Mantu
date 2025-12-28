import {Box,Typography,Button,Card,Chip,Rating,IconButton} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import image from '../../assets/image/image.webp';
import { Link } from "react-router-dom";
import NumberSpinner from '../../components/NumberSpinner/NumberSpinner';

export default function ProductDetails() {
  return (
    <Box sx={{ p: 4, display: "flex", gap: 5 }}>
    <Box sx={{ width: "45%" }}>
        <Card sx={{ p: 3, borderRadius: 4,  mb: 2, bgcolor: "#f3f5f7" }}>
        <Box component="img"  src={image}  sx={{ width: "100%" }} />
        </Card>
        <Box sx={{ display: "flex", gap: 2 }}> {[1, 2, 3, 4].map((i) => (
            <Card key={i}  sx={{ width: 80, height: 80,  borderRadius: 3,  bgcolor: "#e9ecef" }}/> ))}
        </Box>
    </Box>
    <Box sx={{ width: "55%" }}>
        <Typography variant="h5" fontWeight={300}>
        Mantu Women's Solid Slim Fit Classic Round Neck Cotton Fabric T-Shirt.
        </Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
    <Rating value={4} readOnly size="small" />
    <Typography color="text.secondary">992 Ratings</Typography>
        </Box>

        <Box sx={{ mt: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="h4" fontWeight={300}>
            $664.00
        </Typography>
        <Typography color="primary">-78%</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
        <Typography sx={{  color: "gray" }}>
            M.R.P.: 
        </Typography>
        <Typography sx={{ textDecoration: "line-through", color: "gray" }}>
            $2,999.00
        </Typography>
        </Box>
        <Card sx={{ p: 2, mt: 3, borderRadius: 3 }}>
          <Typography>
            Real time <b>56</b> visitor right now!
          </Typography>
          <Typography fontWeight={600} sx={{ mt: 1 }}>
            276 Days&nbsp;&nbsp;12 : 0 : 27
          </Typography>
        </Card>

        <Typography sx={{ mt: 3 }} color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>

        <Box component="ul" sx={{ mt: 2, pl: 2 }}>
          <li>Closure: Hook & Loop</li>
          <li>Sole: Polyvinyl Chloride</li>
          <li>Width: Medium</li>
          <li>Outer Material: A-Grade Standard Quality</li>
        </Box>

        <Typography fontWeight={600} sx={{ mt: 3 }}>
          SIZE
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          {["S", "M", "L", "XL"].map((s) => (
            <Chip key={s} label={s} variant="outlined" />
          ))}
        </Box>

        <Typography fontWeight={600} sx={{ mt: 3 }}>
          COLORS
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          {["#5b6ee1", "#8fc6ff", "#8dd3c7", "#e0c3a5"].map((c) => (
            <Box
              key={c}
              sx={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                bgcolor: c,
                border: "1px solid #ccc"
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
           <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'center',
      }}
    >
      
      <NumberSpinner
        label="Small and Error"
        min={10}
        max={40}
        size="small"
        defaultValue={100}
        error
      />
    </Box>
          <Link to="/cart" style={{ textDecoration: "none", color: "#fff", width: "150px" ,backgroundColor: "#06098dff", textAlign: "center", padding: "10px 0", borderRadius: "8px", fontWeight: 600    }}>
            ADD TO CART
          </Link>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <CompareArrowsIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
