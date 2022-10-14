import{useDispatch} from "react-redux";
import {bandRemoved} from "./bandsSlice";

function Band({band}){
 const dispatch = useDispatch();
 const { id, name } = band;

   function DeleteBand(){
    dispatch(bandRemoved(id));
   }

    return(
        <>
          <li>{name}</li>
          <button onClick={DeleteBand}>Delete Band</button>
        </>
    );
}

export default Band; 