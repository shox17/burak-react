import React from "react";
import "../css/app.css";
import { Container, Stack, Box, Button, Typography } from "@mui/material";

function App() {
  return (
    <Container sx={{ background: "orange" }}>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React App on Typescript with Redux
          </Typography>
        </Box>
        <Button variant="contained"> Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;
