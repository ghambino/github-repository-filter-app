import { useState, useEffect } from "react";
import { fetchingRepositories } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositories = () => {
    const [allRepository, setAllRepository] = useState();


    const { data } = useQuery(fetchingRepositories, {
        fetchPolicy: 'cache-and-network'
    });
    

   const fetchRepositories = async() => {
    //    setIsLoading(true);

    //    const response = await fetch('http://192.168.43.203:5000/api/repositories')
    //    console.log(response);

        
        // console.log(data.repositories)
        
        // const json = await data.json();

        // console.log(json)

       try {
           setAllRepository(data.repositories)
       }catch(error){
           console.log(error)
       }

   }

   useEffect(() => {
    fetchRepositories()
   },[data])
 
   return {
       allRepository,
       refetchData: fetchRepositories
   }
}

export default useRepositories