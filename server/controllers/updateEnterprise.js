import repo from '../repositorio'
import sql from 'msnodesqlv8';

var config = "server=A109;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export default(function updateEnterprise (req, res){
    console.log("reqqqqqqqqqUpdate",req.body);
    
    var id= req.body.id;
    var razon_social= req.body.RazonSocial;
    var direccion= req.body.Direccion;
    var email= req.body.EmailContacto;
    var telefono= req.body.Telefono;
    var iban=req.body.IBAN;
    
    var updateEnterprises = `update dbo.Empresa set RazonSocial='${razon_social}', EmailContacto='${email}', Telefono='${telefono}', Direccion='${direccion}',IBAN='${iban}' where id=${id}`;
    //var update= `update dbo.Empresa set RazonSocial='AAAAA', EmailContacto='info@aaaaa.com', Telefono='981179216', Direccion='Canton Pequeño 17, Coruña',IBAN='GB29NWBK60161331926819' where id=43`

    sql.query(config,updateEnterprises, (error,results)=>{
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
