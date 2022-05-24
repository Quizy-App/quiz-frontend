import { useEffect, useState } from "react";
import CustomButton from "../../CustomButton";
import cn from "classnames";
import { overrideTailwindClasses as ov } from "tailwind-override";
import { useAppSelector } from "../../../hooks/stateHooks";
import { useMutation, useQuery } from "react-query";
import {
  addAnswerRequest,
  addQues,
  fetchAnswerRequest,
  fetchQuestionRequest,
} from "../../../fetchers/teacher";
import { getSubjectsInfo } from "../../../fetchers/getFunction";
import { QuizAns } from "../../../types";
const TeacherAddQuestions = () => {
  const { subjectId } = useAppSelector((state) => state.teacher);
  const [questionSubmitted, setSubmitted] = useState(false);
  const [answerSubmitted, setAnsSubmitted] = useState(false);
  const [questionId, setQuestionId] = useState("");
  const [mark, setMark] = useState(0);
  const [currentNum, setCurrentNum] = useState(1);

  const { data, isLoading: subjectLoading } = useQuery(
    ["subject-info", subjectId],
    ({ queryKey }) => getSubjectsInfo(queryKey[1])
  );

  const { data: quesData, isLoading: quesLoading } = useQuery(
    ["question", currentNum, subjectId],
    ({ queryKey }) =>
      fetchQuestionRequest({
        subject: queryKey[2].toString(),
        questionNo: Number(queryKey[1]),
      })
  );

  const { data: ansData, isLoading: ansLoading } = useQuery(
    ["answers", questionId],
    ({ queryKey }) => fetchAnswerRequest(queryKey[1]),
    {
      enabled: !!questionId,
    }
  );

  const { mutate: answerMutate } = useMutation(addAnswerRequest, {
    onSuccess: (data) => console.log(data),
    onError: (err) => console.log(err),
  });
  type ChoiceType = {
    label: string;
    title: string;
    isPreferred: boolean;
    questionId: string;
  };

  const [choices, setChoice] = useState<ChoiceType[]>([
    {
      label: "one",
      title: "",
      isPreferred: false,
      questionId,
    },
    {
      label: "two",
      title: "",
      isPreferred: false,
      questionId,
    },
    {
      label: "three",
      title: "",
      isPreferred: false,
      questionId,
    },
    {
      label: "four",
      title: "",
      isPreferred: false,
      questionId,
    },
  ]);

  const [question, setQuestion] = useState("");
  // type Answer = {
  //   name: string;
  //   text: string;
  // };
  // const [answers, setAnswers] = useState<Answer[]>([]);

  const { mutate } = useMutation(addQues, {
    onSuccess(data) {
      console.log(data);
      setQuestionId(data?.data?.id);
      setQuestion(data?.data?.question);
      setSubmitted(true);
    },
  });

  const addQuestion = () => {
    if (question.length > 10 && mark) {
      mutate({
        title: question,
        marks: mark,
        subjectId: subjectId,
      });
    }
  };

  const handleChange = (label: string, val: string) => {
    const updatedChoice = choices.map((choice) =>
      choice.label === label ? { ...choice, title: val } : choice
    );
    setChoice(updatedChoice);
  };

  const radioButtonChange = (label: string, radioValue: boolean) => {
    const updatedChoice = choices.map((choice) =>
      choice.label === label
        ? { ...choice, isPreferred: radioValue }
        : { ...choice, isPreferred: false }
    );
    setChoice(updatedChoice);
  };

  // Function to submit answers
  const onSubmitAnswers = () => {
    const quizChoices = choices.map((choice) => ({
      title: choice.title,
      isPreferred: choice.isPreferred,
      questionId,
    }));
    answerMutate(quizChoices);
  };

  useEffect(() => {
    setMark(1);
    if (!quesLoading) {
      setQuestion(quesData?.questions?.title);
      setQuestionId(quesData?.questions?._id);
      setSubmitted(true);
      // console.log(quesData);
    }
    if (!ansLoading && ansData) {
      const savedAnswers = ansData?.answers?.map((ans: any) => ({
        label: "",
        title: ans.title,
        isPreferred: ans.isPreferred,
        questionId: ans.questionId,
      }));
      setChoice(savedAnswers);
      setAnsSubmitted(true);
    }
  }, [quesData, ansData, ansLoading]);

  return (
    <main className="max-w-7xl mx-auto">
      {/* Welcome Heading */}
      <section>
        <div className="flex  flex-col justify-between py-4 gap-3">
          <h1 className="text-3xl font-medium">Add your subject questions</h1>
          <h3 className="font-medium">
            Add choices for{" "}
            <span className="font-bold tracking-wider">
              {!subjectLoading ? data.subject.name : ""}
            </span>
          </h3>
        </div>
      </section>

      <section>
        <div className="flex justify-between">
          <h2 className="font-medium">
            Questions <span>{currentNum}</span> of <span>10</span>
          </h2>
          <h6 className="text-sm font-medium">
            This question will carry{" "}
            <select
              defaultValue={1}
              className=" border-[2px] border-blue-500 rounded-sm mx-2"
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
                  disabled={questionSubmitted}
                  className="w-full border-[1.4px] border-gray-400 rounded-sm text-gray-600 py-1 px-2"
                ></textarea>
                {!questionSubmitted && (
                  <CustomButton
                    buttonLabel="Add Question"
                    onClick={addQuestion}
                    classNames="text-sm font-medium tracking-wider my-4"
                    disabled={question.length < 10}
                  />
                )}
              </div>

              {/* Choices */}
              <section>
                {choices.map((v, i) => (
                  <div className="my-2" key={i}>
                    <label htmlFor="" className="block">
                      Choice {i + 1}
                    </label>
                    <div className="flex gap-6 items-center mt-2">
                      <input
                        onChange={(e) =>
                          radioButtonChange(v.label, e.target.checked)
                        }
                        disabled={answerSubmitted}
                        type="radio"
                        checked={v.isPreferred}
                        name="answer"
                        // checked={v===}
                        className="w-5 h-5"
                      />

                      <input
                        type="text"
                        value={v.title}
                        name={"input" + v}
                        onChange={(e) =>
                          handleChange(v.label, e.currentTarget.value)
                        }
                        disabled={answerSubmitted}
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
              {answerSubmitted ? (
                <div className="flex items-center gap-3">
                  <CustomButton
                    buttonLabel="Back"
                    onClick={() => setCurrentNum(currentNum - 1)}
                    classNames="text-sm font-medium tracking-wider my-4"
                    // disabled
                  />
                  <CustomButton
                    buttonLabel="Next"
                    onClick={() => setCurrentNum(currentNum + 1)}
                    classNames="text-sm font-medium tracking-wider my-4"
                    // disabled
                  />
                </div>
              ) : (
                <CustomButton
                  buttonLabel="Submit And Next"
                  onClick={onSubmitAnswers}
                  classNames="text-sm font-medium tracking-wider my-4"
                  // disabled
                />
              )}
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
