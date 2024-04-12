function HeroSection() {
  return (
    <div className="h-fit w-full  md:flex md:align-middle md:justify-around md:items-center p-3 gap-1">
      <div className=" w-full md:h-5/6 md:w-6/12 h-2/6 bg-green-400 rounded-3xl overflow-hidden">
        <video
          src="public\vdeo.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        ></video>
      </div>
      <div className="h-fit w-full md:h-4/6 md:w-4/12 border rounded-3xl shadow-lg p-5 ">
        <h2 className="text-2xl">Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim
          laboriosam magni.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
