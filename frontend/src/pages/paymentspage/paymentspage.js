import React from "react";
import Title from "../../components/title/title";
import CardList from "../../components/cardlist/cardlist";

import paymentList from "./payments";
import "./paymentspage.css";

function PaymentsPage() {
    return (
        <div className="patient-list page">
            <Title 
                head="Pagamentos"
                body="Veja o histórico de recebimento mensal" 
            />

            <CardList objects={paymentList} />
        </div>
    );
}

export default PaymentsPage;
