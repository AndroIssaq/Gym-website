import Title from "./Title"


const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h1 className="text-[35px]">world gym</h1>
            <p className="text-base leading-6">Your Path to a Healthier Lifestyle and Greater Well-being.</p>
            <div className="flex space-x-6">
              <PlayCircleIcon className="text-green-500 h-6 w-6" />
              <InstagramIcon className="text-green-500 h-6 w-6" />
              <FacebookIcon className="text-green-500 h-6 w-6" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-green-400 uppercase">Contact</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <h5 className="text-base leading-6">Address</h5>
                    <p className="mt-2 text-base leading-6">123 Fitness Avenue, Cityville, State 12345, USA</p>
                  </li>
                  <li>
                    <h5 className="text-base leading-6">Phone</h5>
                    <p className="mt-2 text-base leading-6">+1 (123) 456-7890</p>
                  </li>
                  <li>
                    <h5 className="text-base leading-6">Mail Address</h5>
                    <p className="mt-2 text-base leading-6">info@elitegym.com</p>
                  </li>
                </ul>
              </div>
              <div className="md:mt-0">
                <h4 className="text-sm font-semibold tracking-wider text-green-400 uppercase">Quick Links</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base leading-6 hover:text-green-500" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-base leading-6 hover:text-green-500" href="#">
                      Classes
                    </a>
                  </li>
                  <li>
                    <a className="text-base leading-6 hover:text-green-500" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-base leading-6 hover:text-green-500" href="#">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="text-base leading-6 hover:text-green-500" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-400 hover:text-gray-300" href="#">
              <span className="sr-only">Youtube</span>
              <YoutubeIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            © 2023 EliteGYM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PlayCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

export default Footer