import { FC, ReactNode } from "react";
import cn from "classnames";

import { overrideTailwindClasses as ov } from "tailwind-override";
type Props = {
  onClick: Function;
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
      onClick={() => onClick()}
      disabled={disabled}
      className={cn(
        ov(
          `block bg-primary-500 w-full text-xs tracking-wide capitalize transition duration-300 hover:bg-primary-300  scale-100 text-white my-6 rounded-sm  py-[0.7rem] ${classNames}`
        ),

        {
          "opacity-0 pointer-events-none scale-0": hide,
        },
        {
          "bg-slate-200 pointer-events-none": disabled,
        }
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