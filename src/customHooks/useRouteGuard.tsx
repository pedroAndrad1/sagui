/* eslint-disable react-hooks/rules-of-hooks */
import { NextRouter, useRouter } from "next/dist/client/router";
import { useUserContext } from "../contexts/UserContext";

function routeGuard(router: NextRouter){
    const {logado} = useUserContext();
    if(!logado) router.push("/login");
}

export default routeGuard;