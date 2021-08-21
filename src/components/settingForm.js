import React,{useContext,useEffect,useState} from 'react';
import {settingContext} from '../context/settingContext';
import { Button, Label } from "@blueprintjs/core";



function SettingsForm() {
    const settings = useContext(settingContext)
    const [show,setShow] = useState(true);
    const [numOfitems,setNumOfitems] = useState(1);

    function handleItemNumber(e){
        setNumOfitems(Number(e.target.value));
    }
    function handleView(e){
        if(e.target.checked){
            setShow(e.target.checked);
        }else{
            setShow(e.target.checked);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        settings.setItemPerPage(Number(numOfitems));
        settings.setShowCompleted(show);
    }

    useEffect(()=>{
        let payload ={
        itemPerPage:settings.itemPerPage,
        showCompleted:settings.showCompleted,
        }
        if(settings.itemPerPage){
            localStorage.setItem('settings',JSON.stringify(payload));
        }
    },[settings])
    return (
        <div style={{padding:'3%', margin:'3%', width:'20%', color:'white', border:'solid 2.5px rgb(40,103,121)',backgroundColor:'rgb(34,66,82)',borderRadius:'5px'}}>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <Label className="bp3-label">
                  <span className="bp3-text-muted">Items per page</span>   
                  <input className="bp3-input" style={{width: "200px"}}  dir="auto" name='items' type='number' placeholder={1} value={numOfitems} min={1} onChange={handleItemNumber}></input>
                </Label>
                <Label className="bp3-control bp3-checkbox">
                    <input type="checkbox" />
                    <span className="bp3-control-indicator" name='view' type='checkbox' onChange={handleView}></span>
                    view completed items
                </Label>
                <Button type='submit' style={{ width:'30%'}}>submit</Button>
            </form>
        </div>
    )
}

export default SettingsForm