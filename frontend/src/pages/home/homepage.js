import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../../components/button/button";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!Cookies.get('access_token')){
      navigate("/login");
    }
  }, [navigate]);

  return(
    <div style={{gap: "30px"}} className="home page">
      <h1>Oi Gente ^^</h1>
      <p>Foi díficil pra caralho fazer isso, mas ainda n tá pronto, tá?</p>
      <p style={{marginBottom: "10px"}}>PS: Olha eu sei centralizar div</p>

      <Button
          className="grad medium"
          text="Test Page"
          icon="right"
          iconType="arrow-right"
          to="/test"
      />
    </div>
  );
}

export default HomePage;
