import logo1 from "../asset/images/logo.png";
import video from "../asset/images/Hero Image.mp4";

function Header() {
  return (
    <>
      <section className="nav_custom">
        <nav
          class="navbar navbar-light bg-light"
          style={{ justifyContent: "space-between" }}
        >
          <a class="navbar-brand" href="#">
            <img src={logo1} width="150" height="150" alt="" />
          </a>
          <div className="nav justify-content-left">
            <h4>EXCLUSIVE CO-OP MAILER</h4>
          </div>
          <div className="nav justify-content-left">
            <h4>EXCLUSIVE CO-OP MAILER</h4>
          </div>
        </nav>

        <video
          width="400"
          controls
          style={{ width: "100%", height: "auto" }}
          autoPlay
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </section>
    </>
  );
}

export default Header;
