import { useContext } from "react";
import { UserContext } from "./UserContext";

function useAuth() {
  return useContext(UserContext);
}

export default useAuth;
