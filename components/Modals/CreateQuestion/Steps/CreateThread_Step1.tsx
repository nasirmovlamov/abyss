import React from 'react'
import * as Step1_STY from '../../../../styles/components/styled-blocks/CreateProduct_Style/CreateProduct_Step1.style'

interface Props {
    
}

const CreateThread_Step1 = (props: Props) => {
    
    return (
        <Step1_STY.CreateProduct_Step1_Container>
            <Step1_STY.SelectThreadType>
                <h2 className='title'>Request</h2>
                <div className='textBlock'>
                    <p>I am looking forward for handling tabs scroll problem</p>
                    <p>I am looking forward for handling tabs scroll problem</p>
                    <p>I am looking forward for handling tabs scroll problem</p>
                </div>
            </Step1_STY.SelectThreadType>

            <Step1_STY.SelectThreadType>
                <h2 className='title'>Question</h2>
                <div className='textBlock'>
                    <p>I am looking forward for handling tabs scroll problem</p>
                    <p>I am looking forward for handling tabs scroll problem</p>
                    <p>I am looking forward for handling tabs scroll problem</p>
                </div>
            </Step1_STY.SelectThreadType>

            <Step1_STY.SelectThreadType>
                <h2 className='title'> Discussion</h2>
                <div className='textBlock'>
                    <p>I am looking forward for handling tabs scroll problem</p>
                    <p>I am looking forward for handling tabs scroll problem</p>
                    <p>I am looking forward for handling tabs scroll problem</p>
                </div>
            </Step1_STY.SelectThreadType>

        </Step1_STY.CreateProduct_Step1_Container>
    )
}

export default CreateThread_Step1
