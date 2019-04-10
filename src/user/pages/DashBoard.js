import React from 'react';
import '../css/App.css'; 
import '../css/index.css';
import '../css/custom.css';
import '../css/layout.css';

class DashBoard extends React.Component {
    render(){
        return(
            <div className="panel panel-primary" style={{margin:'0'}}>
                <div className="panel-heading">
                    <h4 className="panel-title">Dashboard</h4>
                </div>
                <div className="panel-body">
                    <div className="col-md-12 col-sm-12 head-cls backwhite">
                        <div className="col-md-12 col-sm-12" style={{padding: '0'}}>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingLeft:'0px'}}>
                                <img src="src/images/graph_images/image1.png" width="100%" height="100%" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingRight:'0px'}}>
                                <img src="src/images/graph_images/image2.png" width="100%" height="100%" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingLeft:'0px'}}>
                                <img src="src/images/graph_images/image3.png" width="100%" height="100%" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingRight:'0px'}}>
                                <img src="src/images/graph_images/image4.png" width="100%" height="100%" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingLeft:'0px'}}>
                                <img src="src/images/graph_images/image5.png" width="100%" height="100%" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingRight:'0px'}}>
                                <img src="src/images/graph_images/image6.png" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;