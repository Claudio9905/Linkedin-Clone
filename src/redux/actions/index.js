export const GET_MEPROFILE = "GET_MEPROFILE";

const endpoint = "https://striveschool-api.herokuapp.com/api/profile/me";

export const getMeProfileAction = () => {
  return (dispatch) => {
    fetch(endpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NTM5ZWQyOWE0OTAwMTUxZjIwODciLCJpYXQiOjE3NTY3MTM4ODYsImV4cCI6MTc1NzkyMzQ4Nn0.g_ltzuAOM5iLWXZ42EnQunI2ClCn8d1JaOjtHmS1rNA",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_MEPROFILE,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};
