import '@/styles/globals.css'
import { Layout } from '@/components'
import { Provider } from '@/components/Context'


export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
