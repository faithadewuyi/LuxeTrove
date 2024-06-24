
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from '../Components/InputField';

function Shipping() {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      password: "",
      cpassword: "",
      npassword: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  const onError = (errors) => {
    console.log("Form Errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
        className="font-inter shadow-md p-4 pl-6 px-auto mt-5"
      >
        <h1 className="text-black text-[20px] font-bold py-2 mb-4">
          Shipping Address
        </h1>

        <h1 className="text-black text-[20px] font-medium py-2 mb-4">
          Add Address
        </h1>
        <div className=" mb-4">
          <InputField
            label="Address One"
            placeholder="Adress One"
            id=""
            name="Address One"
            register={register}
            error={errors.address}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage=" Address should contain 3-16 characters and shouldn't contain any special characters" 
             
            className="border-none bg-lightgray rounded w-[350px]"/> 
          
          
        </div>

        <InputField
            label="Address Two"
            placeholder="Lagos"
            id="address"
            name="address"
            type="address"
            register={register}
            error={errors.address}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Enter your address"
            className="border-none bg-lightgray rounded w-[710px] mb-4"
          />
      
        <div className=" gap-[50px] mb-4 space-y-2">
          <InputField
            label="Email"
            placeholder="sarah@luxemail.com"
            id="email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            pattern={
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
            required={true}
            patternMessage="Please enter a valid email address"
            className="border-none bg-lightgray rounded w-[710px]"
          />
<div className="flex gap-[80px] mb-2 ">
  <InputField
    label="Town/City "
    placeholder=""
    id="firstname"
    name="firstname"
    register={register}
    error={errors.firstname}
    pattern={/[A-Za-z0-9]{3,16}$/}
    required={true}
    patternMessage="City should contain 3-16 characters and shouldn't contain any special characters"
    className="border-none bg-lightgray rounded w-[250.33px]"
  />
  <InputField
    label="Province/State"
    placeholder=""
    id="lastname"
    name="lastname"
    register={register}
    error={errors.lastname}
    pattern={/[A-Za-z0-9]{3,16}$/}
    required={true}
    patternMessage="State should contain 3-16 characters and shouldn't contain any special characters"
    className="border-none bg-lightgray rounded w-[250.33px]"
  />
  <InputField
    label="Postal Code"
    placeholder=""
    id="lastname"
    name="lastname"
    register={register}
    error={errors.lastname}
    pattern={/[A-Za-z0-9]{3,16}$/}
    required={true}
    patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
    className="border-none bg-lightgray rounded w-[250.33px]"
  />
</div>
     </div>
        <div className="flex flex-row gap-3 justify-end">
          <button className="text-black text-base border-2 border-btn px-4 my-2 py-2 p-2 w-[169px] h-[50px] text-[16px]">Cancel</button>
          <button className="bg-btn text-white p-2 hover:bg-gray px-4 my-2 py-2 w-[169px] h-[50px] text-[16px]">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Shipping
