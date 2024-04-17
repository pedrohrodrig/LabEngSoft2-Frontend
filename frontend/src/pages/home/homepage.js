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
            <p>Eu sou o Lucas, bem vindo ao Apollo</p>

            <div style={{display:"flex", gap: "30px", marginTop:"30px"}}>
                <Button
                    className="grad medium"
                    text="Test Page"
                    icon="right"
                    iconType="arrow-right"
                    to="/test"
                />
                <Button
                    className="grad medium"
                    text="Personal"
                    icon="right"
                    iconType="arrow-right"
                    to="/personal"
                />
                <Button
                    className="grad medium"
                    text="Nutricionist"
                    icon="right"
                    iconType="arrow-right"
                    to="/nutritionist"
                />
            </div>


        </div>
    );
}

export default HomePage;
