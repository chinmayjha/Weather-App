// Weather App JavaScript
// API Configuration
const API_KEY = 'e8a094fa3476461b87e4a5ec829cd305'; // OpenWeatherMap API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Demo mode flag - if no API key is set, show demo data
const DEMO_MODE = API_KEY === 'YOUR_API_KEY_HERE';

// DOM Elements
const locationElement = document.getElementById('user-location');
const currentTempElement = document.querySelector('.current-temp');
const minMaxTempElement = document.querySelector('.min-max-temp');
const descriptionElement = document.querySelector('.description');
const weatherIconElement = document.querySelector('.weather-icon');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const pressureElement = document.getElementById('pressure');
const visibilityElement = document.getElementById('visibility');
const feelsLikeElement = document.getElementById('feels-like');
const sunriseElement = document.getElementById('sunrise');
const sunsetElement = document.getElementById('sunset');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const locationBtn = document.getElementById('location-btn');
const loadingElement = document.querySelector('.loading');
const weatherAppElement = document.querySelector('.weather-app');
const forecastContainer = document.getElementById('forecast-container');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Try to get user's location on load
    getUserLocation();
    
    // Event listeners
    searchBtn?.addEventListener('click', handleSearch);
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    locationBtn?.addEventListener('click', getUserLocation);
});

// Get user's current location
function getUserLocation() {
    // If in demo mode, show demo data immediately
    if (DEMO_MODE) {
        showLoading(true);
        setTimeout(() => {
            showDemoData('London');
            showLoading(false);
        }, 1000);
        return;
    }
    
    if (navigator.geolocation) {
        showLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude);
            },
            (error) => {
                console.error('Geolocation error:', error);
                // Fallback to default location
                fetchWeatherByCity('London');
            }
        );
    } else {
        // Fallback to default location
        fetchWeatherByCity('London');
    }
}

// Handle search
function handleSearch() {
    const city = searchInput?.value.trim();
    if (city) {
        fetchWeatherByCity(city);
    }
}

// Fetch weather by city name
async function fetchWeatherByCity(city) {
    showLoading(true);
    
    // If in demo mode, show demo data
    if (DEMO_MODE) {
        setTimeout(() => {
            showDemoData(city);
            showLoading(false);
        }, 1000);
        return;
    }
    
    try {
        const currentWeatherUrl = `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const forecastUrl = `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('City not found');
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();
        
        updateWeatherUI(currentData);
        updateForecastUI(forecastData);
        showLoading(false);
    } catch (error) {
        console.error('Error fetching weather:', error);
        showError('Unable to fetch weather data. Please check the city name and try again.');
        showLoading(false);
    }
}

// Fetch weather by coordinates
async function fetchWeatherByCoords(lat, lon) {
    showLoading(true);
    
    // If in demo mode, show demo data
    if (DEMO_MODE) {
        setTimeout(() => {
            showDemoData('London');
            showLoading(false);
        }, 1000);
        return;
    }
    
    try {
        const currentWeatherUrl = `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const forecastUrl = `${API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('Unable to fetch weather data');
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();
        
        updateWeatherUI(currentData);
        updateForecastUI(forecastData);
        showLoading(false);
    } catch (error) {
        console.error('Error fetching weather:', error);
        showError('Unable to fetch weather data. Please try again.');
        showLoading(false);
    }
}

// Update weather UI with data
function updateWeatherUI(data) {
    // Update location
    if (locationElement) {
        locationElement.textContent = `${data.name}, ${data.sys.country}`;
    }
    
    // Update temperature
    if (currentTempElement) {
        currentTempElement.textContent = `${Math.round(data.main.temp)}°C`;
    }
    
    // Update min/max temperature
    if (minMaxTempElement) {
        minMaxTempElement.textContent = `Min: ${Math.round(data.main.temp_min)}°C, Max: ${Math.round(data.main.temp_max)}°C`;
    }
    
    // Update description
    if (descriptionElement) {
        descriptionElement.textContent = data.weather[0].description;
    }
    
    // Update weather icon
    updateWeatherIcon(data.weather[0].main, data.weather[0].icon);
    
    // Update details
    if (humidityElement) {
        humidityElement.textContent = `${data.main.humidity}%`;
    }
    
    if (windElement) {
        windElement.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    }
    
    if (pressureElement) {
        pressureElement.textContent = `${data.main.pressure} hPa`;
    }
    
    if (visibilityElement) {
        visibilityElement.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    }
    
    if (feelsLikeElement) {
        feelsLikeElement.textContent = `${Math.round(data.main.feels_like)}°C`;
    }
    
    if (sunriseElement) {
        sunriseElement.textContent = formatTime(data.sys.sunrise);
    }
    
    if (sunsetElement) {
        sunsetElement.textContent = formatTime(data.sys.sunset);
    }
    
    // Update background based on weather
    updateBackground(data.weather[0].main, data.weather[0].icon);
}

// Update forecast UI
function updateForecastUI(data) {
    if (!forecastContainer) return;
    
    forecastContainer.innerHTML = '';
    
    // Get one forecast per day (filter by selecting entries at 12:00)
    const dailyForecasts = [];
    const processedDays = new Set();
    
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toDateString();
        
        // Only add one forecast per day, preferring noon entries
        if (!processedDays.has(dayKey) && dailyForecasts.length < 5) {
            const hour = date.getHours();
            // Prefer entries around noon (10-14)
            if (hour >= 10 && hour <= 14) {
                dailyForecasts.push(item);
                processedDays.add(dayKey);
            }
        }
    });
    
    // If we don't have enough forecasts, fill with any available
    if (dailyForecasts.length < 5) {
        const remainingForecasts = data.list.filter(item => {
            const date = new Date(item.dt * 1000);
            const dayKey = date.toDateString();
            return !processedDays.has(dayKey);
        }).slice(0, 5 - dailyForecasts.length);
        
        // Update processedDays to include the new forecasts
        remainingForecasts.forEach(item => {
            const date = new Date(item.dt * 1000);
            processedDays.add(date.toDateString());
        });
        
        dailyForecasts.push(...remainingForecasts);
    }
    
    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        forecastCard.innerHTML = `
            <div class="forecast-day">${dayName}</div>
            <div class="forecast-icon">${getWeatherEmoji(forecast.weather[0].main)}</div>
            <div class="forecast-temp">${Math.round(forecast.main.temp)}°C</div>
            <div class="forecast-desc">${forecast.weather[0].main}</div>
        `;
        
        forecastContainer.appendChild(forecastCard);
    });
}

// Update weather icon
function updateWeatherIcon(weatherMain, iconCode) {
    if (!weatherIconElement) return;
    
    const emoji = getWeatherEmoji(weatherMain);
    weatherIconElement.textContent = emoji;
}

// Get weather emoji based on condition
function getWeatherEmoji(weatherMain) {
    const weatherEmojis = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Drizzle': '🌦️',
        'Thunderstorm': '⛈️',
        'Snow': '❄️',
        'Mist': '🌫️',
        'Smoke': '🌫️',
        'Haze': '🌫️',
        'Dust': '🌫️',
        'Fog': '🌫️',
        'Sand': '🌫️',
        'Ash': '🌫️',
        'Squall': '💨',
        'Tornado': '🌪️'
    };
    
    return weatherEmojis[weatherMain] || '🌤️';
}

// Update background based on weather
function updateBackground(weatherMain, iconCode) {
    const body = document.body;
    const isNight = iconCode.includes('n');
    
    // Remove all weather classes
    body.className = '';
    
    // Add weather-specific class
    if (isNight) {
        body.classList.add('night');
    } else {
        switch(weatherMain) {
            case 'Clear':
                body.classList.add('clear');
                break;
            case 'Clouds':
                body.classList.add('cloudy');
                break;
            case 'Rain':
            case 'Drizzle':
                body.classList.add('rainy');
                break;
            case 'Thunderstorm':
                body.classList.add('stormy');
                break;
            case 'Snow':
                body.classList.add('snowy');
                break;
            default:
                body.classList.add('default');
        }
    }
}

// Format Unix timestamp to time
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

// Show/hide loading state
function showLoading(show) {
    if (loadingElement) {
        loadingElement.style.display = show ? 'flex' : 'none';
    }
    if (weatherAppElement) {
        weatherAppElement.style.opacity = show ? '0.5' : '1';
    }
}

// Show error message
function showError(message) {
    alert(message);
}

// Demo data function for when no API key is configured
function showDemoData(city) {
    // Calculate dynamic sunrise/sunset times
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const sunrise = Math.floor(todayStart.getTime() / 1000) + (6 * 3600 + 40 * 60); // 6:40 AM
    const sunset = Math.floor(todayStart.getTime() / 1000) + (17 * 3600 + 30 * 60); // 5:30 PM
    
    // Demo weather data
    const demoData = {
        name: city || 'London',
        sys: { country: 'GB', sunrise: sunrise, sunset: sunset },
        main: {
            temp: 22,
            feels_like: 21,
            temp_min: 18,
            temp_max: 25,
            pressure: 1013,
            humidity: 65
        },
        weather: [
            { main: 'Clear', description: 'clear sky', icon: '01d' }
        ],
        wind: { speed: 3.5 },
        visibility: 10000
    };
    
    // Demo forecast data with proper timestamps
    const demoForecast = {
        list: [
            {
                dt: Math.floor(Date.now() / 1000) + 86400,
                main: { temp: 23 },
                weather: [{ main: 'Clear' }]
            },
            {
                dt: Math.floor(Date.now() / 1000) + 172800,
                main: { temp: 20 },
                weather: [{ main: 'Clouds' }]
            },
            {
                dt: Math.floor(Date.now() / 1000) + 259200,
                main: { temp: 19 },
                weather: [{ main: 'Rain' }]
            },
            {
                dt: Math.floor(Date.now() / 1000) + 345600,
                main: { temp: 21 },
                weather: [{ main: 'Clouds' }]
            },
            {
                dt: Math.floor(Date.now() / 1000) + 432000,
                main: { temp: 24 },
                weather: [{ main: 'Clear' }]
            }
        ]
    };
    
    updateWeatherUI(demoData);
    updateForecastUI(demoForecast);
}

// Developer Info Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic copyright year
    const copyright = document.getElementById("copyright");
    if (copyright) {
        copyright.textContent = `Copyright © ${new Date().getFullYear()}`;
    }

    const developerBtn = document.getElementById('developerInfoBtn');
    const developerModal = document.getElementById('developerModal');
    const developerOverlay = document.getElementById('developerOverlay');
    const closeDeveloperBtn = document.getElementById('closeDeveloperBtn');

    // Open modal
    if (developerBtn) {
        developerBtn.addEventListener('click', () => {
            if (developerModal && developerOverlay) {
                developerModal.style.display = 'block';
                developerOverlay.style.display = 'block';
                setTimeout(() => {
                    developerModal.classList.add('active');
                    developerOverlay.classList.add('active');
                }, 10);
            }
        });
    }

    // Close modal
    const closeModal = () => {
        if (developerModal && developerOverlay) {
            developerModal.classList.remove('active');
            developerOverlay.classList.remove('active');
            setTimeout(() => {
                developerModal.style.display = 'none';
                developerOverlay.style.display = 'none';
            }, 400);
        }
    };

    if (closeDeveloperBtn) {
        closeDeveloperBtn.addEventListener('click', closeModal);
    }

    if (developerOverlay) {
        developerOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && developerModal?.classList.contains('active')) {
            closeModal();
        }
    });
});
