import { Thread } from 'app/interfaces/Thread';

import fetch from '../interceptor';

const threadService: { [index: string]: (...args: any[]) => Promise<any> } = {}

threadService.search = async (
  type: number | null,
  keyword: string | null,
  tags: string[] | null,
  mustNot: string[] | null,
): Promise<any> => {
  let queryParams = []

  if (type) queryParams.push('type=' + type)
  if (keyword) queryParams.push('keyword=' + keyword)
  if (tags) queryParams.push('tags=' + tags.join(','))
  if (mustNot) queryParams.push('must_not=' + mustNot.join(','))

  return fetch({
    url: `/forum/search${queryParams.length ? '?' + queryParams.join('&') : ''}`,
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

threadService.vote = async (id: number, type: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/thread/vote`,
    method: 'post',
    data: { type },
  })
}

threadService.cancelVote = async (id: number, type: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/thread/unvote`,
    method: 'post',
    data: { type },
  })
}

threadService.getMentionedProducts = async (id: number): Promise<any> => {
  return fetch({
    url: `/forum/${id}/answers/loadproducts`,
    method: 'get',
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
