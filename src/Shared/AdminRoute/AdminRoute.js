import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Loading";

const AdminRoute = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user);


    const location = useLocation()

    if(loading || adminLoading){
        return <Loading/>
    }
    if(!user || !admin){
        signOut(auth)
        localStorage.removeItem('accessToken')
        return <Navigate to='/login' state= {{from:location}} replace/>
    }
   
    return children

}
export default AdminRoute;