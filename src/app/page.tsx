import Header from '@/components/common/header'
import MainPage from '@/components/pages/mainPage'
import ProtectedRoute from "@/components/common/protectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className='w-screen h-screen relative'>
        <Header />
        <MainPage />
      </div>
    </ProtectedRoute>
  )
}
