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
            "https://media.istockphoto.com/photos/and-a-question-and-answer-shot-form-on-wooden-block-picture-id1337475990?s=2048x2048"
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
