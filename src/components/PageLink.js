import { pageLinks } from '../data';

const PageLink = ({ parentClass, parentItem }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((page) => {
        const { id, href, text } = page
        return (
          <li key={id}>
            <a href={href} className={parentItem}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLink