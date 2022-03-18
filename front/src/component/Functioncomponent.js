import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Functioncomponent () {
    const [mytext , mytextUpdate ] = useState('아직 디바안옴 내가 지킴')
    useEffect(async () => {
        await axios.post('/getsend/post',{})
        .then( res => {
            mytextUpdate(res.data.title)
            }
        )
        
    },[]) //[] 이게 없으며 계속 돌게됨,

    return(
        <div>post는 axios.post로 응답해 {mytext}</div>
    )
}

export default Functioncomponent;