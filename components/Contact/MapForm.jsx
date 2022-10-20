import { useForm } from "react-hook-form";
function MapForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d387521.0648249189!2d-73.928554!3d40.640724!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1666245358517!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full">
        <h2 className="text-2xl text-center text-black mt-10">
          Send us a message
        </h2>
        <hr className="w-3/4 lg:w-1/2 border-primary mx-auto mt-4 mb-10" />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="lg:flex lg:space-x-4">
            <div className="form-control w-full">
              <input
                {...register("displayName", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
                type="text"
                placeholder="Your Name"
                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
                type="email"
                placeholder="Enter Your Email"
                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="lg:flex lg:space-x-4">
            <div className="form-control w-full">
              <input
                {...register("number", {
                  required: {
                    value: true,
                    message: "number is required",
                  },
                })}
                type="number"
                placeholder="Your number"
                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
              />
              <label className="label">
                {errors.number?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.number.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <input
                {...register("subject", {
                  required: {
                    value: true,
                    message: "subject is required",
                  },
                })}
                type="text"
                placeholder="Enter Your subject"
                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
              />
              <label className="label">
                {errors.subject?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.subject.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <textarea
              {...register("message", {
                required: {
                  value: true,
                  message: "message is required",
                },
              })}
              type="text"
              placeholder="message"
              className="textarea border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
              rows="3"
            ></textarea>
            <label className="label">
              {errors.message?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.message.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="py-3 w-1/2 mx-auto mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500"
            type="submit"
            value="SEND MESSAGE"
          />
        </form>
      </div>
    </div>
  );
}

export default MapForm;
