import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useFilter(data) {
  const { categoryId, query } = useSelector((state) => state.filter);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (game) => game.categoryIds.includes(categoryId) && game.name.toLowerCase().indexOf(query) !== -1
      );
      setFilteredData(filteredData);
    }
  }, [data, categoryId, query]);

  return filteredData;
}

export default useFilter;
