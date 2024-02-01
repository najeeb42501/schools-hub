import React from "react";

function SchoolFeeStructure({ data }) {
  return (
    <div className="overflow-x-auto text-center ">
      <h1 className="text-3xl font-bold py-4">FEE STRUCTURE</h1>
      <table className="table table-zebra ">
        <thead>
          <tr className="font-bold text-lg">
            <th>Class</th>
            <th>Deposit Fee</th>
            <th>Admission Fee</th>
            <th>Tuition Fee</th>
            <th>Exam Fee</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.className}</td>
                <td>{item.depositFee}</td>
                <td>{item.admissionFee}</td>
                <td>{item.tuitionFee}</td>
                <td>{item.examFee}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SchoolFeeStructure;
