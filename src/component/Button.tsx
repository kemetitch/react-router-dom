import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  width?: string;
}
const Button = ({ children, className, width, ...rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} p-2 text-white rounded-md bg- `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
