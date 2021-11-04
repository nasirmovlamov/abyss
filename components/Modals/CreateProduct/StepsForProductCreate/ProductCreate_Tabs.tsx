import React from 'react'

interface Props {
    
}

const ProductCreate_Tabs = (props: Props) => {


    const tabStyle= { 
        width:"30px" , 
        height:"30px", 
        backgroundColor: "#f5f5f5",
        color:'black',
        border:'none',
        borderRadius:'50%',
        cursor:'pointer',
    }
    
    return (
        <div style={{display:"flex", columnGap:"20px", alignItems:"center" ,width:"100%", justifyContent:"center"}}>
            <button disabled={true} style={tabStyle}>1</button>
            <button disabled={true} style={tabStyle}>2</button>
            <button disabled={true} style={tabStyle}>3</button>
            <button disabled={true} style={tabStyle}>4</button>
        </div>
    )
}

export default ProductCreate_Tabs
