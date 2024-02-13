const fs = require('fs').promises; // Importation du module 'fs' pour les opérations de fichier

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

const selectedCity = selectRandomCity(cities);

async function fetchDataTemperatureByCity(selectedCity) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lng}&current_weather=true`;

    try {
        const data = await fetch(apiUrl);
        const response = await data.json();
        if (response) {
            const temperature = response.current_weather.temperature;

            // Supprimer le fichier existant pour la ville choisie
            try {
                await fs.unlink(`${selectedCity.name}.txt`);
                console.log(`Fichier existant pour ${selectedCity.name} supprimé.`);
            } catch (unlinkError) {
                // Ne rien faire si le fichier n'existe pas
            }

            // Écrire le résultat dans un nouveau fichier
            await fs.writeFile(`${selectedCity.name}.txt`, `${temperature}°C`);
            console.log(`La température au ${selectedCity.name} est ${temperature}°C, et a été écrite dans ${selectedCity.name}.txt`);
        } else {
            throw new Error(`Error fetching: ${data.message}`);
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
}

fetchDataTemperatureByCity(selectedCity);