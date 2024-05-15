import { Outlet } from "react-router-dom";
import Login from "./components/Login";

const useAuth = () => {
    const user = {loggedIn: sessionStorage.getItem("isLoggedIn") === "true"}
    return user && user.loggedIn;

}
const ProtectedRoutes = () => {
    const isAuth = useAuth(); 
    return( isAuth ? <Outlet /> : <Login /> 
      
    )
}

export default ProtectedRoutes
