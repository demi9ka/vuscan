import { makeAutoObservable } from 'mobx'

class SearchStore {
  search: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setSearch = (value: string) => {
    this.search = value
  }

  clearSearch = () => {
    this.setSearch('')
  }
}

export const searchStore = new SearchStore()
