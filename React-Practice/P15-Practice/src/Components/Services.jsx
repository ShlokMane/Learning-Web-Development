import React, { useEffect } from "react";

function Services() {
  useEffect(() => {
    console.log("Services started");

    return () => console.log("Services stopped");
  }, []);
  return <div>Services</div>;
}

export default Services;
