import { SectionOfProduct } from '../../store/states/interfaces/CreateProduct.interface'

export const getClips = (sections: SectionOfProduct[]) => {
  let index = sections.findIndex((section) => section.isClips.status)
  return sections[index]
}

export const getClipsIndex = (sections: SectionOfProduct[]) => {
  let index = sections.findIndex((section) => section.isClips.status)
  return index
}
