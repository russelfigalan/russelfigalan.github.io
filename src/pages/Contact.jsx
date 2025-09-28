export default function Contact() {
  return (
    <>
      <section className="min-h-[calc(100dvh-5rem)]">
        <p className="mt-5 md:w-[90%] md:text-2xl md:place-self-center-safe">
          Contact
        </p>
        <h1 className="mt-10 mb-20 font-hero text-5xl md:text-7xl text-center">
          Want to share ideas?
          <br />
          Send me a message.
          <br />I love exchanging thoughts.
        </h1>
        <div className="mb-20 flex flex-col md:flex-col-reverse justify-center-safe items-center-safe gap-10">
          <form className="w-[90%] md:w-fit bg-gray-200 rounded-2xl">
            <fieldset className="w-[90%] md:w-[30rem] p-[1rem] md:p-[3rem] flex flex-col place-self-center-safe">
              {/* <legend className="ml-2">Send</legend> */}
              <label className="mb-1">First Name</label>
              <input className="w-full mb-5 bg-white outline rounded-full" />
              <label className="mb-1">Last Name</label>
              <input className="w-full mb-5 bg-white outline rounded-full" />
              <label className="mb-1">Email</label>
              <textarea className="w-full h-[10rem] mb-5 bg-white outline resize-none"></textarea>
              <button className="md:w-[10rem] py-3 font-bold text-black bg-white border rounded-full cursor-pointer">
                Send
              </button>
            </fieldset>
          </form>
          <div className="w-full mb-10 flex flex-col gap-5 md:flex-row md:justify-evenly">
            <div className="flex flex-col items-center-safe">
              <img
                src={"../icons/location.png"}
                alt=""
                className="w-[50px] mb-1"
              />
              <p>Cebu, Philippines</p>
            </div>
            <div className="flex flex-col items-center-safe">
              <img
                src={"../icons/mobile.png"}
                alt=""
                className="w-[50px] mb-1"
              />
              <p>+639562241630</p>
            </div>
            <div className="flex flex-col items-center-safe">
              <img src={"../icons/mail.png"} alt="" className="w-[50px] mb-1" />
              <p>russelfigalan@outlook.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
