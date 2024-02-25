import React, { useState } from "react";

function AIComponent() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [response, setResponse] = useState("");

  const generateResponse = () => {
    // You can implement your AI logic here to generate a response based on the inputs
    // For demonstration purposes, let's just concatenate the inputs
    const generatedResponse = `${input1} ${input2} ${input3} ${input4}`;
    setResponse(generatedResponse);
  };

  return (
    <div className="flex h-full">
      {/* First Column */}
      <div className="w-1/2 p-4 bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Chat with AI
        </h2>
        <div className="mb-4 w-full">
          <label
            htmlFor="input1"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Input 1
          </label>
          <input
            id="input1"
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Enter input 1"
            className="w-full rounded border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="input2"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Input 2
          </label>
          <input
            id="input2"
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Enter input 2"
            className="w-full rounded border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="input3"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Input 3
          </label>
          <input
            id="input3"
            type="text"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            placeholder="Enter input 3"
            className="w-full rounded border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="input4"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Input 4
          </label>
          <input
            id="input4"
            type="text"
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            placeholder="Enter input 4"
            className="w-full rounded border border-gray-400 p-2"
          />
        </div>
        <button
          onClick={generateResponse}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Generate
        </button>
      </div>
      {/* Second Column */}
      <div className="w-1/2 p-4 bg-gray-200 overflow-y-auto">
        <textarea
          value={response}
          readOnly
          className="w-full h-full resize-none bg-gray-100 border border-gray-300 rounded p-2"
          placeholder="Generated Response"
        />
      </div>
    </div>
  );
}

export default AIComponent;
