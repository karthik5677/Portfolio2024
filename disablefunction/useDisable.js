import React, { useEffect, useState } from 'react'

function useDisable(quantity) {
    const [disableminus,setDisableminus]=useState(false);
    useEffect(()=>{
        if(quantity <=1){
            setDisableminus(true);
        }
        else{
            setDisableminus(false);
        }
    },[quantity]);
    return disableminus;
  
    
}

export default useDisable;