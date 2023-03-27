import { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from "../services/Firebase"
import Swal from 'sweetalert2'

const useFirebase = () => {

const [event, setEvent] = useState(null)
const [loading , setLoading] = useState(false)

useEffect(() => {
    getEvent()

    return () => {
    }
}, [])

const getEvent =  async (id) => {

    try {
        setLoading(true)
        const document = doc(db,"eventos",id)
        const response = await getDoc(document)
        setEvent({id:response.id,...response.data()})
        setLoading(false)
    } catch (error) {
        console.log(error)
    }

};

    const createEvent = async({eData}) => {
        try {
            const col = collection(db, "eventos")
            const event = await addDoc(col, eData)
            return (                
                    Swal.fire({
                        title: "Event ${event.id} created",
                        text: `Your event id is ${event.id}.`,
                        icon: "success",
                        timerProgressBar: true,
                    })
                );
        } catch (error) {
            console.log(error)
        }
    }

  return {
    createEvent,
    getEvent,
    loading,
    event,
  }   
}

export default useFirebase