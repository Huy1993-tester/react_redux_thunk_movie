import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
import { Container, Grid, withStyles } from "@material-ui/core";
import { style } from "./home.styles";
import MovieCard from "../../components/movie-card/movie-car.coponent";
import axios from "axios";
import { connect } from "react-redux";
import { getMovieListAction } from "../../stores/action/movie.action";
class HomePage extends Component {
  renderMovieList = () => {
    const { movieList } = this.props;
    console.log(movieList);
    return movieList.map((movie, index) => {
      return (
        <Grid item lg={3} md={6} xs={12} key={index}>
          <MovieCard movie={movie} />
        </Grid>
      );
    });
  };
  render() {
    // const {classes} = this.props; // được tạo khi gọi withStyles
    return (
      // <div>
      //   <Button className={classes.myBtn} size="large" variant="contained" color="primary">
      //     Nhấn đi
      //   </Button>
      //   <Button size="small" variant="contained" color="secondary">
      //     Nhấn đi
      //   </Button>
      // </div>
      <div>
        <Container maxWidth="lg">
          <Grid container>
            {/* container = row */}
            {/* <Grid item >
            </Grid> */}
            {/* item = coloumn */}

            {this.renderMovieList()}
          </Grid>
        </Container>
      </div>
    );
  }
  // async componentDidMount() {
  // try {
  //   const res = await axios({
  //     url:
  //       "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
  //     method: "GET",
  //   });
  //   this.props.dispatch(getMovieListAction(res.data));
  //   console.log(res.data);
  // } catch (err) {
  //   console.log(err);
  // }
  // }
  // }
  componentDidMount() {
    this.props.dispatch(getMovieListAction());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps, null)(withStyles(style)(HomePage));
