import { createStore } from "redux";

const initialState = {
  totalData: 0,
  totalHarga: 0,
  totalKategori: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOTAL_DATA":
      return { ...state, totalData: action.payload };
    case "TOTAL_HARGA":
      return { ...state, totalHarga: action.payload };
    case "TOTAL_KATEGORI":
      return { ...state, totalKategori: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
