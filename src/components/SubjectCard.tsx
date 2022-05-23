import { FC, MouseEventHandler } from "react";
import { SubjectType } from "../types";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  card: SubjectType;
};

const SubjectCard: FC<Props> = ({ onClick, card }) => {
  return (
    <div className="border-[1.4px] border-primary-300 rounded-sm">
      <button className="relative overflow-hidden w-full" onClick={onClick}>
        <div className="absolute bottom-0 p-2 flex justify-between w-full z-[2] ">
          <span className="font-medium text-sm text-white tracking-wider   ">
            {card?.name}
          </span>
          <div className="flex gap-2">
            <span className=" text-sm text-white tracking-wide">Duration</span>
            <span className=" font-medium text-sm text-white ">20 min</span>
          </div>
        </div>
        <img
          className="object-cover block w-full h-full opacity-90 hover:opacity-100 transition     hover:scale-110"
          src={
            "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          }
        />
      </button>

      <div className="p-3 flex justify-between items-center">
        <div className="flex gap-2">
          <span className="font-medium text-sm">Total Questions</span>
          <span className="font-semibold text-sm">10</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium text-sm">Total Marks</span>
          <span className="font-semibold text-sm">30</span>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
