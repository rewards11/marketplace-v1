import Link from "next/link";
import { ReactElement, useEffect, useState } from 'react'
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../src/redux/actions/siteSettings";
import { stickyNav } from "../src/utilits";
import { paths } from '@reservoir0x/reservoir-sdk';
import { useMediaQuery } from '@react-hookz/web'
import SearchMenu from './SearchMenu'
import dynamic from 'next/dynamic'
import setParams from 'lib/params';
import CartMenu from "./CartMenu";
import ConnectWallet from "./ConnectWallet";

import ThemeSwitcher from "./ThemeSwitcher";
import HamburgerMenu from './HamburgerMenu'
import { FaShoppingCart, FaWallet } from "react-icons/fa";
const Navbar = ({ }) => {

  useEffect(() => {
    stickyNav();
  }, []);
  const [showLinks, setShowLinks] = useState(true)
  const externalLinks: { name: string; url: string }[] = []
  const [filterComponent, setFilterComponent] = useState<ReactElement | null>(null)
  useEffect(() => {
    setShowLinks(externalLinks.length > 0)
  }, [])
  const EXTERNAL_LINKS = process.env.NEXT_PUBLIC_EXTERNAL_LINKS || null
  const COLLECTION = process.env.NEXT_PUBLIC_COLLECTION
  const COMMUNITY = process.env.NEXT_PUBLIC_COMMUNITY
  const COLLECTION_SET_ID = process.env.NEXT_PUBLIC_COLLECTION_SET_ID
  const DEFAULT_TO_SEARCH = process.env.NEXT_PUBLIC_DEFAULT_TO_SEARCH

  const SearchCollections = dynamic(() => import('./SearchCollections'))
  const CommunityDropdown = dynamic(() => import('./CommunityDropdown'))
  const [hasCommunityDropdown, setHasCommunityDropdown] = useState<boolean>(false)

  const isGlobal = !COMMUNITY && !COLLECTION && !COLLECTION_SET_ID
  const filterableCollection = isGlobal || COMMUNITY || COLLECTION_SET_ID

  const showDesktopSearch = useMediaQuery('(min-width: 1200px)')
  const isMobile = useMediaQuery('(max-width: 770px)')
  function getInitialSearchHref() {
    const PROXY_API_BASE = process.env.NEXT_PUBLIC_PROXY_API_BASE
    const pathname = `${PROXY_API_BASE}/search/collections/v1`
    const query: paths['/search/collections/v1']['get']['parameters']['query'] = {}

    if (COLLECTION_SET_ID) {
      query.collectionsSetId = COLLECTION_SET_ID
    } else {
      if (COMMUNITY) query.community = COMMUNITY
    }

    return setParams(pathname, query)
  }

  useEffect(() => {
    if (filterableCollection) {
      const href = getInitialSearchHref()

      fetch(href).then(async (res) => {
        let initialResults = undefined

        if (res.ok) {
          initialResults =
            (await res.json()) as paths['/search/collections/v1']['get']['responses']['200']['schema']
        }

        const smallCommunity =
          initialResults?.collections &&
          initialResults.collections.length >= 2 &&
          initialResults.collections.length <= 10

        const hasCommunityDropdown =
          !DEFAULT_TO_SEARCH &&
          (COMMUNITY || COLLECTION_SET_ID) &&
          smallCommunity

        if (hasCommunityDropdown) {
          setFilterComponent(
            <CommunityDropdown
              collections={initialResults?.collections}
              defaultCollectionId={COLLECTION}
            />
          )
          setHasCommunityDropdown(true)
        } else {
          setHasCommunityDropdown(false)
          !showDesktopSearch
            ? setFilterComponent(
              <SearchMenu
                communityId={COMMUNITY}
                initialResults={initialResults}
              />
            )
            : setFilterComponent(
              <SearchCollections
                communityId={COMMUNITY}
                initialResults={initialResults}
              />
            )
        }
      })
    }
  }, [filterableCollection, showDesktopSearch])

  if (typeof EXTERNAL_LINKS === 'string') {
    const linksArray = EXTERNAL_LINKS.split(',')

    linksArray.forEach((link) => {
      let values = link.split('::')
      externalLinks.push({
        name: values[0],
        url: values[1],
      })
    })
  }
  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo cursor-pointer">

            <div className="logo cursor-pointer">
              <Link href="https://rewards11.com/" target="_blank" rel="noreferrer">

                <img style={{ maxWidth: 60 }} width={60} height={60} src='/Rewards11perfectlogo.png' alt="" />
               
              </Link>
              <div className="title_logos">Home</div>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              {/* <li className="nav_first_child">
                <Link href="https://rewards11.com/" className="creative_link">
                  <span className="text-[#fff]">Home</span>

                </Link>
              </li> */}
              {showLinks && (
                <li className="nav_second_child">
                  {externalLinks.map(({ name, url }) => (
                    <Link
                      key={url} href={url} className="creative_link">
                      <span className="text-[#fff]">{name}</span>

                    </Link>
                  ))}
                </li>
              )}

            </ul>

          </div>

          <span style={{ width: '60%', flex: 0.6 }}>
            {filterComponent && filterComponent}
          </span>

          <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: '15%' }}>
            <div className="metaportal_fn_button1">
              <span>
                <CartMenu />
              </span>

            </div>
            <div >
              <span>
                <ConnectWallet />
              </span>
            </div>

            <ThemeSwitcher />
          </div>

        </div>
      </div>
    </header>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Navbar
);

