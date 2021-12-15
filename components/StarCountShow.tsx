import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, { ReactElement, useEffect, useState } from 'react'

interface Props {
    count: number
}

function StarCountShow({count}: Props): ReactElement {

    const [starArray, setstarArray] = useState<JSX.Element[]>([])

    useEffect(() => {
        let stars = []
        for (let i = 1; i <= 5; i++) {
            
            if (i <= Math.floor(count)) {
                stars.push(<FontAwesomeIcon key={i+Date.now()+40} icon={solidStar} />)
            }
            if(i === Math.floor(count) && i < 5)
            {
                if(count % 1 !== 0)
                {
                    stars.push(<FontAwesomeIcon key={i+Date.now()+20} icon={faStarHalfAlt}/>)
                }
            }
            if(Math.floor(count) === i-1 && count < 1)
            {
                stars.push(<FontAwesomeIcon key={i+Date.now()+30} icon={faStarHalfAlt}/>)
            }
            
            if(i > Math.ceil(count))
            {
                stars.push(<FontAwesomeIcon key={i+Date.now()+10} icon={regularStar}/>)

            }
        }
        

        setstarArray(stars)
    }, [])

    return (
        <div>
            {starArray}
        </div>
    )
}

export default StarCountShow
