import { useContext } from "react";
import PersonalPageContext from "../contexts/PersonalPageContext";

const usePersonalPageContext = () => {
  return useContext(PersonalPageContext);
};

export default usePersonalPageContext;
