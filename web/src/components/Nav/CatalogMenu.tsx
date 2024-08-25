import { useEffect, useRef } from "react";
import { categories } from "../../data";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Grid from "../../assets/icons/grid.svg?react";

type CatalogMenuProps = {
  isCatalogMenuOpened: boolean;
  setIsCatalogMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CatalogMenu({
  isCatalogMenuOpened,
  setIsCatalogMenuOpened,
}: CatalogMenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { pathname: path, search } = useLocation();
  const pathname = path + search;

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

  const cate = [
    {
      category: "all goods",
      link: "/sale",
    },
    ...categories,
  ];

  return (
    <div className="nav__catalog-menu" onClick={closeCatalogMenu}>
      <div className="catalog-menu" tabIndex={1} ref={menuRef}>
        <div className="catalog-menu__links">
          {cate.map((el) => {
            return (
              <Link
                to={el.link}
                key={uuid()}
                className={
                  pathname === el.link
                    ? "catalog-menu__link catalog-menu__link--active"
                    : "catalog-menu__link"
                }
              >
                {el.category === "all goods" && (
                  <Grid className="icon catalog-menu__icon" />
                )}
                <span> {el?.category}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
