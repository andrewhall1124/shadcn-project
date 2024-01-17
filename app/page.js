import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex gap-4">
        <Button>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost'>Ghost</Button>
        <ModeToggle/>
      </div>
    </main>
  )
}
