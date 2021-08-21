import React from 'react'
import useForm from '../hooks/form.js';
import { Button, Label,Icon } from "@blueprintjs/core";

function Form(props) {   
    const { handleChange, handleSubmit } = useForm(props.addItem);
    return (
        <div style={{padding:'2.5%', margin:'1.5%', width:'20%', height:'70%', border:'solid 2.5px rgb(40,103,121)', borderRadius:'5px', backgroundColor:'rgb(34,66,82)', display:'inline-block', float:'left'}}>
            <form onSubmit={handleSubmit} style={{color:'white'}}>

                <h2>Add To Do Item</h2>

                <Label className="bp3-label">
                    <span className="bp3-text-muted">To Do Item</span>
                    <input  className="bp3-input" required  style={{width: "200px"}}  dir="auto" onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                </Label>

            <div className="bp3-form-group">
                <Label className="bp3-label" htmlFor="form-group-input">
                  Assigned To
                </Label>
                <div className="bp3-form-content">
                 <div className="bp3-input-group">
                    <span className="bp3-icon bp3-icon-calendar">
                     <Icon icon="calendar"  />
                    </span>
                    <input className="bp3-input" required style={{width: "200px"}}  dir="auto" onChange={handleChange} name="assignee" type="text" placeholder="  D / M / Y" />
                 </div>    
               </div>
            </div>

                <label style={{paddingLeft:'10px'}}>
                    <span>Difficulty</span>
                    <input  onChange={handleChange} defaultValue={3} type="range"  min={1} max={5} name="difficulty" />
                </label>
                    <br></br>
                <label>
                    <Button style={{width: "200px",marginTop:'5%'}} type="submit">Add Item</Button>
                </label>
            </form>
        </div>
    )
}

export default Form