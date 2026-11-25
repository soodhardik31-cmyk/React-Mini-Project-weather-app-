import { useContext } from "react";
import UserContext from "../context/UserContext";

function User() {
    const username = useContext(UserContext);

    return <h2>Welcome {username}</h2>
}

export default User;