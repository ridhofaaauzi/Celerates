import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary">
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <h4>Infinitix 2024</h4>
          </div>
          <div className="d-flex justify-content-between gap-5">
            <a href="#" className="text-decoration-none text-white">
              Tentang Kami
            </a>
            <a href="#" className="text-decoration-none text-white">
              Syarat dan Ketentuan
            </a>
            <a href="#" className="text-decoration-none text-white">
              Kebijakan Privasi
            </a>
          </div>
          <div className="d-flex justify-content-between gap-5">
            <p>instagram</p>
            <p>facebook</p>
            <p>tiktok</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
