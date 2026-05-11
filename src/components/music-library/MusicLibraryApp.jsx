import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './music-library.css'
import {
  IconBack,
  IconChevronDown,
  IconClock,
  IconForward,
  IconHeart,
  IconList,
  IconMegaphone,
  IconMore,
  IconMusic,
  IconPlay,
  IconRadio,
  IconSearch,
  IconShare,
  IconStar,
} from './icons'
import { gradingLeaderboard, librarySongs, liveEvents, media, sidebarPlaylists, standards } from '../../data/music-library/data'

const img = (src, alt) => <img src={src} alt={alt} className='ml-image' />
const badge = 'rounded-full bg-[#F8E6CB] px-2 py-0.5 text-[10px] text-[#E78E09]'

const MusicLibraryApp = () => {
  const { tab } = useParams()
  const navigate = useNavigate()
  const leftNav = tab || 'library'
  const [quick, setQuick] = useState('none')
  const [hubTab, setHubTab] = useState('monetize')
  const [sub, setSub] = useState('featured')
  const [listFilter, setListFilter] = useState('trending')
  const [showSongModal, setShowSongModal] = useState(false)
  const [uploadType, setUploadType] = useState('song')
  const [showGoLiveModal, setShowGoLiveModal] = useState(false)
  const [showPromoteModal, setShowPromoteModal] = useState(false)
  const [showNftModal, setShowNftModal] = useState(false)
  const [showAlbumModal, setShowAlbumModal] = useState(false)
  const [showActionMenu, setShowActionMenu] = useState(false)
  const [showPlaylistModal, setShowPlaylistModal] = useState(false)
  const [playlistStep, setPlaylistStep] = useState(1)

  const inHub = quick === 'hub'

  return (
    <div className='ml-page'>
      <div className='ml-shell'>
        <Sidebar
          leftNav={leftNav}
          onNavChange={(key) => { setQuick('none'); navigate(`/music-library/${key}`); }}
          quick={quick}
          setQuick={setQuick}
          setHubTab={setHubTab}
        />
        <main>
          {quick === 'promo' && <PromotionHub onOpenUpload={() => setShowSongModal(true)} onGoHub={() => setQuick('hub')} />}
          {quick === 'radio' && <RadioPage onOpenUpload={() => setShowSongModal(true)} onGoHub={() => setQuick('hub')} />}
          {(quick === 'none' || quick === 'hub') && (
            <>
              <Header
                inHub={inHub}
                onBack={() => setQuick('none')}
                onOpenUpload={() => setShowSongModal(true)}
                onGoHub={() => {
                  setQuick('hub')
                  setHubTab('monetize')
                }}
              />
              {!inHub && (
                <LibraryContent
                  leftNav={leftNav}
                  listFilter={listFilter}
                  setListFilter={setListFilter}
                  onMoreClick={() => setShowActionMenu(true)}
                />
              )}
              {inHub && (
                <HubContent
                  tab={hubTab}
                  setTab={(nextTab) => {
                    setHubTab(nextTab)
                    setSub(nextTab === 'grading' ? 'track' : 'featured')
                  }}
                  sub={sub}
                  setSub={setSub}
                  onGoLive={() => setShowGoLiveModal(true)}
                  onPromote={() => setShowPromoteModal(true)}
                  onCreateNft={() => setShowNftModal(true)}
                  onUploadAlbum={() => setShowAlbumModal(true)}
                />
              )}
            </>
          )}
          {quick === 'none' && <BottomPlayer />}
        </main>
      </div>

      {showSongModal && <UploadMusicModal type={uploadType} setType={setUploadType} onClose={() => setShowSongModal(false)} />}
      {showGoLiveModal && <GoLiveModal onClose={() => setShowGoLiveModal(false)} />}
      {showPromoteModal && <PromoteModal onClose={() => setShowPromoteModal(false)} />}
      {showNftModal && <CreateNftModal onClose={() => setShowNftModal(false)} />}
      {showAlbumModal && <UploadAlbumModal onClose={() => setShowAlbumModal(false)} />}
      {showActionMenu && (
        <ActionMenu
          onClose={() => setShowActionMenu(false)}
          onAddPlaylist={() => {
            setShowActionMenu(false)
            setPlaylistStep(1)
            setShowPlaylistModal(true)
          }}
        />
      )}
      {showPlaylistModal && (
        <PlaylistModal
          step={playlistStep}
          onClose={() => setShowPlaylistModal(false)}
          onNext={() => setPlaylistStep(2)}
        />
      )}
    </div>
  )
}

const Sidebar = ({ leftNav, onNavChange, quick, setQuick, setHubTab }) => (
  <aside className='ml-card p-4'>
    <h2 className='ml-sidebar-title'>Seekheed Music</h2>
    <div className='mt-3 space-y-1'>
      {[
        ['library', 'My Library', IconMusic],
        ['recent', 'Recently Played', IconClock],
        ['favorites', 'Favorites', IconHeart],
      ].map(([key, label, I]) => (
        <button
          key={key}
          className={`ml-side-link ${leftNav === key && quick === 'none' ? 'active' : ''}`}
          onClick={() => onNavChange(key)}
          type='button'
        >
          <I className='h-3.5 w-3.5' />
          {label}
        </button>
      ))}
    </div>
    <div className='my-4 border-t border-[#e6e9ef]' />
    <p className='mb-2 text-xs text-[#697287]'>Quick Access</p>
    <button type='button' className={`ml-side-link ${quick === 'promo' ? 'active' : ''}`} onClick={() => setQuick('promo')}>
      <IconMegaphone className='h-3.5 w-3.5' />
      Promotion Hub
    </button>
    <button
      type='button'
      className={`ml-side-link ${quick === 'radio' ? 'active' : ''}`}
      onClick={() => {
        setQuick('hub')
        setHubTab('monetize')
      }}
    >
      <IconRadio className='h-3.5 w-3.5' />
      Seekheed Radio
    </button>
    <div className='my-4 border-t border-[#e6e9ef]' />
    <div className='mb-2 flex items-center justify-between text-xs text-[#697287]'>
      <span>PLAYLISTS</span>
      <span>+</span>
    </div>
    <div className='space-y-1'>
      {sidebarPlaylists.map((p) => (
        <button key={p} type='button' className='ml-side-link'>
          <IconList className='h-3.5 w-3.5' />
          {p}
        </button>
      ))}
    </div>
  </aside>
)

const Header = ({ inHub, onBack, onOpenUpload, onGoHub }) => (
  <header className='mb-3 flex items-start justify-between'>
    <div>
      {inHub && <button onClick={onBack} type='button' className='mb-1 flex items-center gap-1 text-xs text-[#2f3748]'><IconBack className='h-3.5 w-3.5' />Back to Player</button>}
      <h1 className='text-[38px] font-semibold leading-tight text-[#151c2a]'>{inHub ? 'Music Hub' : 'My Music Library'}</h1>
      <p className='text-[11px] text-[#8f96a5]'>{inHub ? 'Monetize, promote, and manage your music career on Seekheed' : '12 songs available'}</p>
    </div>
    <div className='flex gap-2'>
      {!inHub && <button type='button' onClick={onGoHub} className='h-9 rounded-md border border-[#ff9800] px-3 text-xs text-[#ff9800]'>Music Hub</button>}
      <button type='button' onClick={onOpenUpload} className='h-9 rounded-md bg-[#ff9800] px-3 text-xs text-white'>Upload Music</button>
    </div>
  </header>
)

const LibraryContent = ({ leftNav, listFilter, setListFilter, onMoreClick }) => (
  <>
    <div className='mb-3 ml-card flex h-10 items-center gap-2 px-3 text-xs text-[#9aa2b2]'><IconSearch className='h-3.5 w-3.5' />Search for songs, artists, or albums...</div>
    {leftNav === 'library' && (
      <div className='mb-2 flex gap-2'>
        <button type='button' className={`ml-tab ${listFilter === 'trending' ? 'active' : ''}`} onClick={() => setListFilter('trending')}>
          Trending
        </button>
        <button type='button' className={`ml-tab ${listFilter === 'recent' ? 'active' : ''}`} onClick={() => setListFilter('recent')}>
          Recently Added
        </button>
      </div>
    )}
    <div className='ml-card overflow-hidden'>
      {leftNav !== 'recent' ? (
        <table className='w-full text-left text-xs'>
          <thead className='bg-[#f4f6fa] text-[#80889a]'><tr><th className='px-3 py-2'>Title</th><th>Album</th><th>Genre</th><th>Plays</th><th>Duration</th><th className='pr-3 text-right'>Action</th></tr></thead>
          <tbody>
            {librarySongs.map((s) => (
              <tr key={s.id} className='border-t border-[#e7eaf0]'>
                <td className='px-3 py-2'><div className='flex items-center gap-2'><div className='h-7 w-7 overflow-hidden rounded'>{img(s.image, s.title)}</div><div><p className='text-xs font-medium'>{s.title}</p><p className='text-[10px] text-[#8d93a0]'>{s.artist}</p></div></div></td>
                <td>{s.album}</td><td><span className={badge}>{s.genre}</span></td><td>{s.plays}</td><td>{s.duration}</td>
                <td className='pr-3'>
                  <div className='flex justify-end gap-3 text-[#4a5568]'>
                    <IconHeart className={`h-3.5 w-3.5 ${leftNav === 'favorites' ? 'fill-[#ff9800] text-[#ff9800]' : ''}`} />
                    <IconShare className='h-3.5 w-3.5' />
                    <button type='button' onClick={onMoreClick}>
                      <IconMore className='h-3.5 w-3.5' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='space-y-2 p-3'>
          {['Today', 'Yesterday'].map((g) => (
            <div key={g}>
              <p className='mb-1 text-xs font-semibold'>{g}</p>
              {librarySongs.slice(0, g === 'Today' ? 2 : 5).map((s) => (
                <div key={`${g}${s.id}`} className='mb-1 grid grid-cols-[1.4fr_0.8fr_0.8fr_0.4fr_0.35fr] items-center gap-2 rounded border border-[#e7eaf0] px-2 py-1.5 text-xs'>
                  <div className='flex items-center gap-2'><div className='h-7 w-7 overflow-hidden rounded'>{img(s.image, s.title)}</div><div><p>{s.title}</p><p className='text-[10px] text-[#8d93a0]'>{s.artist}</p></div></div>
                  <p className='text-[#8d93a0] flex items-center gap-1'><IconClock className='h-3 w-3' />2 hours ago</p>
                  <p className='text-[#8d93a0]'>12,543 plays</p>
                  <p>3:45</p>
                  <div className='flex items-center gap-2 justify-end'><IconHeart className='h-3.5 w-3.5' /><button type='button' onClick={onMoreClick}><IconMore className='h-3.5 w-3.5' /></button></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  </>
)

const HubContent = ({ tab, setTab, sub, setSub, onGoLive, onPromote, onCreateNft, onUploadAlbum }) => (
  <>
    <div className='ml-card mb-3 flex flex-wrap gap-1 p-1'>
      {['monetize', 'news', 'nft', 'albums', 'grading', 'promote', 'live', 'guidelines', 'legal'].map((t) => (
        <button
          key={t}
          type='button'
          onClick={() => {
            setTab(t)
            setSub(t === 'grading' ? 'track' : 'featured')
          }}
          className={`ml-tab ${tab === t ? 'active' : ''}`}
        >
          {t === 'news' ? 'News & Updates' : t[0].toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
    {tab === 'monetize' && <Monetize sub={sub} setSub={setSub} />}
    {tab === 'news' && <NewsHub />}
    {tab === 'nft' && <NftHub onCreateNft={onCreateNft} />}
    {tab === 'albums' && <AlbumsHub onUploadAlbum={onUploadAlbum} />}
    {tab === 'grading' && <GradingHub sub={sub} setSub={setSub} />}
    {tab === 'promote' && <PromoteHub sub={sub} setSub={setSub} onGoLive={onGoLive} onPromote={onPromote} />}
    {tab === 'live' && <LiveHub onGoLive={onGoLive} />}
    {tab === 'guidelines' && <GuidelinesHub />}
    {tab === 'legal' && <LegalHub />}
  </>
)

const Monetize = ({ sub, setSub }) => (
  <div className='grid grid-cols-2 gap-3'>
    <section className='ml-card p-3'>
      <h3 className='mb-2 text-[14px] font-semibold'>Support Artists</h3>
      <div className='mb-2 grid grid-cols-2 rounded border border-[#e5e7ec] p-1 gap-1'>
        <button type='button' className={`h-8 rounded text-[12px] ${sub === 'purchase' ? 'bg-[#ff9800] text-white' : 'text-[#8d93a0]'}`} onClick={() => setSub('purchase')}>Purchase</button>
        <button type='button' className={`h-8 rounded text-[12px] ${sub === 'donate' ? 'bg-[#ff9800] text-white' : 'text-[#8d93a0]'}`} onClick={() => setSub('donate')}>Donate/Tip</button>
      </div>
      {sub === 'donate' ? (
        <div className='rounded bg-[#f6f7fa] p-4 text-center text-xs text-[#6f7890]'>Support your favorite artists</div>
      ) : (
        <div className='space-y-2'>
          {librarySongs.slice(0, 3).map((s, idx) => (
            <div key={s.id} className='rounded border border-[#e7eaf0] p-2 text-xs'>
              <div className='flex items-start justify-between'>
                <div>
                  <p>{s.title}</p>
                  <p className='text-[10px] text-[#8d93a0]'>{s.artist}</p>
                </div>
                <p>${idx === 0 ? '2.99' : idx === 1 ? '12.99' : '9.99'}</p>
              </div>
              <div className='mt-1 flex items-center justify-between'>
                <span className='rounded-full bg-[#eef1f7] px-2 py-0.5 text-[10px]'>{idx === 0 ? 'Single' : 'Album'}</span>
                <button type='button' className='h-6 rounded bg-[#ff9800] px-2 text-[10px] text-white'>Buy</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
    <MonetizePromotion />
  </div>
)

const MonetizePromotion = () => {
  const [promoTab, setPromoTab] = useState('featured')
  return (
    <section className='ml-card p-3'>
      <div className='mb-2 flex items-center justify-between'>
        <h3 className='text-[14px] font-semibold'>Artist Promotion</h3>
        <button type='button' className='ml-tab active'>Promote Your Music</button>
      </div>
      <div className='mb-2 grid grid-cols-3 gap-1'>
        {['featured', 'highlights', 'upcoming'].map((tab) => (
          <button key={tab} type='button' onClick={() => setPromoTab(tab)} className={`ml-tab ${promoTab === tab ? 'active' : ''}`}>
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {promoTab === 'featured' && (
        <div className='space-y-2'>
          {librarySongs.slice(0, 2).map((s) => (
            <div key={s.id} className='rounded border border-[#bde7ab] p-2 text-xs'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <div className='h-9 w-9 overflow-hidden rounded'>{img(s.image, s.title)}</div>
                  <div><span className={badge}>Coming Soon</span><p>{s.title}</p><p className='text-[10px] text-[#8d93a0]'>{s.artist}</p></div>
                </div>
                <div className='text-right'><p>Dec 15, 202</p><button type='button' className='mt-1 rounded border border-[#ff9800] px-2 py-0.5 text-[10px] text-[#ff9800]'>Pre-Save</button></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {promoTab === 'highlights' && <div className='h-40 overflow-hidden rounded'>{img(media.heroArtist, 'highlight')}</div>}
      {promoTab === 'upcoming' && <div className='flex h-40 items-center justify-center rounded border border-[#e7eaf0] bg-[#f6f7fa] text-xs text-[#6f7890]'>No upcoming promotions</div>}
    </section>
  )
}

const NewsHub = () => {
  const [newsTab, setNewsTab] = useState('news')
  return (
    <section className='ml-card p-3 text-xs'>
      <h3 className='mb-2 text-[14px] font-semibold'>Music Hub</h3>
      <div className='mb-2 grid grid-cols-4 gap-1'>
        {[
          ['news', 'News'],
          ['stories', 'Top Stories'],
          ['videos', 'Videos'],
          ['trending', 'Tending'],
        ].map(([id, label]) => (
          <button key={id} type='button' className={`ml-tab ${newsTab === id ? 'active' : ''}`} onClick={() => setNewsTab(id)}>
            {label}
          </button>
        ))}
      </div>

      {newsTab === 'news' && (
        <>
          {librarySongs.slice(0, 3).map((s, idx) => (
            <div key={s.id} className='mb-2 rounded border border-[#e7eaf0] p-2'>
              <div className='flex gap-2'>
                <div className='h-10 w-14 overflow-hidden rounded'>{img(s.image, s.title)}</div>
                <div>
                  <span className={badge}>{idx === 0 ? 'Platform Update' : idx === 1 ? 'Featured' : 'Education'}</span>
                  <p className='font-medium'>{idx === 0 ? 'New Feature: AI-Powered Music Recommendations' : idx === 1 ? 'Artist Spotlight: Rising Stars of 2024' : 'Music Production Tips from Industry Experts'}</p>
                  <p className='text-[10px] text-[#8d93a0]'>{idx === 0 ? 'Seekheed introduces personalized music discovery powered by advanced AI algorithms.' : idx === 1 ? 'Meet the breakthrough artists making waves in the Seekheed community.' : 'Learn the secrets behind professional-quality music production.'}</p>
                  <p className='text-[10px] text-[#8d93a0]'>{idx === 0 ? '2h ago' : idx === 1 ? '1 day ago' : '3 days ago'}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {newsTab === 'stories' && (
        <div className='h-56 overflow-hidden rounded border border-[#e7eaf0]'>{img(media.heroPurple, 'top story')}</div>
      )}
      {newsTab === 'videos' && (
        <div className='space-y-2'>
          {['Behind the Scenes', 'Live Performance Highlights', 'Music Production Masterclass'].map((v) => (
            <div key={v} className='flex items-center justify-between rounded border border-[#e7eaf0] p-2'>
              <div className='flex items-center gap-2'>
                <button type='button' className='h-7 w-7 rounded bg-[#ff9800] text-white'>
                  <IconPlay className='mx-auto h-4 w-4' />
                </button>
                <div><p>{v}</p><p className='text-[10px] text-[#8d93a0]'>Luna Wave</p></div>
              </div>
              <p className='font-semibold'>15K views</p>
            </div>
          ))}
        </div>
      )}
      {newsTab === 'trending' && (
        <div className='space-y-2'>
          {['#1#SeekheedRising', '#2#NewMusicFriday', '#3#IndieArtists', '#4#MusicProduction'].map((tag) => (
            <div key={tag} className='flex items-center justify-between rounded border border-[#e7eaf0] p-2'>
              <span>{tag}</span>
              <span className='rounded-full bg-[#edf1f7] px-2 py-0.5 text-[10px]'>1.2K posts</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

const NftHub = ({ onCreateNft }) => {
  const [nftTab, setNftTab] = useState('browse')
  return (
    <section className='ml-card p-3 text-xs'>
      <div className='mb-2 flex justify-between'>
        <h3 className='text-[14px] font-semibold'>NFT Marketplace</h3>
        <button type='button' className='ml-tab active' onClick={onCreateNft}>+ Create NFT</button>
      </div>
      <div className='mb-2 grid grid-cols-2 gap-1'>
        <button type='button' className={`ml-tab ${nftTab === 'browse' ? 'active' : ''}`} onClick={() => setNftTab('browse')}>
          Browse
        </button>
        <button type='button' className={`ml-tab ${nftTab === 'my' ? 'active' : ''}`} onClick={() => setNftTab('my')}>
          My NFTs
        </button>
      </div>
      {nftTab === 'browse' ? (
        <div className='grid grid-cols-3 gap-2'>
          {[media.abstractOne, media.abstractTwo, media.abstractThree].map((m, i) => (
            <div key={m} className='rounded border border-[#e7eaf0] p-1'>
              <div className='h-28 overflow-hidden rounded'>{img(m, 'nft')}</div>
              <span className={badge}>{['Music', 'Artwork', 'Album'][i]}</span>
              <p className='mt-1 text-xs'>{['Cosmic Beats #001', 'Neon Dreams Cover Art', 'Exclusive Album Drop'][i]}</p>
              <p className='text-[10px] text-[#8d93a0]'>{['Luna Wave', 'Digital Canvas', 'The Smooth Collective'][i]}</p>
              <div className='mt-1 flex justify-between text-[10px]'><span className='font-semibold text-[#e78e09]'>{['0.5 ETH', '0.25 ETH', '1.2 ETH'][i]}</span><span className='text-[#8d93a0]'>1 of 10</span></div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex h-44 flex-col items-center justify-center rounded border border-[#e7eaf0] bg-[#f6f7fa] text-center'>
          <p className='mb-1 text-sm font-semibold'>Connect your wallet to view your NFTs</p>
          <button type='button' className='h-8 rounded bg-[#ff9800] px-3 text-white'>Connect Wallet</button>
        </div>
      )}
    </section>
  )
}

const AlbumsHub = ({ onUploadAlbum }) => (
  <section className='ml-card p-3 text-xs'>
    <div className='mb-2 flex justify-between'>
      <h3 className='text-[14px] font-semibold'>Albums & Artwork</h3>
      <button type='button' className='ml-tab active' onClick={onUploadAlbum}>+ Upload Album</button>
    </div>
    {librarySongs.slice(0, 2).map((s) => (
      <div key={s.id} className='mb-2 flex items-center justify-between rounded border border-[#e7eaf0] p-2'>
        <div className='flex items-center gap-2'><div className='h-9 w-9 overflow-hidden rounded'>{img(s.image, s.title)}</div><div><p>{s.title}</p><p className='text-[10px] text-[#8d93a0]'>{s.artist}</p></div></div>
        <span className='rounded-full bg-[#eef1f7] px-2 py-0.5 text-[10px]'>12 tracks</span>
      </div>
    ))}
  </section>
)

const GradingHub = ({ sub, setSub }) => (
  <section className='ml-card p-3 text-xs'>
    <h3 className='mb-2 flex items-center gap-1 text-[14px] font-semibold'><IconStar className='h-3.5 w-3.5 text-[#ff9800]' />Music Grading System</h3>
    <div className='mb-2 grid grid-cols-3 gap-1'>
      <button type='button' className={`ml-tab ${sub === 'track' ? 'active' : ''}`} onClick={() => setSub('track')}>Grade Track</button>
      <button type='button' className={`ml-tab ${sub === 'leaderboard' ? 'active' : ''}`} onClick={() => setSub('leaderboard')}>Leaderboard</button>
      <button type='button' className={`ml-tab ${sub === 'standards' ? 'active' : ''}`} onClick={() => setSub('standards')}>Standards</button>
    </div>
    {sub === 'leaderboard' && <div className='space-y-2'>{gradingLeaderboard.map((l) => <div key={l.rank} className='flex items-center justify-between rounded border border-[#e7eaf0] p-2'><div className='flex items-center gap-2'><span className='h-5 w-5 rounded-full bg-[#eceff4] text-center leading-5'>{l.rank}</span><div><p>{l.title}</p><p className='text-[10px] text-[#8d93a0]'>{l.artist}</p></div></div><div className='flex items-center gap-2'><span className='text-[#ff9800]'>{l.grade}</span><span><IconStar className='h-3.5 w-3.5 text-[#ff9800]' /></span>{l.score}</div></div>)}</div>}
    {sub === 'standards' && <><div className='mb-2 grid grid-cols-3 gap-2'>{standards.map((s) => <div key={s.grade} className='rounded border border-[#e7eaf0] bg-[#f6f7fa] p-2 text-center'><p className='text-[20px] font-semibold text-[#ff9800]'>{s.grade}</p><p className='text-[11px]'>{s.label}</p><p className='text-[10px] text-[#8d93a0]'>{s.range}</p></div>)}</div><p className='font-semibold mb-1'>Criteria Weights</p>{['Delivery', 'Originality', 'Creativity', 'Production Quality', 'Lyricism'].map((i, idx) => <div key={i} className='mb-1 grid grid-cols-[180px_1fr_26px] items-center gap-2'><span>{i}</span><div className='h-1 rounded-full bg-[#bde9bf]'><div className='h-1 rounded-full bg-[#ff9800]' style={{ width: `${40 + idx * 8}%` }} /></div><span>{10 + idx}%</span></div>)}</>}
    {sub === 'track' && <><div className='mb-2 rounded border border-[#e7eaf0] bg-[#f6f7fa] p-3 text-center'><p className='text-[28px] font-semibold text-[#ff9800]'>0.0</p><p className='text-[10px] text-[#8d93a0]'>Overall Score</p><p className='text-[20px] font-semibold text-[#ff9800]'>F</p></div>{['Delivery', 'Originality', 'Production', 'Creativity', 'Lyricism'].map((i, idx) => <div key={i} className='mb-2'><div className='mb-0.5 flex justify-between'><p>{i}</p><p className='text-[#8d93a0]'>{idx === 0 ? '30%' : '10%'}</p></div><div className='h-1.5 rounded-full bg-[#bde9bf]'><div className='h-1.5 rounded-full bg-[#ff9800]' style={{ width: `${20 + idx * 10}%` }} /></div></div>)}
      <textarea className='h-16 w-full rounded border border-[#e7eaf0] p-2 outline-none' placeholder='Share your thoughts about this track...' />
      <button type='button' className='mt-2 h-8 w-full rounded bg-[#ff9800] text-white'>Submit Review</button></>}
  </section>
)

const PromoteHub = ({ sub, setSub, onGoLive, onPromote }) => (
  <div className='grid grid-cols-2 gap-3 text-xs'>
    <section className='ml-card p-3'>
      <div className='mb-2 flex justify-between'><h3 className='text-[14px] font-semibold'>Artist Promotion</h3><button type='button' onClick={onPromote} className='ml-tab active'>Promote Your Music</button></div>
      <div className='mb-2 grid grid-cols-3 gap-1'><button type='button' onClick={() => setSub('featured')} className={`ml-tab ${sub === 'featured' ? 'active' : ''}`}>Featured</button><button type='button' onClick={() => setSub('highlights')} className={`ml-tab ${sub === 'highlights' ? 'active' : ''}`}>Highlights</button><button type='button' onClick={() => setSub('upcoming')} className={`ml-tab ${sub === 'upcoming' ? 'active' : ''}`}>Upcoming</button></div>
      {sub === 'highlights' ? <div className='h-44 overflow-hidden rounded'>{img(media.heroArtist, 'highlight')}</div> : sub === 'upcoming' ? <div className='flex h-44 items-center justify-center rounded border border-[#e7eaf0] bg-[#f6f7fa]'>No upcoming promotions</div> : <div className='space-y-2'>{librarySongs.slice(0, 3).map((s, i) => <div key={s.id} className='rounded border border-[#e7eaf0] p-1.5'><div className='flex items-center justify-between'><div className='flex items-center gap-2'><div className='h-10 w-10 overflow-hidden rounded'>{img(s.image, s.title)}</div><div><span className={badge}>{i === 2 ? 'Pre-Save' : 'Coming Soon'}</span><p className='text-[13px]'>{i === 1 ? 'Midnight Dreams' : s.title}</p><p className='text-[10px] text-[#8d93a0]'>{i === 2 ? 'Neon Skyline' : 'Luna Wave'}</p></div></div><div className='text-right'><p>Dec 15, 202</p><button type='button' className='mt-1 rounded border border-[#ff9800] px-2 py-0.5 text-[10px] text-[#ff9800]'>Pre-Save</button></div></div></div>)}</div>}
    </section>
    <LivePanel onGoLive={onGoLive} />
  </div>
)

const LivePanel = ({ onGoLive }) => (
  <section className='ml-card p-3 text-xs'>
    <div className='mb-2 flex justify-between'><h3 className='text-[14px] font-semibold'>Live Performances</h3><button type='button' className='ml-tab active' onClick={onGoLive}>Go Live</button></div>
    <div className='h-52 overflow-hidden rounded'>{img(media.heroPurple, 'live')}</div>
    <p className='mt-2 text-[13px] font-medium'>Live Now</p>
    <div className='mb-2 mt-1 flex items-center justify-between rounded border border-[#ffd89e] bg-[#fff7ec] px-2 py-2'><div><p>Acoustic Session Live</p><p className='text-[10px] text-[#8d93a0]'>Luna Wave</p></div><button type='button' className='h-7 rounded bg-[#ff9800] px-3 text-[11px] text-white'>Watch</button></div>
    <p className='mb-1 text-[13px] font-medium'>Upcoming Events</p>
    {liveEvents.map((e) => <div key={e.id} className='mb-1 flex items-center justify-between rounded border border-[#e7eaf0] p-2'><div className='flex items-center gap-2'><div className='h-7 w-7 rounded bg-[#ff9800]' /><div><p>{e.title}</p><p className='text-[10px] text-[#8d93a0]'>{e.artist}</p></div></div><p className='text-[10px] text-[#8d93a0]'>{e.date}<br />{e.time}</p></div>)}
  </section>
)

const LiveHub = ({ onGoLive }) => <section className='ml-card p-3'><LivePanel onGoLive={onGoLive} /></section>

const GuidelinesHub = () => (
  <div className='grid grid-cols-2 gap-3 text-xs'>
    <section className='ml-card p-3'>
      <h3 className='mb-2 text-[14px] font-semibold'>Upload Guidelines</h3>
      <div className='mb-2 rounded border border-[#ffc777] bg-[#fff8ee] p-2'>
        <p className='font-medium'>Seekheed Constitution</p>
        <p className='text-[10px] text-[#8d93a0]'>All uploads must comply with the Seekheed University Platform Constitution. Please review our guidelines before uploading.</p>
      </div>
      <details className='mb-1 rounded border border-[#e7eaf0] p-2' open>
        <summary className='list-none cursor-pointer flex items-center justify-between font-medium'>Do&apos;s <IconChevronDown className='h-3.5 w-3.5 text-[#7d8698]' /></summary>
        <ul className='mt-2 space-y-1 border-t border-[#edf0f6] pt-2 text-[10px] text-[#6d7689]'>
          <li>Upload original content that you own or have rights to distribute</li>
          <li>Use high-quality audio files (320kbps MP3 or lossless formats)</li>
          <li>Provide accurate metadata (title, artist, genre)</li>
          <li>Add appropriate content warnings for explicit material</li>
          <li>Credit collaborators and featured artists</li>
          <li>Respect intellectual property rights</li>
          <li>Engage respectfully with community feedback</li>
        </ul>
      </details>
      <details className='mb-1 rounded border border-[#e7eaf0] p-2'>
        <summary className='list-none cursor-pointer flex items-center justify-between font-medium'>Don&apos;ts <IconChevronDown className='h-3.5 w-3.5 text-[#7d8698]' /></summary>
        <ul className='mt-2 space-y-1 border-t border-[#edf0f6] pt-2 text-[10px] text-[#6d7689]'>
          <li>Do not upload copyrighted material without permission</li>
          <li>Do not mislabel explicit content</li>
          <li>Do not submit misleading metadata</li>
        </ul>
      </details>
      <details className='rounded border border-[#e7eaf0] p-2'>
        <summary className='list-none cursor-pointer flex items-center justify-between font-medium'>Upload Process <IconChevronDown className='h-3.5 w-3.5 text-[#7d8698]' /></summary>
        <p className='mt-2 border-t border-[#edf0f6] pt-2 text-[10px] text-[#6d7689]'>Upload your file, provide metadata, set content rating, and submit for moderation review.</p>
      </details>
    </section>
    <section className='ml-card p-3'>
      <h3 className='mb-2 text-[14px] font-semibold'>Content Advisory</h3>
      <div className='mb-2 rounded border border-[#ffc777] bg-[#fff8ee] p-2 text-[10px]'>
        <p className='mb-1 text-[11px] font-medium'>Important Notice</p>
        Music containing derogatory or explicit language must be properly labeled. Content that is too explicit may be removed by administrators, and warnings will be issued.
      </div>
      <p className='mb-1 font-medium'>Content Rating Levels</p>
      {[
        ['Clean', 'Family-friendly content suitable for all audiences'],
        ['Mild', 'May contain mild language or themes'],
        ['Explicit', 'Contains explicit language or mature themes'],
        ['Restricted', 'Highly explicit - Subject to review and possible removal'],
      ].map(([l, d]) => (
        <div key={l} className='mb-1 rounded border border-[#e7eaf0] p-2'>
          <p className='font-medium'>{l}</p>
          <p className='text-[10px] text-[#8d93a0]'>{d}</p>
        </div>
      ))}
      <div className='rounded border border-[#ff9c8f] bg-[#fff4f2] p-2 text-[10px]'>
        <p className='mb-1 text-[11px] font-medium'>Violation Consequences</p>
        <ul className='list-disc pl-4 text-[#6d7689]'>
          <li>1st offense: Warning issued</li>
          <li>2nd offense: Content removed + 7-day upload restriction</li>
          <li>3rd offense: Account review + possible suspension</li>
        </ul>
      </div>
    </section>
  </div>
)

const LegalHub = () => (
  <section className='ml-card p-3 text-xs'>
    <h3 className='mb-2 text-[14px] font-semibold'>Legal Advice</h3>
    <div className='mb-2 rounded border border-[#ffc777] bg-[#fff8ee] p-2 text-[10px]'>
      Disclaimer: This information is for educational purposes and should not be considered legal advice.
    </div>
    {[
      ['Copyright Basics', 'Copyright protects original musical works, including melodies, lyrics and recordings.'],
      ['Music Licensing', 'Licensing allows others to use your music under defined terms and royalties.'],
      ['Music Contracts', 'Always review producer, distribution and collaboration contracts before signing.'],
      ['Understanding Royalties', 'Royalties include mechanical, performance, sync and streaming payouts.'],
    ].map(([q, a], idx) => (
      <details key={q} className='mb-1 rounded border border-[#e7eaf0] p-2' open={idx === 0}>
        <summary className='cursor-pointer list-none flex items-center justify-between'>
          <span className='font-medium'>{q}</span>
          <IconChevronDown className='h-3.5 w-3.5 text-[#7d8698]' />
        </summary>
        <div className='mt-2 border-t border-[#edf0f6] pt-2'>
          <p className='text-[10px] text-[#6d7689]'>{a}</p>
          {idx === 0 && (
            <ul className='mt-1 list-disc pl-4 text-[10px] text-[#8a91a2]'>
              <li>Copyright begins once your work is fixed in a tangible form</li>
              <li>Rights can vary by country and registration type</li>
              <li>Licensing can monetize your work while retaining ownership</li>
            </ul>
          )}
        </div>
      </details>
    ))}
    <h4 className='mt-2 mb-1 text-[13px] font-semibold'>Resources</h4>
    <div className='grid grid-cols-2 gap-1 text-[10px]'>{['ASCAP', 'BMI', 'Copyright Office', 'Legal Aid'].map((n) => <div key={n} className='rounded border border-[#e7eaf0] p-2'>{n}</div>)}</div>
  </section>
)

const PromotionHub = ({ onGoHub, onOpenUpload }) => <><Header inHub={false} onOpenUpload={onOpenUpload} onGoHub={onGoHub} /><PromoteHub sub='featured' setSub={() => { }} onGoLive={() => { }} onPromote={() => { }} /><BottomPlayer /></>
const RadioPage = ({ onGoHub, onOpenUpload }) => (
  <>
    <Header inHub={false} onOpenUpload={onOpenUpload} onGoHub={onGoHub} />
    <section className='ml-card p-3 text-xs'>
      <h3 className='mb-2 text-[18px] font-semibold'>Seekheed University Radio</h3>
      <div className='grid grid-cols-[1fr_160px] gap-2'>
        <div>
          <div className='mb-2 rounded border border-[#ffd193] bg-[#fff8ee] p-2'>
            <div className='flex justify-between'>
              <p className='font-medium'>Seekheed University Radio</p>
              <span className='rounded-full bg-[#ff9800] px-2 py-0.5 text-[10px] text-white'>LIVE</span>
            </div>
            <div className='mt-2 h-4 rounded bg-[repeating-linear-gradient(90deg,#ff9800_0,#ff9800_3px,transparent_3px,transparent_10px)]' />
          </div>
          <div className='mb-2 rounded border border-[#e7eaf0] p-2'>
            <div className='flex items-center gap-2'>
              <div className='h-12 w-12 overflow-hidden rounded'>{img(media.dj, 'radio')}</div>
              <div>
                <p className='font-medium'>New Feature: AI-Powered Music Recommendations</p>
                <p className='text-[10px] text-[#8d93a0]'>Seekheed introduces personalized music discovery...</p>
              </div>
            </div>
            <div className='mt-1 h-1.5 rounded-full bg-[#f5debf]'>
              <div className='h-1.5 w-[28%] rounded-full bg-[#ff9800]' />
            </div>
            <div className='flex items-center justify-center gap-4 py-1 text-[#485163]'>
              <IconBack className='h-4 w-4' />
              <button type='button' className='h-6 w-6 rounded-full bg-[#ff9800] p-1 text-white'>
                <IconPlay className='h-4 w-4' />
              </button>
              <IconForward className='h-4 w-4' />
            </div>
          </div>
          <div className='rounded border border-[#e7eaf0] p-2'>
            <p className='mb-1 font-medium'>Coming Up Next</p>
            {librarySongs.slice(0, 3).map((s) => (
              <div key={s.id} className='mb-1 flex items-center justify-between rounded border border-[#edf0f6] p-1.5'>
                <div className='flex items-center gap-2'>
                  <div className='h-8 w-8 overflow-hidden rounded'>{img(s.image, s.title)}</div>
                  <div>
                    <p>{s.title}</p>
                    <p className='text-[10px] text-[#8d93a0]'>{s.artist}</p>
                  </div>
                </div>
                <IconHeart className='h-3.5 w-3.5 text-[#7e879a]' />
              </div>
            ))}
          </div>
        </div>
        <div className='grid gap-2'>
          {[
            ['24,532', 'Live Listeners'],
            ['1.2M', 'Total Plays'],
            ['45 min', 'Avg Session'],
            ['87', 'Countries'],
          ].map((it) => (
            <div key={it[1]} className='rounded border border-[#e7eaf0] p-2 text-center'>
              <p className='font-semibold'>{it[0]}</p>
              <p className='text-[10px] text-[#8d93a0]'>{it[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

const BottomPlayer = () => (
  <div className='ml-card mt-3 grid grid-cols-[230px_1fr_230px] items-center px-5 py-3 text-xs'>
    <div className='flex items-center gap-2'>
      <div className='h-8 w-8 overflow-hidden rounded'>{img(media.artistTwo, 'playing')}</div>
      <div>
        <p className='text-[13px]'>Rock Anthem</p>
        <p className='text-[10px] text-[#8d93a0]'>Luna Martinez</p>
      </div>
      <IconHeart className='ml-2 h-3.5 w-3.5 text-[#758094]' />
    </div>
    <div className='text-center'>
      <div className='mb-1 flex items-center justify-center gap-4 text-[#485163]'>
        <IconShare className='h-3.5 w-3.5' />
        <IconBack className='h-3.5 w-3.5' />
        <button type='button' className='h-6 w-6 rounded-full bg-[#ff9800] p-1 text-white'>
          <IconPlay className='h-3 w-3' />
        </button>
        <IconForward className='h-3.5 w-3.5' />
        <IconRadio className='h-3.5 w-3.5' />
      </div>
      <div className='mx-auto flex max-w-[360px] items-center gap-2 text-[12px] text-[#606a7c]'>
        <span>1:23</span>
        <div className='h-1.5 flex-1 rounded-full bg-[#f5debf]'>
          <div className='h-1.5 w-[36%] rounded-full bg-[#ff9800]' />
        </div>
        <span>3:45</span>
      </div>
    </div>
    <div className='flex items-center justify-end gap-3 text-[#606a7c]'>
      <IconMusic className='h-3.5 w-3.5' />
      <div className='h-1.5 w-24 rounded-full bg-[#f5debf]'>
        <div className='h-1.5 w-[38%] rounded-full bg-[#ff9800]' />
      </div>
      <span className='text-[12px]'>30%</span>
      <IconList className='h-3.5 w-3.5' />
    </div>
  </div>
)

const Overlay = ({ children }) => <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/25 p-4'>{children}</div>

const UploadMusicModal = ({ type, setType, onClose }) => (
  <Overlay>
    <div className='w-full max-w-[390px] rounded-[10px] bg-white p-4'>
      <div className='mb-3 flex items-start justify-between'>
        <div>
          <h3 className='text-[34px] font-semibold leading-none'>Upload New Song</h3>
          <p className='text-[11px] text-[#8d93a0]'>Share your music with the Seekheed community</p>
        </div>
        <button type='button' onClick={onClose} className='text-[20px] text-[#8d93a0]'>✕</button>
      </div>

      <div className='mb-3 grid grid-cols-2 gap-1'>
        <button type='button' onClick={() => setType('song')} className={`ml-tab ${type === 'song' ? 'active' : ''}`}>Song / Album</button>
        <button type='button' onClick={() => setType('video')} className={`ml-tab ${type === 'video' ? 'active' : ''}`}>Music Video</button>
      </div>

      <div className='mb-2 rounded border border-dashed border-[#97a0b2] p-8 text-center text-xs text-[#7c8496]'>
        {type === 'song' ? 'Click to upload or drag and drop MP3, WAV (man 50MB)' : 'Click to upload music video MP4, MOV, AVI (max. 500MB)'}
      </div>
      {type === 'video' && (
        <div className='mb-2 rounded border border-dashed border-[#97a0b2] p-4 text-center text-xs text-[#7c8496]'>
          Upload Thumbnail (JPG, PNG)
        </div>
      )}

      <div className='grid gap-2 text-xs'>
        <label>
          <span className='mb-1 block'>{type === 'song' ? 'Song Title' : 'Video Title'}</span>
          <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Enter song title' />
        </label>
        <label>
          <span className='mb-1 block'>Artist Nanw</span>
          <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Enter artist name' />
        </label>
        <div className='grid grid-cols-2 gap-2'>
          <label>
            <span className='mb-1 block'>{type === 'song' ? 'Album' : 'Related Song'}</span>
            <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder={type === 'song' ? 'Album name' : 'Link to song'} />
          </label>
          <label>
            <span className='mb-1 block'>Genre</span>
            <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Select genre' />
          </label>
        </div>
        <label>
          <span className='mb-1 block'>{type === 'song' ? 'Description' : 'Video Description'}</span>
          <textarea className='h-14 w-full rounded border border-[#e5e7ec] px-2 py-1 outline-none' placeholder={type === 'song' ? 'Tell us about your song...' : 'Describe your music video...'} />
        </label>
      </div>

      <div className='mt-2 flex items-center justify-between'>
        <div>
          <p className='font-medium'>Make Public</p>
          <p className='text-[10px] text-[#8d93a0]'>Allow others to discover and play your song</p>
        </div>
        <div className='h-4 w-8 rounded-full bg-[#ff9800] p-[2px]'><div className='h-3 w-3 translate-x-4 rounded-full bg-white' /></div></div>
    </div>
    {/* </div> */}
  </Overlay>
)

const ActionMenu = ({ onClose, onAddPlaylist }) => (
  <Overlay>
    <div className='w-full max-w-[260px] rounded-[10px] bg-white p-3 text-xs shadow-xl'>
      <p className='mb-2 text-[#8d93a0]'>Action Option</p>
      <button type='button' className='mb-1 flex w-full items-center gap-2 rounded px-2 py-2 text-left hover:bg-[#f5f6f9]' onClick={onAddPlaylist}>
        <IconList className='h-3.5 w-3.5' /> Add To Playlist
      </button>
      <button type='button' className='mb-1 flex w-full items-center gap-2 rounded px-2 py-2 text-left hover:bg-[#f5f6f9]'>
        <IconShare className='h-3.5 w-3.5' /> Edit Details
      </button>
      <button type='button' className='mb-1 flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[#ef4444] hover:bg-[#fff5f5]'>
        <IconMore className='h-3.5 w-3.5' /> Delete
      </button>
      <button type='button' onClick={onClose} className='mt-2 h-8 w-full rounded border border-[#e5e7ec]'>
        Close
      </button>
    </div>
  </Overlay>
)

const PlaylistModal = ({ step, onClose, onNext }) => (
  <Overlay>
    <div className='w-full max-w-[360px] rounded-[10px] bg-white p-4 text-xs shadow-xl'>
      <div className='mb-3 flex items-center justify-between border-b border-[#e5e7ec] pb-2'>
        <h4 className='text-lg font-semibold'>Your Playlists</h4>
        <button type='button' onClick={onClose} className='text-[#8d93a0]'>✕</button>
      </div>
      {step === 1 ? (
        <button type='button' onClick={onNext} className='h-10 w-full rounded bg-[#ff9800] text-sm text-white'>
          + Create New Playlist
        </button>
      ) : (
        <>
          <label className='mb-1 block'>Playlist Name</label>
          <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Enter playlist name' />
          <div className='mt-3 grid grid-cols-2 gap-2'>
            <button type='button' onClick={onClose} className='h-9 rounded border border-[#9ba3b4] text-[#566074]'>Cancel</button>
            <button type='button' onClick={onClose} className='h-9 rounded bg-[#ff9800] text-white'>Create</button>
          </div>
        </>
      )}
    </div>
  </Overlay>
)

const GoLiveModal = ({ onClose }) => (
  <Overlay>
    <div className='w-full max-w-[460px] rounded-[10px] bg-white p-4 text-xs'>
      <div className='mb-2 flex items-start justify-between'>
        <div>
          <h3 className='text-[18px] font-semibold'>Schedule Live Performance</h3>
          <p className='text-[11px] text-[#8d93a0]'>Host a live performance and invite your friends and family</p>
        </div>
        <button type='button' onClick={onClose} className='text-[#8d93a0]'>✕</button>
      </div>
      <div className='grid gap-2'>
        <div>
          <label className='mb-1 block text-[12px] font-medium'>Event Title</label>
          <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='e.g., Acoustic Night Live' />
        </div>
        <div>
          <label className='mb-1 block text-[12px] font-medium'>Description</label>
          <textarea className='h-20 w-full rounded border border-[#e5e7ec] px-2 py-1 outline-none' placeholder='Tell your audience what to expect...' />
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <label className='mb-1 block text-[12px] font-medium'>Date</label>
            <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='mm/dd/my' />
          </div>
          <div>
            <label className='mb-1 block text-[12px] font-medium'>Time</label>
            <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='-------' />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <label className='mb-1 block text-[12px] font-medium'>Price</label>
            <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='$10' />
          </div>
          <div>
            <label className='mb-1 block text-[12px] font-medium'>Age</label>
            <input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='20' />
          </div>
        </div>
        <div className='flex items-center justify-between rounded border border-[#e5e7ec] px-2 py-2'><div><p className='text-[12px]'>Private Event</p><p className='text-[10px] text-[#8d93a0]'>Only invited guests can join</p></div><div className='h-4 w-8 rounded-full bg-[#ff9800] p-[2px]'><div className='h-3 w-3 translate-x-4 rounded-full bg-white' /></div></div></div>
      <div className='rounded border border-[#ffb24f] bg-[#fff8ee] p-2 text-[10px] text-[#7d8698]'>Your followers will be notified about your live event. You can also share the link directly.</div>
    </div>
  </Overlay>
)

const PromoteModal = ({ onClose }) => (
  <Overlay>
    <div className='w-full max-w-[400px] rounded-[10px] bg-white p-4 text-xs'>
      <div className='mb-2 flex items-start justify-between'><div><h3 className='text-xl font-semibold'>Promote Your Release</h3><p className='text-xs text-[#8d93a0]'>Get your music featured across the Seekheed platform</p></div><button type='button' onClick={onClose}>✕</button></div>
      <div className='mb-2 grid grid-cols-3 gap-2'>
        {['Basic', 'Standard', 'Premium'].map((p, idx) => <div key={p} className={`rounded border p-2 ${idx === 1 ? 'border-[#ff9800] bg-[#fff8ee]' : 'border-[#e5e7ec]'}`}><p className='text-center font-medium'>{p}</p><p className='text-center text-[#ff9800] text-[24px] font-semibold'>${idx === 0 ? '25' : idx === 1 ? '75' : '199'}</p><p className='text-center text-[10px] text-[#8d93a0]'>{idx === 0 ? '3 days' : idx === 1 ? '7 days' : '15 days'}</p><p className='mt-1 text-[10px] text-[#8d93a0]'>{idx === 0 ? '5,000 impressions' : idx === 1 ? '25,000 impressions' : '100,000 impressions'}</p></div>)}
      </div>
      <div className='grid gap-2'>
        <label><span className='mb-1 block text-[12px] font-medium'>Select Track/Album</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Choose your release' /></label>
        <div className='grid grid-cols-2 gap-2'><label><span className='mb-1 block text-[12px] font-medium'>Start Date</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='mm/dd/yyyy' /></label><label><span className='mb-1 block text-[12px] font-medium'>Budget (Optional)</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Custom budget' /></label></div>
        <p className='text-[12px] font-medium'>Promotional Materials</p>
        <div className='grid grid-cols-2 gap-2'><div className='rounded border border-dashed border-[#97a0b2] p-4 text-center'>Digital Flyer</div><div className='rounded border border-dashed border-[#97a0b2] p-4 text-center'>Promo Video</div></div>
        <p className='text-[10px] text-[#8d93a0]'>Upload your promotional materials to increase engagement.</p>
      </div>
      <div className='mt-3 grid grid-cols-2 gap-2'><button type='button' onClick={onClose} className='h-9 rounded border border-[#9ba3b4] text-[#566074]'>Cancel</button><button type='button' onClick={onClose} className='h-9 rounded bg-[#ff9800] text-white'>Start Campaign</button></div>
    </div>
  </Overlay>
)

const CreateNftModal = ({ onClose }) => (
  <Overlay>
    <div className='w-full max-w-[500px] rounded-[10px] bg-white p-4 text-xs'>
      <div className='mb-2 flex items-start justify-between'><div><h3 className='text-[32px] font-semibold leading-none'>Create Your NFT</h3><p className='text-[#8d93a0]'>Turn your music or artwork into a unique digital collectible</p></div><button type='button' onClick={onClose} className='text-[18px]'>✕</button></div>
      <div className='mb-2 rounded border border-dashed border-[#97a0b2] p-6 text-center text-[#7c8496]'>Upload Music or Artwork<br />MP3, WAV, PNG, JPG (max 100MB)</div>
      <div className='grid gap-2'>
        <label><span className='mb-1 block'>Release Type</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Release Type' /></label>
        <label><span className='mb-1 block'>NFT Title</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Enter NFT title' /></label>
        <label><span className='mb-1 block'>Description</span><textarea className='h-16 w-full rounded border border-[#e5e7ec] px-2 py-1 outline-none' placeholder='Describe your NFT...' /></label>
        <p>Additional Files (Optional)</p>
        <div className='grid grid-cols-2 gap-2'><button type='button' className='h-9 rounded border border-[#e5e7ec]'>Liner Notes / Lyrics</button><button type='button' className='h-9 rounded border border-[#e5e7ec]'>Bonus Artwork</button></div>
        <div className='grid grid-cols-2 gap-2'><label><span className='mb-1 block'>Price (ETH)</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='0.00' /></label><label><span className='mb-1 block'>Editions</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='1' /></label></div>
        <div className='grid grid-cols-2 gap-2'><label><span className='mb-1 block'>Royalty Percentage</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='10' /></label><label><span className='mb-1 block'>Unlockable Content</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Select' /></label></div>
        <label><span className='mb-1 block'>Special Instructions (For Giveaways)</span><textarea className='h-12 w-full rounded border border-[#e5e7ec] px-2 py-1 outline-none' placeholder='dd any special instructions for your fans...' /></label>
      </div>
      <div className='mt-3 grid grid-cols-2 gap-2'><button type='button' onClick={onClose} className='h-9 rounded border border-[#9ba3b4] text-[#566074]'>Cancel</button><button type='button' onClick={onClose} className='h-9 rounded bg-[#ff9800] text-white'>Mint NFT</button></div>
    </div>
  </Overlay>
)

const UploadAlbumModal = ({ onClose }) => (
  <Overlay>
    <div className='w-full max-w-[390px] rounded-[10px] bg-white p-4 text-xs'>
      <div className='mb-2 flex items-start justify-between'><div><h3 className='text-[32px] font-semibold leading-none'>Upload New Album</h3><p className='text-[#8d93a0]'>Share your complete album with artwork, tracklist, and details</p></div><button type='button' onClick={onClose}>✕</button></div>
      <div className='mb-2 rounded border border-dashed border-[#97a0b2] p-6 text-center text-[#7c8496]'>Album Cover</div>
      <div className='grid gap-2'>
        <label><span className='mb-1 block'>Release Type</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Release Type' /></label>
        <label><span className='mb-1 block'>Album Title</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Enter album title' /></label>
        <label><span className='mb-1 block'>Artist Name</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Enter artist name' /></label>
        <div className='grid grid-cols-2 gap-2'><label><span className='mb-1 block'>Genre</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Select genre' /></label><label><span className='mb-1 block'>Release Date</span><input className='h-9 w-full rounded border border-[#e5e7ec] px-2 outline-none' placeholder='mm/dd/yyyy' /></label></div>
        <div><p className='mb-1'>Track List</p><div className='grid grid-cols-[1fr_46px_28px] gap-1'><input className='h-8 rounded border border-[#e5e7ec] px-2 outline-none' placeholder='Rack title' /><input className='h-8 rounded border border-[#e5e7ec] px-2 outline-none' placeholder='0:00' /><button type='button' className='h-8 rounded border border-[#e5e7ec]'>×</button></div><button type='button' className='mt-1 h-7 rounded bg-[#ff9800] px-2 text-white'>+ Add Track</button></div>
        <p>Upload Audio Files</p>
        <div className='rounded border border-dashed border-[#97a0b2] p-4 text-center text-[#7c8496]'>Click to upload or drag and drop<br />MP3, WAV (man 50MB)</div>
        <p>Additional Files (Optional)</p>
        <div className='grid grid-cols-2 gap-2'><button type='button' className='h-9 rounded border border-[#e5e7ec]'>Liner Notes / Lyrics</button><button type='button' className='h-9 rounded border border-[#e5e7ec]'>Bonus Artwork</button></div>
        <label><span className='mb-1 block'>Special Instructions (For Giveaways)</span><textarea className='h-14 w-full rounded border border-[#e5e7ec] px-2 py-1 outline-none' placeholder='Add any special instructions for your fans...' /></label>
      </div>
      <div className='mt-3 grid grid-cols-2 gap-2'><button type='button' onClick={onClose} className='h-9 rounded border border-[#9ba3b4] text-[#566074]'>Cancel</button><button type='button' onClick={onClose} className='h-9 rounded bg-[#ff9800] text-white'>Publish Album</button></div>
    </div>
  </Overlay>
)

export default MusicLibraryApp
