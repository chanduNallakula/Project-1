"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import citiMediaLogo from "../../../assets/citimedia-dark-logo.png";
import { Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Person2Icon from "@mui/icons-material/Person2";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useRouter } from "next/navigation";
import AccountMenu from "./NavProfileMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState<string>("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (pathname) {
      const path = pathname.split("/")[1];
      const item = path.replace("-", " ").toLowerCase();
      const navItems = ["audience sets", "geofences", "campaigns", "creatives", "reports"];
      if (navItems.includes(item)) {
        setSelectedItem(item.replace(" ", "-"));
      } else {
        setSelectedItem("");
      }
    }
  }, [pathname]);

  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "white",
        borderBottom: "1px solid #e1e1e1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link href="/dashboard">
          <img
            src={citiMediaLogo.src}
            alt="Citimedia Logo"
            style={{ width: 150, height: "auto" }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        {["Audience Sets", "Geofences", "Campaigns", "Creatives", "Reports"].map((item) => (
          <Link
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            key={item}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                color:
                  selectedItem === item.toLowerCase().replace(" ", "-") ? "#0c85e3" : "inherit",
                cursor: "pointer",
              }}
            >
              {item}
            </Typography>
          </Link>
        ))}
      </Box>

      <Box onClick={handleClick}>
        <button
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Avatar src="" alt="Profile" sx={{ width: 40, height: 40 }} />
          <Typography>Manideep</Typography>
        </button>
      </Box>
      <AccountMenu
        open={open}
        setAnchorEl={setAnchorEl}
        onClose={handleClose}
        onClick={handleClick}
        anchorEl={anchorEl}
      />
    </Box>
  );
};

export default Navbar;
