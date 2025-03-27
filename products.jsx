import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { Car } from './car'


export const CbMain = () => {

    const [city,setCity]=useState('');
    const [model,setModel]=useState('');
    const [anaa,setAnaa]=useState('');
    const [typeCar,setTypeCar]=useState('') 


    const carstate = useSelector(Store => Store.cars)
    const [cars,setCars] = useState(carstate)

    // selector - שליפת משתנים גלובליים מתוך הסטייט
const Anaa=useSelector(Store => Store.propulsion) ;

    // שלב 1: שלוף את כל הערים
const cities = carstate.map(item => item.city); 

    // שלב 2: הסר כפילויות על ידי שימוש ב-Set
 const uniqueCities = Array.from(new Set(cities));

//  שלוף את כל סוגי ההנעה
 const a = Anaa.map(item => item.name); 
 console.log(a)

 const prop = useSelector(Store => Store.propulsion)

 const pro = prop.find((x) => x.name == anaa);

 const degem = useSelector(Store => Store.CarModelsts)
//  const companies=degem
 const products = useSelector((store) => store.products);
//  const uniqueCompanies = Array.from(new Set(companies));




    const handleFilterChange = () => {
      
        // const filterCars = carstate.filter(car => {        
        //     return (          
        //         (city==''||car.city == city) &&
        //         (anaa==''||car.driveType == pro.code) &&                                          
        //         (model==''||car.codeCarModelsts==model) &&
        //        //לאחר סינון מביא רק את הרכבים הפנויים!!! 
        //         (car.available===true)     
        //     );
        // })

        const filterCars = carstate.filter(car => {
          if (!car) return false; // אם car הוא undefined
          return (
              (city == '' || car.city == city) &&
              (anaa == '' || car.driveType == pro.code) &&
              (model == '' || car.codeCarModelsts == model) &&
              (car.available === true)
          );
      });
       

        setCars(filterCars);
    };

    useEffect(() => {
        handleFilterChange();
    }, [city,model,anaa]);

    return <>

<Nav />
      <div className='filter-container'>
        <select className="filter-item" onChange={(e) => setCity(e.target.value)}>
          <option value="">בחר עיר</option>
          {uniqueCities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>

        <select className="filter-item" onChange={(e) => setAnaa(e.target.value)}>
          <option value="">בחר סוג הנעה</option>
          {a.map((drive, index) => (
            <option key={index} value={drive}>{drive}</option>
          ))}
        </select>

        <select className="filter-item" onChange={(e) => setModel( e.target.value )}>
        <option disabled selected>בחר חברה</option> 
        {degem.map((value, index)=><option key={index} value={value.Code}>{value.Company} {value.Model}</option>)}</select><br></br>

        {/* <select  onChange={(e) => setNewV({ ...newV, codeCarModelsts: e.target.value })}>
      <option disabled selected>בחר סוג רכב</option> 
        {products.map((value, index)=><option value={value.Code} key={index}> {value.name}</option>)}</select><br></br> */}
        </div>
        {/* <button className='filter' onClick={resetFilter}>הצג הכל</button> */}
        {/* מילוי של התצוגה של הרכבים */}
        <div className='images'>
     
        {cars.map((item, i) => <Car key={i} code={item.code} licenseNumber={item.licenseNumber} codeCarModelsts={item.codeCarModelsts} 
    numPlaces={item.numPlaces} yearbook={item.yearbook} gir={item.gir} driveType={item.driveType} priceHour={item.priceHour}
    consKm={item.consKm} balance={item.balance} street={item.street} city={item.city}
    available={item.available}></Car>)}

        </div>
       
    </>

}

export default CbMain;

