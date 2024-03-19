const professional = [
    {
        id: 1,
        name: "Lucas Garieri",
        photo: "/images/user.jpeg",
        phone: "61982653119",
        age: 22,
        service: "doctor",
        appointment: "online",
        email: "lucas_pvg@usp.br",
        price: "100,00",
        appointments: [1, 2, 3, 4, 5],
        patients: [1, 2, 3, 4, 5]
    }
];

const patient = [
    {
        id: 1,
        name: "Lucas Garieri",
        photo: "/images/user.jpeg",
        phone: "61982653119",
        age: 22,
        height: 170,
        weight: 65,
        email: "lucas_pvg@usp.br",
        appointments: [1, 6, 7, 8],
        professionals: [1, 2, 3, 4]
    }
];

export { professional, patient };