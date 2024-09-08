import React from 'react';
import ClayButton from '@clayui/button';
import { FaArrowLeft } from 'react-icons/fa'; // Import Font Awesome icon
import '@clayui/css/lib/css/atlas.css'; // Make sure to include ClayUI CSS
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import robostImg from './Assets/images/robost.svg';
import adamImg from './Assets/images/adam.svg';
import meileeImg from './Assets/images/meilee.svg';
import raviImg from './Assets/images/ravi.svg';

const avatars = [
    { src: robostImg, name: 'Robost' },
    { src: adamImg, name: 'Adam' },
    { src: meileeImg, name: 'Mei Lee' },
    { src: raviImg, name: 'Ravi' },
  ];

const AvatarSelection = () => {
  return (
    <div className="bg-color">
      <div className="bg-register">
        <div>
            <Link to="/" className='back-btn link-btn'>
                <FaArrowLeft /> Kembali
            </Link>
        </div>
      </div>
        <div className="char-container">
          <div className="form-header">
            <h1 className="form-title">Tetapkan avatar kegemaran anda</h1>
          </div>
          <div className="account-form">
            <div className="sub-title">
              <span className="sub-text">Pilih avatar</span>
            </div>
          </div>
          <div className="choose-container">
            {avatars.map((avatar, index) => (
              <div key={index} className="char-icon">
                <img src={avatar.src} alt={avatar.name} />
                <span className="char-name">{avatar.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="submit-btn-container">
          <ClayButton displayType="primary" className='submit-btn'>
            <span className="btn-text">Seterusnya</span>
          </ClayButton>
        </div>
      </div>
  
  );
};

export default AvatarSelection;
