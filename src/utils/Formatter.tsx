export const ParseToPHP = (number: number): string =>
  Intl.NumberFormat("fil-PH", { style: "currency", currency: "PHP" }).format(
    number
  );
