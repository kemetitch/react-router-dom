import { InputHTMLAttributes } from "react";
interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      className="border-2 bg-transparent w-[300px] focus:ring-1 border-gray-300 shadow-md focus:outline-none rounded-md p-2 text-md"
      {...rest}
    ></input>
  );
};

export default Input;
