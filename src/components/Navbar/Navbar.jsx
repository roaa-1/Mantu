import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import logom from '../../assets/image/logom.webp'

export default function Navbar() {
  return (
  <>
  <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#ffffffff", borderBottomLeftRadius: "16px",borderBottomRightRadius: "16px" }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                      <img src={logom} alt="Logo" style={{ height: '40px' }} />
                      </Box>
                    <Box sx={{ display: 'flex', gap: 2  }}>
                    <Link component={RouterLink} to="/products" color="#000000" underline='none'> Products</Link>
                    <Link component={RouterLink} to="/cart" color="#000000" underline='none'> Cart</Link>
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </Box>
    </Container>
  </>
  )
}

