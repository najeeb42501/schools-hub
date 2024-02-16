import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

function EditSchoolContact() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [address, setAddress] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWebsiteLinkChange = (e) => {
    setWebsiteLink(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the contact details to the server
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Website Link:", websiteLink);
    console.log("Address:", address);
    alert("Contact details saved! (simulated)");
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">
        Edit School Contact
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center">
          <FaPhone className="text-gray-400 mr-2" />
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaGlobe className="text-gray-400 mr-2" />
          <input
            type="url"
            value={websiteLink}
            onChange={handleWebsiteLinkChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Website Link"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Address"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-gray-600 hover:bg-yellow text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSchoolContact;
