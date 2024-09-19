import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

export default function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        <div
          id="my_modal_3"
          className="flex h-screen items-center justify-center "
        >
          <div className="modal-box shadow-md border-[2px] p-5 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} method="div">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            

            <h3 className="font-bold text-lg">Signup</h3>
            {/* {Name} */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* {email} */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* {password} */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* {button} */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have account?{" "}
                <Link to="/" className="text-blue-500 underline cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
