import styles from './styles.css'

export const PureHTMLApp = () => (
  <main>
    <header className={styles.head}>
      <a href="/main" className={styles.link}>
        <b>BR</b> Architects
      </a>
      <nav>
        <a href="/projects" className="nav-link">Projects</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav>
    </header>
    <img src="https://goo.gl/2LxxtC" style={{ maxWidth: '100%' }}/>
  </main>
)
