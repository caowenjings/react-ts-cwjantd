import React, { useContext } from "react";
import { ThemesContext } from "../App";
const useGetContext = () => {
  return useContext(ThemesContext);
};

export default useGetContext;
