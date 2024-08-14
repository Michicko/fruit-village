import { useState } from "react";
import CatalogMenu from "../Components/Nav/CatalogMenu";
import MainNav from "../Components/Nav/MainNav";
import SmallNav from "../Components/Nav/SmallNav";

export default function Nav() {
  const [isCatalogMenuOpened, setIsCatalogMenuOpened] = useState(false);
  return (
    <nav className="nav">
      {isCatalogMenuOpened && (
        <CatalogMenu
          isCatalogMenuOpened={isCatalogMenuOpened}
          setIsCatalogMenuOpened={setIsCatalogMenuOpened}
        />
      )}
      <SmallNav />
      <MainNav
        isCatalogMenuOpened={isCatalogMenuOpened}
        setIsCatalogMenuOpened={setIsCatalogMenuOpened}
      />
    </nav>
  );
}
