import React, { useState } from "react";
import axios from "axios"; // Import Axios
const apiKey = process.env.API_KEY;

function SimpleAIComponent() {
  console.log("API KEY : ", apiKey);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    console.log("submit prompt");

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("http://localhost:5000/ai", options);
      const data = await response.json();
      console.log("GHPT RES : ", data);
      setResponse(data.choices[0].message);
    } catch (error) {
      console.error("Error fetching response from backend:", error);
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <div className="w-full md:w-2/3 p-8  text-center  bg-white rounded-lg shadow-md">
        <h2 className="text-5xl font-semibold text-center text-nightGreen mb-6">
          Ask AI
        </h2>
        <h2 className="text-2xl font-bold text-center text-cariGreen mb-6">
          Make Your Child Future Bright
        </h2>
        <div className="mb-6 w-full">
          <label
            htmlFor="prompt"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Enter Your Prompt
          </label>
          <textarea
            id="prompt"
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here"
            className="w-full rounded-md border border-gray-300 p-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
            style={{ resize: "vertical" }}
          />
        </div>
        <button
          onClick={handleSubmit}
          className={`w-1/4 text-white px-4 py-2 rounded-md transition duration-150 ease-in-out ${
            loading ? "bg-gray-400" : "bg-cariGreen hover:bg-nightGreen"
          } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate Response"}
        </button>
      </div>
      <div className="w-full md:w-2/3 p-8 bg-cariGreen rounded-lg shadow-md mt-6">
        <h1 className="text-3xl font-semibold text-center text-white  mb-6">
          {" "}
          Model Response:
        </h1>
        <textarea
          value={response.content || ""}
          readOnly
          className="w-full h-64 resize-none rounded-md  border-nightGreen border-2 p-3 text-gray-700"
          placeholder="AI's Response"
        />
      </div>
    </div>
  );
}

export default SimpleAIComponent;
