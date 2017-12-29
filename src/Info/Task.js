import React, { Component } from 'react';
import './Task.css';
import Info from './Info';
import Photo from './Photo';
import Name from './Name';
import Nickname from './Nickname';
import Contacts from './Contacts/Contacts'

class Task extends Component {
    render(){
        return(
            <div className="Task">
              <Photo />
              <Name name='Nikita Kharuk'/>
              <Nickname nickName='n1qa4y'/>
              <Info info='Worst studen ever.'/>
              <Contacts icon ="address-book-o" text="@BSTU" />
              <Contacts icon ="map-marker" text="Volkovysk" />
              <Contacts icon ="envelope-o" text="bbm20plus@gmail.com" />
              <Contacts icon ="link" text="twitter.com" />
            </div>
        );
    }
}

export default Task;