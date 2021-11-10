//https://codepen.io/FLCcrakers/pen/JZVeZE?editors=0111

//https://codepen.io/tinymce/pen/QjzgRW

import React, { Component } from "react";
import ReactQuill from "react-quill";
import "quill-mention";
import "quill-mention/dist/quill.mention.css";
import axios from "axios";
import { BASE_API_INSTANCE } from "../helpers/api/BaseInstance";
const atValues = [
  { id: 1, value: "Fredrik Sundqvist" },
  { id: 2, value: "Patrik Sjölin" }
];

const toolbarOptions = ["bold"];

class EditorClassVersion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "<div contenteditable='false'>Hector oscar Pacheco</div>"
    };
  }


  


  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"]
    ],
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#" , "https://"],
      source: async (searchTerm, renderItem, mentionChar) => {
        let values;
        let loading = false;
        if (mentionChar === "@" || mentionChar === "#") {
            let products = []
            const getProductNames = async (query:string) => {
                try {
                    const resp = await BASE_API_INSTANCE.get(`/forum/product/${query}`)
                    const products = resp.data.data.map((element:any) => {return {value:element.name , id:element.id}})
                    return products;
                } catch (error) {
                    
                }
            }
            const getUserNames = async (query:string) => {
                try {
                    const resp = await BASE_API_INSTANCE.get(`/forum/user/${query}`)
                    const products = resp.data.data.map((element:any) => {return {value:element.name , id:element.id}})
                    return products;
                } catch (error) {
                    
                }
            }
            if(mentionChar === "@")
            {
                values = await getProductNames(searchTerm);
            }else 
            {
                values = await getUserNames(searchTerm);
            }
            console.log(values)
        }
        if(loading)
        {
            renderItem(['loading'], searchTerm);
        }
        if (searchTerm.length === 0) {
          renderItem(values, searchTerm);
        } else {
          const matches = [];
          for (let i = 0; i < values.length; i++)
            if (
              ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
            )
              matches.push(values[i]);
          renderItem(matches, searchTerm);
        }
      }
    }
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "mention"
  ];

  handleProcedureContentChange = (content, delta, source, editor) => {
    
  };

  render() {
    return (
      <ReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        value={this.state.text}
        onChange={this.handleProcedureContentChange}
      >
        <div className="my-editing-area" />
      </ReactQuill>
    );
  }
}

export default EditorClassVersion;
