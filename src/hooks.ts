import * as React from 'react'
// import Index from '@/pages/index'

import { client } from '@/services/client'
import { ApiPlayingRes } from '@/types'
import { consts } from '@/consts'

export const usePlayingInfo = () => {
  const [res, setRes] = React.useState<ApiPlayingRes | null>(null)
  const [loading, setLoading] = React.useState(true)

  const updateRequest = async () => {
    const res = await client.getPlaying().catch(err => {
      console.error(err)
      return null
    })
    setRes(res)
    setLoading(false)
  }

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      updateRequest()
    }, consts.updateRateMs)

    return () => {
      clearInterval(intervalID!)
    }
  }, [])

  return [res, loading] as const
}
