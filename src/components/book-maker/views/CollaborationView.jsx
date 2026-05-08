import React from 'react'
import { CardPanel, OrangeButton, PageHeader, TopStatCard } from '../Shared'
import { IconBooks, IconPen, IconPublish, IconUsers } from '../icons'

const team = [
  { name: 'Sarah Johnson', email: 'sarah.j@example.com', role: 'co-author', status: 'active', books: 3, joined: '15/01/2024' },
  { name: 'Michael Chen', email: 'michael.chen@email.com', role: 'editor', status: 'active', books: 5, joined: '20/02/2024' },
  { name: 'Emily Rodriguez', email: 'emily.r@email.com', role: 'reviewer', status: 'active', books: 2, joined: '10/03/2024' },
  { name: 'David Kim', email: 'david.kim@email.com', role: 'co-author', status: 'pending', books: 1, joined: '25/03/2024' },
]

const invitations = [
  { email: 'alex.brown@email.com', role: 'Editor', book: 'The Digital Revolution', date: '20/03/2024', status: 'pending' },
  { email: 'lisa.wang@email.com', role: 'Reviewer', book: 'Modern Education', date: '20/03/2024', status: 'accepted' },
  { email: 'james.miller@email.com', role: 'Co-Author', book: 'Science Simplified', date: '20/03/2024', status: 'accepted' },
  { email: 'alex.brown@email.com', role: 'Editor', book: 'The Digital Revolution', date: '20/03/2024', status: 'declined' },
]

const CollaborationView = ({ tab, onTabChange, onOpenInvite }) => (
  <div className='space-y-4'>
    <PageHeader
      title='Collaboration'
      subtitle='Manage co-authors, editors, and team members'
      action={<OrangeButton onClick={onOpenInvite}>Invite Member</OrangeButton>}
    />
    <div className='grid grid-cols-4 gap-3'>
      <TopStatCard icon={<IconUsers className='h-4 w-4' />} value='12' label='Total Members' note='' />
      <TopStatCard icon={<IconPen className='h-4 w-4' />} value='8' label='Active Members' note='' />
      <TopStatCard icon={<IconPublish className='h-4 w-4' />} value='4' label='Pending Invites' note='' />
      <TopStatCard icon={<IconBooks className='h-4 w-4' />} value='7' label='Shared Books' note='' />
    </div>
    <CardPanel>
      <div className='mb-3 flex gap-2 border-b border-[#F0F2F6] pb-3'>
        {[
          ['team', 'Team Members'],
          ['invites', 'Invitations'],
          ['permissions', 'Permissions'],
        ].map(([id, label]) => (
          <button
            type='button'
            key={id}
            onClick={() => onTabChange(id)}
            className={`rounded-md px-4 py-2 text-[12px] ${
              tab === id ? 'bg-[#FF9800] text-white' : 'text-[#6F7687] hover:bg-[#FFF6E9]'
            }`}
          >
            <span className='inline-flex items-center gap-2'>
              <span>{id === 'team' ? '👥' : id === 'invites' ? '✉' : '🛡'}</span>
              {label}
            </span>
          </button>
        ))}
      </div>

      {tab === 'team' && (
        <div className='space-y-2'>
          {team.map((member) => (
            <div key={member.email} className='grid grid-cols-[1.6fr_0.6fr_0.6fr_40px] items-center rounded-md border border-[#ECECEC] p-3'>
              <div className='flex items-center gap-3'>
                <img src={`https://picsum.photos/seed/${member.name}/100/100`} alt={member.name} className='h-10 w-10 rounded-full object-cover' />
                <div>
                  <p className='text-[13px] font-semibold text-[#1D2232]'>{member.name}</p>
                  <p className='text-[11px] text-[#8E95A5]'>{member.email}</p>
                  <div className='mt-1 flex gap-1 text-[10px]'>
                    <span className='rounded bg-[#E6F0FF] px-1.5 py-0.5 text-[#2563EB]'>{member.role}</span>
                    <span className='rounded bg-[#E8F7ED] px-1.5 py-0.5 text-[#16A34A]'>{member.status}</span>
                  </div>
                </div>
              </div>
              <div className='text-[12px] text-[#1D2232]'>Books Access<br />{member.books}</div>
              <div className='text-[12px] text-[#1D2232]'>Joined<br />{member.joined}</div>
              <button type='button' className='text-[#A2A9B9]'>🗑</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'invites' && (
        <div className='space-y-2'>
          {invitations.map((item, idx) => (
            <div key={`${item.email}-${idx}`} className='flex items-center justify-between rounded-lg border border-[#E8ECF3] px-3 py-3'>
              <div>
                <p className='text-[13px] font-semibold text-[#1D2232]'>{item.email}</p>
                <p className='text-[12px] text-[#586178]'>Invited as <span className='font-medium'>{item.role}</span> for {item.book}</p>
                <p className='text-[11px] text-[#9DA4B4]'>Sent on {item.date}</p>
              </div>
              {item.status === 'pending' && (
                <div className='flex items-center gap-4'>
                  <span className='rounded-md bg-[#FFF3E0] px-4 py-1.5 text-[12px] font-medium text-[#E18A00]'>Pending</span>
                  <button type='button' className='text-[12px] font-semibold text-[#EF4444]'>Cancel</button>
                </div>
              )}
              {item.status === 'accepted' && (
                <span className='rounded-md bg-[#FF9800] px-4 py-1.5 text-[12px] font-semibold text-white'>accepted</span>
              )}
              {item.status === 'declined' && (
                <span className='rounded-md bg-[#FDECEC] px-4 py-1.5 text-[12px] font-semibold text-[#EF4444]'>declined</span>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'permissions' && (
        <div className='space-y-2'>
          <p className='text-[24px] font-semibold text-[#1D2232]'>Role Permissions</p>

          {[
            {
              role: 'Owner',
              subtitle: 'Full access to all features',
              left: ['Full access to all features', 'sent on 20/03/2024'],
              right: ['Manage Team', 'Financial Access'],
              badge: 'Full Control',
              badgeClass: 'bg-[#F3E8FF] text-[#9333EA]',
            },
            {
              role: 'Co-Author',
              subtitle: 'Can write and edit content',
              left: ['Write Content', 'Add Comments'],
              right: ['Edit Chapters', 'Publish Books'],
              badge: 'Write Access',
              badgeClass: 'bg-[#FEF3C7] text-[#B45309]',
            },
            {
              role: 'Editor',
              subtitle: 'Can review and suggest changes',
              left: ['Suggest Edits', 'Track Changes'],
              right: ['Add Comments', 'Delete Content'],
              badge: 'Edit Access',
              badgeClass: 'bg-[#FFEDD5] text-[#EA580C]',
            },
            {
              role: 'Reviewer',
              subtitle: 'Can view and comment only',
              left: ['View Content', 'Edit Content'],
              right: ['Add Comments', 'Delete Content'],
              badge: 'View Access',
              badgeClass: 'bg-[#FFEDD5] text-[#C2410C]',
            },
          ].map((item) => (
            <div key={item.role} className='rounded-lg border border-[#E8ECF3] p-3'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-[14px] font-semibold text-[#1D2232]'>{item.role}</p>
                  <p className='text-[13px] text-[#677089]'>{item.subtitle}</p>
                </div>
                <span className={`rounded-md px-3 py-1 text-[12px] font-semibold ${item.badgeClass}`}>{item.badge}</span>
              </div>

              <div className='mt-2 grid grid-cols-2 gap-6 text-[12px]'>
                <div className='space-y-1'>
                  <p className='text-[#6B7280]'><span className='mr-1 text-[#F59E0B]'>✓</span>{item.left[0]}</p>
                  <p className='text-[#6B7280]'>
                    <span className={`mr-1 ${item.role === 'Reviewer' ? 'text-[#EF4444]' : 'text-[#F59E0B]'}`}>
                      {item.role === 'Reviewer' ? '✕' : '✓'}
                    </span>
                    {item.left[1]}
                  </p>
                </div>
                <div className='space-y-1'>
                  <p className='text-[#6B7280]'><span className='mr-1 text-[#F59E0B]'>✓</span>{item.right[0]}</p>
                  <p className='text-[#6B7280]'><span className='mr-1 text-[#EF4444]'>✕</span>{item.right[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </CardPanel>
  </div>
)

export default CollaborationView
