import { describe, it, vi, beforeAll, expect } from "vitest"
import { WeatherService } from "./weather-api"

describe("getWeatherMessage", () => {
	let service: WeatherService
	const mockWeatherApi = {
		getTemperature: vi.fn(),
	}

	beforeAll(() => {
		service = new WeatherService(mockWeatherApi)
	})

	it("should return city is pleasant when temperature is in between 10 and 30", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(20)
		expect(await service.getWeatherMessage("mumbai")).toBe(
			"mumbai is pleasant!",
		)
	})

	it("should return city is hot when temperature is >30", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(35)
		expect(await service.getWeatherMessage("delhi")).toBe("delhi is hot!")
	})

	it("should return city is cold when temperature is <10", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(5)
		expect(await service.getWeatherMessage("dharamshala")).toBe(
			"dharamshala is cold!",
		)
	})

	// B - Boundaries
	it("should return city is hot when temperature is exactly 31", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(31)
		expect(await service.getWeatherMessage("ahmedabad")).toBe(
			"ahmedabad is hot!",
		)
	})

	it("should return city is pleasant when temperature is exactly 30", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(30)
		expect(await service.getWeatherMessage("bangalore")).toBe(
			"bangalore is pleasant!",
		)
	})

	it("should return city is pleasant when temperature is exactly 10", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(10)
		expect(await service.getWeatherMessage("shimla")).toBe(
			"shimla is pleasant!",
		)
	})

	it("should return city is cold when temperature is exactly 9", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(9)
		expect(await service.getWeatherMessage("himachal")).toBe(
			"himachal is cold!",
		)
	})

	// E - Exceptional cases
	it("should throw an error when city does not exist", async () => {
		mockWeatherApi.getTemperature.mockRejectedValue(new Error("City not found"))
		await expect(service.getWeatherMessage("atlantis")).rejects.toThrow(
			"City not found",
		)
	})

	it("should throw an error when API fails", async () => {
		mockWeatherApi.getTemperature.mockRejectedValue(new Error("API failure"))
		await expect(service.getWeatherMessage("delhi")).rejects.toThrow(
			"API failure",
		)
	})

	it("should throw an error when temperature scale is mismatched", async () => {
		mockWeatherApi.getTemperature.mockResolvedValue(310) // Kelvin instead of Celsius
		await expect(service.getWeatherMessage("delhi")).rejects.toThrow(
			"Temperature scale mismatch",
		)
	})
})
