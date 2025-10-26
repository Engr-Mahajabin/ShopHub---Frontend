import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ClerkProvider } from '@clerk/clerk-react'

// const clerk_key = import.meta.env.VITE_CLERK_KEY;
// console.log("Clerk key is:", clerk_key);

// if (!clerk_key) {
//   throw new Error("VITE_CLERK_KEY is missing");
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ClerkProvider publishableKey={clerk_key}> */}
    <App />
    {/* </ClerkProvider> */}
  </StrictMode>,
)
