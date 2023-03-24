import React from "react";

const CreateEvent = () => {
  return (
    <>
      <section className="flex justify-around items-center container mx-auto py-10">
        <div className="text-center max-w-screen-md w-full p-5">
            <form action="" className="rounded p-4 bg-secondary font-rob">
                <div className="flex flex-col">
                    <label htmlFor="" className="font-bold">Event Name</label>
                    <input type="text" placeholder="Ej: John's birthday" className="form-input text-xs" />
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor=""className="font-bold">Event Info</label>
                    <input type="text" placeholder="Ej: Bring something to drink. Optional: Yellow / Pink outfit. Girls must wear skirt, boys have to bring an umbrella. " className="form-input text-xs" />
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor=""className="font-bold">Event Adress</label>
                    <input type="text" placeholder="Evergreen, Av. 486th" className="form-input text-xs" />
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor=""className="font-bold">Date of the event</label>
                    <input type="date" className="form-date text-xs" />
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor=""className="font-bold">Time of the event</label>
                    <input type="time" className="form-time text-xs" />
                </div>

            </form>
        </div>
        <div className="text-center max-w-screen-md px-5">
          <h1 className=" font-rob text-4xl inline-block">
            Create your event and {" "}
            <span className=" font-extrabold text-details ">invite</span>
            {" "} your friends!
          </h1>
          <p className="font-robSerif font-bold text-xl py-2 my-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            voluptates vero id, reiciendis accusamus impedit. Voluptatum hic
            quod aliquid est. Qui perferendis minus officiis a blanditiis
            dolores animi reprehenderit voluptatem!
          </p>
          <button className=" bg-details hover:bg-details-hover font-rob text-white font-bold py-4 px-4 rounded text-xl">
            Generate event!
          </button>
        </div>
      </section>
    </>
  );
};

export default CreateEvent;
