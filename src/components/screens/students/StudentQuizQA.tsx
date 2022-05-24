import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { addAnswer, getQuizQandA } from "../../../fetchers/teacher";
import { useAppSelector } from "../../../hooks/stateHooks";
import { QuizAns } from "../../../types";
import CustomButton from "../../CustomButton";
import LoadingIndicator from "../../LoadingIndicator";

const StudentQuizQA = () => {
  const { subjectId } = useAppSelector((state) => state.student);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ["quiz", subjectId, page],
    ({ queryKey }) => getQuizQandA(queryKey[1] as number, queryKey[2] as string)
  );
  const { mutate } = useMutation(addAnswer);

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    console.log(setAnswer);
  }, []);
  const navigate = useNavigate();
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {/* Welcome Heading */}
      <section className="py-6">
        <h1 className="text-2xl font-medium text-center">All The Best</h1>
      </section>
      {!isLoading ? (
        <section className="p-6 border-[1.4px] border-blue-400 max-w-3xl mx-auto rounded-sm">
          <div>
            <p className="font-semibold text-xl text-center text-blue-500 pb-4">
              Questions <span className="text-blue-600"> 1</span> of{" "}
              <span className="text-blue-600">5</span>
            </p>

            {/* Questions And answer */}
            <section>
              <p className="font-semibold">
                <span className="font-medium">Q1.</span>
                {data?.question}
              </p>
              <ul>
                {data?.choices.map((ans: QuizAns, i: number) => (
                  <li className="flex mt-4  items-center gap-2  " key={i}>
                    <input
                      onChange={() => {
                        setAnswer(ans._id);
                      }}
                      type="radio"
                      name="answer"
                      className="w-4 h-4 "
                    />
                    <li className="text-sm font-medium list-decimal ml-3">
                      {ans?.title}
                    </li>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-3">
                {/* <CustomButton
                  onClick={() => navigate("/student/result")}
                  buttonLabel="Submit"
                  classNames="text-sm font-medium tracking-widest"
                /> */}
                <CustomButton
                  onClick={() => {
                    mutate(answer);
                    setPage((page) => page + 1);
                  }}
                  buttonLabel="Next"
                  classNames="text-sm font-medium tracking-widest border-[1.4px] border-blue-500 bg-white text-primary-500 hover:bg-blue-400"
                />
              </div>
            </section>
          </div>
        </section>
      ) : (
        <LoadingIndicator />
      )}
    </main>
  );
};

export default StudentQuizQA;
