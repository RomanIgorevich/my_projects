import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    kyrsValyt: [],
    vremja: "",
  },
  mutations: {
    SET_KYRS_VALYT: (state, data) => {
      state.kyrsValyt = data;
      state.vremja = data.Date.split("")
        .splice(0, 10)
        .join("");
    },
  },
  actions: {
    GET_KYRS_VALYT_IPA({ commit }) {
      return axios
        .get("http://www.cbr-xml-daily.ru/daily_json.js")
        .then((e) => {
          commit("SET_KYRS_VALYT", e.data);
          return e;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    KYRS_VALYT(state) {
      return state.kyrsValyt;
    },
  },
});

export default store;
