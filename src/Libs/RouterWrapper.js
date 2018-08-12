import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

class RouterWrapper extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {

    const root = this.props.root;
    const children = React.Children.map(this.props.children, (child) => {
      const params = child.type.params || '' ;
      const url = child.key + params;
      const pathWithBase = [this.props.baseRoute, url].join('/').toLowerCase();
      const path =  this.props.baseRoute ? pathWithBase : '/' + url.toLowerCase();
      return <Route onChange={this.props.onChange} path={path} name={child.key} key={child.key} component={(props) => {
          const Child = child.type;
        return <Child {...child.props} {...props} store={this.props.store} root={root} />} }/>
    });
    
    return (
      <Switch>
        {children}
        <Redirect from="/" to={this.props.indexRoute} />
      </Switch>)
  }
}

RouterWrapper.propTypes = {
  indexRoute: PropTypes.string,
  baseRoute: PropTypes.string,
  context: PropTypes.object,
};



export default RouterWrapper;
