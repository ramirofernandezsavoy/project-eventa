import React from "react";

const EventAdminPanel = () => {
  return (
    <section className="flex-col justify-center">
      <div className="flex justify-evenly">
        <div className="text-center max-w-screen-md w-2/3 p-5">
          <form action="" className="rounded p-4 bg-secondary font-rob">
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Event Name
              </label>
              <input type="text" className="form-input text-xs" />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="" className="font-bold">
                Event Info
              </label>
              <input type="text" className="form-input text-xs" />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="" className="font-bold">
                Event Adress
              </label>
              <input type="text" className="form-input text-xs" />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="" className="font-bold">
                Date of the event
              </label>
              <input type="date" className="form-date text-xs" />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="" className="font-bold">
                Time of the event
              </label>
              <input type="time" className="form-time text-xs" />
            </div>
            <button className=" bg-details hover:bg-details-hover font-rob text-white font-bold py-2 px-4 rounded text-sm">
              Update
            </button>
          </form>
        </div>
        <div className=" flex-row bg-slate-400">
          <h1 className=" bg-red-500">
            Something came up? {" "}
            <span className=" font-extrabold text-details ">Modify</span> the event!
          </h1>
          <p className="bg-green-500">
            To change the data of the event you just need to change the info in the textboxs, and the click on "Update"!
          </p>
        </div>
      </div>
      <h3 className="text-center p-3">
          www.eventia.com/search?client=opera-gx&q=event+link&sourceid=opera&ie=UTF-8&oe=UTF-8
      </h3>
    </section>
  );
};

export default EventAdminPanel;
