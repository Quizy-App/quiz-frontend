import React from "react";
import AddSubjectCard from "../../AddedSubjectCard";
import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import SubjectCard from "../../SubjectCard";

const TeacherAddSubject = () => {
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {/* Welcome Heading */}
      <section>
        <div className="flex  flex-col justify-between py-4 gap-3">
          <h1 className="text-3xl font-medium">Welcome Teacher</h1>
          <h3>
            Add subjects for <span className="font-semibold">2nd Year</span>
          </h3>
        </div>
      </section>

      {/* Subject cards */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4">
        <div className="p-4 border-[1.5px] border-primary-300 rounded-sm">
          <CustomInput
            label={"Title"}
            placeholder="New Subject"
            labelClass="font-medium pb-3 text-2xl"
          />
          <CustomButton
            onClick={() => "x"}
            buttonLabel="Add Subject"
            classNames="text-sm font-medium tracking-wider"
          />
        </div>

        {/* Added Subject */}

        {[
          "Chemistry",
          "VLSI",
          "COMPUTER NETWORKS",
          "SATELLITE COMMUNICATION",
          "INFORMATION AND CODING",
          "PHYSICS",
        ].map((s, i) => (
          <AddSubjectCard subject={s} className="min-h-[15rem]" />
        ))}
      </section>
    </main>
  );
};

export default TeacherAddSubject;
