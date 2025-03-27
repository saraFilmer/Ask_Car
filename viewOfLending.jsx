
import { useSelector } from 'react-redux';
import { View } from './principle/view';
import React from 'react';

export const ViewOfLending=()=>{

    let lend=useSelector(Store => Store.lending)
    let ret=useSelector(Store => Store.return)
    console.log(ret)
    return<>
    {lend.length==0 && <p>אין הזמנות רשומות במערכת</p>}
    {lend.map((item, index) =><View key={index} code={item.code} time={item.time} num={item.numOrder} ></View>)}
    </>
    
}

