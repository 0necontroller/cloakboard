import { Eye, Search, Settings } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface ToolbarProps {
  onToggleOverlay: () => void
}

export function Toolbar({ onToggleOverlay }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search notes..." className="pl-9 w-64" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onToggleOverlay}>
          <Eye className="h-4 w-4 mr-2" />
          Toggle Overlay
        </Button>
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
