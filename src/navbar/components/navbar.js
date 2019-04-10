import React from 'react';
import NavBarItem from './navbaritem';  
import { connect } from 'react-redux';
import { navbarActions } from '../actions/navbar.actions';
import { Link } from 'react-router-dom';
import { history } from '../../_helpers';

let clientFirm;
class NavBar extends React.Component {
    constructor(){
        super();
        this.state={
            linkData:[]
         }
    }
    componentDidMount() {
        //  if(localStorage.getItem("navlinkFlag") === "false" || localStorage.getItem("navlinkFlag") === undefined
        //  || this.props.navlinks.navlinks===undefined
        //  ){
        //     localStorage.setItem("navlinkFlag","true")
            // this.props.dispatch(navbarActions.fetchNavlinks());
        // }
     }
    doChange(e){
        clientFirm=e.target.value; 
        localStorage.setItem('clientFirm', clientFirm);
        //history.push('/');
          window.location.href="/";        
    }
    render(){
        const { navlinks } = this.props;
        // let result = navlinks.navlinks;
        let result = [{
            	"id": "0",
            	"label": "",
            	"name": "clientFirm",
            	"value": "",
            	"flag": "",
            	"image": "",
            	"parentImage": "",
            	"toppanelImage": "",
            	"token": "",
            	"href": "",
            	"onclick": "",
            	"checked": "",
            	"fieldValue": "67199300",
            	"localeLang": "",
            	"onChangeFlag": "",
            	"subListName": "",
            	"paginationFlag": "true",
            	"loginId": "",
            	"companyId": "",
            	"action": "",
            	"link": "",
            	"type": "Select",
            	"values": [{
            		"id": "67199300",
            		"label": "",
            		"name": "Client Firm 1",
            		"value": "",
            		"flag": "",
            		"image": "",
            		"parentImage": "",
            		"toppanelImage": "",
            		"token": "",
            		"href": "",
            		"onclick": "",
            		"checked": "",
            		"fieldValue": "",
            		"localeLang": "",
            		"onChangeFlag": "",
            		"subListName": "",
            		"paginationFlag": "true",
            		"loginId": "",
            		"companyId": "",
            		"action": "",
            		"link": "",
            		"type": ""
            	}, {
            		"id": "25826746",
            		"label": "",
            		"name": "Client Firm 2",
            		"value": "",
            		"flag": "",
            		"image": "",
            		"parentImage": "",
            		"toppanelImage": "",
            		"token": "",
            		"href": "",
            		"onclick": "",
            		"checked": "",
            		"fieldValue": "",
            		"localeLang": "",
            		"onChangeFlag": "",
            		"subListName": "",
            		"paginationFlag": "true",
            		"loginId": "",
            		"companyId": "",
            		"action": "",
            		"link": "",
            		"type": ""
            	}, {
            		"id": "49970284",
            		"label": "",
            		"name": "Client Firm 3",
            		"value": "",
            		"flag": "",
            		"image": "",
            		"parentImage": "",
            		"toppanelImage": "",
            		"token": "",
            		"href": "",
            		"onclick": "",
            		"checked": "",
            		"fieldValue": "",
            		"localeLang": "",
            		"onChangeFlag": "",
            		"subListName": "",
            		"paginationFlag": "true",
            		"loginId": "",
            		"companyId": "",
            		"action": "",
            		"link": "",
            		"type": ""
            	}, {
            		"id": "91455592",
            		"label": "",
            		"name": "Client Firm 4",
            		"value": "",
            		"flag": "",
            		"image": "",
            		"parentImage": "",
            		"toppanelImage": "",
            		"token": "",
            		"href": "",
            		"onclick": "",
            		"checked": "",
            		"fieldValue": "",
            		"localeLang": "",
            		"onChangeFlag": "",
            		"subListName": "",
            		"paginationFlag": "true",
            		"loginId": "",
            		"companyId": "",
            		"action": "",
            		"link": "",
            		"type": ""
            	}]
            }, {
            	"id": "1",
            	"label": "Links",
            	"name": "Links",
            	"value": "",
            	"flag": "",
            	"image": "",
            	"parentImage": "",
            	"toppanelImage": "",
            	"token": "",
            	"href": "",
            	"onclick": "",
            	"checked": "",
            	"fieldValue": "",
            	"localeLang": "",
            	"onChangeFlag": "",
            	"subListName": "",
            	"paginationFlag": "true",
            	"loginId": "",
            	"companyId": "",
            	"action": "",
            	"link": "",
            	"type": "Links",
            	"values": [{
            		"id": "10000083",
            		"label": "Home",
            		"name": "",
            		"value": "",
            		"flag": "",
            		"image": "HOME",
            		"parentImage": "HOME",
            		"toppanelImage": "HOME",
            		"token": "",
            		"href": "",
            		"onclick": "",
            		"checked": "",
            		"fieldValue": "",
            		"localeLang": "",
            		"onChangeFlag": "",
            		"subListName": "",
            		"paginationFlag": "true",
            		"loginId": "",
            		"companyId": "",
            		"action": "",
            		"link": "javascript:doLPHome(\u0026#39;HOME\u0026#39;,\u0026#39;\u0026#39;)",
            		"type": ""
            	}, {
            		"id": "10000384",
            		"label": "Menu 1",
            		"name": "",
            		"value": "",
            		"flag": "",
            		"image": "Menu 1",
            		"parentImage": "Menu 1",
            		"toppanelImage": "Menu 1",
            		"token": "",
            		"href": "",
            		"onclick": "",
            		"checked": "",
            		"fieldValue": "",
            		"localeLang": "",
            		"onChangeFlag": "",
            		"subListName": "",
            		"paginationFlag": "true",
            		"loginId": "",
            		"companyId": "",
            		"action": "",
            		"link": "/fotrd/ectrading/investments/invDealingInput.jsp",
            		"type": ""
            	}, {
            		"id": "10000498",
            		"label": "Menu 2",
            		"name": "",
            		"value": "",
            		"flag": "",
            		"image": "Menu 2",
            		"parentImage": "Menu 2",
            		"toppanelImage": "Menu 2",
            		"token": "",
            		"href": "",
            		"onclick": "",
            		"checked": "",
            		"fieldValue": "",
            		"localeLang": "",
            		"onChangeFlag": "",
            		"subListName": "",
            		"paginationFlag": "true",
            		"loginId": "",
            		"companyId": "",
            		"action": "",
            		"link": "/ectrading/tradeinquiry/tradeInquiry.jsp",
            		"type": "",
            		"subitem": [{
            			"id": "10000499",
            			"label": "Menu 2.1",
            			"name": "",
            			"value": "",
            			"flag": "",
            			"image": "Menu 2.1",
            			"parentImage": "Menu 2.1",
            			"toppanelImage": "Menu 2.1",
            			"token": "",
            			"href": "",
            			"onclick": "",
            			"checked": "",
            			"fieldValue": "",
            			"localeLang": "",
            			"onChangeFlag": "",
            			"subListName": "",
            			"paginationFlag": "true",
            			"loginId": "",
            			"companyId": "",
            			"action": "",
            			"link": "/ectrading/tradeinquiry/tradeInquiry.jsp",
            			"type": "",
            			"subitem": [{
            				"id": "10000092",
            				"label": "Menu 2.1.1",
            				"name": "",
            				"value": "",
            				"flag": "",
            				"image": "Menu 2.1.1",
            				"parentImage": "Menu 2.1.1",
            				"toppanelImage": "Menu 2.1.1",
            				"token": "",
            				"href": "",
            				"onclick": "",
            				"checked": "",
            				"fieldValue": "",
            				"localeLang": "",
            				"onChangeFlag": "",
            				"subListName": "",
            				"paginationFlag": "true",
            				"loginId": "",
            				"companyId": "",
            				"action": "",
            				"link": "javascript:doLPTradeInqr(\u0026#39;REPORT\u0026#39;,\u0026#39;TRDINQR\u0026#39;)",
            				"type": ""
            			}, {
            				"id": "10000500",
            				"label": "Menu 2.1.2",
            				"name": "",
            				"value": "",
            				"flag": "",
            				"image": "Menu 2.1.2",
            				"parentImage": "Menu 2.1.2",
            				"toppanelImage": "Menu 2.1.2",
            				"token": "",
            				"href": "",
            				"onclick": "",
            				"checked": "",
            				"fieldValue": "",
            				"localeLang": "",
            				"onChangeFlag": "",
            				"subListName": "",
            				"paginationFlag": "true",
            				"loginId": "",
            				"companyId": "",
            				"action": "",
            				"link": "/ectrading/tradeinquiry/futureTradeDates.jsp",
            				"type": ""
            			}, {
            				"id": "10000378",
            				"label": "Menu 2.1.3",
            				"name": "",
            				"value": "",
            				"flag": "",
            				"image": "Menu 2.1.3",
            				"parentImage": "Menu 2.1.3",
            				"toppanelImage": "Menu 2.1.3",
            				"token": "",
            				"href": "",
            				"onclick": "",
            				"checked": "",
            				"fieldValue": "",
            				"localeLang": "",
            				"onChangeFlag": "",
            				"subListName": "",
            				"paginationFlag": "true",
            				"loginId": "",
            				"companyId": "",
            				"action": "",
            				"link": "javascript:doLPLinkCTRNavPost(\u0026#39;REVTRDUP\u0026#39;,\u0026#39;\u0026#39;)",
            				"type": ""
            			}]
            			}]
            		}]
            }]

        console.log("result--->",result)
        let linkmap;
        let filterMap;
        if(result !== undefined){
            result=Array.from(result)
           filterMap = result.map((filter,index) => {
               if(index===0 &&
                localStorage.getItem("clientFirm")===null){
                    localStorage.setItem("clientFirm",filter.values[0].id);                  
                }
                if(filter.type === "Select"){
                 return(
                    <div className="col-md-6 col-sm-6 pull-right" style={{marginTop:'9px'}}>           
                        <div className="col-md-4 col-sm-4 pull-right" key={filter.id.toString()}>
                            <select ref={ filter.name }  name={filter.name}  className="form-control input-sm" onChange={this.doChange}>
                                {
                                    filter.values.map((obj,index) => { 
                                        if(localStorage.getItem("clientFirm")!==undefined && localStorage.getItem("clientFirm").replace(/"/g,"") === obj.id.toString()){
                                            return <option key={index} value={obj.id} selected={obj.id}>{obj.name}</option>
                                        }else{
                                            return <option key={index} value={obj.id}>{obj.name}</option>
                                        }
                                    })
                                } 
                            </select>
                        </div>
                        <label className="pull-right" style={{color: '#fff',marginTop:'5px',fontSize: '16px'}}>Client : </label>
                   </div>
                   );
                } 
            });
            
            result.map((item) => {
                if(item.type === "Links"){
                    this.state.linkData = item.values
                    //console.log("linkdata::"+JSON.stringify(this.state.linkData));
                }
            });

            linkmap = this.state.linkData.map((item) => {
                if(item.label === "Home"){
                    return <NavBarItem key={item.id} classname={"active"} item={item}/>
                }else if(item.subitem !== undefined){
                    return <NavBarItem classname="dropdown" key={item.id} item={item} />
                }else{ 
                    return <NavBarItem classname="dropdown" key={item.id} item={item} />                 
                }  
            });
        }
 
        return(
            <div>
                <div id="header" className="col-md-12 col-sm-12 clearfix">
                    <div style={{paddingLeft:'15px',paddingRight:'15px',float:'left'}}>
                        {/* <img src="/src/images/header_logo.png" width="35px" /> */}
                    <label style={{color: '#fff',marginTop:'15px',fontSize: '16px'}}>Welcome <span style={{textTransform: 'capitalize'}}>{localStorage.getItem("loginName")}</span></label>
                    </div>
                    <div className="col-md-1 col-sm-1 pull-right" style={{marginTop:'9px'}}>
                        <Link to="/login" className="btn btn-danger btnPrimary">Logout</Link>
                    </div>
                    {filterMap}
                </div>
                <div className="clearfix"></div>
            <div id="navbar" style={{float:'left'}}>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                   
                    <div key="newline" className="clearfix"></div>
                        <ul className="nav navbar-nav">
                            {linkmap}
                        </ul>
                    </div>
                </nav>
            </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { navlinks } = state;
    return { navlinks };
}

const connectedNavBar = connect(mapStateToProps)(NavBar);
export { connectedNavBar as NavBar };
 