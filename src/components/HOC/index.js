import React from 'react';

const AddPropsHOC = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                days:365,
                company:"",
                location:""
            }
            this.handleDaysFilter = this.handleDaysFilter.bind(this);
            this.handleCompanyFilter = this.handleCompanyFilter.bind(this);
        }

        componentDidMount(){
            this.handleLocation();
        }

        handleLocation(){
            const pageLocation = document.location.pathname.split('/')[2];
            if(pageLocation!==this.state.location) this.setState({location:pageLocation})
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
            const {handleDaysFilter, handleCompanyFilter} = this;
            const originalProps = this.props;
            const updatedProps = {...originalProps, ...this.state, handleCompanyFilter, handleDaysFilter}
            return <OriginalComponent {...updatedProps}/>
        }
    }
    return NewComponent;
}

export default AddPropsHOC;