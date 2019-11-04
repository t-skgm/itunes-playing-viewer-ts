import fetch from 'isomorphic-unfetch'
import { consts } from '@/consts'
import { ApiPlayingRes } from '@/types'

export const apiRoutes = {
  playing: '/playing',
  static: '/static'
}

export const client = {
  getPlaying: async (): Promise<ApiPlayingRes> => {
    const res = await fetch(consts.apiHost + apiRoutes.playing)
    return res.json()
  }
}
