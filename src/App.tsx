import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/layouts"
import HomePage from "./pages/home/home"
import LoginPage from "./pages/login/login"
import AuthPage from "./pages/auth/auth"


const router=createBrowserRouter([
{
path:"/",
element:<MainLayout/>,
children:[
{index:true,element:<HomePage/>},
{path:"login",element:<LoginPage/>},
{path:"auth",element:<AuthPage/>},
]
}
])

function App() {

  return (
   <>

   <RouterProvider router={router} />
   </>
  )
}

export default App
