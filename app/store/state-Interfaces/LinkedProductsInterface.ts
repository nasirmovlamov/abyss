export interface LINKED_PRODUCT_INTERFACE {
  linkedProducts: { [key: string]: any }[]
  status: 'idle' | 'loading'
}
