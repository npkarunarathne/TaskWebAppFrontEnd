import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import { useGetAuthenticateMutation } from "../../../store/api/auth/authApiSlice.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  setRefreshToken,
  setToken,
  setUser,
} from "../../../store/reducers/authSlice.ts";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signIn, { data: userData, isLoading, isSuccess }] =
    useGetAuthenticateMutation();

  useEffect(() => {
    if (isSuccess && userData) {
      dispatch(setToken(userData?.token));
      dispatch(setRefreshToken(userData?.refreshToken));
      dispatch(setUser(userData?.user));
      navigate("/");
    }
  }, [isSuccess]);

  const handleSubmit = (values: any) => {
    // alert(JSON.stringify(values, null, 2));
    signIn(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={9}
        sx={{
          backgroundImage: "url(public/assets/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SIGN IN
          </Typography>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                required={true}
                fullWidth={true}
                name="password"
                label="Password"
                id="password"
                type="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {"sign in"}
              </Button>
            </form>
            <Grid container>
              {/*<Grid item xs>*/}
              {/*  <Link href="#" variant="body2">*/}
              {/*    {"forgot_password"}*/}
              {/*  </Link>*/}
              {/*</Grid>*/}
              <Grid item>
                <Button onClick={() => navigate("/sign-up")} variant="text">
                  {"dont have an account"}&nbsp;
                  {"sign up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
