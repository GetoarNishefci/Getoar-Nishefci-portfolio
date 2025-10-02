
     import Link from 'next/link';
    import { FaGithub,FaLinkedinIn} from 'react-icons/fa';

    interface SocialsProps {
      containerStyles: string;
      iconStyles: string;
    }

     const socials = [
        {icon: <FaGithub />, path:""},
        {icon: <FaLinkedinIn />, path:""}
     ]

        export const Socials:React.FC<SocialsProps> = ({containerStyles,iconStyles}) => {
        return (
        <div className={containerStyles}>
          {socials.map((social, index) => {
            return (
               <Link key={index} href={social.path} className={iconStyles}>
                 {social.icon}
               </Link>
            )
          })}
        </div>

      )
    }
    