import React from 'react'
import { IconClose } from './icons'
import { OrangeButton } from './Shared'

const Backdrop = ({ children }) => (
  <div className='fixed inset-0 z-40 flex items-center justify-center bg-black/25 p-4'>{children}</div>
)

export const CreateBookModal = ({ open, step, onClose, onNext, onBack }) => {
  if (!open) return null

  return (
    <Backdrop>
      <div className='w-full max-w-[520px] rounded-2xl bg-white p-4 shadow-2xl'>
        <div className='mb-3 flex items-center justify-between'>
          <div>
            <p className='text-[38px] font-semibold leading-none text-[#111827]'>Create New Book</p>
            <p className='mt-1 text-[12px] text-[#8D95A6]'>Step 1 of 3</p>
          </div>
          <button type='button' onClick={onClose} className='text-[#8D95A6]'>
            <IconClose />
          </button>
        </div>

        <div className='mb-4 grid grid-cols-2 gap-2'>
          <div className='h-1.5 rounded-full bg-[#FF9800]' />
          <div className='h-1.5 rounded-full bg-[#F1DDC1]' />
        </div>

        {step === 1 ? (
          <>
            <label className='text-[13px] font-medium text-[#1D2232]'>Book Title *</label>
            <input className='mt-1 mb-3 w-full rounded-md border border-[#E5E7EB] px-3 py-2.5 text-[14px]' placeholder='Enter your book title' />
            <label className='text-[13px] font-medium text-[#1D2232]'>Subtitle (Optional)</label>
            <input className='mt-1 mb-3 w-full rounded-md border border-[#E5E7EB] px-3 py-2.5 text-[14px]' placeholder='Enter subtitle' />
            <div className='mb-3 grid grid-cols-2 gap-2'>
              <div>
                <label className='text-[13px] font-medium text-[#1D2232]'>Genre *</label>
                <input className='mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2.5 text-[14px]' placeholder='Select genre' />
              </div>
              <div>
                <label className='text-[13px] font-medium text-[#1D2232]'>Language *</label>
                <input className='mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2.5 text-[14px]' placeholder='English' />
              </div>
            </div>
            <label className='text-[13px] font-medium text-[#1D2232]'>Description *</label>
            <textarea className='mt-1 h-[70px] w-full rounded-md border border-[#E5E7EB] px-3 py-2.5 text-[14px]' placeholder='Brief description of your book' />
            <div className='mt-4 grid grid-cols-2 gap-2'>
              <button type='button' onClick={onClose} className='rounded-md border border-[#94A3B8] py-2.5 text-[14px] text-[#475569]'>Cancel</button>
              <OrangeButton onClick={onNext} className='py-2.5 text-[14px]'>Next Step</OrangeButton>
            </div>
          </>
        ) : (
          <>
            <p className='mb-2 text-[14px] font-medium text-[#1D2232]'>Book Type</p>
            <div className='grid grid-cols-2 gap-2'>
              <div className='rounded-xl border border-[#FF9800] bg-[#FFF7EC] p-3'>
                <p className='text-[14px] text-[#1D2232]'>Fiction</p>
                <p className='text-[12px] text-[#8D95A6]'>Novels, short stories, creative works</p>
              </div>
              <div className='rounded-xl border border-[#D9DEE8] p-3'>
                <p className='text-[14px] text-[#1D2232]'>Non-Fiction</p>
                <p className='text-[12px] text-[#8D95A6]'>Memoirs, guides, informational</p>
              </div>
              <div className='rounded-xl border border-[#D9DEE8] p-3'>
                <p className='text-[14px] text-[#1D2232]'>Academic</p>
                <p className='text-[12px] text-[#8D95A6]'>Textbooks, research, scholarly</p>
              </div>
              <div className='rounded-xl border border-[#D9DEE8] p-3'>
                <p className='text-[14px] text-[#1D2232]'>Course Material</p>
                <p className='text-[12px] text-[#8D95A6]'>Lectures, lessons, curricula</p>
              </div>
            </div>

            <p className='mb-2 mt-4 text-[14px] font-medium text-[#1D2232]'>Target Audience</p>
            <div className='grid grid-cols-2 gap-2'>
              <div className='rounded-xl border border-[#D9DEE8] p-3'>
                <p className='text-[14px] text-[#1D2232]'>Children</p>
                <p className='text-[12px] text-[#8D95A6]'>Ages 1-11</p>
              </div>
              <div className='rounded-xl border border-[#D9DEE8] p-3'>
                <p className='text-[14px] text-[#1D2232]'>Teens</p>
                <p className='text-[12px] text-[#8D95A6]'>Ages 12-18</p>
              </div>
              <div className='rounded-xl border border-[#FF9800] bg-[#FFF7EC] p-3'>
                <p className='text-[14px] text-[#1D2232]'>Adults</p>
                <p className='text-[12px] text-[#8D95A6]'>Ages 18+</p>
              </div>
              <div className='rounded-xl border border-[#D9DEE8] p-3'>
                <p className='text-[14px] text-[#1D2232]'>All Ages</p>
                <p className='text-[12px] text-[#8D95A6]'>Universal audience</p>
              </div>
            </div>

            <div className='mt-5 grid grid-cols-2 gap-2'>
              <button type='button' onClick={onBack} className='rounded-md border border-[#94A3B8] py-2.5 text-[14px] text-[#475569]'>Cancel</button>
              <OrangeButton onClick={onClose} className='py-2.5 text-[14px]'>Create Book</OrangeButton>
            </div>
          </>
        )}
      </div>
    </Backdrop>
  )
}

export const UploadGuidelinesModal = ({ open, onClose }) => {
  if (!open) return null
  return (
    <Backdrop>
      <div className='w-full max-w-[760px] rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-2xl'>
        <div className='mb-2 flex items-start justify-between'>
          <div>
            <p className='text-[18px] font-semibold text-[#111827]'>Seekheed Upload Guidelines & Legal Advice</p>
            <p className='text-[12px] text-[#9AA2B3]'>Please review before publishing your content</p>
          </div>
          <button type='button' onClick={onClose} className='rounded p-1 text-[#8D95A6] hover:bg-[#F3F4F6]'>
            <IconClose className='h-4 w-4' />
          </button>
        </div>

        <div className='mb-3 rounded-md border border-[#FFBC66] bg-[#FFF8EE] p-3'>
          <p className='text-[13px] font-semibold text-[#D97706]'>ⓘ Important Notice</p>
          <p className='mt-1 text-[12px] text-[#F08A00]'>
            By uploading content to Seekheed, you agree to our terms of service and confirm that you
            have the legal rights to publish this material.
          </p>
        </div>

        <div className='space-y-3 text-[13px] text-[#394150]'>
          <div>
            <p className='mb-1 text-[24px] font-semibold text-[#111827]'>Content Guidelines</p>
            <div className='space-y-1 text-[12px] text-[#5E6678]'>
              <p><span className='mr-1 text-[#0F172A]'>✓</span><span className='font-medium text-[#111827]'>Original Content</span><br />Ensure content is original or you have proper licensing rights</p>
              <p><span className='mr-1 text-[#0F172A]'>✓</span><span className='font-medium text-[#111827]'>Quality Standards</span><br />Maintain professional writing standards with proper grammar and formatting</p>
              <p><span className='mr-1 text-[#0F172A]'>✓</span><span className='font-medium text-[#111827]'>Appropriate Content</span><br />Content must comply with community standards and local laws</p>
              <p><span className='mr-1 text-[#0F172A]'>✓</span><span className='font-medium text-[#111827]'>Accurate Information</span><br />Educational content should be factually accurate and properly researched</p>
            </div>
          </div>

          <div>
            <p className='mb-1 text-[24px] font-semibold text-[#111827]'>Prohibited Content</p>
            <div className='space-y-1 text-[12px] text-[#5E6678]'>
              <p><span className='mr-1 text-[#EF4444]'>✕</span><span className='font-medium text-[#111827]'>Plagiarized Material</span><br />Do not upload content copied from other sources without permission</p>
              <p><span className='mr-1 text-[#EF4444]'>✕</span><span className='font-medium text-[#111827]'>Harmful Content</span><br />Content promoting violence, hate speech, or illegal activities is strictly prohibited</p>
              <p><span className='mr-1 text-[#EF4444]'>✕</span><span className='font-medium text-[#111827]'>Misleading Information</span><br />False or deceptive content that could harm readers</p>
              <p><span className='mr-1 text-[#EF4444]'>✕</span><span className='font-medium text-[#111827]'>Copyright Infringement</span><br />Unauthorized use of copyrighted images, text, or other materials</p>
            </div>
          </div>

          <div>
            <p className='mb-1 text-[24px] font-semibold text-[#111827]'>Legal Considerations</p>
            <div className='space-y-1 text-[12px] text-[#5E6678]'>
              <p><span className='mr-1 text-[#F59E0B]'>◎</span><span className='font-medium text-[#111827]'>Copyright Ownership</span><br />You retain copyright of your original work. Seekheed receives a non-exclusive license to distribute your content</p>
              <p><span className='mr-1 text-[#F59E0B]'>◎</span><span className='font-medium text-[#111827]'>Attribution Requirements</span><br />Properly cite all sources, quotes, and references used in your work</p>
              <p><span className='mr-1 text-[#F59E0B]'>◎</span><span className='font-medium text-[#111827]'>Privacy & Consent</span><br />Obtain necessary permissions when featuring real people or private information</p>
              <p><span className='mr-1 text-[#F59E0B]'>◎</span><span className='font-medium text-[#111827]'>Liability</span><br />Authors are responsible for the accuracy and legality of their content</p>
            </div>
          </div>
        </div>

        <div className='mt-3 rounded-md border border-[#FCA5A5] bg-[#FEF2F2] p-3'>
          <p className='text-[13px] font-semibold text-[#EF4444]'>⚠ Review Process</p>
          <p className='mt-1 text-[12px] text-[#EF4444]'>
            All submissions undergo a review process to ensure compliance with our guidelines. Books may
            be removed if found to violate these terms.
          </p>
        </div>

        <div className='mt-4 flex items-center justify-between gap-3'>
          <label className='flex items-center gap-2 text-[12px] text-[#9AA2B3]'>
            <input type='checkbox' />
            I have read and agree to the upload guidelines and legal terms
          </label>
          <OrangeButton onClick={onClose} className='min-w-[132px]'>I Understand</OrangeButton>
        </div>
      </div>
    </Backdrop>
  )
}

export const InviteMemberModal = ({ open, onClose }) => {
  if (!open) return null
  return (
    <Backdrop>
      <div className='w-full max-w-[520px] rounded-lg bg-white p-6 shadow-2xl'>
        <div className='mb-4 flex items-center justify-between'>
          <p className='text-[48px] font-semibold leading-none text-[#161B27]'>Invite Team Member</p>
          <button type='button' onClick={onClose} className='text-[#8D95A6]'>
            <IconClose className='h-7 w-7' />
          </button>
        </div>
        <label className='text-[13px] font-medium text-[#1D2232]'>Email Address</label>
        <input className='mt-2 mb-4 w-full rounded-lg border border-[#E5E7EB] px-3 py-3 text-[16px]' placeholder='colleague@email.com' />
        <label className='text-[13px] font-medium text-[#1D2232]'>Role</label>
        <input className='mt-2 mb-4 w-full rounded-lg border border-[#E5E7EB] px-3 py-3 text-[16px]' placeholder='Co-Author' />
        <label className='text-[13px] font-medium text-[#1D2232]'>Book Access</label>
        <input className='mt-2 mb-5 w-full rounded-lg border border-[#E5E7EB] px-3 py-3 text-[16px]' placeholder='All Books' />
        <div className='grid grid-cols-2 gap-3'>
          <button type='button' onClick={onClose} className='rounded-lg border border-[#94A3B8] py-3 text-[16px] text-[#475569]'>Cancel</button>
          <OrangeButton onClick={onClose} className='py-3 text-[16px]'>Next Step</OrangeButton>
        </div>
      </div>
    </Backdrop>
  )
}
