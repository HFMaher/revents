import React,{useState} from 'react'
import {Segment,Header,Form,Button, SetTitle} from 'semantic-ui-react';
import cuid from 'cuid'
import {Link} from 'react-router-dom'

export default function EventForm({setFormOpen,setEvents,createEvent,selectedEvent,updatedEvent}){
const initialValues= selectedEvent ?? {// this is where the form is populated when an event is selected
title:'',
category:'',
description:'',
city:'',
venue:'',
date:''
}

const [values,setValues]=useState(initialValues);

function handleFormSubmit(){
    selectedEvent ? updatedEvent({...selectedEvent,...values}):
    createEvent({...values,id:cuid(),hostedBy:'Bob',attendees:[],hostPhotoURL:'/assets/user.png'});
    setFormOpen(false);
}

function handleInputChange(e) {
   const{name,value}=e.target;
   setValues({...values,[name]:value}); 
}
return (
    <Segment clearing>
        <Header content={selectedEvent ? 'Editing':'Create new event'}/>
        <Form onSubmit={handleFormSubmit}>
            <Form.Field>
                <input type="text" 
                
                placeholder='Event title'
                name='title'
                value={values.title}
                onChange={(e)=>handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Category'  name='category'
                value={values.category}
                onChange={(e)=>handleInputChange(e)}/>
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Description'  name='description'
                value={values.description}
                onChange={(e)=>handleInputChange(e)}/>
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='City'  name='city'
                value={values.city}
                onChange={(e)=>handleInputChange(e)}/>
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Venue'  name='venue'
                value={values.venue}
                onChange={(e)=>handleInputChange(e)}/>
            </Form.Field>
            <Form.Field>
                <input type="date" placeholder='Date'  name='date'
                value={values.date}
                onChange={(e)=>handleInputChange(e)}/>
            </Form.Field>
            <Button type='submit' floated='right' positive content='Submit'/>
            <Button as={Link} to={'/events'} type='submit' floated='right' content='Cancel'/>




        </Form>




    </Segment>





)





}