import React from 'react'

const WhatsappChat = () => {
    const whatsapp = {
        position: 'fixed',
        bottom: '10px',
        left: '20px',
        zIndex: '1',
        width: '60px',
        cursor: 'pointer',
    }
  return (
    <>
      <div
        style={whatsapp}
        onClick={() => window.open("https://wa.me/923034143408", "_blank")}
        className="animate__animated animate__backInLeft"
      >
        <img
          src="img/whatsapp.png"
          className="img-fluid animate__animated animate__wobble animate__delay-5s"
          alt="Whatsapp Images"
        />
      </div>
    </>
  );
}

export default WhatsappChat