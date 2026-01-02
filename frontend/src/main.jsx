// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes/Routes";
// import { AuthProvider } from "./providers/AuthProvider";
// // import { CartProvider } from "./hooks/useCart";
// import "./index.css";
// import CartProvider from "./providers/CartProvider";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <AuthProvider> */}
//     <CartProvider>
//       <RouterProvider router={router} >
//         <AuthProvider></AuthProvider>
//       </RouterProvider>
//     </CartProvider>
//     {/* </AuthProvider> */}
//   </React.StrictMode>
// );




import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "./routes/Routes";
import { store } from "./store/store";

import { AuthProvider } from "./providers/AuthProvider";
import CartProvider from "./providers/CartProvider";

import "./index.css";
import { Toaster } from "react-hot-toast";
// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <React.StrictMode>
    <Toaster position="top-right" />
    <Provider store={store}>
      {/* <AuthProvider> */}
      <CartProvider>
        <Suspense>
          <RouterProvider router={router}>
            <AuthProvider>
              {/* <App /> */}
            </AuthProvider>
          </RouterProvider>
        </Suspense>
      </CartProvider>
      {/* </AuthProvider> */}
    </Provider>
  </React.StrictMode>
  // </BrowserRouter>
);
