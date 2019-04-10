import React from 'react';
import { Link } from 'react-router-dom';
import { alertConstants } from '../../common/constants/alert.constants';

class NavBarItem extends React.Component {
    constructor(props){
        super(props);
     }
     
    CreateNavLinks(){
        const { classname,  item } = this.props;
        if(classname !== "dropdown" || item.subitem === undefined){
           if(item.label === "Home")
            return(
                <li  className={classname} ><Link to={"/"+alertConstants.homePage}>{item.label}</Link></li>
            );
            else  
            return <li key={item.image.toString()} id={item.image.toString()} ><Link to={"/"+item.image}> {item.label} </Link> </li>;
        }else{
            let arr = item.subitem;
            let element = arr.map((link,index) =>{
                if(link.subitem !== undefined){
                    let arr_sub = link.subitem;
                    let element_sub = arr_sub.map((link,index) =>{
                        return <li key={link.image.toString()} id={link.image.toString()} ><Link to={"/report/"+link.image}> {link.label} </Link> </li>;
                    });
                    return <li className="dropdown dropdown-submenu" key={link.image.toString()} id={link.image.toString()}><a className="dropdown-toggle" data-toggle="dropdown">{link.label}<span className="glyphicon glyphicon-menu-right"></span></a><ul className="dropdown-menu"  key={link.image.toString()}  id={link.image.toString()} >{element_sub}</ul></li>;
                }
                else{
                    return <li key={link.image.toString()} id={link.image.toString()} ><Link to={"/report/"+link.image}> {link.label} </Link> </li>;
                }
            });
            return(
                <li  className={classname}><a className="dropdown-toggle" data-toggle="dropdown">{item.label}<span className="glyphicon glyphicon-menu-down"></span></a><ul className="dropdown-menu"  key={item.id.toString()}  id={item.id.toString()} >{element}</ul></li>
            );
        }
    }
    render(){
        return(this.CreateNavLinks());
    }
}

export default NavBarItem;