import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import AuthActions from "../redux/auth/authOperations";
import UserService from "../services/UserServices";

export const PageAdmin = () => {
  const dispatch = useDispatch();
  const {
    data: users,
    error,
    isFetching: isLoading,
  } = useQuery("users", () => UserService.fetchUsers(), {
    keepPreviousData: true,
  });

  const handleLogout = () => {
    dispatch(AuthActions.logout());
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        <Button onClick={handleLogout} variant="outlined">
          Logout
        </Button>
      </Box>

      {isLoading ? <Box>Loading...</Box> : null}

      {users ? (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            listStyle: "none",
          }}
        >
          {users?.data?.map(({ _id: userId, username, email }) => (
            <li key={userId} style={{ border: "1px solid gray" }}>
              <p>
                <b>UserId:</b> {userId}
              </p>
              <p>
                <b>Username:</b> {username}
              </p>
              <p>
                <b>Email:</b> {email}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      {error ? <Box>{error.message}</Box> : null}
    </Box>
  );
};
