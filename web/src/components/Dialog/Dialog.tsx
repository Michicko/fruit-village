import React, { useCallback, useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

interface DialogPropTYpes {
  children: React.ReactNode;
  id: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  fullOnMobile?: boolean;
  classNm?: string;
}

export default function Dialog({
  children,
  id,
  showModal,
  setShowModal,
  fullOnMobile,
  classNm,
}: DialogPropTYpes) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const showDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
  }, [setShowModal]);

  const hideDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setShowModal(false);
      document.body.style.overflow = "unset";
    }
  }, [setShowModal]);

  useEffect(() => {
    if (showModal) {
      showDialog();
    } else {
      hideDialog();
    }
  }, [hideDialog, showDialog, showModal]);

  return (
    <dialog
      id={id}
      className={`${styles.dialog} ${
        fullOnMobile ? styles["full-on-mobile"] : ""
      } ${classNm}`}
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}
