import { Tab, Tabs } from '@mui/material';
import React from 'react'

export default function DisabledTabs() {
    const [value, setValue] = React.useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
    );
  }