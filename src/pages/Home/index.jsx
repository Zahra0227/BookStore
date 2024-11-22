import { useContext } from "react";
import { AuthContext } from "../../components/layout";

const HomePage = ()=>{
    const {auth} = useContext(AuthContext);

    return <div>{auth?.token ? "user Logged in" : "HomePage"}</div>
};

export default HomePage;