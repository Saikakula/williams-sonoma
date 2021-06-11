import '@styles/globals.css'
import '@styles/normalize.css'

import { GlobalProvider } from '@contexts/GlobalContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
