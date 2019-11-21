export function getEnterpriseClients (){
    return new Promise ((resolve, reject)=>{
        let list = [{name: "RYOULIVE", value: "5d4016512ffd5e0d2fc346b4"}, {name: "TringApps", value: "5d0bcd04fcbb4b2291c7f398"}, {name: "ToolboxOS", value: "5d1387509583b536a74d57a3"}]

        resolve( list )
    })
}