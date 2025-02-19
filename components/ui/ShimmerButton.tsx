import React from 'react'

const ShimmerButton = ({title, icon, position, handleClick, otherClasses}:{
  title:string,
  icon:React.ReactNode,
  position:string,
  handleClick?: ()=>void;
  otherClasses?:string
}) => {
  return (
    <button className={`w-full md:w-60 md:mt-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors gap-4 ${otherClasses}`}>
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </button>
  )
}

export default ShimmerButton