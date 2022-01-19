import React, { useEffect } from 'react';

import CaveLayout from '../../app/components/layouts/Cave.layout';
import CaveWindowRouter from '../../app/components/templates/Cave/Cave_Windows/CaveWindowRouter';

interface Props { }

const Cave = (props: Props) => {
    return (
        <CaveLayout>
            <CaveWindowRouter />
        </CaveLayout>
    )
}
export default Cave
