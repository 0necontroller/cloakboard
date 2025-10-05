import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Note } from '../App'

interface NoteEditorProps {
  note: Note
  onUpdate: (note: Note) => void
}

export function NoteEditor({ note, onUpdate }: NoteEditorProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [tags, setTags] = useState(note.tags.join(', '))

  const handleSave = () => {
    onUpdate({
      ...note,
      title,
      content,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t)
    })
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleSave}
            className="text-xl font-bold border-none p-0 h-auto focus-visible:ring-0"
            placeholder="Note title"
          />
        </CardTitle>
        <Input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          onBlur={handleSave}
          placeholder="Tags (comma separated)"
          className="text-sm"
        />
      </CardHeader>
      <CardContent className="flex-1">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleSave}
          placeholder="Start writing your note..."
          className="min-h-[400px] resize-none border-none p-0 focus-visible:ring-0"
        />
      </CardContent>
    </Card>
  )
}
