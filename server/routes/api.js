import { Router } from 'express'
import controller from '../controllers'

//var config = "server=A109;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export default () => {
    let api = Router();
    
    console.log("controllers: ", JSON.stringify(controller));
    api.get('/get_candidateWithCoach', controller.get_candidateWithCoach);
    api.get('/get_candidateWithOutCoach', controller.get_candidateWithOutCoach);
    api.get('/get_coach', controller.get_coach);
    api.get('/get_enterprises', controller.get_enterprises);
    api.post('/createEnterprise',controller.createEnterprise);
    api.post('/createCoach', controller.createCoach);
    api.put('/updateEnterprise',controller.updateEnterprise);
    api.put('/updateCoach', controller.updateCoach);
    api.delete('/deleteCoach', controller.deleteCoach);
    api.delete('/deleteEnterprise/:id', controller.deleteEnterprise);

    return api
}