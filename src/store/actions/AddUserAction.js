import {db} from '../../config/Firebase'

export const AddUserAction = (data) => async (dispatch) =>{
    try {
        
        await db.collection("users").add(data);
        console.log("data added into firebase in action",);
        dispatch({
          type: 'ADD_USER',
          payload: data,
        });
      } catch (error) {
        console.log("error", error);
        alert(error);
      } finally {
        
      }
    };


