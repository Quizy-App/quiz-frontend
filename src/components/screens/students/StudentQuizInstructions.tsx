import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton";

const StudentQuizInstructions = () => {
  const navigate = useNavigate();
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {/* Welcome Heading */}
      <section className="py-6">
        <h1 className="text-2xl font-medium text-center">All The Best</h1>
      </section>

      {/* Subject cards */}
      <section className="p-6 border-[1.4px] border-blue-400 max-w-3xl mx-auto rounded-sm">
        <div>
          <h3 className="font-semibold text-xl text-center text-blue-600">
            Instructions
          </h3>
          <div className=" max-w-xl  ">
            <ul className="mt-4 list-disc">
              <li className="text-sm font-medium ">
                All questions are compulary
              </li>
              <li className="text-sm  font-medium">No Negative markings</li>
            </ul>
          </div>
          <CustomButton
            onClick={() => navigate("/student/quiz")}
            buttonLabel="Attempt Quiz"
            classNames="text-sm font-medium tracking-widest mt-4"
          />
        </div>
      </section>
    </main>
  );
};

export default StudentQuizInstructions;
