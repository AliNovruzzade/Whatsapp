import './App.css';
import Main from './page/Main';
import {UserContext} from './context/UserContext.jsx'
import { useState , useEffect } from 'react';
import { usersData } from './fakedata';
import Loading from './components/Loading';



function App() {

  let [chat , setChat] = useState(usersData[0])
  const [users, setUsers] = useState(usersData);
  const [open, setOpen] = useState(false);
  let [loading , setLoading] = useState(true);
  let [progress , setProgress] = useState(0)
  let [writeMessage , setWriteMessage] = useState([])
  const [sendMsg , setSendMsg] = useState('')


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if(progress >= 100 ){
        setLoading(false)
      }
      else{
        const increment = Math.round(Math.random() * (10 + 1)) + 3
        setProgress(progress + increment)
      }
    }, 300);
  } , [progress])

  const sendLocation = () => {
    navigator.geolocation.getCurrentPosition((e) => {
      let location = 
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.4715980724827!2d18.646640377447042!3d54.34864699925824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd739f0fca4d11%3A0xb13da0c58cb20686!2sOgarna%20121%2C%2080-826%20Gda%C5%84sk!5e0!3m2!1sen!2spl!4v1689276659330!5m2!1sen!2spl" 
      width="250" 
      height="150" 
      frameBorder={0}
      ></iframe>

      writeMessage.push({
        message: location ,
        msgHours: '17',
        msgMinute: '30',
        statusUser: 2,
        chatId: 0
      })
      setWriteMessage([...writeMessage])
    })
  }


  return (

    <>
      {
        loading ?
        <Loading progress={progress} />
        :
        <UserContext.Provider value={{sendLocation , sendMsg , setSendMsg , writeMessage , setWriteMessage , usersData , onClose , open , showDrawer , setOpen , users , setUsers , chat , setChat}}> 
        <Main />
      </UserContext.Provider>
      }

   
    </>
  );
}

export default App;
