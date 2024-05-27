import{
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom"
import App from "./App"
import { Home } from "./Home"
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react"

  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home/>}/>
      </>
    )
  )

  
  export const Secure = () => {
    return (
      <RouterProvider router={router}/>
    )
  }
  