import React from "react";

const EventGuestPanel = () => {
  return (
    <section className="flex p-10">
        <div className= "w-2/3 bg-slate-600">
            PARTY
        </div>
    <div>
      <div className="rounded p-4 w-auto bg-secondary font-rob">
        <div className="flex flex-col items-center text-md">
          <label htmlFor="" className="font-thin">
            Event Name
          </label>
          <h2 className="font-robSerif font-extrabold text-2xl">
            Larry's Birthday
          </h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Event Adress
          </label>
          <h2 className="font-robSerif font-extrabold text-2xl">
            147th, Evergreen Av.
          </h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Date of the event
          </label>
          <h2 className="font-robSerif font-extrabold text-2xl">03/04/2023</h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Time of the event
          </label>
          <h2 className="font-robSerif font-extrabold text-2xl"> 00.00 Hs.</h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Event Info
          </label>
          <p className="font-robSerif font-extrabold text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            quia, dolores quaerat quibusdam voluptas velit dolorum voluptates ut
            accusantium nostrum accusamus quisquam cupiditate ipsam. Similique
            rerum assumenda nisi ipsum earum.
          </p>
        </div>
        <div className="flex justify-center">
          <button className=" bg-details hover:bg-details-hover font-rob text-white font-bold py-2 px-4 rounded text-sm">
            I will be there!
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EventGuestPanel;
