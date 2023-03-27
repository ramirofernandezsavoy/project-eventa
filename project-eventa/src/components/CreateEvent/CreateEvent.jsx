import React, { useState } from "react";
import { fullForm } from "../../helpers";
import Swal from "sweetalert2";
import useFirebase from "../../hooks/useFirebase";
import { Navigate } from "react-router-dom"



const CreateEvent = () => {

  const { getEvent } = useFirebase();  
  const [formData, setFormData] = useState({
    eName: "",
    eInfo: "",
    eAdress: "",
    eDate: "",
    eTime: "",
    eType: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form", formData);
    if (
      fullForm([
        formData.eName,
        formData.eInfo,
        formData.eType,
        formData.eAdress,
        formData.eDate,
        formData.eTime,
      ])
    ) {
      Swal.fire({
        title: "Oops!",
        text: "You need to complete all fields",
        icon: "error",
      });
      return;
    } else
    Swal.fire({
      title: "Event creation confirmed",
      text: `You will receive a mail with the event data.`,
      timerProgressBar: false,
      showConfirmButton: true,
      confirmButtonText: "Have fun",      
      icon: "success",
    });
    getEvent({ eData: formData });    
  };

  return (
    <>
      <section className="flex justify-around items-center container mx-auto py-10">
        <div className="text-center max-w-screen-md w-full p-5">
        <form
            action=""
            onSubmit={onSubmit}
            className="rounded p-4 bg-secondary font-rob shadow-2xl"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Event Name
              </label>
              <input
                type="text"
                name="eName"
                value={formData.eName}
                onChange={handleChange}
                placeholder="Ej: John's birthday"
                className="form-input text-xs"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="font-bold">
                Event Info
              </label>
              <input
                type="text"
                name="eInfo"
                value={formData.eInfo}
                onChange={handleChange}                                
                className="form-input text-xs"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="font-bold">
                Event Type
              </label>
              <select                
                name="eType"
                value={formData.eType}
                onChange={handleChange}                
                className="form-input text-xs"
              >
                <option value={"social"}>Social</option>
                <option value={"corporate"}>Corporate</option>
                <option value={"sports"}>Sports</option>
                <option value={"other"}>Others</option>
              </select>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="font-bold">
                Event Adress
              </label>
              <input
                type="text"
                name="eAdress"   
                value={formData.eAdress}
                onChange={handleChange}             
                placeholder="Evergreen, Av. 486th"
                className="form-input text-xs"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="font-bold">
                Date of the event
              </label>
              <input
                type="date"
                name="eDate"    
                value={formData.eDate}
                onChange={handleChange}            
                className="form-date text-xs"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="font-bold">
                Time of the event
              </label>
              <input
                type="time"
                name="eTime"     
                value={formData.eTime}
                onChange={handleChange}           
                className="form-time text-xs"
              />
            </div>
            <button
              type="submit"
              className=" bg-primary hover:bg-white font-rob text-white hover:text-secondary font-bold py-1 mt-2 px-6 shadow-xl rounded text-lg"
            >
              Generate event!
            </button>
          </form>
        </div>
        <div className="text-center max-w-screen-md px-5">
          <h1 className=" font-rob text-4xl inline-block">
            Create your event and{" "}
            <span className=" font-extrabold text-details ">invite</span> your
            friends!
          </h1>
          <p className="font-robSerif font-bold text-xl py-2 my-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            voluptates vero id, reiciendis accusamus impedit. Voluptatum hic
            quod aliquid est. Qui perferendis minus officiis a blanditiis
            dolores animi reprehenderit voluptatem!
          </p>
        </div>
      </section>
    </>
  );
};

export default CreateEvent;
