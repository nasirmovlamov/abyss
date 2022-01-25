import { mentions_of_linked_product, single_question_data } from 'app/store/slices/Question.slice';
import { changeModalAction } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { getMentionsOfProduct } from 'app/store/thunks/LinkedProducts.thunk';
import { MentionsListModal_Sty } from 'app/styles/styled-components/base/modules/MentionsListModal.style';
import React, { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Answer from '../elements/Answer';
import AnswerSkeleton from '../skeletons/AnswerSkeleton';

interface Props {}

function MentionsListModal({}: Props): ReactElement {
  const [inViewRefMentionsLoad, inViewMentionsLoader] = useInView()
  const dispatch = useAppDispatch()
  const singleQuestionData = useAppSelector(single_question_data)
  const mentionsOfLinkedProduct = useAppSelector(mentions_of_linked_product)
  const question_data: any = useAppSelector(single_question_data)
  const { productId, mentions, status, current_page, last_page, total } = mentionsOfLinkedProduct

  useEffect(() => {
    if (inViewMentionsLoader) {
      const data = {
        question_id: question_data.id,
        product_id: mentionsOfLinkedProduct.productId!,
        current_page: mentionsOfLinkedProduct.current_page,
        total: mentionsOfLinkedProduct.total,
        last_page: mentionsOfLinkedProduct.last_page,
      }
      dispatch(getMentionsOfProduct(data))
    }
  })

  const closeMentionsModal = () => {
    dispatch(changeModalAction('productMentions'))
  }

  return (
    <MentionsListModal_Sty>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        {' '}
        <button onClick={closeMentionsModal}>X</button>
      </div>
      {
        <>
          {mentions.map((answer:any) => (
            <Answer key={answer.id} direction="top" answer={answer} />
          ))}
        </>
      }
      {status === 'pending' && (
        <div>
          <AnswerSkeleton />
          <AnswerSkeleton />
        </div>
      )}
      {status === 'loading' && (
        <div ref={inViewRefMentionsLoad}>
          <AnswerSkeleton />
          <AnswerSkeleton />
        </div>
      )}
    </MentionsListModal_Sty>
  )
}

export default MentionsListModal
