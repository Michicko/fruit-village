import React, { useState } from "react";
import PersonalPageContext from "../contexts/PersonalPageContext";

interface PersonalPageProviderPropTypes {
  children: React.ReactNode;
}

const PageContext = PersonalPageContext;

export default function PersonalPageProvider({
  children,
}: PersonalPageProviderPropTypes) {
  const [pageTitle, setPageTitle] = useState("");

  return (
    <PageContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageContext.Provider>
  );
}
