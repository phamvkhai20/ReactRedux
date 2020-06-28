import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../Components/Home/HobbyList';
import { addNewHobby } from '../actions/hobby';


HomePage.propTypes={};
function HomePage(){
    const hobbyList=useSelector(state => state.hobby.list);
    const dispatch= useDispatch();
    const [item,setItem] = useState({id:"",title:""})
    function Onchages(event) {
        const {name, value} = event.target;
        setItem(prevNote => {
            return {
                ...prevNote, [name]: value,
            }
        });
    }
    const HandleAddHobbyClick= () =>{
        // const IdNew= NewRandom();
        // const NewHobby={
        //     id:IdNew,
        //     title:`Khai ${IdNew}`,
        // }
        const action = addNewHobby(item);
        dispatch(action);
    }
    return (
        <div>
            <h1>Home Page - Redux React JS</h1>
            <input type="number" onChange={Onchages} name="id"/><br></br>
            <input type="text" onChange={Onchages} name="title"/><br></br>
            <button onClick={HandleAddHobbyClick}> Add </button>
            <HobbyList hobbyList={hobbyList} >
            </HobbyList>
        </div>
    )
}
export default HomePage;