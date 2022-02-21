import React, {useEffect, useContext, useState} from 'react';
import ReservationsList from '../components/ReservationsList';
import { userContext } from '../providers/UserProvider';
import useApplicationData from '../hooks/useApplicationData';

export default function Reservations(props) {
  const { getReservations, getReviewed } = useApplicationData();
  const [past, setPast] = useState([]);  
  const [future, setFuture] = useState([]);  
  const { user } = useContext(userContext)
  useEffect(() => {
   if(user.id){
    getReservations(user.id)
      .then((data) => {
        setFuture(data.future);
        setPast(data.past);
        console.log('DATA!!!!!!', data);
        getReviewed(user.id)
        .then((data) => {
          console.log(data, `REVIEWED DATA`);
        })
      })
    }
  }, [user.id])
  return (
    <div>
      RESERVATIONS PAGE
<ReservationsList reservations={past} passed={true}/>
<ReservationsList reservations={future} passed={false}/>
    </div>
  )

}