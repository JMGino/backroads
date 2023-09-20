import PageLink from './PageLink';
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className="section footer">

      <PageLink parentClass="footer-links" parentItem="footer-link" />

      <SocialLink parentClass="footer-icons" parentItem="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer