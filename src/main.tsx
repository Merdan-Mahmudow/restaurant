import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import "./styles/index.css"
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
 

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8pRk9U-DWZBkj_j525YQXaj5o6k_Nf24",
  authDomain: "kimchistop-fb0a6.firebaseapp.com",
  projectId: "kimchistop-fb0a6",
  storageBucket: "kimchistop-fb0a6.firebasestorage.app",
  messagingSenderId: "125767968875",
  appId: "1:125767968875:web:6b4faf2efd8660cc4ba92e",
  measurementId: "G-X97RNWT8CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
