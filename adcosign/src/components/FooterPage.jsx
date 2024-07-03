import { MDBContainer, MDBFooter } from "mdbreact";
import React from "react";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3 " style= {{color:"black"}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#" target="_blank" className="text-bold" style= {{color:"black"}}> Collabify.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
