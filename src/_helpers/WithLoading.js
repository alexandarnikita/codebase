import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p align="center"><br></br><img src={require('../images/loading.gif')} alt="loading..." /></p>);
  }
}
export default WithLoading;