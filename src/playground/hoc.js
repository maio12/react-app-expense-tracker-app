import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Here are some important info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info, don't disclose</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>you should authenticate to access info</p>)}
        </div>
    )
}

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="here the info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="here the info" />, document.getElementById('app'));