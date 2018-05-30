import repo from '../repositorio'
import sql from 'msnodesqlv8';

var config = "server=A109;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export default(function deleteEnterprise (req, res){
    console.log("reqqqqqqqqqUpdate",req.body);
    
    var id= req.body.id;
    
    var deleteEnterprise= `delete from dbo.Empresa where id=${id}`;

    sql.query(config,deleteEnterprise, (error,results)=>{
        if(error){
            console.log("my error ", error);
            var results={
            error: error
        };       
            res.status(500);    
        }else {
            console.log("The result: ", JSON.stringify(results));       
            res.send(JSON.stringify(results));
        }
    })
    return res;
})
