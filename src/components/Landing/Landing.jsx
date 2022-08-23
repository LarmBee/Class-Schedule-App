import React from "react";
import Typed from "react-typed";
import Card from 'react-bootstrap/Card';

function Landing() {
  return (<>
    <Card body className="typed m-lg-3 mx-4">
        <Typed
          strings={[
            "Welcome To St Paul's Nyabururu College",
            "We value our students",
            "We are glad to serve you"
          ]}
          typeSpeed={150}
          backSpeed={150}
          loop
        />
        <h4 style={{margin:"15px"}}>Website with Saasland</h4>
        <p style={{fontSize: "20px",margin:"10px"}}>Launch your new website in style with SaasLand,
        a complete collection of carefully
        crafted pages, modular components and awesome features.</p>
      </Card>
    </>
  );
}

export default Landing;