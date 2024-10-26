import styles from "./CatalogDialog.module.css";
import { catalogue } from "../../data";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Grid from "../../assets/icons/grid-4.svg?react";
import Dialog from "../Dialog/Dialog";

interface CatalogDialogMenuProps {
  showCatalogModal: boolean;
  setShowCatalogModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CatalogDialogMenu({
  showCatalogModal,
  setShowCatalogModal,
}: CatalogDialogMenuProps) {
  const catalogMenu = [
    { id: uuid(), name: "All goods", url: "/sale" },
    ...catalogue,
  ];

  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  const closeCatalogModal = () => setShowCatalogModal(false);

  return (
    <Dialog
      showModal={showCatalogModal}
      setShowModal={setShowCatalogModal}
      id="catalog-dialog"
    >
      <div className={styles["catalog-menu"]} onBlur={closeCatalogModal}>
        {catalogMenu.map((catalog) => {
          return (
            <Link
              to={catalog.url}
              key={catalog.id}
              className={`${styles["catalog-link"]} ${
                catalog.name === "All goods" ? styles["with-icon"] : ""
              } ${pathname === catalog.url ? styles.active : ""}`}
              onMouseDown={(e) => e.preventDefault()} // prevents onBlur from firing first
              onClick={closeCatalogModal}
            >
              {catalog.name === "All goods" && (
                <Grid className={`${styles.icon} icon`} />
              )}
              {catalog.name}
            </Link>
          );
        })}
      </div>
    </Dialog>
  );
}
