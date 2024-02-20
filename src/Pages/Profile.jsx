import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const baseURL = "https://express-t4.onrender.com/api/users";
function Profile() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const profille = async () => {
      try {
        const response = await axios.get(baseURL);
        setProfiles(response.data);
        console.log(response.data);
      } catch {
        console.error();
      }
    };
    profille();
  }, []);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Profiles
      </Typography>
      <Grid container spacing={2}>
        {profiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={profile.id}>
            <Card>
              <CardActionArea
                component={Link}
                to={`/my-profile/${profile._id}`} /* Link to detailed view */
              >
                {/* Course image */}
                <Box position="relative">
                  <img
                    src={profile.picture}
                    alt={profile.title}
                    style={{ width: "100%", height: "10", objectFit:"cover" }}
                  />
                </Box>
                <CardContent>
                  {/* Course title */}
                  <Typography variant="h6" component="h2">
                    {profile.name}
                  </Typography>
                  {/* Course description */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {profile.email}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    Phone: {profile.phone}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Profile;
