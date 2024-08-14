import { useEffect, useRef } from "react";

type CatalogMenuProps = {
  isCatalogMenuOpened: boolean;
  setIsCatalogMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CatalogMenu({
  isCatalogMenuOpened,
  setIsCatalogMenuOpened,
}: CatalogMenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeCatalogMenu = (event: React.MouseEvent<Element, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    if (
      target.classList.contains("catalog-menu") ||
      target.classList.contains("catalog-menu__link")
    ) {
      return;
    }
    setIsCatalogMenuOpened(false);
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (isCatalogMenuOpened && menu) {
      menu.classList.add("catalog-menu--show");
      menu.focus();
    }
  }, [isCatalogMenuOpened]);

  return (
    <div className="nav__catalog-menu" onClick={closeCatalogMenu}>
      <div className="catalog-menu" tabIndex={1} ref={menuRef}>
        
      </div>
    </div>
  );
}
