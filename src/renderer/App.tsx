import { useEffect } from 'react'
import { useSignals, useSignal } from '@preact/signals-react/runtime'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { App as AntdApp, ConfigProvider as AntdConfigProvider } from 'antd'

import './styles/sass/index.sass'
import { tRpcClient, tRpcClientReact } from './trpc'
import { AppRouter } from './routers'

/**
 * Компонент приложения
 */
export const App = () => {
  useSignals()

  const client = useSignal(tRpcClient)
  const clientTanstack = useSignal(new QueryClient())

  useEffect(() => {
    const loader = document.getElementById('loading-screen')
    if (loader) {
      loader.classList.add('fade-out')

      setTimeout(() => {
        loader.remove()
      }, 500)
    }
  }, [])

  return (
    <>
      <tRpcClientReact.Provider client={client.value} queryClient={clientTanstack.value}>
        <QueryClientProvider client={clientTanstack.value}>
          <AntdConfigProvider>
            <AntdApp style={{ height: '100%' }}>
              <AppRouter />
            </AntdApp>
          </AntdConfigProvider>
        </QueryClientProvider>
      </tRpcClientReact.Provider>
    </>
  )
}
