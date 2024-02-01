import React from "react";

function SchoolContact() {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-3xl text-center font-bold mb-4">Contact Details</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
            <i className="fas fa-phone-alt"></i>
          </span>
          <p>
            Phone Number: <span className="font-semibold">071-5804400</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white mr-2">
            <i className="fas fa-phone-alt"></i>
          </span>
          <p>
            Email: <span className="font-semibold">servechab@gmail.com</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white mr-2">
            <i className="fas fa-phone-alt"></i>
          </span>
          <p>
            Website: <span className="font-semibold">soe.edu.pk</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <p>
            Location:{" "}
            <span className="font-semibold">School Address, City</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolContact;
