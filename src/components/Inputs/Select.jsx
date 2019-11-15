const React = require("react");


module.exports = Select;

function Select (props){
    function getEnterpriseClients(){
        let list = [{name: "RYOULIVE", value: "5d4016512ffd5e0d2fc346b4"}, {name: "TringApp", value: "5d0bcd04fcbb4b2291c7f398"}, {name: "ToolboxOS", value: "5d1387509583b536a74d57a3"}]
        return list.map((el,i)=>{
            return (
                <option value={el.value}key={`ent-option-${i}`}>{el.name}</option>
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
            <select onChange={e=>{props.handleCompany(e.target.value)}}>
                {getEnterpriseClients()}
            </select>
        )
        case "sub-client":
        return (
            <select onChange={e=>{props.handleCompany(e.target.value)}}>
                {getSubscriptionClients()}
            </select>
        )
        default:
            return (
                <span>Simustream</span>
            )
    }


}