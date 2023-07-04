import Column from "./Column.js";

export default class fentrav{
    constructor(root){
        this.root=root
        fentrav.columns().forEach(column=>{
        const columnView = new Column(column.id, column.title);
        this.root.appendChild(columnView.elements.root);
       

        });
    }
    
        
    static columns(){
        return[
            {
                id:1,
                title:"Todo"
            },
            {
                id:2,
                title:"In Progress"
            },
            {
                id:3,
                title:"Done"
            },

        ]
    }
}