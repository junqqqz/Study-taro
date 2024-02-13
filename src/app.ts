import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'

function App({ children }: PropsWithChildren<any>) {
  const a = 10;
  useLaunch(() => {
    console.log('App launched.',a)
  })

  // children 是将要会渲染的页面
  return children
}

export default App
