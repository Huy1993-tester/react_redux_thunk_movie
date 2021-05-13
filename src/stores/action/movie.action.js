import axios from "axios";
import { GET_MOVIE_DETAIL, GET_MOVIE_LIST } from "../constants/movie.const";

// export const getMovieListAction = (movieList) => {
//   return {
//     type: GET_MOVIE_LIST,
//     payload: movieList,
//   };
// };

export const getMovieListAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieDetailAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1344",
        method: "GET",
      });
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data,
      });
    } catch (err) {}
  };
};
