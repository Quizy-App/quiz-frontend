import SubjectCard from "../../SubjectCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSubjectList } from "../../../fetchers/getFunction";
import { useAppSelector } from "../../../hooks/stateHooks";
import { useEffect } from "react";
import { SubjectType } from "../../../types";

const StudentCoursesView = () => {
  const navigate = useNavigate();
  const {} = useAppSelector((state) => state.user);
  const { data } = useQuery(["sub-list", "2"], ({ queryKey }) =>
    getSubjectList(queryKey[1])
  );

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {/* Welcome Heading */}
      <section>
        <div className="flex sm:flex-row flex-col justify-between py-4">
          <h1 className="text-3xl font-medium">All Subjects</h1>
          <div className="flex flex-col gap-2 py-4 self-start ">
            <div>
              <span className="font-medium ">Branch :</span>
              <span className="font-bold"> CSE</span>
            </div>
            <div>
              <span className="font-medium">Year :</span>
              <span className="font-bold"> 2nd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subject cards */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4">
        {/* {[1, 2, 3, 4].map((card:SubjectType, i) => (
          <SubjectCard 
            card={card}
            onClick={() =>
              navigate("/student/instructions", {
                replace: false,
              })
            }
            key={i}
          />
        ))} */}

        {data?.subjects?.map((card: SubjectType, i: number) => (
          <SubjectCard
            card={card}
            onClick={() =>
              navigate("/student/instructions", {
                replace: false,
              })
            }
            key={i}
          />
        ))}
      </section>
    </main>
  );
};

export default StudentCoursesView;
