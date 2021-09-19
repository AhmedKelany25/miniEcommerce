import { configureStore } from "@reduxjs/toolkit";
import ProducsSlice from "./Products-slice";

const store = configureStore({ reducer: ProducsSlice.reducer });

export default store;
