import { createContext } from "react";

const PersonalPageContext = createContext({
  pageTitle: "",
  setPageTitle: (_str: string) => {},
});

export default PersonalPageContext;
