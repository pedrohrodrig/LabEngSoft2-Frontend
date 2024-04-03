import React from "react";

import "./doctorpaymentspage.css";
import Title from "../../components/title/title";
import PaymentList from "../../components/lists/paymentlist/paymentlist";
import paymentsList from "../../objects/payments";

function DoctorPaymentsPage() {
  return (
    <div className="payment-list page">
      <Title head="Pagamentos" body="Veja o histórico de recebimento mensal" />
      <div className="payment">
        <PaymentList payments={paymentsList} />
      </div>
    </div>
  );
}

export default DoctorPaymentsPage;