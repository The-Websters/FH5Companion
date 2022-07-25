const Lib = {
    renderCollection: function (collection, template, target){
        let html='';
        let result = document.querySelector(target);
        
        for(let i=0; i<collection.length; i++){
          let rec = collection[i];
          html+= template(rec);
        }
  
        result.innerHTML = html;
    },
  
    renderFilteredModelType: function (collection, template, target, series){
        let html='';
        let result = document.querySelector(target);
        
        for(let i=0; i<collection.length; i++){
          if(collection[i].Model_Type == series)
          {
          let rec = collection[i];
          html+= template(rec);  
          }
          
        }
  
        result.innerHTML = html;      
    },
  
    renderFilteredClass: function (collection, template, target, series){
        let html='';
        let result = document.querySelector(target);
        
        for(let i=0; i<collection.length; i++){
          if(collection[i].Stock_Specs == series)
          {
          let rec = collection[i];
          html+= template(rec);  
          }
          
        }
  
        result.innerHTML = html;      
    },

    renderFilteredDriveType: function (collection, template, target, series){
        let html='';
        let result = document.querySelector(target);
        
        for(let i=0; i<collection.length; i++){
          if(collection[i].Drive_Type == series)
          {
          let rec = collection[i];
          html+= template(rec);  
          }
          
        }
  
        result.innerHTML = html;      
    },  

   renderFilteredSearch: function (collection, template, target, searchKey){
        let html='';
        let result = document.querySelector(target);
      
        for(let i=0; i<collection.length; i++){
          if(collection[i].Name_and_Model == searchKey)
          {
          let rec = collection[i];
          html+= template(rec);  
          }
          
        }
  
        result.innerHTML = html;      
    },      
  
    renderItem : function (item, template, target){
      document.querySelector(target).innerHTML = template(item)
    },

    getData: async function (url){
      const response = await fetch(url);
      return response.json();
    }
};






