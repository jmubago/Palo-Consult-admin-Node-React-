import repo from '../repositorio'
import sql from 'msnodesqlv8';

var config = "server=LAPTOP-LP8FS1UP;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export default(function deleteCoach (req, res){
    console.log("reqqqqqqqqqUpdate",req.body);
    
    var id= req.body.id;
    
    var deleteCoach= `delete from dbo.Coach where id=${id}`;

    sql.query(config,deleteCoach, (error,results)=>{
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
