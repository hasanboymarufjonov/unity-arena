import React, { useState } from "react";

function MyComponent() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", inputValue);

    window.location.href = "/";
  };

  return (
    <div>
      <div className="flex justify-center items-center text-center bg-sky-100 h-screen">
        <div className="flex flex-col p-20">
          <h2 className="font-bold text-4xl">Sign In</h2>
          <form
            className="flex flex-col text-left mt-6 "
            onSubmit={handleFormSubmit}
          >
            <input
              className="h-10 p-2 rounded-md bg-white w-96"
              type="text"
              placeholder="Full Name / Nickname"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="bg-sky-400 text-white mt-4 p-2 hover:bg-sky-300 rounded"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
