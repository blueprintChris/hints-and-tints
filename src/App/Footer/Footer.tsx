import classnames from 'classnames';
import styles from './Footer.module.css';

const Footer = ({ scrollRef }: Props) => {
  return (
    <>
      <div className={classnames(styles.contentRow, styles.howToPlay)} ref={scrollRef}>
        <h2>How to play:</h2>
        <ol>
          <li>
            <span>Enter your nickname and click Create Room.</span>
          </li>
          <li>
            <span>Select the preferred score limit.</span>
          </li>
          <li>
            <span>Connect with your friends using audio or video chat.</span>
          </li>
          <li>
            <span>Share the room URL with your friends.</span>
          </li>
          <li>
            <span>Happy Tinting & Hinting!</span>
          </li>
        </ol>
      </div>
      <div className={classnames(styles.contentRow, styles.faq)}>
        <h2>FAQ</h2>
        <p>
          The FAQ section is a work in progress. If you encounter any issues during your games, then
          please email me at me@blueprintchris.co.uk
        </p>
      </div>
      <footer className={classnames(styles.contentRow, styles.footer)}>
        <p>Website by @blueprintchris</p>
      </footer>
    </>
  );
};

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export default Footer;
