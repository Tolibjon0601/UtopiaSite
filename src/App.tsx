import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/layouts"
import HomePage from "./pages/home/home"
import LoginPage from "./pages/login/login"
import AuthPage from "./pages/auth/auth"
import AuthContextProvider from "./pages/authcontext/authcontext"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


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
	<AuthContextProvider>
   <RouterProvider router={router} />
   <ToastContainer />
   </AuthContextProvider>
   </>
  )
}

export default App
