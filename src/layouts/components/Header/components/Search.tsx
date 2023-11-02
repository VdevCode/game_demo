import React, { useState } from 'react';

function Search() {
  const [keyword, setKeyword] = useState<string>('');

  const handelTyping = (e: any) => {
    let value: string = e.target.value;
    if (value.startsWith(' ')) setKeyword('');
    else setKeyword(e.target.value);
  };
  return (
    <div className="w-80 h-10 flex items-center bg-lightSecond/40 dark:bg-darkSecond/60 rounded-lg">
      <button className="w-10 h-10 ">
        <i className="text-gray-500 fa-light fa-magnifying-glass"></i>
      </button>
      <input
        type="text"
        className="pr-2 flex-1 text-sm dark:text-white bg-transparent"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => handelTyping(e)}
      />
      {keyword.length > 0 && (
        <button className="w-10 h-10 dark:text-white">
          <i className="fa-light fa-spinner-third fa-spin"></i>
        </button>
      )}
    </div>
  );
}

export default Search;
