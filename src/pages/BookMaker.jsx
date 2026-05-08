import React, { useState } from 'react'
import { navItems } from '../components/book-maker/data'
import { AppShell, Sidebar } from '../components/book-maker/Shared'
import { CreateBookModal, InviteMemberModal, UploadGuidelinesModal } from '../components/book-maker/Modals'
import MyBooksView from '../components/book-maker/views/MyBooksView'
import WritingStudioView from '../components/book-maker/views/WritingStudioView'
import CollaborationView from '../components/book-maker/views/CollaborationView'
import DesignToolsView from '../components/book-maker/views/DesignToolsView'
import PublishingView from '../components/book-maker/views/PublishingView'
import AnalyticsView from '../components/book-maker/views/AnalyticsView'

const BookMaker = () => {
  const [active, setActive] = useState('books')
  const [createStep, setCreateStep] = useState(1)
  const [createOpen, setCreateOpen] = useState(false)
  const [guidelinesOpen, setGuidelinesOpen] = useState(false)
  const [inviteOpen, setInviteOpen] = useState(false)
  const [outlineTab, setOutlineTab] = useState('chapters')
  const [collaborationTab, setCollaborationTab] = useState('team')
  const [designTab, setDesignTab] = useState('layout')

  return (
    <AppShell>
      <Sidebar items={navItems} active={active} onChange={setActive} />

      <main className='pl-2'>
        {active === 'books' && <MyBooksView onOpenCreateBook={() => setCreateOpen(true)} />}
        {active === 'studio' && (
          <WritingStudioView
            outlineTab={outlineTab}
            onOutlineTabChange={setOutlineTab}
            onOpenGuidelines={() => setGuidelinesOpen(true)}
          />
        )}
        {active === 'collaboration' && (
          <CollaborationView
            tab={collaborationTab}
            onTabChange={setCollaborationTab}
            onOpenInvite={() => setInviteOpen(true)}
          />
        )}
        {active === 'design' && <DesignToolsView tab={designTab} onTabChange={setDesignTab} />}
        {active === 'publishing' && <PublishingView />}
        {active === 'analytics' && <AnalyticsView />}
      </main>

      <CreateBookModal
        open={createOpen}
        step={createStep}
        onClose={() => {
          setCreateOpen(false)
          setCreateStep(1)
        }}
        onNext={() => setCreateStep(2)}
        onBack={() => setCreateStep(1)}
      />
      <UploadGuidelinesModal open={guidelinesOpen} onClose={() => setGuidelinesOpen(false)} />
      <InviteMemberModal open={inviteOpen} onClose={() => setInviteOpen(false)} />
    </AppShell>
  )
}

export default BookMaker
