import { useState, useEffect } from "react";
import axios from "axios";

function useFetchState(apiUrl, isLoading = false) {
  const [state, setState] = useState(apiUrl);
  const [loaded, setLoaded] = useState(isLoading);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(apiUrl)
        .then((res) => {
          setState(res.data);
          setLoaded(true);
        })
        .catch((err) =>
          alert(
            "Cant Load Data ⚫⚪️️⚫ " +
              err +
              " ⚫⚪️️⚫ Try Again Later ~weekend team"
          )
        );
    };
    fetchData();
  }, []);

  return [state, loaded];
}

export default useFetchState;
