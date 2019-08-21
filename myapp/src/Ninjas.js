import React from 'react';
import './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) => {
    //used es6 destructuring here
    //const { ninjas } = props; ==> not used as we directly destructured in the function param
    const ninjaList = ninjas.map((item) => {  
        if(item.age >20){
        return (
            <div className="ninja" key={item.id}>
                <div>Name: {item.name}</div>
                <div>Age: {item.age}</div>
                <div>Belt: {item.belt}</div>
                <button onClick={() =>{deleteNinja(item.id)}}>Delete</button>
            </div>);
        }else{
            return null;
        }
    });
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )

}
export default Ninjas