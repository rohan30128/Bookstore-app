import React from "react";
import list from "../../public/list.json"
import Cards from "./Cards"
import { Link } from "react-router-dom";

export default function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl md:text-4xl dark:bg-slate-900 dark:text-white">
            We're delighted to have{" "}
            <span className="text-pink-500"> you Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            quas ipsa amet magnam molestiae. Perferendis porro harum fugiat
            minima, facere molestiae illo quidem aliquid dolorem natus quod
            nobis minus sint! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nostrum vel voluptas architecto corporis,
            asperiores quaerat magnam culpa nisi. Ad suscipit nemo maxime
            repellendus laboriosam similique corrupti beatae dolorem, omnis
            consectetur?
          </p>
          <Link to="/"><button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id} />
                ))
            }
        </div>
      </div>
    </>
  );
}
