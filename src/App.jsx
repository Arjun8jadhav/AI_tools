import { Navbar } from "./compnents/navbar/navbar"
import Main from "./compnents/main/main"
import Code from "./compnents/code/main"
import AIImageGenerator from "../image/image";
import { useContext } from "react";
import { Context } from "./context/context";
function App() {
  const {
    navpr,
		setNavpr,
		navco,
		setNavco,
		navimg,
		setNavimg
  } = useContext(Context);

  return (
    <>
       {navpr?<Main/>:null}
       {navimg?
      <AIImageGenerator/>:
       null
       }
      {navco?
      <Code/>:null
       }
     
      
    </>
  )
}

export default App
