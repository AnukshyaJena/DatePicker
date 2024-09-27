import React,{ useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


function ReactDatePicker(){
    const[selectedDate,setSelectedDate]=useState(null);
    const handleDateChange=(date)=>{
        setSelectedDate(date);
    };
    return(
        <div>
             <h1>Hello date picker</h1>   
             <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MM/DD/yyyy"></DatePicker>
        </div>
   
    )
    
}


export default ReactDatePicker;
