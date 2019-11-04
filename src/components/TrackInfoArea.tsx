import * as React from 'react'
import styled from '@emotion/styled'
import { TrackInfoItem } from '@/types'

const Wrapper = styled.dl`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0.7rem 0;
  margin: 0 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  /* box-shadow: 0px 2px 4px 0px rgba(183, 183, 183, 0.6); */
`

const InfoTitle = styled.dt`
  flex-basis: 20%;
  padding: 0.4rem;
  padding-left: 0;
  padding-right: 0.5rem;
  color: #434343;
  font-size: 1.2rem;
  font-weight: normal;
  text-align: right;
  line-height: 2rem;
`

const InfoValue = styled.dd`
  flex-basis: 80%;
  padding: 0.4rem 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
`

interface TrackInfoAreaProps {
  items: TrackInfoItem[]
}

export const TrackInfoArea: React.FC<TrackInfoAreaProps> = ({ items }) => (
  <Wrapper>
    {items.map((item, idx) => (
      <React.Fragment key={'item' + idx}>
        <InfoTitle>{item.label}:</InfoTitle>
        <InfoValue>{item.value}</InfoValue>
      </React.Fragment>
    ))}
  </Wrapper>
)
