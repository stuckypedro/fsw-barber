import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-black">
      <div className="flex items-center gap-3 border border-yellow-300 p-4">
        <div className="flex h-auto w-auto items-start rounded-md bg-yellow-300 font-bold">
          <h1 className="text-4xl font-bold text-black">HP</h1>
        </div>
        <h1 className="text-3xl font-bold text-yellow-300">HOME PAGE</h1>
      </div>
    </div>
  )
}
