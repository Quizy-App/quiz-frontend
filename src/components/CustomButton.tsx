import { FC, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";

import { overrideTailwindClasses as ov } from "tailwind-override";
type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  classNames?: string;
  buttonLabel: string;
  hide?: boolean;
  jsx?: boolean;
  iconContainer?: string;
  children?: ReactNode;
  disabled?: boolean;
};
const CustomButton: FC<Props> = ({
  children,
  iconContainer,
  buttonLabel,
  onClick,
  classNames,
  hide = false,
  jsx,
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={ov(
        cn(
          `block bg-primary-500 w-full  tracking-wide capitalize transition duration-300 hover:bg-primary-300  scale-100 text-white mb-2 rounded-sm  py-[0.7rem]  text-sm font-medium  ${classNames}`,
          // {
          //   "opacity-0 pointer-events-none scale-0": ,
          // },
          {
            "bg-slate-200 pointer-events-none": disabled,
          }
        )
      )}
    >
      {jsx ? (
        <div
          className={cn("flex gap-3 items-center", {
            iconContainer,
          })}
        >
          {children}
          {buttonLabel}
        </div>
      ) : (
        buttonLabel
      )}
      {/* {buttonLabel} */}
    </button>
  );
};

export default CustomButton;
