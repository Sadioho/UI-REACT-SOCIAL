import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
}));

export default function CloseFriend({ user }) {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={PF + user.profilePicture} />
      <span className={classes.userName}>{user.username}</span>
    </div>
  );
}
