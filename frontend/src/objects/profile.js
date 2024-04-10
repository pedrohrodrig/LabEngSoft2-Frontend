const professional = {
        id_user: 1,
        full_name: "Dr. Alex Mendes",
        date_of_birth: "1980-04-15",
        email: "alex.mendes@example.com",
        phone_number: "(11) 99999-9999",
        document: "123.456.789-00",
        start_time_morning: "08:00",
        end_time_morning: "12:00",
        start_time_afternoon: "14:00",
        end_time_afternoon: "18:00",
        consultation_price: 150.00,
        profile_picture: "/profile_pictures/alex_mendes_profile.jpg"
};

const patient = {
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
};

export { professional, patient };