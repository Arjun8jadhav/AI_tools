import { SignIn, SignInButton,SignedIn,SignedOut,UserButton } from '@clerk/clerk-react'
import React from 'react'
import App from './App'
import { Landing } from './compnents/landing/landing'
export const Home = () => {
  return (
    <div>
     
      <SignedOut>
        <Landing/>
      </SignedOut>
      <SignedIn>
        <App/>
      </SignedIn>
    </div>
  )
}
