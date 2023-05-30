import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnyAction, ThunkMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../components/user.js";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

const store: ToolkitStore<
  {
    user: {
      value: {
        email: string;
      };
    };
  },
  AnyAction,
  [
    ThunkMiddleware<
      {
        user: {
          value: {
            email: string;
          };
        };
      },
      AnyAction
    >
  ]
> = configureStore({
  reducer: {
    user: userReducer,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
