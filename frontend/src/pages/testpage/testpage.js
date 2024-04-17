import {React, useState} from "react";
import "./testpage.css";

// import Button from "../../components/button/button";
// import BigNumber from "../../components/bignumber/bignumber";
// import Card from "../../components/card/card";
// import Logo from "../../components/logo/logo";
import Title from "../../components/title/title";
// import UserPhoto from "../../components/userphoto/userphoto";
import Dropdown from "../../components/dropdown/dropdown";

function TestPage() {

    const operation = [
        { value: "ADD", label: "ADD" },
        { value: "SUB", label: "SUB" },
        { value: "RSB", label: "RSB" },
        { value: "MUL", label: "MUL" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("ADD");

    const handleOperation = (data) => {
        setSelectedOperation(data);
    };

    return (
      <div className="test page">
        <Title head="Componentes React" />

        <div className="components">
          <Dropdown
            options={operation}
            handleSelectedOptions={handleOperation}
            selectedOption={selectedOperation}
            placeholder="Selecione a instrução"
          />
          {/* <div className="col">
                    <BigNumber number="Big" text="Number" iconType="heart"/>
                    <Card />
                </div>

                <div className="col">
                    <div className="logos row">
                        <Logo />
                        <Logo className="black" />
                    </div>
                    <div className="photos row">
                        <UserPhoto className="grad" />
                        <UserPhoto />
                    </div>
                    <div className="buttons row">
                        <Button className="grad medium" text="Button" />
                        <Button className="grad medium outline" text="Button" />
                    </div>
                    <div className="buttons row">
                        <Button className="black medium" text="Button" />
                        <Button className="black outline medium" text="Button" />
                    </div>
                </div> */}
        </div>
      </div>
    );
}

export default TestPage;
