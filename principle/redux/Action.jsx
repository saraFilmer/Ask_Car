// 2.
// actions - פעולות של שינויים שנרצה להפעיל על הסטייט
// הגדרה של הפעולה

export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}

export const addLendingCar = (car) => {
    return { type: 'ADD_LENDINGCAR', payload: car }
}

// export const updateCar = (code, newValue) => ({
//     type: 'UPDATE_CAR',
//     payload: { code, newValue }
// })

export const updateCar=(item, index)=>{
    return {type: 'UPDATE_CAR',payload:{item, index}}
}

export const updateAnaa=(item, index)=>{
    return {type: 'UPDATE_ANAA',payload:{item, index}}
}

export const addCar = (car) => {
    return { type: 'ADD_CAR', payload: car }
}

export const deleteCar = (car) => {
    return { type: 'DELETE_CAR', payload: car }
}

