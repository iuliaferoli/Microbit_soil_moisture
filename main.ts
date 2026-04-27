let soil_moisture3 = 0
let soil_moisture2 = 0
let soil_moisture = 0
datalogger.setColumnTitles(
"broccoli1",
"leek",
"tomato"
)
loops.everyInterval(600000, function () {
    soil_moisture = Environment.ReadSoilHumidity(AnalogPin.P1)
    soil_moisture2 = Environment.ReadSoilHumidity(AnalogPin.P2)
    soil_moisture3 = Environment.ReadSoilHumidity(AnalogPin.P3)
    OLED.init(128, 64)
    datalogger.log(
    datalogger.createCV("broccoli1", soil_moisture),
    datalogger.createCV("leek", soil_moisture2),
    datalogger.createCV("tomato", soil_moisture3)
    )
})
