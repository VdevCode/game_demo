import images from '@shared/assets/images';

function ChoiceJob() {
  const jobs: string[] = [
    images.jobIt,
    images.jobGra,
    images.jobGame,
    images.jobTravel,
    images.jobElec,
  ];
  return (
    <div className="mt-[15vh] w-[50%] h-full flex flex-col items-start justify-center">
      {jobs.map((job, idx) => (
        <img className="w-full" key={idx} src={job} alt="" />
      ))}
    </div>
  );
}

export default ChoiceJob;
