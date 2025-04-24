// //for basic js x old procedure and still used by many organization
// import { useState } from 'react'
// import './App.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './Home'

// function App() {

//   return (
  
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Home/>}  />
//       <Route path="/contact" element={<h2>this is a contact page</h2>}  />
//       <Route path="/about" element={<h1>this is about page </h1>}  />
//     </Routes>
//     </BrowserRouter>
    
//   )
// }

// export default App


// new method  here the new file Routes.jsx responsile for the routing
import { useState } from 'react'
// import './App.css' 
import { RouterProvider } from 'react-router-dom'
import router from  './Routes'
function App() {
  return(
    <RouterProvider router={router} />
  )
 
}

export default App