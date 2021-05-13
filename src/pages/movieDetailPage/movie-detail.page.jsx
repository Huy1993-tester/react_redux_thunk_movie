import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetailAction } from "../../stores/action/movie.action";

class MovieDetailPage extends Component {
  render() {
    const { movieDetail } = this.props;
    return (
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={4} md={3} sm={3} xs={12}>
            <CardMedia
              component="img"
              image={movieDetail.hinhAnh}
              height="500px"
            ></CardMedia>
          </Grid>
          <Grid item lg={8} md={9} sm={9} xs={12}>
            <Typography variant="h3">{movieDetail.tenPhim}</Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
  componentDidMount() {
    this.props.dispatch(getMovieDetailAction());
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
  };
};

export default connect(mapStateToProps)(MovieDetailPage);
