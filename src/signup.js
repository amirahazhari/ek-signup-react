import React, { useState } from 'react';
import ClayButton from '@clayui/button';
import  {ClayInput} from '@clayui/form';
import '@clayui/css/lib/css/atlas.css'; // Make sure to include ClayUI CSS
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const MyForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const togglePasswordVisibility = () => {
setShowPassword(!showPassword);
};

const toggleConfirmPasswordVisibility = () => {
setShowConfirmPassword(!showConfirmPassword);
};

  return (
    <div className="bg-color">
      <div className="bg-register">
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-title">Cipta akaun anda</h1>
          </div>
          <form className="account-form">
            <div className="form-group">
              <label htmlFor="username">
                Nama Pengguna <span>ⓘ</span>
              </label>
              <ClayInput
                type="text"
                id="username"
                placeholder="Taip nama pengguna anda"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="role">Anda adalah seorang...</label>
                <select id="role">
                    <option selected>Pilih peranan anda</option>
                    <option>Murid</option>
                    <option>Ibubapa</option>
                    <option>Guru</option>

                </select>
              </div>

              <div className="form-group">
                <label htmlFor="birthdate">Tarikh lahir</label>
                <ClayInput
                  type="text"
                  id="birthdate"
                  placeholder="DD/MM/YYYY"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Alamat emel</label>
              <ClayInput
                type="email"
                id="email"
                placeholder="Taip alamat emel anda"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Kata laluan</label>
                <div className="password-input">
                  <ClayInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Taip kata laluan anda"
                  />
                  <span className="show-password" onClick={togglePasswordVisibility}>
                        👁️
                    </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirm-password">Sahkan kata laluan</label>
                <div className="password-input">
                  <ClayInput
                    type={showPassword ? 'text' : 'password'}
                    id="confirm-password"
                    placeholder="Taip semula kata laluan anda"
                  />
                     <span className="show-password" onClick={toggleConfirmPasswordVisibility}>
                        👁️
                    </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="submit-btn-container">
          <Link to="/choosechar"> {/* Use Link to navigate */}
            <ClayButton displayType="primary" className='submit-btn'>
              <span className="btn-text">Seterusnya</span>
            </ClayButton>
          </Link>
        </div>
        <div className="info-paragraph">
          <p>
            Maklumat anda dikumpul dan digunakan mengikut Dasar Privasi kami
            untuk pendaftaran akaun dan penambahbaikan perkhidmatan. Kami
            komited melindungi privasi dan keselamatan data anda. Maklumat anda
            tidak akan dikongsi dengan pihak ketiga tanpa kebenaran anda
            kecuali jika dikehendaki oleh undang-undang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
