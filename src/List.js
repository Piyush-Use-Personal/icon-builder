import { React, useState } from 'react'
import iconbuilder from "./register"

function List(props) {
    let result = Object.entries(iconbuilder.icon)
    console.log(result)
    const filteredData = result.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            console.log(el)
            return el[0].toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List
