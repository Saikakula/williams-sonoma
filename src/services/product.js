import axios from 'axios'

// add allow origin proxy to escape CORS issue
const allowOriginProxy = 'https://api.allorigins.win/get?url='

export const getAllProductByCategory = async () => {
  const { data, status } = await axios.get(
    `${allowOriginProxy}https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json`
  )

  if (status !== 200 || !data) return Promise.reject('Something went wrong!')
  const { contents } = data || {}

  // if contents is not parsable string, exit early
  if (typeof contents === 'string') {
    try {
      // Parse the stringified content by allow origin proxy
      const parsedContent = JSON.parse(contents)
      return parsedContent
    } catch (error) {
      return Promise.reject('Sorry could not parse the response!')
    }
  }

  Promise.reject('Something went wrong!')
}
