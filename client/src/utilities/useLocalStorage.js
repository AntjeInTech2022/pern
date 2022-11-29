import {useEffect, useState} from 'react';



// get value from local storage:
export default function useLocalStorage(initialValue) {

const [value, setValue] = useState(() => {
   
    const jwt = localStorage.getItem(jwt)
    if (jwt != null) return JSON.parse(jwt)
    if (typeof initialValue === 'function') {
        return initialValue()
    } else {
        return initialValue
    }
})


useEffect(() => {
localStorage.setItem(JSON.stringify(value))
}, [value])

return [value, setValue]

}