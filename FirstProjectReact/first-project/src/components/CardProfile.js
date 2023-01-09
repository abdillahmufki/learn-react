import card1 from "./../assets/bg.jpg";
import "../css/style.css";
import Style from "../css/CardProfle.module.css";
import Profile from "./../assets/profile.png";

const CardProfile = () => {
  /* css wrapper */
  const wrapper = {
    backgroundColor: "#0081C9",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${card1})`,
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    /* Inline css */
    /* CSS FILE */
    <div style={wrapper}>
      <div className="card">
        <img src={Profile} />
        <div className="profile">Frontend Developer</div>
        <div className="name">Abdillah Mufki Auzan Mubin</div>
        <div className="dsc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <button className="button">Contact Me</button>
      </div>

      {/* css modul */}
      <div className="card">
        <img src={Profile} />
        <div className="profile">Frontend Developer</div>
        <div className="name">Abdillah Mufki Auzan Mubin</div>
        <div className="dsc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <button className={Style.button}>Contact Me</button>
      </div>
    </div>
  );
};

export default CardProfile;
