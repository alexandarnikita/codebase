import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
 
class Helloworld extends React.Component {
    render(){
        return(
            <div>
                <NavBar /> 
                <div className="clearfix"></div>
                <h1>Hello World!!</h1>
            </div>
        );
    }
}

export default Helloworld;