import images from '../assets/images';

function LoadingScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white">
      <div>
        <img
          className="w-16 animate-bounce"
          src={images.charactor2_avatar}
          alt=""
        />
        <p className="text-lg text-black my-5">Đang tải...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
