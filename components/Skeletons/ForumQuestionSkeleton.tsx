import React, { ReactElement } from 'react'
import { FormQuestionCont } from '../../styles/components/styled-blocks/FormQuestion.style'
import { SkeletonBox } from '../../styles/global/styled-utils/Global.style'

interface Props {

}

function FormQuestionSkeleton({ }: Props): ReactElement {


    return (
        <SkeletonBox className="skeleton-box" width="100%" height="125px" borderRadius="10px" />
    )
}

export default FormQuestionSkeleton

