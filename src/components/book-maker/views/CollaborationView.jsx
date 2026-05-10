import React from "react";
import { CardPanel, OrangeButton, PageHeader, TopStatCard } from "../Shared";
import { IconBooks, IconPen, IconPublish, IconUsers } from "../icons";

const team = [
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "co-author",
    status: "active",
    books: 3,
    joined: "15/01/2024",
  },
  {
    name: "Michael Chen",
    email: "michael.chen@email.com",
    role: "editor",
    status: "active",
    books: 5,
    joined: "20/02/2024",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    role: "reviewer",
    status: "active",
    books: 2,
    joined: "10/03/2024",
  },
  {
    name: "David Kim",
    email: "david.kim@email.com",
    role: "co-author",
    status: "pending",
    books: 1,
    joined: "25/03/2024",
  },
];

const invitations = [
  {
    email: "alex.brown@email.com",
    role: "Editor",
    book: "The Digital Revolution",
    date: "20/03/2024",
    status: "pending",
  },
  {
    email: "lisa.wang@email.com",
    role: "Reviewer",
    book: "Modern Education",
    date: "20/03/2024",
    status: "accepted",
  },
  {
    email: "james.miller@email.com",
    role: "Co-Author",
    book: "Science Simplified",
    date: "20/03/2024",
    status: "accepted",
  },
  {
    email: "alex.brown@email.com",
    role: "Editor",
    book: "The Digital Revolution",
    date: "20/03/2024",
    status: "declined",
  },
];

const CollaborationView = ({ tab, onTabChange, onOpenInvite }) => (
  <div className="flex flex-col gap-[32px]">
    <PageHeader
      title="Collaboration"
      subtitle="Manage co-authors, editors, and team members"
      action={
        <button
          onClick={onOpenInvite}
          className="h-[52px] w-[177px] rounded-[8px] py-[14px] bg-[#FF9600] px-[24px] text-[16px] font-[500] text-[#ffffff]"
        >
          + Invite Member
        </button>
      }
    />
    <div className="grid grid-cols-4 gap-3">
      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-[48px] h-[48px] rounded-[8px] bg-[#DBEAFE] flex items-center justify-center">
            {/* Users SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="7" r="4" stroke="#2563EB" strokeWidth="2" />
              <path
                d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-[24px] font-[700] text-[#111111]">12</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">Total Members</p>
        </div>
      </div>

      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-[48px] h-[48px] rounded-[8px] bg-[#DCFCE7] flex items-center justify-center">
            {/* Users SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="7" r="4" stroke="#2563EB" strokeWidth="2" />
              <path
                d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-[24px] font-[700] text-[#111111]">8</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">
            Active Members
          </p>
        </div>
      </div>

      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-[48px] h-[48px] rounded-[8px] bg-[#FEF9C3] flex items-center justify-center">
            {/* Users SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="7" r="4" stroke="#2563EB" strokeWidth="2" />
              <path
                d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-[24px] font-[700] text-[#111111]">4</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">
            Pending Invites
          </p>
        </div>
      </div>

      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-[48px] h-[48px] rounded-[8px] bg-[#F3E8FF] flex items-center justify-center">
            {/* Users SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="7" r="4" stroke="#2563EB" strokeWidth="2" />
              <path
                d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-[24px] font-[700] text-[#111111]">7</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">Shared Books</p>
        </div>
      </div>
    </div>

    <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EC] shadow-[0px_3px_20px_0px_#0000000D] flex flex-col gap-[24px]">
      <div className="h-[65px] flex items-center flex gap-2 border-b border-[#E5E7EC] p-2">
        {[
          ["team", "Team Members"],
          ["invites", "Invitations"],
          ["permissions", "Permissions"],
        ].map(([id, label]) => (
          <button
            type="button"
            key={id}
            onClick={() => onTabChange(id)}
            className={`px-[10px] h-[48px] rounded-[8px] min-w-[150px] text-[15px] font-[600] ${
              tab === id
                ? "bg-[#FF9600] text-white"
                : "text-[#7C8091]"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <span>
                {id === "team" ? "👥" : id === "invites" ? "✉" : "🛡"}
              </span>
              {label}
            </span>
          </button>
        ))}
      </div>

      {tab === "team" && (
        <div className="p-[24px] pt-0 flex flex-col gap-[16px]">
          {team.map((member) => (
            <div
              key={member.email}
              className="h-[106px] grid grid-cols-[2.6fr_0.6fr_0.6fr_40px] items-center rounded-[8px] border border-[#E5E7EC] px-[20px]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${member.name}/100/100`}
                  alt={member.name}
                  className="h-[56px] w-[56px] rounded-full object-cover"
                />
                <div>
                  <p className="text-[15px] font-[600] text-[#111111]">
                    {member.name}
                  </p>
                  <p className="text-[13px] font-[400] text-[#7C8091]">{member.email}</p>
                  <div className="mt-1 flex gap-1 text-[10px]">
                    <span className="h-[24px] rounded-full bg-[#DBEAFE] flex items-center justify-center w-[70px] text-[11px] font-[600] text-[#1D4ED8]">
                      {member.role}
                    </span>
                    <span className="h-[24px] rounded-full bg-[#DCFCE7] flex items-center justify-center min-w-[47px] text-[11px] font-[600] text-[#15803D] px-[8px]">
                      {member.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[12px] font-[400] text-[#7C8091]">
                Books Access
                <br />
                <span className=" text-[16px] font-[600] text-[#111111]">{member.books}</span>
              </div>
              <div className="text-[12px] font-[400] text-[#7C8091]">
                Joined
                <br />
                <span className=" text-[14px] font-[600] text-[#111111]">{member.joined}</span>
              </div>
              <button type="button" className="text-[#7C8091]">
                🗑
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === "invites" && (
        <div className="p-[24px] pt-0 flex flex-col gap-[16px]">
          {invitations.map((item, idx) => (
            <div
              key={`${item.email}-${idx}`}
              className="h-[106px] flex items-center justify-between rounded-[8px] border border-[#E5E7EC] px-4 py-3"
            >
              <div className="flex flex-col gap-[2px]">
                <p className="text-[16px] font-[600] text-[#111111]">
                  {item.email}
                </p>
                <p className="text-[14px] font-[400] text-[#4A5568]">
                  Invited as <span className="font-medium">{item.role}</span>{" "}
                  for {item.book}
                </p>
                <p className="text-[12px] font-[400] text-[#7C8091]">
                  Sent on {item.date}
                </p>
              </div>
              {item.status === "pending" && (
                <div className="flex items-center gap-[6px]">
                  <span className="h-[36px] w-[99px] rounded-[8px] bg-[#FF960026] text-[15px] font-[600] text-[#FF9600] flex items-center justify-center">
                    Pending
                  </span>
                  <button
                    type="button"
                    className="w-[99px] h-[36px] rounded-[8px] text-[15px] font-[600] text-[#F93430]"
                  >
                    Cancel
                  </button>
                </div>
              )}
              {item.status === "accepted" && (
                <span className="h-[36px] w-[99px] rounded-[8px] bg-[#FF9600] text-[15px] font-[600] text-[#FFFFFF] flex items-center justify-center">
                  accepted
                </span>
              )}
              {item.status === "declined" && (
                <span className="h-[36px] w-[99px] rounded-[8px] bg-[#F934301A] text-[15px] font-[600] text-[#F93430] flex items-center justify-center">
                  declined
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === "permissions" && (
        <div className="flex flex-col gap-[12px] p-[24px] pt-0">
          <p className="text-[15px] font-[600] text-[#000000]">
            Role Permissions
          </p>

          {[
            {
              role: "Owner",
              subtitle: "Full access to all features",
              left: ["Full access to all features", "sent on 20/03/2024"],
              right: ["Manage Team", "Financial Access"],
              badge: "Full Control",
              badgeClass: "bg-[#F3E8FF] text-[#9333EA]",
            },
            {
              role: "Co-Author",
              subtitle: "Can write and edit content",
              left: ["Write Content", "Add Comments"],
              right: ["Edit Chapters", "Publish Books"],
              badge: "Write Access",
              badgeClass: "bg-[#FEF9C3] text-[#CA8A04]",
            },
            {
              role: "Editor",
              subtitle: "Can review and suggest changes",
              left: ["Suggest Edits", "Track Changes"],
              right: ["Add Comments", "Delete Content"],
              badge: "Edit Access",
              badgeClass: "bg-[#FF960026] text-[#FF9600]",
            },
            {
              role: "Reviewer",
              subtitle: "Can view and comment only",
              left: ["View Content", "Edit Content"],
              right: ["Add Comments", "Delete Content"],
              badge: "View Access",
              badgeClass: "bg-[#FFEDD5] text-[#C2410C]",
            },
          ].map((item) => (
            <div
              key={item.role}
              className="h-[138px] gap-[12px] flex flex-col justify-center rounded-[8px] border border-[#E5E7EC] p-[20px]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[16px] font-[600] text-[#111111]">
                    {item.role}
                  </p>
                  <p className="text-[14px] font-[400] text-[#4A5568]">{item.subtitle}</p>
                </div>
                <span
                  className={`h-[36px] w-[121px] rounded-[8px] flex items-center justify-center text-[15px] font-[600]  ${item.badgeClass}`}
                >
                  {item.badge}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 text-[12px]">
                <div className="space-y-1">
                  <p className="text-[#7C8091] text-[14px] font-[400]  flex gap-[8px]">
                    <span className="text-[#FF9600]">✓</span>
                    {item.left[0]}
                  </p>
                  <p className="text-[#7C8091] text-[14px] font-[400]  flex gap-[8px]">
                    <span
                      className={` ${item.role === "Reviewer" ? "text-[#EF4444]" : "text-[#F59E0B]"}`}
                    >
                      {item.role === "Reviewer" ? "✕" : "✓"}
                    </span>
                    {item.left[1]}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[#7C8091] text-[14px] font-[400]  flex gap-[8px]">
                    <span className="text-[#FF9600]">✓</span>
                    {item.right[0]}
                  </p>
                  <p className="text-[#7C8091] text-[14px] font-[400] flex gap-[8px]">
                    <span className="text-[#FF9600]">✕</span>
                    {item.right[1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default CollaborationView;
