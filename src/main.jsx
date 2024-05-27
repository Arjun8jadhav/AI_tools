import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/context.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { Secure } from './secure.jsx'
const {VITE_CLERK_PUBLISHABLE_KEY} = import.meta.env;
const publisherKey=VITE_CLERK_PUBLISHABLE_KEY;
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <ClerkProvider publishableKey={publisherKey}>
    <Secure/>
  </ClerkProvider>
  </ContextProvider>,
)
