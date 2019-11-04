import * as React from 'react'
import styled from 'styled-components'
import { TrackInfoArea } from '@/components'
import { consts } from '@/consts'
import { TrackInfoItem } from '@/types'

const bgImageWidth = consts.window.width
const bgImageRedLineRate = 0.15
const artworkSize = 400

const Wrapper = styled.div`
  width: ${bgImageWidth}px;
  height: ${consts.window.height}px;
  padding: 1rem;
  background-image: url('${consts.apiHost}/static/images/background.jpg');
  background-size: ${bgImageWidth}px;
  background-position: 0 bottom;
`

const Title = styled.h1`
  margin: 0;
  padding-left: ${bgImageWidth * bgImageRedLineRate}px;
  padding-bottom: 1rem;
  font-family: 'TsukuARdGothic-Regular', 'American Typewriter', sans-serif;
`

const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

const ArtworkArea = styled.div`
  width: ${artworkSize}px;
  height: ${artworkSize}px;
  background-color: #ddd;
  box-shadow: 0px 6px 13px 2px rgba(168, 168, 168, 0.6);
`

const Artwork = styled.img`
  width: ${artworkSize}px;
  height: ${artworkSize}px;
`

interface Props {
  title?: string
  items: TrackInfoItem[]
  artworkPath?: string
}

const isEqual = (prevProps: Props, nextProps: Props) =>
  prevProps.title === nextProps.title &&
  prevProps.artworkPath === nextProps.artworkPath &&
  // 雑equal
  prevProps.items[1] &&
  nextProps.items[1] &&
  prevProps.items[1].value === nextProps.items[1].value

export const Main: React.FC<Props> = React.memo(
  ({ items, title = '(Stop)', artworkPath }) => (
    <Wrapper>
      {console.log('update')}
      <Title>{title}</Title>
      <Detail>
        <ArtworkArea>
          {artworkPath ? (
            <Artwork src={artworkPath} />
          ) : (
            <Artwork src={`${consts.apiHost}/static/images/placeholder-song.png`} />
          )}
        </ArtworkArea>
        <TrackInfoArea items={items} />
      </Detail>
    </Wrapper>
  ),
  isEqual
)
