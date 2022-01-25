import {
  ContentCont_STY,
  PersonCont_STY,
  QuestionCont_STY,
  QuestionStatistics_STY,
  QuestionTags_STY,
  QuestionTagsAndDate_STY,
} from 'app/styles/styled-components/base/pages/SingleQuestionPage.style';
import { SkeletonBox } from 'app/styles/styled-components/global.style';

const QuestionSkeleton = () => {
  return (
    <>
      <div style={{ marginBottom: '25px' }}></div>
      <QuestionCont_STY>
        <PersonCont_STY>
          <SkeletonBox className="skeleton-box" width="62px" height="62px" borderRadius="50%" />
          <SkeletonBox className="skeleton-box" width="62px" height="15px" borderRadius="8px" />
        </PersonCont_STY>

        <ContentCont_STY>
          <SkeletonBox className="skeleton-box" width="800px" height="35px" borderRadius="8px" />

          <SkeletonBox className="skeleton-box" width="800px" height="150px" borderRadius="8px" />

          <QuestionTagsAndDate_STY>
            <QuestionTags_STY>
              <SkeletonBox className="skeleton-box" width="45px" height="15px" borderRadius="8px" />
              <SkeletonBox className="skeleton-box" width="45px" height="15px" borderRadius="8px" />
              <SkeletonBox className="skeleton-box" width="45px" height="15px" borderRadius="8px" />
            </QuestionTags_STY>

            <SkeletonBox className="skeleton-box" width="35px" height="15px" borderRadius="8px" />
          </QuestionTagsAndDate_STY>
        </ContentCont_STY>

        <QuestionStatistics_STY>
          {/* <QuestionStatisticElement_STY>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement_STY>

                    <QuestionStatisticElement_STY>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement_STY>

                    <QuestionStatisticElement_STY>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement_STY>

                    <QuestionStatisticElement_STY>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement_STY> */}
        </QuestionStatistics_STY>
      </QuestionCont_STY>
    </>
  )
}

export default QuestionSkeleton
