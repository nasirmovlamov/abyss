import Link from 'next/link';
import React, { FC, ReactElement, useEffect } from 'react';

import { tooltip_data } from '../../../store/slices/Tooltip.slice';
import { useAppDispatch, useAppSelector } from '../../../store/states/store.hooks';

interface Props {
  // any props that come into the component
  href: string
  content: string
  key?: string | number
}

const NavLink: FC<Props> = ({ children, ...props }) => {
  const dispatch = useAppDispatch()
  const toolTipData = useAppSelector(tooltip_data)

  // var hideVar:any;

  // const mouseEnterHandle = (e:any) => {
  //     const cursorPosition = {
  //         x: e.clientX,
  //         y: e.clientY
  //     }
  //     clearTimeout(hideVar)
  //     if(Math.abs(e.clientX - toolTipData.cursorPosition.x) > 30 || Math.abs(e.clientY -  toolTipData.cursorPosition.y) > 30) {
  //         hideVar = setTimeout(() => {
  //             dispatch(ToolTipActions.showToolTip({
  //                 text:props.content,
  //                 position:cursorPosition
  //             }))
  //         }, 400)
  //     }
  // }

  // const mouseMove = (e:any) => {
  //     clearTimeout(hideVar)

  //     const isMouseStayed = (e.clientX === toolTipData.cursorPosition.x && e.clientY === toolTipData.cursorPosition.y)

  //     const cursorPosition = {
  //         x: e.clientX,
  //         y: e.clientY
  //     }
  //     if(isMouseStayed)
  //     {
  //         hideVar = setTimeout(() => {
  //             dispatch(ToolTipActions.showToolTip({
  //                 text:props.content,
  //                 position:cursorPosition
  //             }))
  //         }, 500);

  //     }

  // }

  // const mouseLeaveHandle = () => {
  //     dispatch(ToolTipActions.hideToolTip(null))
  //     clearTimeout(hideVar)
  // }

  return (
    <Link key={props.key} href={props.href} passHref>
      {children}
    </Link>
  )
}

export default NavLink
