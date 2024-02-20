import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "https://express-t4.onrender.com/api/login";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(baseURL, {
        username: username,
        password: password,
      });
      navigate(`/profile`);
      console.log(response);
    } catch {
      console.error();
    }
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          "& > :not(style)": { m: 1, width: "45ch" },
          marginTop: "-100px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="username"
          label="username"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="password"
          label="password"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </>
  );
}
export default Login;
