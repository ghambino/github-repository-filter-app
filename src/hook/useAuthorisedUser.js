import { useQuery } from "@apollo/client";
// import { useState, useEffect } from "react";
import { checkAuthorizedUser } from "../graphql/queries";

const useAuthorizedUser = () => {
    const {data} = useQuery(checkAuthorizedUser);
    return {
        authorisedUser: data ? data.authorizedUser : undefined
    }
}

export default useAuthorizedUser