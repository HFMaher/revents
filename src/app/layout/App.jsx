import React,{useState} from 'react';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/NavBar';


export default function App() {
  const [formOpen,setFormOpen]=useState(false);
  return (
    <>
    <Navbar setFormOpen={setFormOpen}/>
    <Container className='main'>
    <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
    </Container>
    </>
  );
}


