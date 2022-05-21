import React from "react";
import CustomButton from "../../CustomButton";
import cn from "classnames";
import { overrideTailwindClasses as ov } from "tailwind-override";
const TeacherAddQuestions = () => {
  return (
    <main className="max-w-7xl mx-auto">
      {/* Welcome Heading */}
      <section>
        <div className="flex  flex-col justify-between py-4 gap-3">
          <h1 className="text-3xl font-medium">Welcome Teacher</h1>
          <h3 className="font-medium">
            Add choices for{" "}
            <span className="font-bold tracking-wider">Chemistry</span>
          </h3>
        </div>
      </section>

      <section>
        <div className="flex justify-between">
          <h2 className="font-medium">
            Questions <span>1</span> of <span>10</span>
          </h2>
          <h6 className="text-sm font-medium">
            This question will carry 1 marks
          </h6>
        </div>

        <section className="p-6 border-[1.4px] border-primary-400 mt-2  rounded-sm mb-6 flex justify-center ">
          <div className="w-[55%]">
            <h2 className="font-medium mb-2">Question</h2>

            <div className="flex flex-col">
              <textarea
                name=""
                id=""
                className="w-full border-[1.4px] border-gray-400 rounded-sm text-gray-600 py-1 px-2"
              ></textarea>
              <CustomButton
                buttonLabel="Add Question"
                onClick={() => "x"}
                classNames="text-sm font-medium tracking-wider"
              />
            </div>

            {/* Choices */}
            <section>
              {[1, 2, 3, 4].map((v, i) => (
                <div className="my-2" key={i}>
                  <label htmlFor="" className="block">
                    Choice {i + 1}
                  </label>
                  <div className="flex gap-6 items-center mt-2">
                    <input
                      type="radio"
                      name="answer"
                      id=""
                      className="w-5 h-5"
                    />

                    <input
                      type="text"
                      name=""
                      id=""
                      className={ov(
                        cn(
                          "border-1 border-gray-400 py-2 px-2  rounded-sm text-gray-500 w-full"
                        )
                      )}
                    />
                  </div>
                </div>
              ))}
            </section>

            <CustomButton
              buttonLabel="Submit and Next"
              onClick={() => "x"}
              classNames="text-sm font-medium tracking-wider bg-white text-primary-500 border-[1.4px] border-primary-500 hover:bg-primary-300"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default TeacherAddQuestions;
