export const isFormDataFilled = (form: HTMLFormElement) => {
  if (form) {
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
      if (pair[1] == null || pair[1] == "") return false;
    }
    return true;
  }
};
