const SubjectCard = () => {
  return (
    <div className="border-[1px] rounded-sm">
      <div className="relative overflow-hidden">
        <div className="absolute bottom-0 p-2 flex justify-between w-full z-[2] ">
          <span className="font-medium text-xs ">Mechatronic</span>
          <div className="flex gap-2">
            <span className="text-xs font-semibold">Duration</span>
            <span className="font-bold text-xs ">20 min</span>
          </div>
        </div>
        <img
          className="object-cover block w-full h-full opacity-90 hover:opacity-100 transition     hover:scale-110"
          src={
            "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          }
        />
      </div>

      <div className="p-3 flex justify-between items-center">
        <div className="flex gap-2">
          <span className="font-medium text-sm">Total Questions</span>
          <span className="font-semibold text-sm">10</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium text-sm">Total Marks</span>
          <span className="font-semibold text-sm">8</span>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
