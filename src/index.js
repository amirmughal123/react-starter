import React from 'react';
import ReactDOM from 'react-dom';
import "../src/style/main.less";
import "../src/style/header.less";
class Welcome extends React.Component {
    render () {
        return (<h1>THis is just a starter
            project with HTMLWebPlugin, CSS(CSS-LESS) LOADER, and configured with webpack and babel
            by Muhammad Zia
        </h1>);
    }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));
