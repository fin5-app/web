import { FC } from 'react'
import { Link } from 'react-router-dom'
import Fin5Logo from '../../../../assets/fin5.svg'

// interface SocialMediaItemProps {
//   icon: JSX.Element
// }

export const LandingFooter: FC = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="grid grid-cols-1 col-start-2 col-span-2 p-4">
        <div className="flex items-center justify-center">
          <Fin5Logo className="w-10 h-10" />
        </div>
      </div>
      <div className="grid grid-cols-1 col-start-2 col-span-2 p-4">
        <div className="flex items-center justify-center gap-[3rem]">
          <Link to={'#!'} className="text-xs text-text-secondary">
            <p className="text-center">Home</p>
          </Link>
          <Link to={'#!'} className="text-xs text-text-secondary">
            <p className="text-center">Terms</p>
          </Link>
          <Link to={'#!'} className="text-xs text-text-secondary">
            <p className="text-center">FAQ</p>
          </Link>
          <Link to={'#!'} className="text-xs text-text-secondary">
            <p className="text-center">Privacy</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 col-start-2 col-span-2 p-4 my-2">
        <Copyright />
      </div>
    </div>
  )
}

const Copyright = () => {
  return (
    <div className="col-span-4">
      <p className="text-center text-text-primary">
        © 2023 Fin5, Inc. Todos los derechos reservados.
      </p>
    </div>
  )
}

// const SocialMedia: FC = () => {
//   return (
//     <div>
//       {SOCIAL_MEDIA.map((item) => (
//         <SocialMediaItem />
//       ))}
//     </div>
//   )
// }

// const SocialMediaItem: FC<SocialMediaItemProps> = () => {
//   return <div>SocialMediaItem</div>
// }
