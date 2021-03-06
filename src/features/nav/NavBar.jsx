import React,{useState} from 'react';
import {Menu,Container,Button} from 'semantic-ui-react';
import { NavLink,useHistory } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function Navbar({setFormOpen}){
    const [authenticated,setAuthenticated]=useState(false);
    const history=useHistory();

    function handleSignOut(){
        setAuthenticated(false);
        history.push('/');
    }

 return (
     <Menu inverted fixed='top'>
         <Container>
             <Menu.Item as={NavLink} exact to='/' header>
                 <img src="/assets/logo.png" alt="logo" style={{marginRight:'15'}}/>
                 Re-vents
             </Menu.Item>
             <Menu.Item as={NavLink} exact to='/events' name='Events'/>
            {authenticated && <Menu.Item as={NavLink} exact to='/createEvent'>
                 <Button onClick={()=>setFormOpen(true)} positive inverted content='Create Event'/>
             </Menu.Item>}
             {authenticated ? (<SignedInMenu signOut={handleSignOut}/>) : (<SignedOutMenu setAuthenticated={setAuthenticated}/>)}
             
         </Container>

     </Menu>





 )






}