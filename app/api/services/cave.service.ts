import { Profile } from 'app/interfaces/Profile';

import fetch from '../interceptor';

const caveService: { [index: string]: (...args: any[]) => Promise<any> } = {}

caveService.profileGet = async (): Promise<any> => {
  return fetch({
    url: '/user',
    method: 'get',
  })
}

caveService.profileUpdate = async (data: Profile): Promise<any> => {
  return fetch({
    url: '/profile/account/update',
    method: 'post',
    data,
  })
}

caveService.inventoryGetAll = async (): Promise<any> => {
  return fetch({
    url: '/profile/inventory',
    method: 'get',
  })
}

caveService.inventoryHistory = async (): Promise<any> => {
  return fetch({
    url: '/profile/inventory/history',
    method: 'get',
  })
}

caveService.inventoryAdd = async (productID: number): Promise<any> => {
  return fetch({
    url: `/profile/inventory/${productID}/create`,
    method: 'post',
  })
}

caveService.inventoryDelete = async (productID: number): Promise<any> => {
  return fetch({
    url: `/profile/inventory/${productID}/delete`,
    method: 'delete',
  })
}

caveService.libraryHistory = async (): Promise<any> => {
  return fetch({
    url: '/profile/library/history',
    method: 'get',
  })
}

export default caveService
