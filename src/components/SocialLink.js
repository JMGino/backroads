import { socialLinks } from '../data';

const SocialLink = ({ parentClass, parentItem }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((social) => {
        const { href, target, icon } = social
        return (
          <li>
            <a
              href={href}
              target={target}
              rel="noreferrer"
              className={parentItem}
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLink