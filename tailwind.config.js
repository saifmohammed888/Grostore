module.exports = {
    content: ["/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        backgroundImage: {
            banner: "url('https://res.cloudinary.com/saif-freelance2/image/upload/v1645628781/Grostore/Banner/banner_nr4emk.svg')",
        },
        screens: {
            laptop: "1025px",
            sm: "576px",
            md: "900px",
            lg: "1440px",
        },
    },
    plugins: [],
}
