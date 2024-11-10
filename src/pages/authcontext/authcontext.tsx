import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

const logout=()=>{
 setIsLogin(false)
 localStorage.removeItem("token")
  toast.success("tizimdan chiqildi")
}
const login=(token)=>
{
 setIsLogin(true)
 localStorage.setItem("token", token)
}
	const [isLogin, setIsLogin] = useState(Boolean(localStorage.getItem("token")));
	return <AuthContext.Provider
  value={{ login, logout,isLogin }}>{children}
  </AuthContext.Provider>;
};

export default AuthContextProvider;
