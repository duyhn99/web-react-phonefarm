import { createTheme, makeStyles } from "@material-ui/core";

export const MuiStylesLogin = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errors: {
    color: "#dc3545",
    fontSize: 12,
  },
}));

export const MuiStylesButton = makeStyles((theme) => ({
  button: {
    outline: "none",
    border: "none",
    padding: 8,
    color: "#fff",
    borderRadius: 4,
  },
  buttonSuccess: {
    backgroundColor: "#8ac926",
  },
  buttonEdit: {
    backgroundColor: "#ffca3a",
  },
  buttonDanger: {
    backgroundColor: "#ff595e",
  },
}));

export const getMuiTheme = () =>
  createTheme({
    overrides: {
      MuiTableCell: {
        head: {
          backgroundColor: "#4361ee !important",
          color: "#FFF !important",
        },
      },
      MuiButton: {
        label: {
          color: "#FFF !important",
        },
      },
    },
  });
