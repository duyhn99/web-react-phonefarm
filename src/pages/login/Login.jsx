import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MuiStylesLogin } from "~/components/MuiStyles/MuiStyles";

const schema = yup
  .object({
    email: yup.string().required("Please enter your email address"),
    password: yup.string().required("Please enter your password"),
  })
  .required();

export default function Login() {
  const classes = MuiStylesLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
      }, 3000);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            {...register("email")}
          />
          {errors?.email && (
            <div className={classes.errors}>{errors.email?.message}</div>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            {...register("password")}
          />
          {errors?.password && (
            <div className={classes.errors}>{errors.password?.message}</div>
          )}
          <FormControlLabel
            control={
              <Checkbox
                {...register("checkbox")}
                defaultValue={false}
                color="primary"
                id="checkbox"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSubmitting ? <div className="loader"></div> : "Submit"}
          </Button>
        </form>
      </div>
    </Container>
  );
}
