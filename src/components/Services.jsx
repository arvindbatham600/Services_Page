import React from "react";
import { Box, Typography, styled, Grid } from "@mui/material";
import data from "../constants/Data";

const Name = styled(Box)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#ececee",
  padding: theme.spacing(2),
  margin: -8,
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "#3c464c",
  fontSize: "1.5rem",
  fontWeight: "bold",
}));

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#fffefe",
  marginTop: "30px",
  marginLeft: "10%",
  marginRight: "10%",
}));

const Title = styled(Typography)(({}) => ({
  fontWeight: 600,
  color: "#3c464c",
}));

const Service = () => {
  return (
    <Box>
      <Name>
        <Text>Services</Text>
      </Name>

      <Container>
        <Box
          sx={{
            my: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 600,
            }}
            variant="h4"
            color="black"
            gutterBottom
          >
            Minimum cost with maximum benefits
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box
                sx={{
                  width: 330,
                  height: 320,
                  // backgroundColor: "yellow",
                  mx: 2,
                  my: 2,
                }}
              >
                <img src={item.url} alt="Service" />
                <Title variant="h6">{item.title}</Title>
                <Typography variant="body1">
                  Flipkart Admin | 13th Dec, 2019 | 1 minute
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
