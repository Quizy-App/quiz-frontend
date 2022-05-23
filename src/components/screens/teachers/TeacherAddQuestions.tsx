import React, { useEffect, useState } from "react";
import CustomButton from "../../CustomButton";
import cn from "classnames";
import { overrideTailwindClasses as ov } from "tailwind-override";
import { useAppSelector } from "../../../hooks/stateHooks";
import { useMutation } from "react-query";
import { addQues } from "../../../fetchers/teacher";
const TeacherAddQuestions = () => {
  const { subjectId } = useAppSelector((state) => state.teacher);

  const [mark, setMark] = useState(0);

  type ChoiceType = {
    label: string;
    title: string;
    isPreferred: boolean;
    questionId: string;
  };

  const [choice, setChoice] = useState<ChoiceType[]>([
    {
      label: "one",
      title: "",
      isPreferred: false,
      questionId: "",
    },
    {
      label: "two",
      title: "",
      isPreferred: false,
      questionId: "",
    },
    {
      label: "three",
      title: "",
      isPreferred: false,
      questionId: "",
    },
    {
      label: "four",
      title: "",
      isPreferred: false,
      questionId: "",
    },
  ]);

  const [question, setQuestion] = useState("");
  type Answer = {
    name: string;
    text: string;
  };
  const [answers, setAnswers] = useState<Answer[]>([]);

  const { mutate } = useMutation(addQues, {
    onSuccess(data) {
      console.log(data);
      setQuestion("");
    },
  });

  const addQuestion = () => {
    if (question.length > 10 && mark) {
      mutate({
        title: question,
        marks: mark,
        subjectid: subjectId,
      });
    }
  };

  const handleChange = (label: string, val: string) => {
    // setChoice(choice.map(v => v.label === label?{...v,title: val,questionId:subjectId} : choice));
  };

  const radioButtonChange = (label: string, radioValue: boolean) => {
    // setChoice(
    //   choice.map((c => c.label === label ? {
    //     ...c,
    //     isPreferred:radioValue,
    //   } : choice
    //   ))
    // )
  };
  useEffect(() => {
    setMark(1);
  }, []);

  useEffect(() => {
    console.log(mark, answers);
  }, [mark, answers]);

  const questionOptions = [{}];
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
            This question will carry{" "}
            <select
              defaultValue={1}
              className=" border-[2px] border-blue-500 rounded-sm   mx-2"
              onChange={(e) => {
                console.log(e.currentTarget.value);
                setMark(Number(e.currentTarget.value));
              }}
            >
              <option disabled className="font-semibold">
                Select marks
              </option>
              {[1, 2, 3, 4, 5].map((year, i) => (
                <option className="font-semibold" value={year} key={i}>
                  {year}
                </option>
              ))}
            </select>{" "}
            marks
          </h6>
        </div>

        {!!mark ? (
          <section className="p-6 border-[1.4px] border-primary-400 mt-2  rounded-sm mb-6 flex justify-center ">
            <div className="w-[55%]">
              <h2 className="font-medium mb-2">Question</h2>

              <div className="flex flex-col">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full border-[1.4px] border-gray-400 rounded-sm text-gray-600 py-1 px-2"
                ></textarea>
                <CustomButton
                  buttonLabel="Add Question"
                  onClick={addQuestion}
                  classNames="text-sm font-medium tracking-wider my-4"
                  disabled={question.length < 10}
                />
              </div>

              {/* Choices */}
              <section>
                {choice.map((v, i) => (
                  <div className="my-2" key={i}>
                    <label htmlFor="" className="block">
                      Choice {i + 1}
                    </label>
                    <div className="flex gap-6 items-center mt-2">
                      <input
                        onChange={(e) =>
                          radioButtonChange(v.label, e.target.checked)
                        }
                        type="radio"
                        name="answer"
                        // checked={v===}
                        className="w-5 h-5"
                      />

                      <input
                        type="text"
                        name={"input" + v}
                        onChange={(e) =>
                          handleChange(v.label, e.currentTarget.value)
                        }
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
        ) : (
          <div className="text-center pt-6">
            <h2 className="text-2xl text-gray-500">Please select a marks</h2>
          </div>
        )}
      </section>
    </main>
  );
};

export default TeacherAddQuestions;
