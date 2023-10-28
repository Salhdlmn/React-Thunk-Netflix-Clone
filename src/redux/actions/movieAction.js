import axios from "axios";
import { options } from "../../utils/constant";
import { actionTypes } from "./actionTypes";

//! Asenkron Aksiyon
// hem verileri çeksin hem Reducera aktarsın
// temel API url
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getMovies = () => (dispatch) => {
  // asenkron İşlemler
  axios
    .get("/movie/popular", options)
    // gelen veriyi reducera aktarma
    .then((res) =>
      dispatch({
        type: actionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    );
};

// kategori verilerini çek store'a aktar

export const getGenres = () => (dispatch) => {
  axios.get("/genre/movie/list", options).then((res) =>
    dispatch({
      type: actionTypes.SET_GENRES,
      payload: res.data.genres,
    })
  );
};
