// Actions e API per la pagina profilo

export const GET_MEPROFILE = "GET_MEPROFILE";
export const GET_PROFILE = "GET_PROFILE";
export const GET_USER_ID_PROFILE = "GET_USER_ID_PROFILE";
export const EDIT_PROFILE = "EDIT_PROFILE";

const endpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const endpoint1 = "https://striveschool-api.herokuapp.com/api/profile/";
// const endpoint2 = "https://striveschool-api.herokuapp.com/api/profile/:";
const endpoint3 = "https://striveschool-api.herokuapp.com/api/profile/";

export const getMeProfileAction = () => {
  return (dispatch) => {
    fetch(endpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
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

export const getProfileAction = () => {
  return (dispatch) => {
    fetch(endpoint1, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
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
          type: GET_PROFILE,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const getUserIdAction = (userId) => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
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
          type: GET_USER_ID_PROFILE,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const editProfileAction = (id, editProfile) => {
  return (dispatch) => {
    fetch(endpoint3 + id, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
      },
      body: JSON.stringify(editProfile),
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
          type: EDIT_PROFILE,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

// ---------------------------------------------------------------------

// Actions e API per il componente MyEsperienza

export const GET_LIST_EXPERIENCES = "GET_LIST_EXPERIENCES";
export const ADD_NEW_EXPERIENCES = "ADD_NEW_EXPERIENCES";
export const GET_ID_EXPERIENCES = "GET_ID_EXPERIENCES";
export const EDIT_EXPERIENCES = "EDIT_EXPERIENCES";
export const DELETE_EXPERIENCES = "DELETE_EXPERIENCES";

// const endpointEXP1 =
//   "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences";
// const endpointEXP2 =
//   "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences";
// const endpointEXP3 =
//   "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId";
// const endpointEXP4 =
//   "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId";
// const endpointEXP5 =
//   "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId";

export const getExperiencesAction = (idUser) => {
  console.log(idUser);

  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
      }
    )
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
          type: GET_LIST_EXPERIENCES,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const addNewExperiencesAction = (idUser, newExp) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
        body: JSON.stringify(newExp),
      }
    )
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
          type: ADD_NEW_EXPERIENCES,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const getIdExperiencesAction = (idUser, idEXP) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/:${idEXP}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
      }
    )
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
          type: GET_ID_EXPERIENCES,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const editExperiencesAction = (idUser, idEXP, editData) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/:${idEXP}`,
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
        body: JSON.stringify(editData),
      }
    )
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
          type: EDIT_EXPERIENCES,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const deleteExperiencesAction = (idUser, idEXP) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/${idEXP}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
      }
    )
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
          type: DELETE_EXPERIENCES,
          payload: idEXP,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};
