import models from 'models'

export default function get(request, response, next){
 const { params } = request
 let model = params.model !== undefined ? params.model : params.id
 let id    = params.model !== undefined ? params.id : null
 let queryFind = {}

 if(!!id){
  queryFind = {id: id}
 }

 const currentModel = models[ model ]

 currentModel.find({})
  .then( docs => {
   response.json(docs)
  })
}