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
      <h1 align="center">Your Babies</h1>
      <Grid container spacing={3} style={{height:'auto', width:"auto", margin:"1%"}}>
        <Grid item xs >
          <Paper className={classes.paper}style={{ border: '1px solid'}}><img src="../images/dog1.jpg"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog2.jpg"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog3.jpg"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog4.jpg"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog5.jpg"/></Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper} style={{ border: '1px solid'}}><img src="../images/dog6.jpg"/></Paper>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
        
        
      </Grid> */}
    </div>
  );
}