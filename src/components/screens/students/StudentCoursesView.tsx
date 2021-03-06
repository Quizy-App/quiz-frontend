import SubjectCard from "../../SubjectCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSubjectList } from "../../../fetchers/getFunction";
import { useAppDispatch, useAppSelector } from "../../../hooks/stateHooks";
import { useEffect } from "react";
import { SubjectType } from "../../../types";
import { storeSubjectId } from "../../../features/studentSlice";
import LoadingIndicator from "../../LoadingIndicator";

const StudentCoursesView = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const { data, isLoading } = useQuery(
    ["sub-list", profile?.year],
    ({ queryKey }) => getSubjectList(queryKey[1] as string)
  );

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {!isLoading ? (
        <>
          <section>
            <div className="flex sm:flex-row flex-col justify-between py-4">
              <h1 className="text-3xl font-medium">All Subjects</h1>
              <div className="flex flex-col gap-2 py-4 self-start ">
                <div>
                  <span className="font-medium ">Branch :</span>
                  <span className="font-bold"> {profile?.branch}</span>
                </div>
                <div>
                  <span className="font-medium">Year :</span>
                  <span className="font-bold"> {profile?.year}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Subject cards */}
          <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4">
            {data?.subjects?.map((card: SubjectType, i: number) => (
              <SubjectCard
                card={card}
                onClick={() => {
                  dispatch(storeSubjectId({ subjectId: card._id }));
                  navigate("/student/instructions", {
                    replace: false,
                  });
                }}
                key={i}
              />
            ))}
          </section>
        </>
      ) : (
        <LoadingIndicator
          parentClass="pt-10"
          className="border-[6px] w-[5rem] h-[5rem]"
        />
      )}
    </main>
  );
};

export default StudentCoursesView;
