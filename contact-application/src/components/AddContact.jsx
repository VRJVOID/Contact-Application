import React from 'react'

class AddContact extends React.Component{
    render(){
        return(
            <div className="main">
               
                <h1>Add a new contact</h1>
                <form className='form'>
                   
                    <div className="field">
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name'></input>
                    </div>

                    <div className="field">
                        <label>Number</label>
                        <input type='phone' name='number' placeholder='Number'></input>
                    </div>

                    <button className='ui button blue'>Add Contact</button>
                </form>
            </div>
        )
    }
}
export default AddContact;