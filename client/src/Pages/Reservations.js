import React, {useEffect, useContext, useState} from 'react';
import ReservationsList from '../components/ReservationsList';
import { userContext } from '../providers/UserProvider';
import useApplicationData from '../hooks/useApplicationData';
import { simpleArray } from '../helpers/simpleArray';
import NavbarComponent from '../components/NavbarComponent';


export default function Reservations(props) {
  const { getReservations, getReviewed } = useApplicationData();
  const [past, setPast] = useState([]);  
  const [future, setFuture] = useState([]);  
  const [today, setToday] = useState([]);  
  const [reviewed, setReviewed] = useState([]); 
  const { user } = useContext(userContext)
  useEffect(() => {
   if(user.id){
    getReservations(user.id)
      .then((data) => {
        setFuture(data.future);
        setPast(data.past);
        setToday(data.todays)
        console.log('DATA!!!!!!', data);
        getReviewed(user.id)
        .then((data) => {
          const parsed = (simpleArray(data))
          setReviewed(parsed)
        })
      })
    }
  }, [user.id])

  return (
    <div>
      <NavbarComponent/>
<ReservationsList reservations={today} passed={false} reviewed={reviewed} today={true}/>
<ReservationsList reservations={future} passed={false} reviewed={reviewed}/>
<ReservationsList reservations={past} passed={true} reviewed={reviewed}/>
    </div>
  )

}