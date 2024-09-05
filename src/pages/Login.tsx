import { Box, Button, TextField } from "@mui/material";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  // Handle form submission logic here
  console.log("Form submitted");
  e.preventDefault();
};

const Login = () => {
  return (
    <>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: "64px", // 64px cada barra
        }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& > :not(style)": { m: 1, width: "60%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            required
            fullWidth
            helperText="Requerido"
            error={false}
          />
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            required
            fullWidth
            helperText="Requerido"
            error={false}
          />
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            required
            fullWidth
            helperText="Requerido"
            error={false}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" sx={{mr: '5%'}} >Register</Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
