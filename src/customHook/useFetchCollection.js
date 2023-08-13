import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config';

const useFetchCollection = () => {
      const [data, setData] = useState([]);

   const getFlats = () => {
    try {
      const flatsRef = collection(db, 'flats');
      const q = query(flatsRef, orderBy("title", "desc"));

      onSnapshot(q, (snapshot) => {
        // console.log(snapshot.docs);
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(allData);
        setData(allData);
       
      });
    } catch (error) {
    //   toast.error(error.message);
    }
  };
  useEffect(()=>{
    getFlats()
  },[])
  return {data}
  
}

export default useFetchCollection