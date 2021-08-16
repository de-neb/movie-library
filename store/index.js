export const state = () => ({
  searchedVal: null
});

export const mutations = {
  setSearchedVal(state, searchedVal) {
    state.searchedVal = searchedVal;
  }
};

export const getters = {
  getSearchedVal(state) {
    return state.searchedVal;
  }
};
