import React from 'react'
import { CreateThreadActions, create_thread_data } from '../../../../app/feature/CreateThread/CreateThread.slice'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import * as Step1_STY from '../../../../styles/components/styled-blocks/CreateProduct_Style/CreateProduct_Step1.style'

interface Props {
    
}

const CreateThread_Step1 = (props: Props) => {
    const dispatch= useAppDispatch()
    const createThreadData = useAppSelector(create_thread_data)

    return (
        <Step1_STY.CreateProduct_Step1_Container>
            
            <div className="flexer">
                <Step1_STY.SelectThreadType type="button" selected={createThreadData.threadType === 'request'} onClick={() => dispatch(CreateThreadActions.selectThreadType('request'))}>
                    <h2 className='title'>Request</h2>
                    <div className='textBlock'>
                        <p>I am looking forward for handling tabs scroll problem</p>
                        <p>I am looking forward for handling tabs scroll problem</p>
                        <p>I am looking forward for handling tabs scroll problem</p>
                    </div>
                </Step1_STY.SelectThreadType>


                <Step1_STY.SelectThreadType type="button" selected={createThreadData.threadType === 'question'} onClick={() => dispatch(CreateThreadActions.selectThreadType('question'))}>
                    <h2 className='title'>Question</h2>
                    <div className='textBlock'>
                        <p>I am looking forward for handling tabs scroll problem</p>
                        <p>I am looking forward for handling tabs scroll problem</p>
                        <p>I am looking forward for handling tabs scroll problem</p>
                    </div>
                </Step1_STY.SelectThreadType>


                <Step1_STY.SelectThreadType type="button" selected={createThreadData.threadType === 'discussion'} onClick={() => dispatch(CreateThreadActions.selectThreadType('discussion'))}>
                    <h2 className='title'> Discussion</h2>
                    <div className='textBlock'>
                        <p>I am looking forward for handling tabs scroll problem</p>
                        <p>I am looking forward for handling tabs scroll problem</p>
                        <p>I am looking forward for handling tabs scroll problem</p>
                    </div>
                </Step1_STY.SelectThreadType>
            </div>

            <div className="info-block">
                <p> You acknowledge that you agree to Abyssal Corp <a href="#">Terms of Service</a> and <a href="#">Community Guidelines</a> by submitting content.</p>
                <p>Please be sure not to violate others copyright or privacy rights. <a href="#">Learn More</a></p>
            </div>
            

        </Step1_STY.CreateProduct_Step1_Container>
    )
}

export default CreateThread_Step1
