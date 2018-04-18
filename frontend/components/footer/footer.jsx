import React from 'react';
import { Link } from 'react-router-dom';

class AppStaterFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="app-footer">
        <div className="footer-links">
          <ul>
            <li>
              <h2>LEARN</h2>
              <h3><a target="_blank" href="http://reshare.community/about/">About</a></h3>
            </li>
            <li>
              <h2>INSPIRE</h2>
              <h3><a target="_blank" href="http://reshare.community/inspire/">Heros</a></h3>
            </li>
            <li>
              <h2>CONNECT</h2>
              <h3><a target="_blank" href="http://reshare.community/connection/">Contact</a></h3>
            </li>
          </ul>
        </div>
      </section>
    )
  }
};

export default AppStaterFooter;
