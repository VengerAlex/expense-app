export const showErrorText = (
  errors: any,
  value: string,
  fieldValue?: string,
) => {
  return errors[value]?.message && !!fieldValue ? errors[value]?.message : " ";
};
