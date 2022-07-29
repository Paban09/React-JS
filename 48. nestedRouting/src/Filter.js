
import {useSearchParams} from 'react-router-dom';

function Filter(){
    const [SearchParams,SetSearchParams]=useSearchParams();
    console.log("age :",SearchParams.get('age'));
    console.log("city :",SearchParams.get('city'));
    console.log("text :",SearchParams.get('text'));

    const age=SearchParams.get('age');
    const city=SearchParams.get('city');

    return(
        <div>
            <h1>Form Filter Component</h1>
            <h4>Age :: {age}</h4>
            <h4>City :: {city}</h4>
            <input type="text" placeholder='Set text in qurery param' onChange={(e)=>{
                    SetSearchParams({text:e.target.value,age,city})
                }}>
            </input>
            <button onClick={()=>SetSearchParams({age:45})}>Set age in query params</button>
        </div>
    );
};

export default Filter;