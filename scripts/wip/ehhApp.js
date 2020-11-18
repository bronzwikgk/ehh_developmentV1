
// model of the app contians dataset 
model = {
    items : []
    }
    
    // view contians the frontend representaion of the datasets
    view = {
        clearList : function(){
               var range = document.createRange(); 
               range.selectNodeContents(document.getElementById("list"));
               range.deleteContents();  
        },
    
        render : function(){
               this.clearList();
    
               if(model.items.length !=0){
                   list = document.getElementById("list");
                   for(var i = 0; i < model.items.length; i++){
                       item = document.createElement("li");
                       span = document.createElement("span");
                       check = document.createElement("check");
                       cross = document.createElement("cross");
                       iconCheck = document.createElement("iCheck");
                       iconCross = document.createElement("iCross");
    
                       item.className = "item";
                       span.className = "item-text";
                       check.className = "item-complete";
                       cross.className = "item-delete";
    
                       span.textContent = model.items[i].text;
                       if(model.items[i].completed){
                       span.setAttribute("style", "text-decoration: line-through; color:black;");
                       }
                       iconCheck.setAttribute("class", "icon ion-md-checkmark");
                       iconCheck.setAttribute("data-id", i)
                       iconCross.setAttribute("class", "icon ion-md-trash");
                       iconCross.setAttribute("data-id", i);
    
                       
                       check.setAttribute("onclick", "controller.completeItem('" + i + "')");
                       cross.setAttribute("onclick", "controller.deleteItem('" + i + "')");
                       
                       check.appendChild(iconCheck);
                       cross.appendChild(iconCross);
                       item.appendChild(span);
                       item.appendChild(check);
                       item.appendChild(cross);
                       list.appendChild(item);
                      
                   }
               }
    
        }
    }
    
    
    // controller controls the directional request flow to the view and model
    
    controller = {
        init : function(){
            view.render()
        },
    
        addItem : function(event){
            if ((event.code == "Enter") || (event.code == "NumpadEnter")){
                input = document.getElementById("add-item");
                if ((input.value != "") || (input.value != " ")){
                    
                    listItem = {text : input.value, completed:false};
                    model.items.push(listItem);
                    document .getElementById("add-item").value="";
                    
                }
             }
             view.render();
        },
    
        completeItem : function(item_index){
            model.items[item_index].completed = !model.items[item_index].completed;
            view.render() 
        },
    
        deleteItem : function(item_index){
            model.items.splice(item_index,1)
             view.render()
        }
    
    
    }
    
    
    controller.init();