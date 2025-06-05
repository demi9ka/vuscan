import { makeAutoObservable } from 'mobx'

class SearchStore {
  search: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setSearch = (vl: string) => {
    this.search = vl
  }

  clearSearch = () => {
    this.setSearch('')
  }
}

export const searchStore = new SearchStore()
