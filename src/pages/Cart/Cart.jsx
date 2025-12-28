import {Box,Typography,IconButton,TextField,Paper} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import image from '../../assets/image/image.webp';

export default function CartItem() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#fff", mt: 3
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 40px",
          mb: 2,
          color: "#8b8b8b",
          fontSize: 14
        }}
      >
        <Typography>Product</Typography>
        <Typography>Price</Typography>
        <Typography>Quantity</Typography>
        <Typography>Total</Typography>
        <Box />
      </Box>


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 40px",
          alignItems: "center"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component="img"
            src={image}
            alt="watch"
            sx={{
              width: 60,
              height: 60,
              borderRadius: 2,
              backgroundColor: "#f1f1f1"
            }}
          />
          <Typography fontWeight={500}>
            Mantu smart watch
          </Typography>
        </Box>
        <Typography fontWeight={500}>$516.00</Typography>
        <TextField
          type="number"
          defaultValue={1}
          size="small"
          inputProps={{ min: 1 }}
          sx={{ width: 70 }}
        />
        <Typography fontWeight={600}>$516.00</Typography>
        <IconButton color="primary">
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}