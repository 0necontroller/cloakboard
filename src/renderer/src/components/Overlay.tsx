import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { X, Minus, Plus } from 'lucide-react'

export function Overlay() {
  const [opacity, setOpacity] = useState(0.8)

  return (
    <div className="h-screen w-screen bg-transparent flex items-center justify-center">
      <Card className="w-80 h-60 p-4 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Meeting Notes</h2>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setOpacity(Math.max(0.2, opacity - 0.1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setOpacity(Math.min(1, opacity + 0.1))}
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => window.close()}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="text-sm">
          <p>• Discuss project timeline</p>
          <p>• Review deliverables</p>
          <p>• Plan next steps</p>
        </div>
      </Card>
    </div>
  )
}
