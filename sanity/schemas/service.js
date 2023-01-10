export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'serviceImage',
      title: 'ServiceImage',
      type: 'image',
      options:{
        hotspot:true,
      },
    },
    {
      name: 'Service',
      title: 'Service',
      type: 'text',
      
    },
    {
      name:'technologies',
      title:'Technologies',
      type:'array',
      of:[{type:"reference", to: {type:"skill"}}],
    },
    {
      name:'points',
      title:'Points',
      type:'array',
      of:[{type:"string"}],
    },
   
    
  
  ],

 
}
