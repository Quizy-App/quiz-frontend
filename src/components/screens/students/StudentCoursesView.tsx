import SubjectCard from "../../SubjectCard";
import { useNavigate } from "react-router-dom";

const StudentCoursesView = () => {
  const navigate = useNavigate();
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {/* Welcome Heading */}
      <section>
        <div className="flex sm:flex-row flex-col justify-between py-4">
          <h1 className="text-3xl font-medium">Welcome Student</h1>
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
        {[1, 2, 3, 4].map((card, i) => (
          <SubjectCard
            onClick={() =>
              navigate("/student/auth/instructions", {
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
