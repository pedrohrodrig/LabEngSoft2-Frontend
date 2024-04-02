import React from "react";

import "./doctorpaymentspage.css";
import Title from "../../components/title/title";

function DoctorPaymentsPage() {
  return (
    <div className="payment-list page">
      <Title head="Pagamentos" body="Veja o histórico de recebimento mensal" />
    </div>
  );
}

export default DoctorPaymentsPage;