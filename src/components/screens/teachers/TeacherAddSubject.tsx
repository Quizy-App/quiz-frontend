import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getSubjects } from "../../../fetchers/getFunction";
import { addSubject, teacherAddYear } from "../../../fetchers/teacher";
import { Subject } from "../../../types";
import AddSubjectCard from "../../AddedSubjectCard";
import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import SubjectCard from "../../SubjectCard";

const TeacherAddSubject = () => {
  const client = useQueryClient();
  const [year, setYear] = useState(0);
  const [title, setTitle] = useState("");

  const { mutate } = useMutation(teacherAddYear, {
    onSuccess(data) {
      console.log(data);
    },
  });

  const { data, isLoading } = useQuery(["subjects", year], ({ queryKey }) =>
    getSubjects(queryKey[1] as number)
  );
  const { mutate: addSubjectMutate } = useMutation(addSubject, {
    onSuccess(data) {
      client.invalidateQueries("subjects");
      console.log(data);
      setTitle("");
    },
  });

  const submitSubject = () => {
    if (title.length > 4) {
      addSubjectMutate({
        name: title,
        year: year,
      });
    }
  };

  useEffect(() => {
    if (year) {
      mutate(year);
    }
    console.log(data);
  }, [year]);
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {/* Welcome Heading */}
      <section>
        <div className="flex  md:flex-row  flex-col justify-between py-4 gap-3 w-full">
          <h1 className="text-3xl font-medium">Welcome Teacher</h1>

          <div className="inline-block  ">
            <span className="font-semibold inline-block mb-1   ">
              Choose Year
            </span>
            <select
              className="py-2 border-[2px] border-blue-500 rounded-sm w-full px-10"
              onChange={(e) => {
                setYear(Number(e.currentTarget.value));
              }}
            >
              <option disabled className="py-6 px-10" selected>
                Select year
              </option>
              {[1, 2, 3, 4, 5].map((year, i) => (
                <option className="px-10 py-6" value={year} key={i}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Subject cards */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4">
        {!!year ? (
          <div className="p-4 border-[1.5px] border-primary-300 rounded-sm">
            <CustomInput
              label={"Title"}
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              placeholder="New Subject"
              labelClass="font-medium pb-3 text-2xl"
            />
            <CustomButton
              disabled={title.length < 4 || !year}
              onClick={submitSubject}
              buttonLabel="Add Subject"
              classNames="text-sm font-medium tracking-wider"
            />
          </div>
        ) : (
          <div className="col-span-full">
            <h1 className="text-2xl font-semibold text-gray-600 text-center">
              You have to select the title
            </h1>
          </div>
        )}

        {/* Added Subject */}

        {!isLoading &&
          data?.subjects?.map((s: Subject, i: number) => (
            <AddSubjectCard subject={s} className="min-h-[15rem]" />
          ))}
      </section>
    </main>
  );
};

export default TeacherAddSubject;
