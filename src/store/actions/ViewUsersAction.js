// import {db} from '../../config/Firebase'
// import { useState } from 'react';

// export const ViewUsersAction = () => async () =>{
//     const [users, setUsers] = useState('');
//     try {
        
//         await db.collection("users").get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 setUsers(doc);
//                 console.log(users);
//             })
//         });
//         // console.log("data added into firebase in action",);
//         // dispatch({
//         //   type: 'ADD_USER',
//         //   payload: data,
//         // });
//       } catch (error) {
//         console.log("error", error);
//         alert(error);
//       } finally {
        
//       }
//     };

    