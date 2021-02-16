import React from 'react'
import { Paper,TextField } from "@material-ui/core";

export default function SearchBar({
  onSubmit,
  handleChange,
 searchTerm
}) {
    
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
     onSubmit(searchTerm);
    }
  };
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
        <TextField
          fullWidth
          label="search..."
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
     
    </Paper>
  );
}

   