export const addNewHobby=(hobby)=>{
    return {
        type: 'ADD_HOBBY',
        payload:hobby,
    }
}
// export const setActiveHobby=(hobby)=>{
//     return {
//         type: 'Set_Active_Hobby',
//         payload:hobby,
//     }
// }

export const deleteHobby=(hobby)=>{
    return {
        type:'DELETE_HOBBY',
        payload:hobby
    }
}