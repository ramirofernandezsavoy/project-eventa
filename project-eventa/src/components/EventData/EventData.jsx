import React from "react";

const EventData = (data) => {

  const { eName, eAdress, eDate, eTime, eInfo } = data

  const handleClick = () => {
    let guestName = document.getElementById("confirmationName").value; 
    console.log(guestName)
  }  

  return (
    <section className="flex p-10">        
    <div className="bg-slate-500 rounded">
      <div className="p-4 w-auto ml-64 bg-secondary bg-opacity-80 font-rob">
        <div className="flex flex-col items-center text-md">          
          <h2 className="font-robSerif font-extrabold text-2xl">
            {eName}
          </h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Event Adress
          </label>
          <h2 className="font-robSerif font-extrabold text-2xl">
            {eAdress}
          </h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Date of the event
          </label>
          <h2 className="font-robSerif font-extrabold text-2xl">{eDate}</h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Time of the event
          </label>
          <h2 className="font-robSerif font-extrabold text-2xl">{eTime}</h2>
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="font-thin">
            Event Info
          </label>
          <p className="font-robSerif font-extrabold text-lg">
          {eInfo}
          </p>
        </div>
        <div className="flex justify-center">
          <input type="text" placeholder="Your name" id="confirmationName"/>
          <button onClick={handleClick} className=" bg-details hover:bg-details-hover font-rob text-white font-bold py-2 px-4 rounded text-sm">
            I will be there!
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EventData;
