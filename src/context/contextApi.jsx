import { useState, createContext, useEffect } from "react";

import { fetchDataFromApi } from "../../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState("false");
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategroies] = useState("new");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectCategoriesData(selectCategories);
  }, [selectCategories]);

 
  const fetchSelectCategoriesData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`)
      .then(({ contents }) => {
        setSearchResults(contents);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSelectCategroies,
        selectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
