import { Box, Button, TextField } from "@mui/material";
import React from "react";


const Login = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email)
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "64px", // 64px cada barra
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& > :not(style)": { m: 1, width: "90%" },
          }}
          autoComplete="off"
        >
          <TextField
            required
            type="email"
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
  
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <Button type="submit" sx={{ mt: "1rem" }}>
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
