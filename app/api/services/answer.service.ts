import { Answer } from 'app/interfaces/Answer';

import fetch from '../interceptor';

const answerService: { [index: string]: (...args: any[]) => Promise<any> } = {}

answerService.getAll = async (threadID: number): Promise<any> => {
  return fetch({
    url: `/forum/${threadID}/answers/loadanswers`,
    method: 'get',
  })
}

answerService.create = async (
  threadID: number,
  data: { content: string; linked_products?: string },
): Promise<any> => {
  return fetch({
    url: `/forum/${threadID}/answers/submit`,
    method: 'post',
    data,
  })
}

answerService.update = async (id: number, data: Answer): Promise<any> => {
  return fetch({
    url: `/forum/${id}/answers/edit`,
    method: 'put',
    data,
  })
}

answerService.delete = async (id: number): Promise<any> => {
  return fetch({
    url: `/forum/${id}/answers/delete`,
    method: 'delete',
  })
}

answerService.vote = async (id: number, type: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/answer/vote`,
    method: 'post',
    data: { type },
  })
}

answerService.cancelVote = async (id: number, type: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/answer/unvote`,
    method: 'post',
    data: { type },
  })
}

answerService.getComments = async (answerID: number): Promise<any> => {
  return fetch({
    url: `/forum/${answerID}/answer/getcomment`,
    method: 'get',
  })
}

answerService.createComment = async (answerID: number, content: string): Promise<any> => {
  return fetch({
    url: `/forum/${answerID}/answer/comment`,
    method: 'post',
    data: { content },
  })
}

answerService.updateComment = async (id: number, content: string): Promise<any> => {
  return fetch({
    url: `/forum/${id}/answer/comment/edit`,
    method: 'put',
    data: { content },
  })
}

answerService.deleteComment = async (id: number): Promise<any> => {
  return fetch({
    url: `/forum/${id}/answer/comment/delete`,
    method: 'delete',
  })
}

export default answerService
