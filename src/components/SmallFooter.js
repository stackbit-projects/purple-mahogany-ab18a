import React from 'react';
import config from '../../config';
export default function SmallFooter() {
  return (
    <section id="footer">
      <div className="inner">
      <h3>Follow us!</h3>
      <ul className="icons">
        <li><a href="http://www.google.com" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="/#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="/#" className="icon fa-youtube"><span className="label">Youtube</span></a></li>
        <li><a href="/#" className="icon fa-spotify"><span className="label">Spotify</span></a></li>
        </ul>   
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
