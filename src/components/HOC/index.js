import React from 'react';

const AddPropsHOC = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                days:7,
                company:"",
                location:""
            }
            this.handleDaysFilter = this.handleDaysFilter.bind(this);
            this.handleCompanyFilter = this.handleCompanyFilter.bind(this);
        }

        handleDaysFilter(val){
            this.setState({
              days: parseInt(val)
            })
        }

        handleCompanyFilter(val){
            this.setState({
                company: parseInt(val)
              })
        }

        render() {
            // console.log(OriginalComponent)
            return <OriginalComponent
            handleCompanyFilter={this.handleCompanyFilter}
            handleDaysFilter={this.handleDaysFilter}
            {...this.state}
            />
        }
    }
    return NewComponent;
}

export default AddPropsHOC;