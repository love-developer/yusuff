import React from "react";
import { IconClose } from "./icons";
import { OrangeButton } from "./Shared";

const Backdrop = ({ children }) => (
  <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25 p-4">
    {children}
  </div>
);

export const CreateBookModal = ({ open, step, onClose, onNext, onBack }) => {
  if (!open) return null;

  return (
    <Backdrop>
      <div
        className="w-[642px] h-[661px] rounded-[12px] flex flex-col gap-[16px] bg-[#FFFFFF] p-[24px] shadow: 0px 5px 20px 0px #00000026;
"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[24px] font-[600] leading-none text-[#111111]">
              Create New Book
            </p>
            <p className="text-[14px] font-[400] text-[#7C8091]">Step 1 of 3</p>
          </div>
          <button type="button" onClick={onClose} className="text-[#7C8091]">
            <IconClose />
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="h-[8px] rounded-full bg-[#FF9600]" />
          <div className="h-[8px] rounded-full bg-[#FF960033]" />
        </div>

        {step === 1 ? (
          <>
            <div className="flex flex-col gap-[12px]">
              <label className="text-[16px] font-[500] text-[#111111]">
                Book Title *
              </label>
              <input
                className="w-full h-[52px] rounded-[8px] border border-[#E5E7EC] p-[12px] bg-[#FFFFFF] text-[16px] font-[400] text-[#7C8091] focus:outline-none"
                placeholder="Enter your book title"
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <label className="text-[16px] font-[500] text-[#111111]">
                Subtitle (Optional)
              </label>
              <input
                className="w-full h-[52px] rounded-[8px] border border-[#E5E7EC] p-[12px] bg-[#FFFFFF] text-[16px] font-[400] text-[#7C8091] focus:outline-none"
                placeholder="Enter subtitle"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-[12px]">
                <label className="text-[16px] font-[500] text-[#111111]">
                  Genre *
                </label>
                <select className="w-full h-[52px] rounded-[8px] border border-[#E5E7EC] p-[12px] bg-[#FFFFFF] text-[16px] font-[400] text-[#7C8091] focus:outline-none">
                  <option value="">Select genre</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                </select>
              </div>

              <div className="flex flex-col gap-[12px]">
                <label className="text-[16px] font-[500] text-[#111111]">
                  Language *
                </label>
                <select className="w-full h-[52px] rounded-[8px] border border-[#E5E7EC] p-[12px] bg-[#FFFFFF] text-[16px] font-[400] text-[#7C8091] focus:outline-none">
                  <option value="">English</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="arabic">Arabic</option>
                  <option value="urdu">Urdu</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <label className="text-[16px] font-[500] text-[#111111]">
                Description *
              </label>
              <textarea
                className="h-[95px] w-full rounded-[8px] border border-[#E5E7EC] p-[12px] bg-[#FFFFFF] text-[16px] font-[400] text-[#7C8091] focus:outline-none"
                placeholder="Brief description of your book"
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <button
                type="button"
                onClick={onClose}
                className="h-[52px] w-[291px] rounded-[8px] border border-[#7C8091] py-[14px] px-[24px] text-[16px] font-[500] text-[#4A5568]"
              >
                Cancel
              </button>
              <OrangeButton onClick={onNext}>Next Step</OrangeButton>
            </div>
          </>
        ) : (
          <>
            <p className="text-[16px] font-[500] text-[#111111]">Book Type</p>
            <div className="grid grid-cols-2 gap-3 items-center">
              <div className="w-[289px] min-h-[100px] rounded-[12px] border-[2px] border-[#FF9600] bg-[#FF96000D] p-3 shadow-[0px_1px_10px_0px_#0000000D]">
                <svg
                  className="w-5 h-5 mb-1 text-[#FF9600]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 19.5V6a2 2 0 0 1 2-2h14v15.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M6 4v15.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 8h8" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                <p className="text-[14px] font-[500] text-[#111111]">Fiction</p>
                <p className="text-[12px] font-[400] text-[#6B7280]">
                  Novels, short stories, creative works
                </p>
              </div>

              <div className="w-[289px] h-[100px] rounded-[12px] border-[2px] border-[#E5E7EC] bg-[#FFFFFF] p-3 shadow-[0px_1px_10px_0px_#0000000D]">
                <svg
                  className="w-5 h-5 mb-1 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M7 7h10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 11h10" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                <p className="text-[14px] font-[500] text-[#111111]">
                  Non-Fiction
                </p>
                <p className="text-[12px] font-[400] text-[#6B7280]">
                  Memoirs, guides, informational
                </p>
              </div>

              <div className="w-[289px] h-[100px] rounded-[12px] border-[2px] border-[#E5E7EC] bg-[#FFFFFF] p-3 shadow-[0px_1px_10px_0px_#0000000D]">
                <svg
                  className="w-5 h-5 mb-1 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>

                <p className="text-[14px] font-[500] text-[#111111]">
                  Academic
                </p>
                <p className="text-[12px] font-[400] text-[#6B7280]">
                  Textbooks, research, scholarly
                </p>
              </div>

              <div className="w-[289px] h-[100px] rounded-[12px] border-[2px] border-[#E5E7EC] bg-[#FFFFFF] p-3 shadow-[0px_1px_10px_0px_#0000000D]">
                <svg
                  className="w-5 h-5 mb-1 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 2h9l3 3v17H6V2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 9h6M9 13h6M9 17h4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>

                <p className="text-[14px] font-[500] text-[#111111]">
                  Course Material
                </p>
                <p className="text-[12px] font-[400] text-[#6B7280]">
                  Lectures, lessons, curricula
                </p>
              </div>
            </div>

            <p className="text-[14px] font-[500] text-[#111111]">
              Target Audience
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="w-[289px] h-[64px] rounded-[12px] border-[2px] border-[#E5E7EC] bg-[#FFFFFF] p-3 shadow: 0px 1px 10px 0px #0000000D">
                <p className="text-[14px] font-[500] text-[#111111]">
                  Children
                </p>
                <p className="text-[12px] font-[400] text-[#7C8091]">
                  Ages 1-11
                </p>
              </div>
              <div className="w-[289px] h-[64px] rounded-[12px] border-[2px] border-[#E5E7EC] bg-[#FFFFFF] p-3 shadow: 0px 1px 10px 0px #0000000D">
                <p className="text-[14px] font-[500] text-[#111111]">Teens</p>
                <p className="text-[12px] font-[400] text-[#7C8091]">
                  Ages 12-18
                </p>
              </div>
              <div className="w-[289px] h-[64px] rounded-[12px] border-[2px] border-[#FF9600] bg-[#FF96000D] p-3 shadow: 0px 1px 10px 0px #0000000D">
                <p className="text-[14px] font-[500] text-[#111111]">Adults</p>
                <p className="text-[12px] font-[400] text-[#7C8091]">
                  Ages 18+
                </p>
              </div>
              <div className="w-[289px] h-[64px] rounded-[12px] border-[2px] border-[#E5E7EC] bg-[#FFFFFF] p-3 shadow: 0px 1px 10px 0px #0000000D">
                <p className="text-[14px] font-[500] text-[#111111]">
                  All Ages
                </p>
                <p className="text-[12px] font-[400] text-[#7C8091]">
                  Universal audience
                </p>
              </div>
            </div>

            <div className="flex gap-[20px]">
              <button
                type="button"
                onClick={onBack}
                className="h-[52px] w-[291px] rounded-[8px] border border-[#7C8091] py-[14px] px-[24px] text-[16px] font-[500] text-[#4A5568]"
              >
                Cancel
              </button>
              <OrangeButton onClick={onClose}>Create Book</OrangeButton>
            </div>
          </>
        )}
      </div>
    </Backdrop>
  );
};

export const UploadGuidelinesModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Backdrop>
      <div
        className="w-full max-w-[819px] bg-white p-[24px] shadow: 0px 5px 20px 0px #00000026;
flex flex-col gap-[16px]"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[24px] font-[600] text-[#111111]">
              Seekheed Upload Guidelines & Legal Advice
            </p>
            <p className="text-[16px] font-[400] text-[#7C8091]">
              Please review before publishing your content
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-[#8D95A6] hover:bg-[#F3F4F6]"
          >
            <IconClose className="h-4 w-4" />
          </button>
        </div>
        <div className="border border-[#E5E7EC] w-full"></div>

        <div className="h-[99px] items-center rounded-[8px] border border-[#FF9600] bg-[#FF96000D] p-3 flex ">
          <div className="flex gap-[8px]">
            <div className="text-[16px] font-[600] text-[#FF9600]">ⓘ</div>
            <div>
              <p className="text-[16px] font-[600] text-[#FF9600]">
                Important Notice
              </p>
              <p className="text-[12px] font-[400] text-[#FF9600]">
                By uploading content to Seekheed, you agree to our terms of
                service and confirm that you have the legal rights to publish
                this material.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[32px] text-[13px] text-[#394150]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              {/* Right Arrow SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-[18px] font-[500] text-[#111111]">
                Content Guidelines
              </p>
            </div>

            <div className="flex flex-col gap-[16px] text-[14px] font-[500] text-[#111111]">
              <div className="flex gap-[10px]">
                <div>
                  <span className="text-[#0F172A]">✓</span>
                </div>
                <div>
                  <p className="text-[12px] font-[400] text-[#7C8091]">
                    <span className="text-[14px] font-[500] text-[#111111]">
                      Original Content
                    </span>
                    <br />
                    Ensure content is original or you have proper licensing
                    rights
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <div>
                  <span className="text-[#0F172A]">✓</span>
                </div>
                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Quality Standards
                  </span>
                  <br />
                  Maintain professional writing standards with proper grammar
                  and formatting
                </div>
              </div>

              <div className="flex gap-[10px]">
                <div>
                  <span className="text-[#0F172A]">✓</span>
                </div>
                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Appropriate Content
                  </span>
                  <br />
                  Content must comply with community standards and local laws
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              {/* Cross with border SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#EF4444"
                  strokeWidth="2"
                />
                <path
                  d="M9 9l6 6M15 9l-6 6"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-[18px] font-[500] text-[#111111]">
                Prohibited Content
              </p>
            </div>
            <div className="flex flex-col gap-[16px] text-[14px] font-[500] text-[#111111]">
              <div className="flex gap-[10px]">
                <div>
                  <span className="text-[#F93430]">✕</span>
                </div>
                <div>
                  <p className="text-[12px] font-[400] text-[#7C8091]">
                    <span className="text-[14px] font-[500] text-[#111111]">
                      Plagiarized Material
                    </span>
                    <br />
                    Do not upload content copied from other sources without
                    permission
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <div>
                  <span className="text-[#F93430]">✕</span>
                </div>
                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Harmful Content
                  </span>
                  <br />
                  Content promoting violence, hate speech, or illegal activities
                  is strictly prohibited
                </div>
              </div>

              <div className="flex gap-[10px]">
                <div>
                  <span className="text-[#F93430]">✕</span>
                </div>
                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Misleading Information
                  </span>
                  <br />
                  False or deceptive content that could harm readers
                </div>
              </div>

              <div className="flex gap-[10px]">
                <div>
                  <span className="text-[#F93430]">✕</span>
                </div>
                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Copyright Infringement
                  </span>
                  <br />
                  Unauthorized use of copyrighted images, text, or other
                  materials
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              {/* Shield SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l7 4v6c0 5-3.4 9.4-7 10-3.6-.6-7-5-7-10V6l7-4z"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-5"
                  stroke="#22C55E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-[18px] font-[500] text-[#111111]">
                Legal Considerations
              </p>
            </div>

            <div className="flex flex-col gap-[16px] text-[14px] font-[500] text-[#111111]">
              <div className="flex gap-[10px]">
                <span className="text-[#FF9600] border border-[#FF9600] rounded-full w-5 h-5 flex items-center justify-center text-[12px]">
                  ✓
                </span>

                <div>
                  <p className="text-[12px] font-[400] text-[#7C8091]">
                    <span className="text-[14px] font-[500] text-[#111111]">
                      Copyright Ownership
                    </span>
                    <br />
                    You retain copyright of your original work. Seekheed
                    receives a non-exclusive license to distribute your content
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <span className="text-[#FF9600] border border-[#FF9600] rounded-full w-5 h-5 flex items-center justify-center text-[12px]">
                  ✓
                </span>

                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Attribution Requirements
                  </span>
                  <br />
                  Properly cite all sources, quotes, and references used in your
                  work
                </div>
              </div>

              <div className="flex gap-[10px]">
                <span className="text-[#FF9600] border border-[#FF9600] rounded-full w-5 h-5 flex items-center justify-center text-[12px]">
                  ✓
                </span>

                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Privacy & Consent
                  </span>
                  <br />
                  Obtain necessary permissions when featuring real people or
                  private information
                </div>
              </div>

              <div className="flex gap-[10px]">
                <span className="text-[#FF9600] border border-[#FF9600] rounded-full w-5 h-5 flex items-center justify-center text-[12px]">
                  ✓
                </span>

                <div className="text-[12px] font-[400] text-[#7C8091]">
                  <span className="text-[14px] font-[500] text-[#111111]">
                    Liability
                  </span>
                  <br />
                  Authors are responsible for the accuracy and legality of their
                  content
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[99px]  rounded-[8px] border border-[#F93430] bg-[#F934300D] py-[8px] px-[16px] flex items-center justify-center ">
          <div className="flex  gap-[10px] ">
            <div>⚠</div>
            <div>
              <p className="text-[16px] font-[600] text-[#F93430]">
                Review Process
              </p>
              <p className="text-[12px] font-[400] text-[#F93430]">
                All submissions undergo a review process to ensure compliance
                with our guidelines. Books may be removed if found to violate
                these terms.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-[12px] font-[400] text-[#7C8091]">
            <input type="checkbox" />I have read and agree to the upload
            guidelines and legal terms
          </label>
          <button
            onClick={onClose}
            className="w-[217px] h-[52px] rounded-[8px] py-[14px] bg-[#FF9600] px-[24px] text-[16px] font-[500] text-[#ffffff] cursor-pointer "
          >
            I Understand
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export const InviteMemberModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Backdrop>
      <div className="w-full max-w-[434px]  bg-[#FFFFFF] p-[24px] shadow-[0px 5px 20px 0px #00000026] flex flex-col gap-[16px];">
        <div className="flex items-center justify-between">
          <p className="text-[24px] font-[600] text-[#111111]">
            Invite Team Member
          </p>
          <button type="button" onClick={onClose} className="text-[#8D95A6]">
            <IconClose className="h-[24px] w-[24px]" />
          </button>
        </div>

        <div className="flex flex-col gap-[24px] my-[24px]">
          <div className="flex flex-col gap-[12px]">
            <label className="text-[16px] font-[500] text-[#111111]">
              Email Address
            </label>
            <input
              className="w-full h-[52px]  rounded-[8px] p-[12px] border border-[#E5E7EC] bg-[#FFFFFF]  text-[16px] font-[400] text-[#7C8091] focus:outline-none"
              placeholder="colleague@email.com"
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className="text-[16px] font-[500] text-[#111111]">
              Role
            </label>

            <div className="relative">
              <select className="w-full h-[52px] rounded-[8px] p-[12px] border border-[#E5E7EC] bg-[#FFFFFF] text-[16px] font-[400] text-[#7C8091] focus:outline-none appearance-none">
                <option>Co-Author</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>

              {/* Dropdown SVG */}
              <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#7C8091"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <label className="text-[16px] font-[500] text-[#111111]">
              Book Access
            </label>

            <div className="relative">
              <select className="w-full h-[52px] rounded-[8px] p-[12px] border border-[#E5E7EC] bg-[#FFFFFF] text-[16px] font-[400] text-[#7C8091] focus:outline-none appearance-none">
                <option>All Books</option>
                <option>Selected Books</option>
                <option>Limited Access</option>
              </select>

              {/* Dropdown SVG */}
              <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#7C8091"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-[20px]">
            <button
              type="button"
              onClick={onClose}
              className="h-[52px] w-[187px] rounded-[8px] py-[14px] px-[24px] border border-[#7C8091] text-[16px] font-[400] text-[#4A5568] flex items-center justify-center"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="h-[52px] w-[187px] bg-[#FF9600] rounded-[8px] py-[14px] px-[24px] text-[16px] font-[400] text-[#FFFFFF] flex items-center justify-center"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};
