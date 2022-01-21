import React, { useEffect, useRef } from 'react';

import { tooltip_data } from '../../../store/slices/Tooltip.slice';
import { useAppSelector } from '../../../store/states/store.hooks';

interface Props { }

const ToolTip = (props: Props) => {
  const tooltipData = useAppSelector(tooltip_data)

  return (
    <div
      style={{
        position: 'fixed',
        left: tooltipData.cursorPosition.x + 20 + 'px',
        top: tooltipData.cursorPosition.y + 20 + 'px',
        backgroundColor: 'red',
        color: 'white',
        zIndex: 999,
        padding: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        display: tooltipData.show ? 'flex' : 'none',
      }}
    >
      {tooltipData.text}
    </div>
  )
}

export default ToolTip
