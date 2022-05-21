import { Navigate, useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton";

const StudentQuizQA = () => {
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
          <p className="font-semibold text-xl text-center text-blue-500 pb-4">
            Questions <span className="text-blue-600"> 1</span> of{" "}
            <span className="text-blue-600">5</span>
          </p>

          {/* Questions And answer */}
          <section>
            <p className="font-semibold">
              <span className="font-medium">Q1.</span> What is chemical bonding?
            </p>
            <ul>
              {["A", "B", "C", "D"].map((ans, i) => (
                <li className="flex mt-4 items-center gap-2  " key={i}>
                  <input type="radio" name="answer" id="" className="w-4 h-4" />
                  <p className="text-sm font-medium">
                    {ans}. Link of chemicals
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
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
    </main>
  );
};

export default StudentQuizQA;
