import Sidebar from '@/components/sidebar'

export default function Home() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-10 h-full">
        <div className="col-span-3 h-full">
          <Sidebar />
        </div>
        <div className="col-span-5 border-l">
          <div className="h-full px-8 py-6">
            Content
          </div>
        </div>
      </div>
    </div>
  )
}
