const React = require("react");


module.exports = Select;

function Select (props){
    function getEnterpriseClients(){
        let list = ["RYOULIVE", "TringApps", "ToolboxOS"]
        return list.map((el,i)=>{
            return (
                <option key={`ent-option-${i}`}>{el}</option>
            )
        })
    }
    function getSubscriptionClients(){
        let list = ["JX2 Events", "Little Giant", "Andy & Evan"]
        return list.map((el,i)=>{
            return (
                <option key={`sub-option-${i}`}>{el}</option>
            )
        })
    }
    switch(props.location){

        case "ent-client":
        return (
            <select onChange={e=>{props.handleSelect(e.target.value)}}>
                {getEnterpriseClients()}
            </select>
        )
        case "sub-client":
        return (
            <select onChange={e=>{props.handleSelect(e.target.value)}}>
                {getSubscriptionClients()}
            </select>
        )
        default:
            return (
                <span>Simustream</span>
            )
    }


}