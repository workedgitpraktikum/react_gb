import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/fetch/routines";
import {
  getFetchData,
  getIsLoading,
  getIsError,
} from "../../store/fetch/selectors";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const FetchCat = () => {
  const dispatch = useDispatch();
  const { webpurl } = useSelector(getFetchData);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const classes = useStyles();
  return (
    <Grid
      container
      style={{
        margin: "3rem 3rem",
      }}
    >
      {isLoading && <CircularProgress />}
      {!isLoading && !isError && (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={webpurl} title="Cat" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Cat
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Fetch random cat image with redux-saga-routines
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                dispatch(fetchData());
              }}
            >
              Get new cat image
            </Button>
          </CardActions>
        </Card>
      )}
      {isError && (
        <div>
          <Typography gutterBottom variant="h5">
            Something went wrong, please hit the reload button
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch(fetchData());
            }}
          >
            Reload
          </Button>
        </div>
      )}
    </Grid>
  );
};

export default FetchCat;
