const consultations = [
    {
        psychologist: 1, // Assumindo que este é o ID do psicólogo
        id_patient: 1,
        status: "Requested",
        scheduled_time: "2024-04-10T18:00:00",
        payment_proof: null, // Nenhum comprovante de pagamento para consultas solicitadas
    },
    {
        psychologist: 1,
        id_patient: 2,
        status: "Awaiting Payment",
        scheduled_time: "2024-03-18T19:00:00",
        payment_proof: null, // Assumindo que está aguardando pagamento
    },
    {
        psychologist: 1,
        id_patient: 3,
        status: "Confirmed",
        scheduled_time: "2024-03-18T20:00:00",
        payment_proof: "/payment_proofs/payment_proof_3.pdf", // Exemplo de comprovante de pagamento
    },
    {
        psychologist: 1,
        id_patient: 4,
        status: "Completed",
        scheduled_time: "2024-03-19T18:00:00",
        payment_proof: "/payment_proofs/payment_proof_4.pdf", // Exemplo de comprovante de pagamento
    },
    {
        psychologist: 1,
        id_patient: 5,
        status: "Cancelled",
        scheduled_time: "2024-03-20T18:00:00",
        payment_proof: null, // Nenhum comprovante de pagamento para consultas canceladas
    },
];

export default consultations;
