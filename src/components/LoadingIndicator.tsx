import cn from "classnames";
import { overrideTailwindClasses as ov } from "tailwind-override";
const LoadingIndicator = ({
  className,
  parentClass,
}: {
  className?: string;
  parentClass?: string;
}) => {
  return (
    <div
      className={ov(cn("flex justify-center items-center mt-5 ", parentClass))}
    >
      <div className={ov(cn(" w-[35px] h-[35px] loader ", className))}></div>
    </div>
  );
};

export default LoadingIndicator;
