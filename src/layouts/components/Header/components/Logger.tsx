import React from 'react';
import Button from '@shared/components/Button';

function Logger() {
  const signed = true;
  return (
    <>
      {signed ? (
        <div className="flex items-center gap-2">
          <Button iconOnly>
            <i className="fa-sharp fa-light fa-cart-shopping"></i>
          </Button>
          <Button iconOnly>
            <i className="fa-light fa-circle"></i>
          </Button>
          <Button type="four" rounded="lg">
            Upload your work
          </Button>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.dribbble.com/userupload/6448178/file/original-718011f5e886d454c71659fa3702c99f.jpg?resize=1200x1299"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="flex">
          <Button>Sign Up</Button>
          <Button type="four">Sign In</Button>
        </div>
      )}
    </>
  );
}

export default Logger;
