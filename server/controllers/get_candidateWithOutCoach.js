import repo from '../repositorio'


export default(function(req, res){
    //console.log(results);
    repo.get_candidateWithOutCoach().then(function(results){
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(results))
    }).catch(function(error){
        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify({
            error: error
        }))
    })
})