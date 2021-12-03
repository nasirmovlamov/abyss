import React from 'react'
import { create_thread_data } from '../../../app/feature/CreateThread/CreateThread.slice'
import { useAppSelector } from '../../../app/store/hooks'
import { CreateProduct_Tabs } from '../../../styles/components/styled-blocks/CreateProduct_Style/CreateProduct.style'
import { ModalFORM_STY } from '../../../styles/components/styled-blocks/Modal_Style/ModalCont.style'
import CreateThread_Step1 from './Steps/CreateThread_Step1'

interface Props {
    
}

const CreateThreadModal = (props: Props) => {
    const  threadData = useAppSelector(create_thread_data)

    const createThreadSteps = {
        1:<CreateThread_Step1/>,
        2:<CreateThread_Step1/>,
        3:<CreateThread_Step1/>
    }

    return (
        <ModalFORM_STY onSubmit={()=> console.log('hello')}>
            <CreateProduct_Tabs>
                {threadData.currentStage}
            </CreateProduct_Tabs>

            <div>
                {createThreadSteps[threadData.currentStage]}
            </div>

            <div>
                <button>previous</button>
                <button>next</button>
            </div>

        </ModalFORM_STY>
    )
}

export default CreateThreadModal
