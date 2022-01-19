import React, { useEffect, useState } from 'react';

import { forum_search_data } from '../../../store/slices/SearchBox.slice';
import { useAppSelector } from '../../../store/states/store.hooks';
import { LinearProgress_STY } from '../../../styles/ui/modules/LinearProgress.style';

interface Props { }

const LinearProgres = (props: Props) => {
  const forumSearchData = useAppSelector(forum_search_data)
  const [percentageLoader, setpercentageLoader] = useState(1)

  useEffect(() => {
    if (forumSearchData.infinityLoader === 'loading') {
      setTimeout(() => {
        linearProgressPercentageAutoGenerator()
      }, 15)
    }
  })

  const linearProgressPercentageAutoGenerator = () => {
    const randomNumberBetween60and80 = Math.floor(Math.random() * (85.4 - 76.4 + 1)) + 76.4
    if (percentageLoader === randomNumberBetween60and80) {
      return
    }
    setpercentageLoader(percentageLoader + 1)
  }

  useEffect(() => {
    if (forumSearchData.infinityLoader === 'loading') {
      setpercentageLoader(1)
    }
    if (forumSearchData.infinityLoader === 'loaded') {
      setTimeout(() => {
        setpercentageLoader(100)
      }, 200)
    }
  }, [forumSearchData.infinityLoader])

  useEffect(() => {
    if (percentageLoader === 100) {
      setTimeout(() => {
        setpercentageLoader(0)
      }, 500)
    }
  }, [percentageLoader])

  return (
    <>
      {percentageLoader}
      {forumSearchData.status === 'loading' && (
        <LinearProgress_STY
          percentage={percentageLoader}
          progress={forumSearchData.infinityLoader}
        />
      )}
    </>
  )
}

export default LinearProgres
