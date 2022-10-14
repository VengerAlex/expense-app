export const showErrorText = (errors: any, value: string) => {
  return errors[value]?.message ? errors[value]?.message : " ";
};
