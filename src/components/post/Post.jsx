import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    width: '100%',
    margin: '20px 0 ',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  console.log(post);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchPosts();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    console.log('liked');
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt="Cindy Baker"
            src={user.profilePicture || PF + 'person/noAvatar.png'}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ className: classes.title }}
        title={user.username}
        subheader={format(post.createdAt)}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post?.desc}
        </Typography>
      </CardContent>

      <CardMedia
        className={classes.media}
        image={PF + post.img}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={likeHandler}>
          <ThumbUpAltIcon style={{ color: '#1597E5' }} />
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={likeHandler}>
          <FavoriteIcon style={{ color: '#FF449F' }} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {like} people like it
        </Typography>

        <Typography
          className={classes.expand}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {post.comment} comments
        </Typography>
      </CardActions>
    </Card>
  );
}
