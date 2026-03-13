interface WeatherApiResponse {
	getTemperature(city: string): Promise<any>
}

// const response = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=5141c378c8a54be7b5951326261103&q=${city}`
// );
// const data = await response.json();

export class WeatherService {
	constructor(private weatherApi: any) {}

	async getWeatherMessage(city: string) {
		const temperature = await this.weatherApi.getTemperature(city)
		if (temperature > 60 || temperature < -90) {
			throw new Error("Temperature scale mismatch")
		}
		if (temperature > 30) {
			return `${city} is hot!`
		}
		if (temperature < 10) {
			return `${city} is cold!`
		}
		return `${city} is pleasant!`
	}
}
