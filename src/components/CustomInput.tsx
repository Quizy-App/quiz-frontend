import { FC, HTMLProps } from "react";

import cn from "classnames";
import { overrideTailwindClasses as ov } from "tailwind-override";
type CustomProps = {
  label: string;
  type?: string;
  isAlert?: boolean;
};

type Props = CustomProps & HTMLProps<HTMLInputElement>;
const CustomInput: FC<Props> = ({
  label,
  type = "text",
  isAlert,
  ...props
}) => {
  return (
    <div className="py-2 ">
      <label
        htmlFor=""
        className={cn("block text-gray-700 pb-1", {
          "text-red-500  ": isAlert,
        })}
      >
        {label}
      </label>
      <input
        {...props}
        type={type}
        name=""
        id=""
        className={ov(
          cn(
            "border-1 border-gray-400 py-2 px-2 w-full rounded-md text-gray-500",
            {
              "border-red-500 ": isAlert,
            }
          )
        )}
      />
    </div>
  );
};

export default CustomInput;
