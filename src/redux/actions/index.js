// Actions e API per la pagina profilo

export const GET_MEPROFILE = "GET_MEPROFILE";
export const GET_PROFILE = "GET_PROFILE";
export const GET_USER_ID_PROFILE = "GET_USER_ID_PROFILE";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const ADD_NEW_IMAGE_PROFILE = "ADD_NEW_IMAGE_PROFILE";

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
        return resData;
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
export const ADD_NEW_IMAGE = "ADD_NEW_IMAGE";
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
  // console.log(idUser);

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
    return fetch(
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
        if (response.ok) return response.json();
        throw new Error("Errore nel recupero dei dati");
      })
      .then((resData) => {
        dispatch({ type: ADD_NEW_EXPERIENCES, payload: resData });
        return resData;
      })
      .catch((err) => {
        console("ERRORE CARICAMENTO DATI", err);
      });
  };
};

export const getIdExperiencesAction = (idUser, idEXP) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/${idEXP}`,
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
export const addImageExperiencesAction = (idUser, idEXP, file) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("experience", file);

    return fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/${idEXP}/picture`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Errore nel caricamento dell'immagine");
      })
      .then((resData) => {
        dispatch({ type: ADD_NEW_IMAGE, payload: resData });
        return resData;
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
};
export const addImageProfileAction = (idUser, file) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("profile", file);

    return fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/picture`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Errore nel caricamento dell'immagine");
      })
      .then((resData) => {
        dispatch({ type: ADD_NEW_IMAGE_PROFILE, payload: resData });
        return resData;
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
};

export const editExperiencesAction = (idUser, idEXP, editData) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/${idEXP}`,
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

// ----------------------- SEZIONE PER I POST ---------------------------

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

// ------------------------- TOKEN -----------------------------------

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A";

// ------------------------- ENDPOINT -----------------------------------

export const BASE_URL = "https://striveschool-api.herokuapp.com/api";
export const POSTS_ENDPOINT = `${BASE_URL}/posts/`;

// ------------------------- ACTIONS -----------------------------------

export const getPostsAction = () => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    fetch(POSTS_ENDPOINT, {
      headers: {
        Authorization: TOKEN,
        "Content-Type": "aplication/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei post");
        }
      })
      .then((posts) => {
        console.log("Ecco i post", posts);
        dispatch({
          type: GET_POSTS,
          payload: posts,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  };
};

export const getPostAction = (postId) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    fetch(`${POSTS_ENDPOINT}${postId}`, {
      headers: {
        Authorization: TOKEN,
        "Content-Type": "aplication/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei post");
        }
      })
      .then((posts) => {
        console.log("Ecco post", posts);
        dispatch({
          type: GET_POSTS,
          payload: posts,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  };
};

export const createPostAction = (postData) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    return fetch(POSTS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella creazione del post");
        }
      })
      .then((post) => {
        console.log("Post Creato", post);
        dispatch({
          type: CREATE_POST,
          payload: post,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        // ritorno tutti i post aggiornati
        dispatch(getPostsAction());
        return post;
      })
      .catch((err) => {
        console.log("Errore nella creazione del post", err);
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  };
};

export const updatePostAction = (postId, postData) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    fetch(`${POSTS_ENDPOINT}${postId}`, {
      method: "PUT",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella modifica del post");
        }
      })
      .then((post) => {
        console.log("Post modificato", post);
        dispatch({
          type: UPDATE_POST,
          payload: post,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        console.log("Errore nella modifica del post", err);
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  };
};

export const deletePostAction = (postId, postData) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    fetch(`${POSTS_ENDPOINT}${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nell'eliminazione del post");
        }
      })
      .then((post) => {
        console.log("Post eliminato", post);
        dispatch({
          type: DELETE_POST,
          payload: postId,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        console.log("Errore nell'eliminazione del post", err);
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  };
};

// Action e API per il componente Jobs

export const GET_JOBS = "GET_JOBS";
export const GET_SINGLE_JOB = "GET_SINGLE_JOB";
export const GET_JOB_COMPANY = "GET_JOB_COMPANY";
export const GET_JOB_CATEGORY = "GET_JOB_CATEGORY";
export const GET_JOB_LOADING = "GET_JOB_LOADING";

const endpointJobs = "https://strive-benchmark.herokuapp.com/api/jobs";
// const endpointSingleJob =
//   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const getJobLoadingAction = () => {
  return {
    type: GET_JOB_LOADING,
    payload: true,
  };
};

export const getJobsAction = () => {
  return (dispatch) => {
    dispatch(getJobLoadingAction());
    fetch(endpointJobs, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Chiamata all'API partita...");
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_JOBS,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const getSingleJobAction = (job) => {
  return (dispatch) => {
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${job}&`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Chiamata all'API partita...");
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_SINGLE_JOB,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const getJobCompanyAction = (companyName) => {
  return (dispatch) => {
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Chiamata all'API partita...");
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_JOB_COMPANY,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};

export const getJobCategoryAction = (category) => {
  return (dispatch) => {
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=10`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI3MDkwNDU2MzA1YzAwMTU1ODgzNWUiLCJpYXQiOjE3NTY4OTE3NTUsImV4cCI6MTc1ODEwMTM1NX0.skqYZbKAEApzCmv3qMX16r4brfb7aYAG9Y8LbwzJl9A",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Chiamata all'API partita...");
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_JOB_CATEGORY,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("ERRROR: ", err);
      });
  };
};
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

// -------------------------------- Action Immagini ----------------------

export const uploadPostImageAction = (postId, formData) => {
  return (dispatch) => {
    dispatch({ type: SET_ERROR, payload: true });

    fetch(`${POSTS_ENDPOINT}/${postId}`, {
      method: "POST",
      headers: {
        Authorization: TOKEN,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nell'upload dell'immagine");
        }
      })
      .then((data) => {
        console.log("Immagine Caricata", data);
        dispatch({
          type: UPLOAD_IMAGE,
          payload: data,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        console.log("errore nel caricamento immagine", err);
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  };
};

// commentActionTypes.js
export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST";
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
export const UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE";

export const DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN2 =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGJhYWQ1YjkxMjgyMTAwMTU0NGRiNDUiLCJpYXQiOjE3NTcwNjQ1MzksImV4cCI6MTc1ODI3NDEzOX0.-5BBVWJklnR6wC_CLlqQYPnSyJ8Fib_ddWbc86oP7nw";

export const getComments = () => (dispatch) => {
  dispatch({ type: GET_COMMENTS_REQUEST });

  fetch(`${API_URL}`, {
    headers: {
      Authorization: TOKEN2,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nel fetch dei commenti");
      return res.json();
    })
    .then((data) => {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: data.slice(-15).reverse(),
      });
    })
    .catch((err) => {
      dispatch({ type: GET_COMMENTS_FAILURE, payload: err.message });
    });
};

export const addComment = (commentData) => (dispatch) => {
  dispatch({ type: ADD_COMMENT_REQUEST });

  fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: TOKEN2,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nell’aggiunta del commento");
      return res.json();
    })
    .then((data) => {
      dispatch({ type: ADD_COMMENT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: ADD_COMMENT_FAILURE, payload: err.message });
    });
};

export const updateComment = (commentId, updatedData) => (dispatch) => {
  dispatch({ type: UPDATE_COMMENT_REQUEST });

  fetch(`${API_URL}${commentId}`, {
    method: "PUT",
    headers: {
      Authorization: TOKEN2,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nell’aggiornamento del commento");
      return res.json();
    })
    .then((data) => {
      dispatch({ type: UPDATE_COMMENT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_COMMENT_FAILURE, payload: err.message });
    });
};

// 🔹 DELETE COMMENT
export const deleteComment = (commentId) => (dispatch) => {
  dispatch({ type: DELETE_COMMENT_REQUEST });

  fetch(`${API_URL}${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: TOKEN2,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nell’eliminazione del commento");
      dispatch({ type: DELETE_COMMENT_SUCCESS, payload: commentId });
    })
    .catch((err) => {
      dispatch({ type: DELETE_COMMENT_FAILURE, payload: err.message });
    });
};
