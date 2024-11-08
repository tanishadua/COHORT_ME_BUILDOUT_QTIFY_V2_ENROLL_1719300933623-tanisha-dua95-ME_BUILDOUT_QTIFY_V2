import styles from "./Section.module.css";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../Card/Card";
function Section() {
  const [albums, setAlbums] = useState([]);
  const fetchdata = async () => {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    console.log(response.data);
    setAlbums(response.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
        <div className={styles.section}>
          <header className={styles.header}>
            <p className={styles.p}>Top Albums</p>
            <button className={styles.button}>Collapse</button>
          </header>
          <Grid container spacing={3}>
            {albums.map((album) => (
              <Grid item key={album.id} md={2}>
                <Cards album={album} />
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  );
}
export default Section;
