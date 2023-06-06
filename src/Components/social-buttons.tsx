import { SiLinkedin, SiTwitter, SiGithub, SiInstagram } from "react-icons/si"

export default function SocialButtons() {
    return (
        <div className="flex w-full h-10 sm:justify-start sm:space-x-2 sm:mt-0 justify-center space-x-4 mt-3 sm:ml-24 lg:ml-0 ">
                <a href="https://www.linkedin.com/in/gabriel-carneiro-54aa45248/" className="h-full">
                  <SiLinkedin className="w-5 h-full text-gray-300 transition ease-in-out hover:text-[#0e76a8]" />
                </a>
                <a href="https://twitter.com/carneir00x" className="h-full">
                  <SiTwitter className="w-5 h-full text-gray-300 transition ease-in-out hover:text-[#1DA1F2]" />
                </a>
                <a href="https://github.com/Gabrielll04" className="h-full">
                  <SiGithub className="w-5 h-full text-gray-300 transition ease-in-out hover:text-black" />
                </a>
                <a href="https://instagram.com/gabgcar?igshid=MzNINGNkZWQ4Mg==" className="h-full">
                  <SiInstagram className="w-5 h-full text-gray-300 transition ease-in-out hover:text-[#C13584]" />
                </a>
        </div>
    )
}