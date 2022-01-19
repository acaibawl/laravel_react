import React from "react";
import reactDom from "react-dom";
import { Button, Card } from "@material-ui/core";

const Home = () => {
  return (
    <div className="containar">
      <Card>
        <Button color="primary" variant="contained" href={`/example`}>Exampleに遷移</Button>
      </Card>
    </div>
  );
};

export default Home;
