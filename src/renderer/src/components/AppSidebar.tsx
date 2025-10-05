import { Plus, Folder, FileText } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from './ui/sidebar'
import { Button } from './ui/button'
import { Vault } from '../App'

interface AppSidebarProps {
  vaults: Vault[]
  selectedVaultId: string
  selectedNoteId: string
  onVaultSelect: (vaultId: string) => void
  onNoteSelect: (noteId: string) => void
  onCreateVault: () => void
  onCreateNote: () => void
}

export function AppSidebar({
  vaults,
  selectedVaultId,
  selectedNoteId,
  onVaultSelect,
  onNoteSelect,
  onCreateVault,
  onCreateNote
}: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">CloakBoard</h1>
          <Button size="sm" variant="ghost" onClick={onCreateVault}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {vaults.map((vault) => (
          <SidebarGroup key={vault.id}>
            <SidebarGroupLabel className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                {vault.name}
              </span>
              <Button size="sm" variant="ghost" onClick={onCreateNote}>
                <Plus className="h-3 w-3" />
              </Button>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {vault.notes.map((note) => (
                  <SidebarMenuItem key={note.id}>
                    <SidebarMenuButton
                      isActive={selectedVaultId === vault.id && selectedNoteId === note.id}
                      onClick={() => {
                        onVaultSelect(vault.id)
                        onNoteSelect(note.id)
                      }}
                    >
                      <FileText className="h-4 w-4" />
                      <span>{note.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
