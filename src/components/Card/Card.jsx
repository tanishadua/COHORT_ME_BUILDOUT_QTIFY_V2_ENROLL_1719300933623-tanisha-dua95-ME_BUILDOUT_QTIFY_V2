import React from "react"
//import styles from "./Card.module.css"
import { Card, CardMedia, Chip, Stack, Typography } from "@mui/material";


function Cards({ album }) {
  return (
    <Card
      sx={{
        position: "relative",
        height: "232px",
        background: "#121212",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Card
        sx={{
          height: "205px",
          width: "205px",
          position: "relative",
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        <CardMedia
          component="img"
          image={album.image}
          title={album.title}
          alt={album.title}
          sx={{
            height: "170px",
            overflow: "hidden",
          }}
        />
        <Stack direction="row" top="176px" left="8px" position="absolute">
          <Chip
            label={`${album.follows} follows`}
            sx={{
              color: "white",
              backgroundColor: "black",
              padding: "4px 8px 4px 8px",
              height: "23px",
              gap: "1px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "15px",
              textAlign: "left",
            }}
            color="primary"
          />
        </Stack>
      </Card>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "21px",
          textAlign: "left",
          color: "#ffffff",
          paddingTop: "6px",
        }}
      >
        {album.title}
      </Typography>
    </Card>
  );
}
export default Cards;