import { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from "../services/Firebase"
import Swal from 'sweetalert2'

const useFirebase = () => {

    const getEvent = async({eData}) => {
        try {
            const col = collection(db, "eventos")
            const event = await addDoc(col, eData)
            return (                
                    Swal.fire({
                        title: "Event created",
                        text: `Your event id is ${event.id}`,
                        icon: "success",
                        timerProgressBar: true,
                    })
                );
        } catch (error) {
            console.log(error)
        }
    }

  return {
    getEvent
  }   
}

export default useFirebase