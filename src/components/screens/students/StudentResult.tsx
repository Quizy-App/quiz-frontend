import React from "react";

const StudentResult = () => {
  return (
    <main className="max-w-7xl  w-full mx-auto ">
      {/* Subject cards */}
      <section className="p-6 border-[1.4px] border-blue-400 max-w-3xl mx-auto rounded-sm mt-10">
        <h2 className="text-3xl text-center text-primary-400">Result</h2>

        {/* Questions And answer */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Question Attempt -</span>
            <span className="font-semibold">05</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Total Questions-</span>
            <span className="font-semibold">20</span>
          </div>
          <h1 className="text-3xl font-semibold my-6">Your Score 55/100</h1>
        </section>
      </section>
    </main>
  );
};

export default StudentResult;
