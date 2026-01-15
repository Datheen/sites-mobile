"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import logoImg from "@/public/img/logo.webp";

const pages = ["Início", "Sobre", "Serviços", "Blog", "Atendimento"];

function MobileHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(30, 58, 138, 0.3)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", px: 0, minHeight: "72px" }}
        >
          <Box sx={{ pl: "20px" }}>
            <Image className="w-30" src={logoImg} alt="Logo" />
          </Box>
          <Box sx={{ pr: "20px" }}>
            <IconButton
              size="large"
              aria-label="menu de navegação"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ m: 0, p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MobileHeader;
