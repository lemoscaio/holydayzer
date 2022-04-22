import express from "express";

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/07/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" },
];

const app = express();

app.get("/holidays", (req, res) => {
    res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
    const todayDate = new Date().toLocaleDateString("en-US");

    const foundDate = holidays.find((holiday) => holiday.date === todayDate);

    foundDate ? res.send(foundDate) : res.send("Não, hoje não é feriado");
});

app.get("/:month", (req, res) => {
    const { month } = req.params;
    const monthHolidays = holidays.filter((holiday) => {
        return holiday.date.split("/")[0] === month
    })
    res.send(monthHolidays);
});

app.listen(4000, () => {
});
