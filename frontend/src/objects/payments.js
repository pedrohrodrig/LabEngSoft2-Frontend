const paymentsList = [
    {
        patientId: 1,
        patientName: "Lucas Garieri",
        value: 250.00,
        date: "2024-03-18",
        hour: "18:00",
        timestamp: "18 Mar 2024 - 18:00",
        status: "Pago",
    },
    {
        patientId: 2,
        patientName: "Lucas Garieri",
        value: 250.00,
        date: "2024-03-18",
        hour: "19:00",
        timestamp: "18 Mar 2024 - 19:00",
        status: "Pago",
        fine: 0.00,
    },
    {
        patientId: 1,
        patientName: "Lucas Garieri",
        value: 250.00,
        date: "2024-03-18",
        hour: "17:20",
        timestamp: "18 Mar 2024 - 17:20",
        status: "Pendente",
        fine: 0.00,
    },
    {
        patientId: 3,
        patientName: "Lucas Garieri",
        value: 250.00,
        date: "2024-03-19",
        hour: "15:40",
        timestamp: "18 Mar 2024 - 15:40",
        status: "Atrasado",
        fine: 10.50,
    }
];

export default paymentsList;