import '@/styles/globals.css'
import { TodoProvider } from '@/state/TodoContext'

export default function App({ Component, pageProps }) {
  return (
  <TodoProvider>
    <Component {...pageProps} />
  </TodoProvider>
  )
}