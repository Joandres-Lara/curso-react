import models from 'models'

export default function set(request, response){

 const { model, id } = request.params
 const params = request.query
 
 if (!(model in models)){
  return response.send(`Not Found ${model}`)
 }
 
 const CurrentModel = models[ model ]

 if(!id){
  const modelCreated = new CurrentModel()
  Object.keys(params)
   .forEach( key => {
    if(key in modelCreated){
     modelCreated[key] = params[key]
    }
   })

  modelCreated.save()
   .then( res => response.json(res) )
    .catch( error => response.json(error) )
 }
}