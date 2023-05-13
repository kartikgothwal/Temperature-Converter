const ConvertBtn = document.getElementById('convert-btn');
ConvertBtn.addEventListener("click", () => {
    var CelsiusData, FahrenheitData, KelvinData;

    var DegreeData = document.getElementById('get-degree-data-hero').value;



    const TypeFromData = document.getElementById('get-type-data').value;

    const TypeToData = document.getElementById('get-type-data-second').value;

    if (TypeFromData == "Fahrenheit") {
        var CelsiusData, KelvinData;
        if (TypeToData == "Fahrenheit") {
            alert('Cannot convert fahrenheit to fahrenheit')
        }
        else if (TypeToData == "Celsius") {
            CelsiusData = ((DegreeData - 32) * 5 / 9);
            document.getElementById('show-result').innerHTML = Math.round(CelsiusData) + " °C";
        }
        else if (TypeToData == "Kelvin") {
            KelvinData = (((DegreeData - 32) * (5 / 9)) + 273.15);
            document.getElementById('show-result').innerHTML = Math.round(KelvinData) + " K";
        }
        else {
            alert('Invalid Type');
        }
    }

    if (TypeFromData == "Celsius") {
        var FahrenheitData, KelvinData;
        if (TypeToData == "Celsius") {
            alert('Cannot convert Celsius to Celsius')
        }
        else if (TypeToData == "Fahrenheit") {
            FahrenheitData = ((DegreeData * 1.8) + 32);
            document.getElementById('show-result').innerHTML = Math.round(FahrenheitData) + " °F";
        }
        else if (TypeToData == "Kelvin") {
            DegreeData = parseInt(DegreeData);
            KelvinData = (DegreeData + 273.15);
            console.log(KelvinData)
            document.getElementById('show-result').innerHTML = Math.round(KelvinData) + " K";
        }
        else {
            alert('Invalid Type');
        }
    }
    if (TypeFromData == "Kelvin") {
        var CelsiusData, FahrenheitData;
        if (TypeToData == "Kelvin") {
            alert('Cannot convert Kelvin to Kelvin')
        }
        else if (TypeToData == "Celsius") {
            CelsiusData = (DegreeData - 273.15);
            document.getElementById('show-result').innerHTML = Math.round(CelsiusData) + " °C";
        }
        else if (TypeToData == "Fahrenheit") {
            FahrenheitData = (1.8 * (DegreeData - 273) + 32);
            document.getElementById('show-result').innerHTML = Math.round(FahrenheitData) + " °F";
        }
        else {
            alert('Invalid Type');

        }
    }
});
