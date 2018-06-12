import sql from 'msnodesqlv8';

var config = "server=LAPTOP-LP8FS1UP;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
var candidateWithCoach = "select COUNT(id) AS candidatesWithCoach from dbo.Usuarios where Coach<>22";
var candidateWithOutCoach = "select COUNT(id) AS candidatesWithOutCoach from dbo.Usuarios where Coach=22";
var enterprises = "select em.id,em.RazonSocial,em.Direccion,em.Telefono,em.EmailContacto,em.IBAN,SUM(us.Horas) AS TotalSessions,COUNT(us.idEmpresa) AS NumberCandidates from dbo.Empresa AS em LEFT JOIN dbo.Usuarios AS us ON us.idEmpresa=em.id GROUP BY em.id,em.RazonSocial,em.Direccion,em.Telefono,em.EmailContacto,em.IBAN";
var coach = "select co.id,co.Nombre,co.Apellido,co.EmailContacto,co.Telefono,co.IBAN,SUM(us.Horas) AS TotalSessions,COUNT(us.Coach) AS NumberCandidates from dbo.Coach AS co LEFT JOIN dbo.Usuarios AS us ON us.Coach=co.id where co.id<>22 GROUP BY co.id,co.Nombre,co.Apellido,co.EmailContacto,co.Telefono ,co.IBAN";

var get_candidateWithCoach = function(){    
    return new Promise((resolve,reject)=>{
        sql.query(config,candidateWithCoach, (error, results)=>{
            if(error){
                console.log("my error: ", error);
                var results = {
                    error:error
                }
                reject (error);
            }else{
                console.log("Result GET: ", JSON.stringify(results));
            }
            resolve (results);
            console.log("repositorio ", results)
        })
    })
}     

var get_candidateWithOutCoach = function(){    
    return new Promise((resolve,reject)=>{
        sql.query(config,candidateWithOutCoach, (error, results)=>{
            if(error){
                console.log("my error: ", error);
                var results = {
                    error:error
                }
                reject (error);
            }else{
                console.log("Result GET: ", JSON.stringify(results));
            }
            resolve (results);
        })
    })
}   

var get_coach = function(){    
    return new Promise((resolve,reject)=>{
        sql.query(config,coach, (error, results)=>{
            if(error){
                console.log("my error: ", error);
                var results = {
                    error:error
                }
                reject (error);
            }else{
                console.log("Result GET: ", JSON.stringify(results));
            }
            resolve (results);
        })
    })
}   

var get_enterprises = function(){    
    return new Promise((resolve,reject)=>{
        sql.query(config,enterprises, (error, results)=>{
            if(error){
                console.log("my error: ", error);
                var results = {
                    error:error
                }
                reject (error);
            }else{
                console.log("Result GET: ", JSON.stringify(results));
            }
            resolve (results);
        })
    })
}  
    
exports.get_candidateWithCoach= get_candidateWithCoach;
exports.get_candidateWithOutCoach=get_candidateWithOutCoach;
exports.get_coach=get_coach;
exports.get_enterprises=get_enterprises;
