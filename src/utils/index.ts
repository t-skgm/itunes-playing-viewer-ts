export const parseJSONroughly = (str: string): any => {
  try {
    return JSON.parse(str)
  } catch (error) {
    return {}
  }
}
