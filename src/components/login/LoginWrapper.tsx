"use client";
import Typography from "@mui/material/Typography";
import React from "react";
import { LoginContainer } from "./LoginWrapper.style";

import citiMediaLogoDark from "../../assets/citimedia-dark-logo.png";
import Image from "next/image";
import Link from "next/link";

interface LoginWrapperProps {
  text: string;
  coloredText: string;
  children: JSX.Element | React.ReactNode;
}

const LoginWrapper = ({ text, coloredText, children }: LoginWrapperProps) => {
  return (
    <LoginContainer>
      <Link href={"/"}>
        <Image height={50} src={citiMediaLogoDark} alt={"Citi Media"} />
      </Link>

      <Typography
        sx={{
          fontSize: "30px",
          lineHeight: "30px",
          color: "#000",
          textAlign: "center",
        }}
      >
        {text}&nbsp;
        <span
          style={{
            color: "#d84f3c",
          }}
        >
          {coloredText}
        </span>
      </Typography>
      {children}
    </LoginContainer>
  );
};

export default LoginWrapper;
