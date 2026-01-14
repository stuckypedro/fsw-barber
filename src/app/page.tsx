import { Button } from "./_components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-background">
      <div className="flex items-center gap-3 border border-primary p-4">
        <div className="flex h-auto w-auto items-start rounded-md bg-primary font-bold">
          <h1 className="text-4xl font-bold text-secondary">HP</h1>
        </div>
        <h1 className="text-3xl font-bold text-primary">HOME PAGE</h1>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-primary p-3 font-bold text-white hover:bg-secondary">
          Começar
        </Button>
      </div>
    </div>
  )
}
