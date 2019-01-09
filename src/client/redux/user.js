// AXIOS
import axios from "axios";

// API
const Api = "https://reqres.in/api/users";

// ACTION TYPES
export const Add = (first_name, last_name) => {
  return async dispatch => {
    await axios
      .post(`${Api}/add`, {
        first_name,
        last_name
      })
      .then(response => {
        console.log(response.data);
        return dispatch({
          type: "ADD",
          payload: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const Delete = id => {
  return async dispatch => {
    await axios
      .get(`${Api}/delete/${id}`)
      .then(response => {
        console.log(id);
        return dispatch({
          type: "DELETE",
          payload: response.data.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const Show = () => {
  return async dispatch => {
    await axios
      .get(`${Api}`)
      .then(response => {
        return dispatch({
          type: "SHOW",
          payload: response.data.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const ShowOne = id => {
  return async dispatch => {
    await axios
      .get(`${Api}`)
      .then(response => {
        return dispatch({
          type: "SHOW_ONE",
          id: id,
          payload: response.data.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const Update = ({ id, title, content, picture }) => {
  return async dispatch => {
    await axios
      .post(`${Api}/update/${id}`, {
        title,
        content,
        picture
      })
      .then(response => {
        dispatch({
          type: "UPDATE",
          payload: response.data.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const Search = keyword => {
  return async dispatch => {
    await axios
      .get(`${Api}`)
      .then(response => {
        return dispatch({
          type: "SEARCH",
          keyword: keyword,
          payload: response.data.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

// REDUCERS
export default function users(state = { allUser: [] }, action) {
  switch (action.type) {
    case "ADD":
      var insertUser = [...state.allUser, action.payload];
      return {
        ...state,
        allUser: insertUser
      };
    case "SHOW":
      return { ...state, allUser: action.payload };
    case "SHOW_ONE":
      var userFiltered = action.payload.find(user => user.id == action.id);
      console.log(userFiltered);
      return {
        ...state,
        activeUser: userFiltered
      };
    case "UPDATE":
      return {
        ...state,
        allUser: action.payload
      };
    case "DELETE":
      var userFiltered = action.payload.find(user => user.id !== action.id);
      console.log(userFiltered);
      return {
        ...state,
        activeUser: userFiltered
      };
    case "SEARCH":
      var userSearched = action.payload.filter(
        user => user.first_name === action.keyword
      );
      return { ...state, allUser: userSearched };
    default:
      return state;
  }
}
