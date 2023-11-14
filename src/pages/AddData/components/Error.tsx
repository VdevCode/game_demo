interface ErrorProps {
  errorMsg: string;
  setError: any;
}
function Error({ errorMsg, setError }: ErrorProps) {
  const handelReturn = () => {
    setError(false);
  };
  return (
    <div className="aprrearance relative flex flex-col items-center justify-center w-1/2 h-fit border-2 border-white bg-[#F6E3A9] rounded-2xl">
      <header className="flex items-center justify-center h-10 w-1/3 bg-red-500 border-2 border-white translate-y-[-50%] rounded-lg text-white text-lg font-bold">
        Thông báo
      </header>
      <main className="flex-1 w-3/4">
        <p>{errorMsg}</p>
      </main>
      <button
        className="h-10 w-1/3 bg-green-500 border-2 border-white rounded-2xl translate-y-1/2"
        onClick={handelReturn}
      >
        Thử lại
      </button>
      <button
        className="absolute top-0 right-0 translate-y-[-25%] translate-x-1/3 w-10 h-10 border-2 border-white rounded-full bg-red-500 text-white"
        onClick={handelReturn}
      >
        <i className="fa-regular fa-xmark"></i>
      </button>
    </div>
  );
}

export default Error;
