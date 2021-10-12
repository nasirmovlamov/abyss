import { CreateProductInterface } from "../state-Interfaces/CreateProductInterface";


export const CreateProductState:CreateProductInterface = {
    sections_product:[
        {
            id: 1,
            label_key: "Description",
            label_value:"",
            isEditor:true,
            isClips:false,
        },
        {
            id:2,
            label_key: "Clips",
            label_value:"",
            isEditor:false,
            isClips:true
        },
        {
            id:3,
            label_key: "Description",
            label_value:"",
            isEditor:true,
            isClips:false,
        },
      ]
}