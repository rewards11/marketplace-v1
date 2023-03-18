import { FaTwitter, FaDiscord } from 'react-icons/fa'
import Link from 'next/link'

const FOOTER_ENABLED = process.env.NEXT_PUBLIC_FOOTER_ENABLED == 'true'

const Footer = () => {
  if (FOOTER_ENABLED)
    return (
      <footer id="footer">
        <div className="container">
          <div className="footer">
            <div className="left_part">
              <ul>
                <li>
                  <Link href="https://rewards11.com/about-us/" legacyBehavior={true}>
                    <a className="creative_link">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://rewards11.com/policy/" legacyBehavior={true}>
                    <a className="creative_link">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://rewards11.com/policy/" legacyBehavior={true}>
                    <a className="creative_link">Terms of Use</a>
                  </Link>
                </li>
              </ul>


            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '5%'
              }}>
              <Link style={{ marginRight: 10 }} href="https://twitter.com/IRewards11/" legacyBehavior={true}>
                <a className="creative_link"><FaTwitter className="h-[20px] w-[25px]" /></a>
              </Link>
              <Link href="https://discord.com/channels/1074945735327485994/1074945735327485997/1080384811962748989/" legacyBehavior={true}>
                <a className="creative_link"><FaDiscord className="h-[19px] w-[25px]" /></a>
              </Link>
              {/* <p>
              Copyright 2022 — Designed &amp; Developed by{" "}
              <Link
                href="https://themeforest.net/user/frenify/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Frenify
              </Link>
            </p> */}
            </div>
          </div>
        </div>
      </footer>

      // <footer className="col-span-full flex flex-col items-center justify-between px-6 pb-12 sm:flex-row md:px-16">
      //   <div className="mb-6 flex flex-row flex-wrap items-center justify-between gap-x-6 text-xs sm:mb-0 sm:gap-x-8 sm:text-sm">
      //     <Link href="https://rewards11.com/about-us/" legacyBehavior={true}>
      //       <span className="" >
      //         About
      //       </span>
      //     </Link>
      //     <Link href="https://rewards11.com/policy/" legacyBehavior={true}>
      //       <span className="min-w-max" >
      //         Privacy Policy
      //       </span>
      //     </Link>
      //     <Link href="https://rewards11.com/policy/" legacyBehavior={true}>
      //       <span className="min-w-max" >
      //         Terms of Use
      //       </span>
      //     </Link>
      //   </div>
      //   <div className="flex flex-row items-center gap-x-6">
      //     <Link href="https://twitter.com/IRewards11/" legacyBehavior={true}>
      //       <span className="" >
      //         <FaTwitter className="h-[20px] w-[25px]" />
      //       </span>
      //     </Link>
      //     <Link href="https://discord.com/channels/1074945735327485994/1074945735327485997/1080384811962748989/" className="ml-5" legacyBehavior={true}>
      //       <span className="" >
      //         <FaDiscord className="h-[19px] w-[25px]" />
      //       </span>
      //     </Link>
      //   </div>
      // </footer>
    )

  return null
}

export default Footer
