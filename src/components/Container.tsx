import { ReactNode, FC } from "react";
import { overrideTailwindClasses as override } from 'tailwind-override'

type Props = {
  children: ReactNode;
  className?: string
};

const Container: FC<Props> = ({ children, className }) => {
  return <div className={override(`container ${className}`)}>{children}</div>;
};

export default Container;
