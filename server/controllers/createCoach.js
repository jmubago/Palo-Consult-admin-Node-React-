import repo from '../repositorio'
import sql from 'msnodesqlv8';

var config = "server=LAPTOP-LP8FS1UP;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export default(function createCoach (req, res){
    console.log("reqqqqqqqqq2222",req.body);
    
    var nombre = req.body.Nombre;
    var apellido = req.body.Apellido;
    var email = req.body.Email;
    var password = req.body.Password;
    var telefono = req.body.Telefono;
    var IBAN = req.body.Iban;
    var idioma = req.body.Idioma;
 
   var addCoaches = `INSERT INTO [dbo].[Coach] ([Nombre], [Apellido], [EmailContacto], [Clave], [Telefono], [IBAN], [Idioma], [TipoRegistro]) VALUES('${nombre}','${apellido}','${email}','${password}','${telefono}','${IBAN}','${idioma}', 3)`

    sql.query(config,addCoaches, (error,results)=>{
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
