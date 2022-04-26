import { configureStore } from "@reduxjs/toolkit";
import globalStateReducer from "../features/globalState/globalStateSlice";


export const store = configureStore({
    reducer: {
        entertainment_app: globalStateReducer
    }
})