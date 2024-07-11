
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneInTalk, MdOutlineShareLocation } from "react-icons/md";
// import "./Contact.css";
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="bg-white py-20 lg:px-20 px-5">

      <div className="grid lg:grid-cols-3 gap-5 w-full my-10">
        <div className="border flex gap-4 items-center p-5 rounded-lg">
          <div className="flex justify-center items-center lg:text-4xl text-3xl rounded-lg text-primary-100 bg-white-100 lg:w-20 w-10 h-10 lg:h-20 w-10 h-10">
          <MdOutlinePhoneInTalk />
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold ">Phone</h3>
            <p className="">(123) 456-7890</p>
          </div>

        </div>
        <div className="border flex gap-4 items-center p-5 rounded-lg">
          <div className="flex justify-center items-center lg:text-4xl text-3xl rounded-lg text-primary-100 bg-white-100 lg:w-20 w-10 h-10 lg:h-20 w-10 h-10">
          <HiOutlineMail />
          </div>
          <div >
            <h3 className="font-semibold">Email</h3>
            <p className="text-wrap">programmingclub.pub@gmail.com</p>
          </div>

        </div>
        <div className="border flex gap-4 items-center p-5 rounded-lg">
          <div className="flex justify-center items-center lg:text-4xl text-3xl rounded-lg text-primary-100 bg-white-100 lg:w-20 w-10 h-10 lg:h-20 w-10 h-10">
          <MdOutlineShareLocation />
          </div>
          <div >
            <h3 className="font-semibold ">Address</h3>
            <p >Gokul, Bogura-5800, Bangladesh</p>
          </div>

        </div>

      </div>

      {/* contact form------- */}
   
     <div className="grid lg:grid-cols-2">
     <div  className=" h-auto w-full text-secondary  lg:p-5  ">
        <h2 className="gradient-text  font-bold py-2 lg:text-5xl text-2xl">
         Get in Touch with us
        </h2>
        {/* <p className="text-justify">
          Whether you have a project in mind, a question, or
          just want to say hello, I&apos;d love to hear from you. Drop me a
          message below, and let&apos;s start a conversation.
        </p> */}

        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div className="grid lg:grid-cols-2 gap-3">
            <div>
              <input placeholder="First name*" className="input-body border outline-0 p-2 w-full h-10 "
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <p className="err text-xs" role="alert">First name is required</p>
              )}
            </div>

            <div>
              <input placeholder="Last name*" className="input-body border outline-0 p-2 w-full h-10 "
                {...register("lastName", { required: true })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName?.type === "required" && (
                <p className="err text-xs" role="alert">Last name is required</p>
              )}
            </div>
          </div>

          {/* --------------- */}
          <div className="grid lg:grid-cols-2 gap-3 my-3">
            <div>
            <input type="email" placeholder="Email*" className="input-body border outline-0 p-2 w-full h-10 "
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p className="err text-xs" role="alert">{errors.mail.message}</p>}
            </div>

            <div>
              <input type="tel" placeholder="Phone number" className="input-body border outline-0 p-2 w-full h-10 "
                {...register("phone")}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              
            </div>
          </div>

          <div>
              <textarea placeholder="Message*" className="input-body border outline-0 p-2 w-full h-28 "
                {...register("message", { required: true })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message?.type === "required" && (
                <p className="err text-xs" role="alert">Message is required</p>
              )}
            </div>

        

          <input type="submit" value="Send Message" className="bg-primary text-white my-3 hover:scale-90 transition duration-300 ease-in-out back-color px-5 py-2 rounded-lg" />
        </form>
      </div>
    

      {/* contact info--------- */}
     
      <div className="text-white lg:p-10 lg:p-5">

      <iframe className="w-full h-96 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2863985243494!2d89.34644561043629!3d24.922311542688536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcff6dad46983f%3A0x32606b40b622acdb!2sPundra%20University%20of%20Science%20%26%20Technology%20(PUB)!5e0!3m2!1sen!2sbd!4v1720014518834!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      

 
  
      </div>

      </div>
    </div>
  );
};

export default Contact;