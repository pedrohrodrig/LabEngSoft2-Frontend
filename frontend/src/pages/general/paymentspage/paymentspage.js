import React from "react";
import Title from "../../../components/title/title";

import "./paymentspage.css";

function PaymentsPage() {
    return (
        <div className="patient-list page">
            <Title
                head="Pagamentos"
                body="Veja o histórico de recebimento mensal"
            />

        </div>
    );
}

export default PaymentsPage;
