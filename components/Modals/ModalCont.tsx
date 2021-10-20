import React, { ReactChild, ReactElement } from 'react'

interface Props {
    children:any
}

export default function ModalCont({children}: Props): ReactElement {
    return (
        <div style={{width:"100vw", height:"100vh" ,  display: 'flex', justifyContent: 'center', alignItems: 'center', position:'fixed', background:"rgba(0,0,0,0.5)", left:0,top:0, zIndex:999, }}>
            {children}
        </div>
    )
}
