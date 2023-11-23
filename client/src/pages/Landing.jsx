import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Landing.css";

const LandingPage = () => {
  const UrlBasepath = import.meta.env.VITE_API_SERVER_BASEPATH;

  return (
    <div id="homepage">
      <div id="homepageText">
        <img
          id="heroImage"
          alt="hero image"
          src={`${UrlBasepath}/assets/homepage/landingPageBackground.jpg`}
        />
        <Heading>Welcome to BeliBersamaID  </Heading>
        <Text margin="40px 0" fontSize="2xl">
        BeliBersamaID merupakan perusahaan teknologi Indonesia dengan misi pemerataan ekonomi secara digital di Indonesia. 
        Visi perusahaan adalah untuk menciptakan ekosistem dimana siapa pun bisa memulai dan menemukan apa pun.
        </Text>
        <Link to="/store">
          <Button colorScheme="blue">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
