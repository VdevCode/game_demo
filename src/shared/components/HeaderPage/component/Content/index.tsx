import React from 'react';
import Button from '@shared/components/Button';

function Content() {
  return (
    <div className="w-1/2 h-full flex flex-col justify-center dark:text-white">
      <h1 className="text-6xl font-semibold">
        Collecting digital rare art and discover NFTs
      </h1>
      <p className="my-5 text-sm dark:text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, est
        similique odio labore ad ea porro veritatis repellendus harum,
        exercitationem eligendi dolores fugiat tenetur quisquam at sapiente
        deleniti inventore assumenda?
      </p>
      <div className="flex gap-2">
        <Button
          type="four"
          width="w-40"
          rounded="2xl"
          rightIcon={<i className="fa-light fa-arrow-right"></i>}
        >
          Create your own
        </Button>
        <Button
          type="third"
          width="w-40"
          rounded="2xl"
          rightIcon={<i className="fa-light fa-arrow-right"></i>}
        >
          Start exploring
        </Button>
      </div>
    </div>
  );
}

export default Content;
