import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmit }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmitButton = (data) => {
    handleFormSubmit(data);
    reset();
  };
  return (
    <div className="mt-10 flex justify-center">
      <form
        className="flex gap-10"
        action=""
        onSubmit={handleSubmit((data) => {
          handleFormSubmitButton(data);
        })}>
        <input
          {...register("name")}
          className="rounded-md px-2py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email")}
          className="rounded-md px-2py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("image")}
          className="rounded-md px-2py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Image-URL"
        />
        <input
          type="submit"
          className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold"
        />
      </form>
    </div>
  );
}

export default Form;
