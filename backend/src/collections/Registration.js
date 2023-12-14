import payload from "payload";

/** @type {import('payload/types').CollectionConfig} */
const Registration = {
    slug: "Registration",

    admin: {
        useAsTitle: "Nama",
    },

    access: {
        read: () => true,
        create: () => true,
    },

    fields: [
        {
            name: "Nama",
            label: "Nama",
            type: "text",
            required: true,
        },
        {
            name: "Email",
            label: "Email",
            type: "email",
            required: true,
            unique: true, // Ensure the email is unique
        },
        {
            name: "AsalSekolah",
            label: "Asal Sekolah",
            type: "text",
            required: true,
        },
        {
            name: "Status",
            label: "Status",
            type: "select",
            required: true,
            options: [
                { label: "Waiting", value: "waiting" },
                { label: "Rejected", value: "rejected" },
                { label: "Accepted", value: "accepted" },
            ],
            defaultValue: "waiting", // Set default value to Waiting
        },
        {
            name: "TanggalPendaftaran",
            label: "Tanggal Pendaftaran",
            type: "date",
            required: true,
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'd MMM yyy',
                },
            },
        },
    ],
};

export default Registration;
