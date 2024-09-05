import { Box, Button, TextField } from "@mui/material";

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  // Handle form submission logic here
  console.log("Form submitted");
  e.preventDefault();
};

const Login = () => {
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
          sx={{
            "& > :not(style)": { m: 1, width: "90%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
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
        </Box>
        <Box sx={{ width: '100%', display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" sx={{ mr: "10%" }} onClick={handleSubmit}>
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
