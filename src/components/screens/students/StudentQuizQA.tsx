import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { getQuizQandA } from "../../../fetchers/teacher";
import { useAppSelector } from "../../../hooks/stateHooks";
import { QuizAns } from "../../../types";
import CustomButton from "../../CustomButton";
import LoadingIndicator from "../../LoadingIndicator";

const StudentQuizQA = () => {
  // const {}=useAppSelector(state=>)
  const { data, isLoading } = useQuery(["quiz", "2", "1"], ({ queryKey }) =>
    getQuizQandA(queryKey[1], queryKey[2])
  );

  const [radioBtn, setRadioBtnChange] = useState<string>();

  useEffect(() => {
    console.log(data);
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
                      onChange={() => setRadioBtnChange(ans._id)}
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
                <CustomButton
                  onClick={() => navigate("/student/auth/result")}
                  buttonLabel="Submit"
                  classNames="text-sm font-medium tracking-widest"
                />
                <CustomButton
                  onClick={() => "x"}
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
