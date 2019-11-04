import * as React from 'react'
// import Index from '@/pages/index'

import { client } from '@/services/client'
import { TrackStatus } from '@/services/jxa/iTunes'
import { ApiPlayingRes } from '@/types'
import { IndexScreen } from '@/screens/IndexScreen'
import { consts } from '@/consts'
import { formatInfoItems } from '@/utils/formatInfoItems'

const buildArtworkPath = (track: TrackStatus): string => `${consts.artworkServerDir}/${track.artist}-${track.title}.jpg`

const usePlayingInfo = () => {
  const [res, setRes] = React.useState<ApiPlayingRes | null>(null)
  const [loading, setLoading] = React.useState(true)
  const resSetter = async () => {
    const res = await client.getPlaying()
    setRes(res)
    setLoading(false)
  }
  React.useEffect(() => {
    resSetter()
  })
  return [res, loading] as const
}

const Index: React.FC<ApiPlayingRes> = () => {
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      // if (this.props.router) this.props.router.push('/')
    }, consts.updateRateMs)

    return () => {
      clearInterval(intervalID!)
    }
  }, [])

  // shouldComponentUpdate(nextProps: ApiPlayingRes) {
  //   if (!this.props.track || !nextProps.track) return true
  //   if (this.props.track.title === nextProps.track.title && this.props.track.album === nextProps.track.album) {
  //     return false
  //   }
  //   return true
  // }

  const [res, loading] = usePlayingInfo()
  if (!res || loading) return null

  const { track, playlist } = res
  const passProps = {
    title: playlist ? playlist.title : undefined,
    items: track ? formatInfoItems(track) : [],
    artworkPath: track ? buildArtworkPath(track) : undefined
  }
  return <IndexScreen {...passProps} />
}

export const App = () => {
  return <Index />
}
