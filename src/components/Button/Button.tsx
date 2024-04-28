import { HTMLAttributes } from "react";
import { ButtonSizeType, ButtonVariantType, ButtonsType } from "./ButtonT";

const CartButton = (props: ButtonsType & HTMLAttributes<HTMLButtonElement>) => {

  const { bgColor, children, icon, size, ...otherProps } = props;
  const defaultBtn = 'bg-primary text-white px-3 py-2 text-xs font-medium text-center rounded-lg'

  const variantObj = {
    primary: "bg-primary text-white rounded-lg",
    secondary: "bg-secondary text-white rounded-lg",
    success: "bg-success text-white rounded-lg",
    danger: "bg-danger text-white rounded-lg",
  };

  const sizeObj = {
    xs: "px-3 py-2 text-xs font-medium",
    sm: "px-3 py-2 text-sm font-medium",
    md: "px-5 py-2.5 text-md font-medium",
    lg: "px-5 py-3 text-lg font-medium",
    xl: "px-6 py-3.5 text-xl font-medium"
  };

  const btnVariant = variantObj[bgColor as ButtonVariantType];
  const btnSize = sizeObj[size as ButtonSizeType];

  return (
    <button
      className={`
    ${!otherProps.className && !props && defaultBtn}
    ${btnVariant ?? 'bg-primary text-white px-3 py-2 text-xs font-medium text-center rounded-lg'}
    ${btnSize ?? 'text-sm'}
    ${otherProps}
    flex justify-center items-center gap-1
    `}
    {...otherProps}
    >
      {icon}
      {children}
    </button>
  );
};

export default CartButton;
