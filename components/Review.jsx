function Review({url,name,des,group}){
    return(
         <div className=" h-48 w-80  md:w-[40vw] lg:w-[30vw] bg-white rounded-xl flex flex-col items-center relative flex-shrink-0">

                    <div className=" w-[100%] flex items-center justify-center text-center mt-8 mr-4">
                        <h3 className=" text-xl text-center text-gray-700 font-semibold">{des}</h3>
                    </div>

                    <div className=" mt-4 absolute left-2 bottom-4 flex flex-row gap-3 ">
                        <div className=" size-12 rounded-full ">
                            <img src={`/${url}`} className=" rounded-full h-full w-full object-cover" alt="" />
                        </div>
                          <div className="rating flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <input
            disabled
              key={i}
              type="radio"
              name={`rating-${group}`} // same name per review
              className="mask mask-star-2 bg-orange-400"
            defaultChecked={name === "Rudresh" || name === "Adarsh" ? i === 3 : i === 5}

              aria-label={`${i} star`}
            />
          ))}
        </div>
                        <h1 className=" text-xl font-bold text-black">{name}</h1>

                    </div>

                </div>
    )
}
export default Review;