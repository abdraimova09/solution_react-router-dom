import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    if (!title || !price || !image) {
      alert("заполните поля");
    } else {
      navigate("/products");
    }
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={title}
        onChange={e => setTitle(e.target.value)}
        label="Title"
        variant="outlined"
      />
      <TextField
        value={price}
        onChange={e => setPrice(e.target.value)}
        label="Price"
        variant="outlined"
      />
      <TextField
        value={image}
        onChange={e => setImage(e.target.value)}
        label="Image"
        variant="outlined"
      />
      <Button onClick={() => handleSave()} sx={{ m: 1 }} variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default AddProduct;
