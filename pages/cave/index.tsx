import React, { useEffect } from 'react';

import CaveWindowRouter from '../../components/Cave/Cave_Windows/CaveWindowRouter';
import CaveLayout from '../../components/Cave/CaveLayout';

interface Props {

}

const Cave = (props: Props) => {
    return (
        <CaveLayout>
            <CaveWindowRouter />
        </CaveLayout>
    )
}
export default Cave
