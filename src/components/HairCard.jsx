const HairCard = ({ imgURL, bigHairImg, changeBigHairImgae }) => {
  function handeClick() {
    if (bigHairImg !== imgURL.bigHair) {
      changeBigHairImgae(imgURL.bigHair);
    }
  }
  return (
    <div className={`border-2  rounded-xl cursor-pointer max-sm:flex-1 flex-1
      ${
      bigHairImg === imgURL.bigHair
      ? "border-violet-700"
      : "border-transparent"
      } `}
      onClick={handeClick}
      style={{ height: '100%' }}
    >
      <div className='flex justify-center items-center bg-center border bg-violet-300 bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail}
          alt="Hair Collection"  
          width={120}
          height={100}
          className='object-contain w-full h-full p-4' />
      </div>
    </div>
  )
}

export default HairCard
