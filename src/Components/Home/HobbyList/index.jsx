import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteHobby } from '../../../actions/hobby';
HobbyList.propTypes={
    HobbyList: PropTypes.array,
};
HobbyList.defaultProps= {
    HobbyList:[],
}
function HobbyList(props){
    const dispatch= useDispatch();
    function clickHobby(id){
        console.log(id);
        const action = deleteHobby(id);
        dispatch(action);
    }
    const {hobbyList} = props;
    return (
        <ul>
            {hobbyList.map((hobby,index) => (
            <li key={hobby.id} onClick={()=> clickHobby(index)}>{hobby.id}-{hobby.title}</li>
            ))}
        </ul>
    )
}
export default HobbyList;