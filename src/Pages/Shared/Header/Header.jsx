import { Container } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5 mb-3">
        <img src={logo} alt="" />
        <p className="text-secondary fs-4 mb-1 mt-4">
          Journalism Without Fear or Favour
        </p>
        <p className="fs-3 mt-1">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </Container>
  );
};

export default Header;
