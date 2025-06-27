import { create } from 'zustand'
import axios from 'axios'
import type { CardDTO } from '../pages/index/types/card'

interface ImageState {
  images: CardDTO[]
  loading: boolean
  error: string | null
  fetchImages: (search: string, page: number) => Promise<void>
}

export const useImageStore = create<ImageState>((set) => ({
  images: [],
  loading: false,
  error: null,
  fetchImages: async (search, page) => {
    set({ loading: true, error: null })
    try {
      const API_URL = 'https://api.unsplash.com/search/photos'
      const API_KEY = 'kAZ7kFJXaXh8ahSJkjW0ryRcBNJYnjtvkZsExSsSozs'
      const PER_PAGE = 30
      const res = await axios.get(`${API_URL}?query=${search}&client_id=${API_KEY}&page=${page}&per_page=${PER_PAGE}`)
      set({ images: res.data.results, loading: false })
    } catch (e: any) {
      set({ error: e.message, loading: false })
    }
  }
}))