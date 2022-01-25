import { create_thread_data } from 'app/store/slices/CreateThread/CreateThread.slice';
import { useAppSelector } from 'app/store/states/store.hooks';

import CreateDiscussion from '../CreateDiscussion';
import CreateQuestion from '../CreateQuestion';
import CreateRequest from '../CreateRequest';

interface Props {}

const CreateThread_Step2 = (props: Props) => {
  const createThreadData = useAppSelector(create_thread_data)
  const threadTypes: any = {
    question: <CreateQuestion />,
    discussion: <CreateDiscussion />,
    request: <CreateRequest />,
    'not-selected': '',
  }

  return <div>{threadTypes[createThreadData.threadType]}</div>
}

export default CreateThread_Step2
