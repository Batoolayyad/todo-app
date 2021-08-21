
import React,{useState,useContext,useEffect} from 'react'
import {settingContext} from '../context/settingContext.js';
import { Button, Card, Elevation } from "@blueprintjs/core";


function List(props) {
    const settingsContext = useContext(settingContext);
    const [activeList, setActiveList] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(Math.ceil(props.list.length/settingsContext.itemPerPage));
   
    
    useEffect(()=>{
        let start = (activePage - 1)*settingsContext.itemPerPage;
        let end = start + settingsContext.itemPerPage;
        setNumOfPages(Math.ceil(props.list.length/settingsContext.itemPerPage)); 
        setActiveList(props.list.slice(start,end)); 
    },[props.list.length]);

    useEffect(()=>{
        if(settingsContext.showCompleted){
            let start = (activePage - 1)*settingsContext.itemPerPage;
            let end = start + settingsContext.itemPerPage;
            setActiveList(props.list.slice(start,end));
            setNumOfPages(Math.ceil(props.list.length/settingsContext.itemPerPage));
        }else{
           let temp = props.list.filter((item)=>{
                return item.complete===false
            })
            let start = (activePage - 1)*settingsContext.itemPerPage;
            let end = start + settingsContext.itemPerPage;
            setActiveList(temp.slice(start,end));
            setNumOfPages(Math.ceil(temp.length/settingsContext.itemPerPage))
        }
    },[activePage,settingsContext.showCompleted,activeList]);


    function changeActivePage(num){
        setActivePage(num);
    }

    function toggleView(){
        settingsContext.setShowCompleted( !settingsContext.showCompleted );
    }

    const pages=()=>{
        let page =[];
        for(let i=1;i<=numOfPages;i++){
           page.push(<Button onClick={()=>{changeActivePage(i)}} key={i}>{i}</Button>)
        }
        return page;
    }

    return (
        <>
           <div style={{width:'60%' , margin:'.5%', marginLeft:'10%',flaot:'right', display:'inline-block'}}>
           <Button onClick={toggleView} style={{width:'25%', margin:'1.5%',backgroundColor:'rgb(210,234,227)' }}> Show Completed Items {settingsContext.showCompleted.toString()}</Button>
            {activeList.map(item => (
                <Card key={item.id} style={{width:'70%', margin:'10px', backgroundColor:'rgb(48,94,99)',color:'white'}}>
                <p>{item.text}</p>
                <p><small>Assigned to: {item.assignee}</small></p>
                <p><small>Difficulty: {item.difficulty}</small></p>
                <div onClick={() => props.toggleComplete(item._id)}>Complete: {item.complete.toString()}</div>
                <Button onClick={() => props.handleDelete(item._id)}>Delete</Button>
            </Card>
      ))}
     {activePage>1 && <Button onClick={()=>{setActivePage(activePage-1)}}>prev</Button>}
        {pages()}
      {activePage<numOfPages && <Button onClick={()=>{setActivePage(activePage+1)}} >next</Button>}
      </div>

        </>
    )
}

export default List






