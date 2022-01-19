import { SectionOfProduct } from './../app/store/state-Interfaces/CreateProductInterface';

export const getClips = (sections: SectionOfProduct[]) => {
  let index = sections.findIndex((section) => section.isClips.status)
  return sections[index]
}

export const getClipsIndex = (sections: SectionOfProduct[]) => {
  let index = sections.findIndex((section) => section.isClips.status)
  return index
}
