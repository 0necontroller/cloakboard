import { useState, useEffect } from 'react'
import { SidebarProvider } from './components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'
import { NoteEditor } from './components/NoteEditor'
import { Toolbar } from './components/Toolbar'
import { Overlay } from './components/Overlay'

export interface Vault {
  id: string
  name: string
  notes: Note[]
}

export interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

function App(): React.JSX.Element {
  if (window.location.hash === '#/overlay') {
    return <Overlay />
  }

  const [vaults, setVaults] = useState<Vault[]>([
    {
      id: '1',
      name: 'Sample Vault',
      notes: [
        {
          id: '1',
          title: 'Meeting Agenda',
          content: 'Discuss project timeline\n- Task 1\n- Task 2',
          tags: ['agenda'],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }
  ])
  const [selectedVaultId, setSelectedVaultId] = useState<string>('1')
  const [selectedNoteId, setSelectedNoteId] = useState<string>('1')

  useEffect(() => {
    const saved = localStorage.getItem('cloakboard-vaults')
    if (saved) {
      const parsedVaults = JSON.parse(saved).map((v: any) => ({
        ...v,
        notes: v.notes.map((n: any) => ({
          ...n,
          createdAt: new Date(n.createdAt),
          updatedAt: new Date(n.updatedAt)
        }))
      }))
      setVaults(parsedVaults)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cloakboard-vaults', JSON.stringify(vaults))
  }, [vaults])

  const selectedVault = vaults.find((v) => v.id === selectedVaultId)
  const selectedNote = selectedVault?.notes.find((n) => n.id === selectedNoteId)

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar
          vaults={vaults}
          selectedVaultId={selectedVaultId}
          selectedNoteId={selectedNoteId}
          onVaultSelect={setSelectedVaultId}
          onNoteSelect={setSelectedNoteId}
          onCreateVault={() => {
            const newVault: Vault = {
              id: Date.now().toString(),
              name: 'New Vault',
              notes: []
            }
            setVaults([...vaults, newVault])
            setSelectedVaultId(newVault.id)
          }}
          onCreateNote={() => {
            if (!selectedVault) return
            const newNote: Note = {
              id: Date.now().toString(),
              title: 'New Note',
              content: '',
              tags: [],
              createdAt: new Date(),
              updatedAt: new Date()
            }
            const updatedVault = {
              ...selectedVault,
              notes: [...selectedVault.notes, newNote]
            }
            setVaults(vaults.map((v) => (v.id === selectedVaultId ? updatedVault : v)))
            setSelectedNoteId(newNote.id)
          }}
        />
        <div className="flex-1 flex flex-col">
          <Toolbar
            onToggleOverlay={() => {
              // @ts-ignore
              window.api.toggleOverlay()
            }}
          />
          <div className="flex-1 p-4">
            {selectedNote ? (
              <NoteEditor
                note={selectedNote}
                onUpdate={(updatedNote) => {
                  if (!selectedVault) return
                  const updatedNotes = selectedVault.notes.map((n) =>
                    n.id === selectedNoteId ? { ...updatedNote, updatedAt: new Date() } : n
                  )
                  const updatedVault = { ...selectedVault, notes: updatedNotes }
                  setVaults(vaults.map((v) => (v.id === selectedVaultId ? updatedVault : v)))
                }}
              />
            ) : (
              <div className="text-center text-muted-foreground">
                Select a note to start editing
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
