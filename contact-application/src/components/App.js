import React from "react";
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
 
    const contacts =[
      {id:"1", name:"Smith", phone:"555-123456"},
      {id:"2", name:"Lara",phone:"555-987654321"},
      {id:"3", name:"Johnson",phone:"555-098765432"}
      ];
    
  return (
  
    <div className="ui container">
    <Header />
     <AddContact />
     <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
