"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Changepassword from "./Changepassword";
import SettingsAccount from "./SettingsAccount";
import { Container, Divider, Paper } from "@mui/material";

const SettingsPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Account");

  const handleSelect = (item: string) => {
    setActiveItem(item);
  };

  const renderContent = () => {
    switch (activeItem) {
      case "Account":
        return <SettingsAccount />;
      case "Change Password":
        return <Changepassword />;
      default:
        return <SettingsAccount />;
    }
  };

  return (
    <Container maxWidth="md">
      <div className="flex justify-center">
        <Sidebar selectedItem={activeItem} onSelect={handleSelect} />
        <div className="p-10 bg-white rounded-sm">{renderContent()}</div>
      </div>
    </Container>
  );
};

export default SettingsPage;
