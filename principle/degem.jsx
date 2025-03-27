
export const Degem=(props)=>{
    // {Code:'1',Company:'הונדה',Model:'סוויק הצבק',typeCode:'123'},
       const {Company,Model,typeCode}=props
       return<><div className="product-card">
       <p>
       חברה: {Company} 
        <br></br>
       מודל: {Model} 
        <br></br>
        {typeCode}
       </p></div>
       </>
}