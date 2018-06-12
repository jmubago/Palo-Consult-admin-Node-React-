import repo from '../repositorio'
import sql from 'msnodesqlv8';

var config = "server=LAPTOP-LP8FS1UP;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export default(function updateCoach (req, res){
    console.log("reqqqqqqqqqUpdate",req.body);
    
    var id= req.body.id;
    var nombre = req.body.Nombre;
    var apellido = req.body.Apellido;
    var email = req.body.Email;
    var telefono = req.body.Telefono;
    var iban = req.body.Iban;
    
    var updateCoach= `update dbo.Coach set Nombre='${nombre}', Apellido='${apellido}', EmailContacto='${email}', Telefono='${telefono}', IBAN='${iban}' where id=${id}`;

    sql.query(config,updateCoach, (error,results)=>{
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
