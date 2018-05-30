import repo from '../repositorio'
import sql from 'msnodesqlv8';

var config = "server=A109;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export default(function createEnterprise (req, res){
    console.log("reqqqqqqqqq2222",req.body);
    
    var razon_social= req.body.RazonSocial;
    var cif= req.body.CIF;
    var actividad= req.body.Actividad;
    var pais= req.body.Pais;
    var direccion= req.body.Direccion;
    var email= req.body.EmailContacto;
    var password= req.body.Clave;
    var telefono= req.body.Telefono;
    var persona_contacto= req.body.PersonaContacto;
    var iban=req.body.IBAN;
    
    var addEnterprises = `INSERT INTO [dbo].[Empresa] ([RazonSocial], [CIF], [Actividad], [Pais], [Direccion], [EmailContacto], [Clave], [Telefono], [PersonaContacto], [IBAN], [TipoRegistro]) VALUES('${razon_social}','${cif}','${actividad}','${pais}','${direccion}','${email}','${password}','${telefono}','${persona_contacto}','${iban}', 1)`;

    sql.query(config,addEnterprises, (error,results)=>{
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
