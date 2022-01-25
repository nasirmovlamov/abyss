/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { changeForumTabActive } from '../../store/slices/PageTabs.slice';
import {
  current_page_linked_products,
  last_page_linked_products,
  linked_products_for_answers_of_question,
  linked_products_status,
  single_question_data,
  total_linked_products,
} from '../../store/slices/Question.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { getLinkedProducts } from '../../store/thunks/LinkedProducts.thunk';
import { ProductsCont_STY } from '../../styles/styled-components/base/pages/SingleQuestionPage.style';
import LinkedStoreProduct from '../ui/elements/LinkedStoreProduct';
import AnswerSkeleton from '../ui/skeletons/AnswerSkeleton';

const ProductLayout = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 })
  const linkedProductsStatus = useAppSelector(linked_products_status)
  const [inViewRefProductsLoad, inViewProductsLoader] = useInView()

  const question_data: any = useAppSelector(single_question_data)
  const currentPageLinkedProducts = useAppSelector(current_page_linked_products)
  const totalLinkedProducts = useAppSelector(total_linked_products)
  const lastPageLinkedProducts = useAppSelector(last_page_linked_products)
  const linkedProductsForAnswersOfQuestion = useAppSelector(linked_products_for_answers_of_question)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (inView) {
      dispatch(
        changeForumTabActive([
          { tabName: 'Answers', link: 'answersCont', id: 0, isActive: false },
          { tabName: 'Products', link: 'productsCont', id: 1, isActive: true },
        ]),
      )
    } else {
      dispatch(
        changeForumTabActive([
          { tabName: 'Answers', link: 'answersCont', id: 0, isActive: true },
          { tabName: 'Products', link: 'productsCont', id: 1, isActive: false },
        ]),
      )
    }
  }, [inView])

  useEffect(() => {
    if (inViewProductsLoader) {
      const data = {
        question_id: question_data.id,
        current_page: currentPageLinkedProducts,
        total: totalLinkedProducts,
        last_page: lastPageLinkedProducts,
      }
      dispatch(getLinkedProducts(data))
    }
  }, [inViewProductsLoader])

  return (
    <ProductsCont_STY id="productsCont" ref={ref} style={{ scrollMarginTop: '130px' }}>
      <h1>Products</h1>
      {linkedProductsForAnswersOfQuestion.map((element: any, index: any) => (
        <LinkedStoreProduct key={index} data={element} />
      ))}

      {linkedProductsStatus === 'loading' && (
        <div style={{}} ref={inViewRefProductsLoad}>
          <AnswerSkeleton />
          <AnswerSkeleton />
        </div>
      )}
    </ProductsCont_STY>
  )
}

export default ProductLayout
