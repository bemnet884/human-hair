const Button = ({
  lable,iconURL,backgroundColor,textColor,borderColor,fullWidth,onClick,link
}) => {
  return (
    <button onClick={onClick} className={`flex justify-center hover:bg-violet-800 items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-primary text-white border-violet-800"
      } rounded-full ${fullWidth && "w-full"}`}>
      {lable}
      {<a href={link}></a>
      }
      {iconURL && (
        <img src={iconURL} alt='arrow Right icon'  className='ml-2 rounded-full bg-white w-5 h-5'/>
      )}
    </button>
  )
}

export default Button
