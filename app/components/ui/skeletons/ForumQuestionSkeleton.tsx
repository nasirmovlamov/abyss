import React, { ReactElement } from 'react';

import { SkeletonBox } from '../../../styles/styled-components/Global.style';

interface Props { }

function FormQuestionSkeleton({ }: Props): ReactElement {
  return <SkeletonBox className="skeleton-box" width="100%" height="125px" borderRadius="10px" />
}

export default FormQuestionSkeleton
