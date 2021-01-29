import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Pets() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 align="center" padding-top="25px">Your Babies</h1>
      <Grid container spacing={3} style={{height:'auto', width:"auto", margin:"1%"}}>
        <Grid item xs >
          <Paper className={classes.paper}style={{ border: '1px solid'}}><img src="../images/dog1.jpg" alt="doggy"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog2.jpg" alt="doggy"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog3.jpg" alt="doggy"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog4.jpg" alt="doggy"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog5.jpg" alt="doggy"/></Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog6.jpg" alt="doggy"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}