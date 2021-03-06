import { FC, HTMLProps } from "react";

import cn from "classnames";
import { overrideTailwindClasses as ov } from "tailwind-override";

type CustomProps = {
  label: string;
  type?: string;
  isAlert?: boolean;
  labelClass?: string;
  parentClass?: string;
};

type Props = CustomProps & HTMLProps<HTMLInputElement>;
const CustomInput: FC<Props> = ({
  label,
  type = "text",
  isAlert,
  labelClass,
  parentClass,
  ...props
}) => {
  return (
    <div className={cn("py-2", parentClass)}>
      <label
        htmlFor=""
        className={cn(
          "block text-gray-700 pb-1 font-medium capitalize ",
          {
            "text-red-500  ": isAlert,
          },
          labelClass
        )}
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
