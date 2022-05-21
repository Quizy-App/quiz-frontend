import cn from "classnames";
import { overrideTailwindClasses as ov } from "tailwind-override";
import { FC } from "react";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

type Props = {
  subject: string;
  className?: string;
};
const AddedSubjectCard: FC<Props> = ({ subject, className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={ov(
        cn(
          "p-4 border-[1.5px] border-primary-300 rounded-sm flex flex-col justify-between items-center",
          className
        )
      )}
    >
      <h1 className="text-2xl font-semibold mt-3 capitalize">{subject}</h1>

      <CustomButton
        onClick={() => navigate("/teacher/auth/add_que")}
        buttonLabel="Add Questions"
        classNames="text-sm font-medium tracking-wider"
      />
    </div>
  );
};

export default AddedSubjectCard;
