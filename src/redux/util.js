import axios from "axios";

// const BASE_URL =
//   "https://imdb-internet-movie-database-unofficial.p.rapidapi.com";
// const API_KEY = "a22074ed93mshf9ae65a07e71883p1d5614jsn768911346822";
// const API_HOST = "imdb-internet-movie-database-unofficial.p.rapidapi.com";

export async function request(method, endpoint, body = null) {
  let resData = null;

  await axios
    .get(
      `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/${endpoint}/${body}`,
      {
        headers: {
          "x-rapidapi-key":
            "a22074ed93mshf9ae65a07e71883p1d5614jsn768911346822",
          "x-rapidapi-host":
            "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      resData = response.data;
      console.log(resData);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("data dari util" + resData);

  return resData;
}
