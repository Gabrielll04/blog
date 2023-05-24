import { SiLinkedin, SiTwitter, SiGithub, SiInstagram } from "react-icons/si"

export default function SocialButtons() {
    return (
        <div className="flex w-full h-10 sm:justify-start sm:space-x-2 sm:mt-0 justify-center space-x-4 mt-3">
                <a href="#" className="h-full">
                  <SiLinkedin className="w-5 h-full text-gray-300 transition ease-in-out hover:text-[#0e76a8]" />
                </a>
                <a href="#" className="h-full">
                  <SiTwitter className="w-5 h-full text-gray-300 transition ease-in-out hover:text-[#1DA1F2]" />
                </a>
                <a href="#" className="h-full">
                  <SiGithub className="w-5 h-full text-gray-300 transition ease-in-out hover:text-black" />
                </a>
                <a href="#" className="h-full">
                  <SiInstagram className="w-5 h-full text-gray-300 transition ease-in-out hover:text-[#C13584]" />
                </a>
              </div>
    )
}