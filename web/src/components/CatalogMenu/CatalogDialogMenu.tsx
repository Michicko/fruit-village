import { useCallback, useEffect, useRef } from "react";
import styles from "./CatalogDialog.module.css";
import { catalogue } from "../../data";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Grid from "../../assets/icons/grid-4.svg?react";

interface CatalogDialogMenuProps {
  showCatalogModal: boolean;
  setShowCatalogModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CatalogDialogMenu({
  showCatalogModal,
  setShowCatalogModal,
}: CatalogDialogMenuProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const catalogMenu = [
    { id: uuid(), name: "All goods", url: "/sale" },
    ...catalogue,
  ];

  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  const showModal = useCallback(() => {
    // if (showCatalogModal) return;
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setShowCatalogModal(true);
    }
  }, [setShowCatalogModal]);

  const closeModal = useCallback(() => {
    if (!showCatalogModal) return;
    if (dialogRef.current) {
      dialogRef.current.close();
      setShowCatalogModal(false);
    }
  }, [setShowCatalogModal, showCatalogModal]);

  useEffect(() => {
    if (showCatalogModal) {
      showModal();
    }
  }, [showCatalogModal, showModal]);

  return (
    <dialog
      id={"catalog-dialog"}
      className={styles.dialog}
      ref={dialogRef}
      onClick={closeModal}
    >
      <div className={styles["catalog-menu"]}>
        {catalogMenu.map((catalog) => {
          return (
            <Link
              to={catalog.url}
              key={catalog.id}
              className={`${styles["catalog-link"]} ${
                catalog.name === "All goods" ? styles["with-icon"] : ""
              } ${pathname === catalog.url ? styles.active : ""}`}
            >
              {catalog.name === "All goods" && (
                <Grid className={`${styles.icon} icon`} />
              )}
              {catalog.name}
            </Link>
          );
        })}
      </div>
    </dialog>
  );
}
