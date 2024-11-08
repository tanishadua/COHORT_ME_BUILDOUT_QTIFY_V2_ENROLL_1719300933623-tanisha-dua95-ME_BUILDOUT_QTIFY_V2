import styles from "./Section.module.css";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../Card/Card";
import { Button, Typography } from "@mui/material";
function Section({ title, endpoint, buttonText }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      console.log(response.data);
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [endpoint]);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <div className={styles.section}>
        <header className={styles.header}>
          <p className={styles.p}>{title}</p>
          <Button
            onClick={toggleCollapse}
            style={{
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "30px",
    color: "#34C94B",
    border: "none",
    backgroundColor: "inherit",
    textTransform: "capitalize",
}}
          >
            {buttonText}
          </Button>
        </header>
        {
            !isCollapsed && ( <Grid container spacing={3}>
                {albums.map((album) => (
                  <Grid item key={album.id} md={2}>
                    <Cards album={album} />
                  </Grid>
                ))}
              </Grid>)
        }
        
      </div>
    </div>
  );
}
export default Section;
