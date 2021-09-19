const { createSlice } = require("@reduxjs/toolkit");

const ProducsSlice = createSlice({
  name: "products",
  initialState: { products: "" },
  reducers: {
    productInfo(state, action) {
      const product ="" ; 
      state.product = action.payload

    }
  },
});

export const ProductName = ProducsSlice.actions;

export default ProducsSlice;
