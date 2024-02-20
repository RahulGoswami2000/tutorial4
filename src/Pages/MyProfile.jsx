import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseURL = "https://express-t4.onrender.com/api/users";

function MyProfile() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios.get(`${baseURL}/${id}`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    user();
  }, [id]);
  return (
    <>
      {user ? (
        <>
          <Typography variant="h5" gutterBottom>
            {user.name}'s Profile
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="body2" color="textPrimary">
                Name: {user.name}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Email: {user.email}
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Loading...
        </Typography>
      )}
    </>
  );
}
export default MyProfile;
