import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 bg-amber-400 justify-center flex items-center transition-all ease-in-out">
      <h1 className="font-bold">Loading</h1>
    </div>
  );
};

export default Loading;
