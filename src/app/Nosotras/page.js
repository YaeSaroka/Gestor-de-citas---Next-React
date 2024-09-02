import Image from "../Img/nosotras.jpg";

const Page = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-content">
        <h2 className="about-us-title">Hola! Nos llamamos Cami y Yae</h2>
        <hr />
        <p className="about-us-description">
          Somos estudiantes de informática de ORT Almagro, una educación
          especializada en desarrollo web y manejo de base de datos.
        </p>
        <div className="about-us-details">
          <div className="about-us-detail">
            <div className="detail-label">Edad:</div>
            <div className="detail-value">17 años</div>
          </div>
          <div className="about-us-divider"></div>
          <div className="about-us-detail">
            <div className="detail-label">Email:</div>
            <div className="detail-value">
              yaesaroka@gmail.com / camibelu1302@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
