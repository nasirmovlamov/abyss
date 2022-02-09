import fetch from '../interceptor';
import { Product } from './../../interfaces/Product';

const productService: { [index: string]: (...args: any[]) => Promise<any> } = {}

productService.search = async (
  keyword: string | null,
  tags: string[] | null,
  mustNot: string[] | null,
): Promise<any> => {
  let queryParams = []

  if (keyword) queryParams.push('keyword=' + keyword)
  if (tags) queryParams.push('tags=' + tags.join(','))
  if (mustNot) queryParams.push('must_not=' + mustNot.join(','))

  return fetch({
    url: `/store/search${queryParams.length ? '?' + queryParams.join('&') : ''}`,
    method: 'get',
  })
}

productService.get = async (id: number): Promise<any> => {
  return fetch({
    url: `/store/${id}/test`,
    method: 'get',
  })
}

productService.create = async (): Promise<any> => {
  return fetch({
    url: '/store/create',
    method: 'post',
  })
}

productService.update = async (id: number, data: Product): Promise<any> => {
  return fetch({
    url: `/store/${id}/product/edit`,
    method: 'put',
    data,
  })
}

productService.delete = async (id: number): Promise<any> => {
  return fetch({
    url: `/store/${id}/product/delete`,
    method: 'delete',
  })
}

productService.checkPlagiarism = async (
  id: number,
  data: { source_code: string; extension: string },
): Promise<any> => {
  return fetch({
    url: `/store/${id}/product/plagiarism`,
    method: 'post',
    data,
  })
}

productService.iterate = async (id: number, data: Product): Promise<any> => {
  return fetch({
    url: `/store/${id}/iterate`,
    method: 'post',
    data,
  })
}

productService.submit = async (id: number, data: Product): Promise<any> => {
  return fetch({
    url: `/store/${id}/product/submit`,
    method: 'post',
    data,
  })
}

export default productService
