import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { TrackStatus } from '@/services/jxa/iTunes'
import { Main } from '@/components'
import { consts } from '@/consts'
import { formatInfoItems } from '@/utils/formatInfoItems'
import { usePlayingInfo } from '@/hooks'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'TsukuARdGothic-Regular', 'American Typewriter', sans-serif;
  }
`

const buildArtworkPath = (track: TrackStatus): string =>
  `${consts.apiHost}${consts.artworkDir}/${track.artist}-${track.title}.jpg`

export const App = () => {
  const [res, loading] = usePlayingInfo()
  if (!res || loading) return null

  const { track, playlist } = res
  const passProps = {
    title: playlist ? playlist.title : undefined,
    items: track ? formatInfoItems(track) : [],
    artworkPath: track ? buildArtworkPath(track) : undefined
  }

  return (
    <>
      <GlobalStyle />
      <Main {...passProps} />
    </>
  )
}
