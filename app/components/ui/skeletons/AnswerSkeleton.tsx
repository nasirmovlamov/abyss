import React, { ReactElement } from 'react';

import { AnswerContentSkeleton, AnswerStyle, PersonCont } from '../../../styles/styled-components/base/modules/Answer.style';
import { SkeletonBox } from '../../../styles/styled-components/global.style';

interface Props {}

function AnswerSkeleton({}: Props): ReactElement {
  return (
    <AnswerStyle key={'loading'}>
      <div className="flexer c-gp-10">
        <PersonCont>
          <SkeletonBox className="skeleton-box" width="42px" height="42px" borderRadius="50%" />
          <SkeletonBox className="skeleton-box" width="42px" height="15px" borderRadius="8px" />
        </PersonCont>
        <AnswerContentSkeleton>
          <SkeletonBox className="skeleton-box" width="100%" height="99px" borderRadius="8px" />
        </AnswerContentSkeleton>
        <div className="flexer fd-c a-end">
          <SkeletonBox className="skeleton-box" width="45px" height="15px" borderRadius="8px" />
        </div>
      </div>
      <div className="flexer fd-c a-end">
        <SkeletonBox className="skeleton-box" width="35px" height="15px" borderRadius="8px" />
      </div>
    </AnswerStyle>
  )
}

export default AnswerSkeleton
