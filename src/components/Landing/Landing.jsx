import React from "react";
import Typed from "react-typed";
import Card from 'react-bootstrap/Card';

function Landing() {
  return (<>
    <Card className="typed " style={{height: "70vh", width: "40vw"}}>
        <Typed
          strings={[
            "Ratiba"
          ]}
          typeSpeed={150}
          backSpeed={150}
          loop
        />
        <h4 style={{margin:"15px"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, consequatur.
        </h4>
        <p style={{fontSize: "20px",margin:"10px"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, dolores.
        </p>
      </Card>
    </>
  );
}

export default Landing;