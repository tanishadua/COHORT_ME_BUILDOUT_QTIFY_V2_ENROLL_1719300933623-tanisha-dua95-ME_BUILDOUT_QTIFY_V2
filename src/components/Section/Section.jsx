import styles from "./Section.module.css";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../Card/Card";
import { Button, Box, Typography } from "@mui/material";
function Section({ title, endpoint, buttonText }) {
  const [albums, setAlbums] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setAlbums(response.data);
    } catch (error) {
      console.log("Error fetching albums:", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [endpoint]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "2rem",
          backgroundColor: "#121212",
        }}
      >
        <Box
          component="header"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p className={styles.p}>{title}</p>
          <button className={styles.button}>{buttonText}</button>
        </Box>
        <Grid container spacing={3}>
                {albums.map((album) => (
                  <Grid item key={album.id} md={2}>
                    <Cards album={album} />
                  </Grid>
                ))}
              </Grid>
      </Box>
    </Box>
  );
}
export default Section;
