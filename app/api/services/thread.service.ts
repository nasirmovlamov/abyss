import fetch from '../interceptor';

interface Thread {
  title: string
  content: string
  tags: string
  type: number
  product_id?: number // required if type is 3
  linked_products?: string
}

const threadService: { [index: string]: (...args: any[]) => Promise<any> } = {}

threadService.getAll = async (): Promise<any> => {
  return fetch({
    url: '/forum',
    method: 'get',
  })
}

threadService.get = async (id: number, keyword: string | null = null): Promise<any> => {
  return fetch({
    url: `/forum/${id}${keyword ? `?${keyword}` : ''}`,
    method: 'get',
  })
}

threadService.create = async (data: Thread): Promise<any> => {
  return fetch({
    url: '/forum/create',
    method: 'post',
    data,
  })
}

threadService.update = async (id: number, data: Thread): Promise<any> => {
  return fetch({
    url: `/forum/${id}/thread/edit`,
    method: 'put',
    data,
  })
}

threadService.delete = async (id: number): Promise<any> => {
  return fetch({
    url: `/forum/thread/${id}/delete`,
    method: 'delete',
  })
}

threadService.upVote = async (id: number, type: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/thread/vote`,
    method: 'post',
    data: { type },
  })
}

threadService.downVote = async (id: number, type: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/thread/unvote`,
    method: 'post',
    data: { type },
  })
}

threadService.getComments = async (threadID: number): Promise<any> => {
  return fetch({
    url: `/forum/${threadID}/thread/getcomment`,
    method: 'get',
  })
}

threadService.createComment = async (threadID: number, content: string): Promise<any> => {
  return fetch({
    url: `/forum/${threadID}/thread/comment`,
    method: 'post',
    data: { content },
  })
}

threadService.updateComment = async (id: number, content: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/thread/comment/edit`,
    method: 'put',
    data: { content },
  })
}

threadService.deleteComment = async (id: number): Promise<any> => {
  return fetch({
    url: `/forum/${id}/thread/comment/delete`,
    method: 'delete',
  })
}

export default threadService
