import React from 'react';

const AddPropsHOC = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent/>
        }
    }
    return NewComponent;
}

export default AddPropsHOC;