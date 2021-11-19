import { QUESTION_INTERFACE } from "../state-Interfaces/QuestionInterface";
import { ANSWER_INTERFACE} from "../state-Interfaces/QuestionInterface";

export const QUESTION_STATE:QUESTION_INTERFACE = {
    status:'loading',
    singleQuestionData:{
        status:"loading",
        linked_products:[],
        id:-1 ,
        answer_count:0,
        category:{id:0, name:"", slug:"",sort:0},
        closed_at:null,
        comment_count:0,
        content:"",
        created_at:"",
        last_active_at:"",
        upvote:0,
        slug:"",
        tags:"",
        title:"",
        updated_at:"",
        user:{id:0,email:"",name:""},
        user_votes:null,
        view_count:0
    } ,
    answersData:{
        topPage:1,
        downPage:0,
        totalPage:0,
        submittedAnswer:[],
        topAnswers:{
            status:"loading",
            answers:[]
        },
        downAnswers:{
            status:"loading",
            answers:[]
        },
    },
    answerSubmitData:{
        linkedProducts:[],
        mentionedUsers:[],
        content:"",
    },
    linkedProductsData:{
        linkedProducts:[],
        status:"loading",
        from:0
    }
}

