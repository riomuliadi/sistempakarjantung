import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, MedicalInformation, Emergency } from "@mui/icons-material";
import { Link } from "react-router-dom";
import GejalaForm from './GejalaForm';
import { Routes, Route } from 'react-router-dom';

const NavigationList = () => {
  const routes = ["/Dashboard", "/Gejala", "/Konsultasi"];
  const elements = ["App", "GejalaForm", "Konsultasi"];
  return (
    <List>
      {['Dashboard', 'Gejala', 'Konsultasi'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton component={Link} to={routes[index]}>
            <ListItemIcon>
              {index % 3 === 0 ? <Dashboard /> : index % 2 === 0 ? <MedicalInformation /> : <Emergency />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
