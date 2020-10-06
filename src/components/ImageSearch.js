import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-5 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mx-4 flex items-center border-b-2 border-blue-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
            required
          />
          <button
            className="flex-shrink-0 bg-blue-500 transition-all duration-300 transform hover:scale-95 hover:bg-blue-700 border-blue-500 focus:outline-none focus:shadow-outline hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
