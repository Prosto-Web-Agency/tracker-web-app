import Header from '@/components/common/header'
import MainPage from '@/components/pages/mainPage'
import { Provider } from 'react-redux'
import { store } from '@/store/store'


export default function Home() {
  return (
    <div className='w-screen h-screen relative'>
      <Header />
      <MainPage />
    </div>
  )
}
