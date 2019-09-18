import React from 'react';



const Loader = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">
                {props.message}
            </div>
        </div>
    );
};

Loader.defaultProps = {
    message: 'Default loading message'
}

export default Loader;