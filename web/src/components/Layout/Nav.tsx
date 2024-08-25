import { useState } from "react";
import CatalogMenu from "../Nav/CatalogMenu";
import MainNav from "../Nav/MainNav";
import SmallNav from "../Nav/SmallNav";

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
