

const HeroVideo = () => {
    return (
        <video playsInline className=" top-0 h-svh w-svw left-0  object-cover absolute filter grayscale" autoPlay  loop muted  preload="none">
          <source  src={'/vid.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
}

export default HeroVideo