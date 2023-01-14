import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(url)
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data)
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;