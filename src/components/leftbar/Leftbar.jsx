import React from 'react';
import './leftbar.css';
import CurrentUser from '../../FackApis/CurrentUserData';
import friend from '../../assets/icon/1.png';
import groups from '../../assets/icon/2.png';
import market from '../../assets/icon/3.png';
import watch from '../../assets/icon/4.png';
import gallery from '../../assets/icon/5.png';
import videos from '../../assets/icon/6.png';
import message from '../../assets/icon/7.png';

const Leftbar = ({ darkmode, theme }) => {
  return (
    <div className={`leftbar ${darkmode ? 'dark-mode' : ''}`}>
      <div className="leftbar-user">
        <img className="leftuserphoto" src={CurrentUser.map(user => user.ProfieImage)} alt="User" />
        <h5 className="mt-4">beg joker</h5>
      </div>
      <div>
        <div className="sides">
          <img src={friend} alt="friends" />
          <h5>friends</h5>
        </div>
        <div className="sides">
          <img src={groups} alt="groups" />
          <h5>groups</h5>
        </div>
        <div className="sides">
          <img src={market} alt="market" />
          <h5>market</h5>
        </div>
        <div className="sides">
          <img src={watch} alt="watch" />
          <h5>watch</h5>
        </div>
        <h3>your shortcuts</h3>
        <div className="mt-4">
          <div className="sides">
            <img src={gallery} alt="gallery" />
            <h5>gallery</h5>
          </div>
          <div className="sides">
            <img src={videos} alt="videos" />
            <h5>videos</h5>
          </div>
          <div className="sides">
            <img src={message} alt="message" />
            <h5>message</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
