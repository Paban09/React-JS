import {useNavigate} from 'react-router-dom'

function Home(){
    const navigate=useNavigate();
  
    // conditonal routing 
    const navToPage=(url)=>{
      navigate(url);
    };
    return(
        <div>
          <h1>This is Home Component</h1>
            {/* <button onClick={()=>{navigate('/filter')}}>go to Filter page</button>  */}
            <button onClick={()=>{navToPage('/filter')}}>go to Filter page</button> 
        </div>
      );
  }
  

export default Home;