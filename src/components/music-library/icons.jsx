const Base = ({ children, className = 'h-4 w-4' }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' className={className}>
    {children}
  </svg>
)

export const IconMusic = ({ className }) => <Base className={className}><path d='M9 18V5l11-2v13' /><circle cx='6' cy='18' r='3' /><circle cx='17' cy='16' r='3' /></Base>
export const IconClock = ({ className }) => <Base className={className}><circle cx='12' cy='12' r='9' /><path d='M12 7v6l4 2' /></Base>
export const IconHeart = ({ className }) => <Base className={className}><path d='M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.3A4 4 0 0 1 19 10c0 5.7-7 10-7 10z' /></Base>
export const IconShare = ({ className }) => <Base className={className}><circle cx='18' cy='5' r='2' /><circle cx='6' cy='12' r='2' /><circle cx='18' cy='19' r='2' /><path d='M8 12l8-6M8 12l8 6' /></Base>
export const IconMore = ({ className }) => <Base className={className}><circle cx='12' cy='5' r='1.2' /><circle cx='12' cy='12' r='1.2' /><circle cx='12' cy='19' r='1.2' /></Base>
export const IconSearch = ({ className }) => <Base className={className}><circle cx='11' cy='11' r='7' /><path d='m20 20-3.5-3.5' /></Base>
export const IconUpload = ({ className }) => <Base className={className}><path d='M12 16V5M8 9l4-4 4 4M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2' /></Base>
export const IconPlay = ({ className }) => <Base className={className}><path d='m8 6 10 6-10 6z' /></Base>
export const IconPause = ({ className }) => <Base className={className}><path d='M9 6v12M15 6v12' /></Base>
export const IconBack = ({ className }) => <Base className={className}><path d='M15 18 9 12l6-6' /></Base>
export const IconForward = ({ className }) => <Base className={className}><path d='m9 18 6-6-6-6' /></Base>
export const IconRadio = ({ className }) => <Base className={className}><path d='M3 10h18v10H3zM7 10l8-6M7 16h5' /><circle cx='17' cy='15' r='1.5' /></Base>
export const IconList = ({ className }) => <Base className={className}><path d='M8 6h12M8 12h12M8 18h12' /><circle cx='4' cy='6' r='1' /><circle cx='4' cy='12' r='1' /><circle cx='4' cy='18' r='1' /></Base>
export const IconStar = ({ className }) => <Base className={className}><path d='m12 3 2.8 5.6 6.2.9-4.5 4.4 1.1 6.2L12 17l-5.6 3 1.1-6.2L3 9.5l6.2-.9z' /></Base>
export const IconWallet = ({ className }) => <Base className={className}><path d='M3 7h17a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3z' /><path d='M3 7V6a2 2 0 0 1 2-2h13' /><circle cx='17' cy='12' r='1' /></Base>
export const IconScale = ({ className }) => <Base className={className}><path d='M12 4v14M7 8h10M5 20h14M7 8l-3 5h6l-3-5zm10 0-3 5h6l-3-5z' /></Base>
export const IconMegaphone = ({ className }) => <Base className={className}><path d='M3 11v2a2 2 0 0 0 2 2h2l5 3V6L7 9H5a2 2 0 0 0-2 2zM14 8a5 5 0 0 1 0 8' /></Base>
export const IconFile = ({ className }) => <Base className={className}><path d='M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6' /></Base>
export const IconChevronDown = ({ className }) => <Base className={className}><path d='m6 9 6 6 6-6' /></Base>
