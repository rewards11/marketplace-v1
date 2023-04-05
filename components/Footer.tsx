import { FaTwitter, FaDiscord, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'

const FOOTER_ENABLED = process.env.NEXT_PUBLIC_FOOTER_ENABLED == 'true'

const Footer = () => {
  if (FOOTER_ENABLED)
    return (
      <footer className="col-span-full flex flex-col items-center justify-between px-6 pb-12 sm:flex-row md:px-16">
        <div className="mb-6 flex flex-row flex-wrap items-center justify-between gap-x-6 text-xs sm:mb-0 sm:gap-x-8 sm:text-sm">
          <Link href="https://rewards11.com/about-us/" target={"_blank"}>
            <span className="foot_link" >
              About
            </span>
          </Link>
          <Link href="https://rewards11.com/policy/" target={"_blank"}>
            <span className="foot_link min-w-max" >
              Privacy Policy
            </span>
          </Link>
          <Link href="https://rewards11.com/contactus/" target={"_blank"}>
            <span className="foot_link min-w-max" >
              Contact Us
            </span>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-6">
          <Link href="https://www.linkedin.com/company/rewards11/" target={"_blank"}>
            <span className="foot_icon" >
              <FaLinkedin className="h-[20px] w-[25px]" />
            </span>
          </Link>
          <Link href="https://github.com/rewards11/" target={"_blank"}>
            <span className="foot_icon" >
              <FaGithub className="h-[20px] w-[25px]" />
            </span>
          </Link>
          <Link href="https://www.youtube.com/@inforewards11/" target={"_blank"}>
            <span className="foot_icon" >
              <FaYoutube className="h-[20px] w-[25px]" />
            </span>
          </Link>
          <Link href="https://www.instagram.com/inforewards_11/" target={"_blank"}>
            <span className="foot_icon" >
              <FaInstagram className="h-[20px] w-[25px]" />
            </span>
          </Link>

          <Link href="https://rewards11.com/website/social/facebook/" target={"_blank"}>
            <span className="foot_icon" >
              <FaFacebook className="h-[20px] w-[25px]" />
            </span>
          </Link>

          <Link href="https://rewards11.com/website/social/twitter/" target={"_blank"}>
            <span className="foot_icon" >
              <FaTwitter className="h-[20px] w-[25px]" />
            </span>
          </Link>

          <Link href="https://discord.com/channels/1074945735327485994/1074945735327485997/1080384811962748989/" className="mr-10" target={"_blank"}>
            <span className="foot_icon" >
              <FaDiscord className="h-[19px] w-[25px]" />
            </span>
          </Link>
        </div>
      </footer>
    )

  return null
}

export default Footer
