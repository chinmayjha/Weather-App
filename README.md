# 🌤️ Weather App

<div align="center">

![Weather App](https://img.shields.io/badge/Weather-App-66a6ff?style=for-the-badge&logo=weatherapi&logoColor=white)
![Version](https://img.shields.io/badge/Version-2.0.0-success?style=for-the-badge)
![Mobile Optimized](https://img.shields.io/badge/Mobile-Optimized-orange?style=for-the-badge)
![Fully Responsive](https://img.shields.io/badge/Responsive-100%25-38bdf8?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A beautiful, modern weather application with real-time data and stunning glassmorphic design**

[🚀 Live Demo](http://chinmayjha.tech/Weather-App/) • [🐛 Report Bug](https://github.com/chinmayjha/Weather-App-UI/issues) • [✨ Request Feature](https://github.com/chinmayjha/Weather-App-UI/issues)

</div>

---

## ✨ Features

### 🎨 **Premium Design & UX**
- **Advanced Glassmorphism** – Multi-layer blur effects with premium gradients
- **Dynamic Backgrounds** – Background changes based on weather conditions and time of day
- **Smooth Animations** – 60fps transitions with GPU acceleration
- **Mobile-First Responsive** – Perfect scaling from 320px mobile to 4K ultra-wide displays
- **Professional Typography** – Poppins and Roboto fonts for elegant text display
- **Interactive Elements** – Hover effects and smooth micro-interactions

### ⚡ **Core Functionality**
- 🌍 **Real-Time Weather Data** – Get current weather conditions for any location worldwide
- 📅 **5-Day Forecast** – Plan ahead with detailed weather forecasts
- 📍 **Geolocation Support** – Automatically detect and display your local weather
- 🔍 **City Search** – Search for weather information in any city
- 🌡️ **Detailed Metrics** – Temperature, humidity, wind speed, pressure, visibility, and more
- 🌅 **Sunrise/Sunset Times** – Track daylight hours for any location
- 🎭 **Weather Icons** – Beautiful emoji-based weather icons

### 📊 **Weather Information Display**
- Current temperature with "feels like" measurement
- Min/max daily temperatures
- Humidity levels with percentage
- Wind speed in km/h
- Atmospheric pressure in hPa
- Visibility distance in km
- Sunrise and sunset times
- Weather condition descriptions

### 🎯 **Enhanced Features**
- **Dynamic Theme System** – 7 different weather-based themes (Clear, Cloudy, Rainy, Stormy, Snowy, Night, Default)
- **Developer Info Modal** – Learn about the creator with a beautiful modal interface
- **Responsive Footer** – Modern footer with gradient link effects and dynamic copyright
- **Error Handling** – User-friendly error messages and fallback mechanisms
- **Loading States** – Visual feedback during data fetching

---

## 🖼️ Screenshots

### Desktop View
*Beautiful glassmorphic design with weather details*

### Mobile View
*Fully responsive layout optimized for mobile devices*

---

## 🛠️ Technologies Used

### 🏗️ **Frontend Stack**
- **HTML5** – Semantic markup with SEO optimization and accessibility
- **CSS3** – Modern styling with CSS Grid, Flexbox, glassmorphism effects, and animations
- **JavaScript (ES6+)** – Vanilla JavaScript for API integration and DOM manipulation
- **OpenWeatherMap API** – Reliable real-time weather data provider

### 🎨 **Design Elements**
- **Google Fonts** – Poppins and Roboto typography
- **Glassmorphism UI** – Modern frosted glass effect design
- **Gradient Backgrounds** – Dynamic color schemes based on weather
- **SVG Icons** – Scalable vector graphics for crisp display
- **CSS Variables** – Easy theme customization

---

## 🚀 Quick Start

### 💻 **Installation & Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/chinmayjha/Weather-App-UI.git
   cd Weather-App-UI
   ```

2. **Get your free API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account (no credit card required)
   - Navigate to API Keys section in your account
   - Generate a new API key

3. **Configure the API key** (Optional - Demo mode available)
   - Open `assets/app.js` in your favorite code editor
   - Find line 3: `const API_KEY = 'e8a094fa3476461b87e4a5ec829cd305';`
   - Replace with your API key if needed (current key is already configured)
   - Save the file

4. **Launch the application**
   
   **Option 1: Direct Browser**
   - Simply open `index.html` in your web browser
   
   **Option 2: Python Server**
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   ```
   
   **Option 3: Node.js Server**
   ```bash
   npx http-server -p 8080
   ```
   
   **Option 4: VS Code Live Server**
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` and select "Open with Live Server"

5. **Access the app**
   - If using a server: Open browser to `http://localhost:8080`
   - If opened directly: Weather app will load immediately

> **Note:** The app includes the OpenWeatherMap API key pre-configured, so it works out of the box! You can start using it immediately without any setup.

---

## 📖 Usage Guide

### 🔍 **Search for Weather**
1. Type a city name in the search bar (e.g., "London", "New York", "Tokyo")
2. Click the search button (🔍) or press Enter
3. View current weather and 5-day forecast instantly

### 📍 **Use Current Location**
1. Click the location button (📍) in the search bar
2. Allow location access when prompted by your browser
3. Your local weather will be displayed automatically

### 👨‍💻 **About the Developer**
1. Click the developer info button (👤) in the top-right corner
2. Learn about Chinmay Jha, the creator
3. Access developer's website and contact information

### 📊 **Understanding Weather Data**
- **Current Temp** - Real-time temperature at the location
- **Feels Like** - Perceived temperature accounting for humidity and wind chill
- **Min/Max** - Lowest and highest temperature expected for the day
- **Humidity** - Percentage of moisture in the air (comfort indicator)
- **Wind Speed** - Current wind velocity in kilometers per hour
- **Pressure** - Atmospheric pressure in hectopascals (weather pattern indicator)
- **Visibility** - How far you can see in kilometers
- **Sunrise/Sunset** - Local times for sunrise and sunset

---

## 🎨 Dynamic Weather Themes

The app features 7 beautiful gradient backgrounds that automatically change based on weather conditions:

| Theme | Condition | Gradient Colors |
|-------|-----------|----------------|
| ☀️ **Clear** | Sunny/Clear Sky | Pink to Blue |
| ☁️ **Cloudy** | Overcast | Grey to Dark Grey |
| 🌧️ **Rainy** | Rain/Drizzle | Blue to Cyan |
| ⛈️ **Stormy** | Thunderstorm | Dark Grey to Black |
| ❄️ **Snowy** | Snow | Light Blue to Soft Blue |
| 🌙 **Night** | Nighttime | Deep Blue-Black Gradient |
| 🌈 **Default** | Fallback | Purple Gradient |

---

## 📁 Project Structure

```
Weather-App-UI/
├── 📄 index.html                # Main application file
├── 📄 README.md                 # You are here
├── 📄 LICENSE                   # MIT License
│
└── 📁 assets/                   # Static resources
    ├── 🎨 style.css             # Glassmorphic styling & animations
    └── ⚡ app.js                 # Weather API integration & logic
```

---

## 🔧 Customization

### 🎨 **Modify Color Scheme**

Edit CSS variables in `assets/style.css`:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Secondary accent */
    --accent-color: #f093fb;       /* Highlight color */
    --text-primary: #2d3748;       /* Main text color */
    --text-secondary: #4a5568;     /* Secondary text */
    --text-light: #718096;         /* Muted text */
}
```

### ⚙️ **Configure API Settings**

Edit configuration in `assets/app.js`:

```javascript
const API_KEY = 'your_api_key_here';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
```

### 🌡️ **Change Temperature Units**

The app currently uses Celsius. To switch to Fahrenheit, modify the API calls in `app.js`:
- Change `units=metric` to `units=imperial`
- Update temperature display symbols from `°C` to `°F`

---

## 📱 Responsive Breakpoints

| Device Type | Width Range | Optimizations |
|-------------|-------------|---------------|
| 📱 Mobile (Small) | 320-480px | Vertical layout, single column |
| 📱 Mobile (Large) | 481-767px | Optimized spacing |
| 💻 Tablet | 768-1023px | Two-column grid layouts |
| 🖥️ Desktop | 1024-1439px | Full feature display |
| 🖥️ Large Desktop | 1440px+ | Maximum width constraints |

---

## 🌟 Contributing

Contributions make the open-source community an amazing place! Any contributions are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open Pull Request**

### 🐛 **Bug Reports**

Found a bug? Please include:
- Browser name and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Console error messages (if any)

---

## 🎯 Roadmap

### ✅ **Completed Features**
- [x] Real-time weather data integration
- [x] 5-day weather forecast
- [x] Geolocation support
- [x] Dynamic weather-based backgrounds
- [x] Glassmorphic UI design
- [x] Fully responsive layout
- [x] Developer info modal
- [x] Enhanced footer with gradient effects

### 🚀 **Planned Enhancements**
- [ ] **Hourly Forecast** – 24-hour weather predictions
- [ ] **Weather Alerts** – Push notifications for severe weather
- [ ] **Multiple Locations** – Save and track favorite cities
- [ ] **Unit Toggle** – Switch between Celsius and Fahrenheit
- [ ] **Weather Maps** – Interactive radar and satellite imagery
- [ ] **Historical Data** – Past weather trends and statistics
- [ ] **Dark/Light Mode** – Manual theme toggle
- [ ] **PWA Support** – Install as native app with offline access
- [ ] **Multi-language** – Support for international users
- [ ] **Air Quality Index** – Pollution and air quality data
- [ ] **Weather Widgets** – Embeddable components

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

**TL;DR** - You can freely use, modify, and distribute this project. Attribution appreciated! 🙏

---

## 👨‍💻 Author

<div align="center">

**Chinmay Jha**

[![Website](https://img.shields.io/badge/Website-chinmayjha.tech-blue?style=flat-square&logo=google-chrome)](https://chinmayjha.tech)
[![Email](https://img.shields.io/badge/Email-chinmayjha2021@gmail.com-red?style=flat-square&logo=gmail)](mailto:chinmayjha2021@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-chinmayjha-181717?style=flat-square&logo=github)](https://github.com/chinmayjha)

*16-year-old developer from India, passionate about creating beautiful, functional web applications*

**"Started coding at 11, building the web one project at a time"**

</div>

---

## 🙏 Acknowledgments

Special thanks to:

- **[OpenWeatherMap](https://openweathermap.org/)** – For providing the reliable weather API
- **[Google Fonts](https://fonts.google.com/)** – For beautiful Poppins and Roboto typography
- **Unicode Consortium** – For weather emoji icons
- **Open Source Community** – For inspiration and resources
- **You** – For checking out this project! ⭐

---

## 💝 Support

If you found this project helpful or interesting:

- ⭐ **Star** this repository on GitHub
- 🐦 **Share** with friends and on social media
- 🍕 [**Buy me a pizza**](https://www.buymeacoffee.com/chinmayjha) (I'm 16, coffee isn't my thing yet!)
- 💬 **Provide feedback** via issues or discussions

---

## 🔗 Related Projects

Check out my other web projects:

- [⏱️ Aesthetic Stopwatch](https://github.com/chinmayjha/Aesthetic-Stopwatch) - Beautiful glassmorphic stopwatch
- [🎵 LyricsCard](https://github.com/chinmayjha/LyricsCard) - Create Spotify-style lyrics cards
- [🎮 Fan Simulator Game](https://github.com/chinmayjha/Fan-Simulator-Game) - Interactive ceiling fan game
- [🔢 Random Number Generator](https://github.com/chinmayjha/Random-Number-Generator) - Modern number generator

---

<div align="center">

**Made with ❤️ by [Chinmay Jha](https://chinmayjha.tech)**

*Crafting digital experiences one pixel at a time*

**Copyright © 2024 Chinmay Jha. All rights reserved.**

</div>

