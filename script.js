// Complete car data with placeholder images
const cars = {
"Maruti Suzuki": [
        { name: "Wagon R", price: 500000, mileage: 23, safety: 2, interior: 2, type: "Hatchback", fuel: "Petrol/CNG", image: "imgs/WAGONR.jpg" },
        { name: "Alto K10", price: 350000, mileage: 24, safety: 1, interior: 2, type: "Hatchback", fuel: "Petrol", image: "imgs/altoK10.webp" },
        { name: "Baleno", price: 650000, mileage: 22, safety: 4, interior: 4, type: "Hatchback", fuel: "Petrol", image: "imgs/baleno.jpg" },
        { name: "Swift", price: 650000, mileage: 22, safety: 3, interior: 3, type: "Hatchback", fuel: "Petrol/Diesel", image: "imgs/swift.jpg" },
        { name: "Dzire", price: 700000, mileage: 24, safety: 3, interior: 3, type: "Sedan", fuel: "Petrol/CNG", image: "imgs/MARUTI DEZIRE.webp" },
        { name: "Ertiga", price: 950000, mileage: 20, safety: 3, interior: 4, type: "MPV", fuel: "Petrol/CNG", image: "imgs/eartiga.jpg" },
        { name: "Ciaz", price: 900000, mileage: 21, safety: 4, interior: 4, type: "Sedan", fuel: "Petrol/CNG", image: "imgs/CIAZ.webp" },
        { name: "Vitara Brezza", price: 900000, mileage: 18, safety: 4, interior: 4, type: "SUV", fuel: "Diesel", image: "imgs/brezza.jpg" },
        { name: "S-Presso", price: 400000, mileage: 21, safety: 1, interior: 2, type: "Micro-SUV", fuel: "Petrol", image: "imgs/SPRESSO.webp" },
        { name: "Ignis", price: 550000, mileage: 20, safety: 3, interior: 3, type: "Cross-hatch", fuel: "Petrol", image: "imgs/ignis.jpg" },
        { name: "XL6", price: 1100000, mileage: 19, safety: 3, interior: 4, type: "MPV", fuel: "Petrol", image: "imgs/xl6.jpg" },
        { name: "Jimny", price: 1200000, mileage: 16, safety: 3, interior: 3, type: "Off-roader", fuel: "Petrol", image: "imgs/jimny.jpg" },
        { name: "Fronx", price: 800000, mileage: 22, safety: 3, interior: 3, type: "Compact SUV", fuel: "Petrol/CNG", image: "imgs/fronx-1.webp" },
        { name: "Invicto", price: 1800000, mileage: 23, safety: 5, interior: 5, type: "MPV", fuel: "Hybrid", image: "imgs/INVICTO.webp" },
        { name: "New Swift", price: 700000, mileage: 24, safety: 4, interior: 4, type: "Hatchback", fuel: "Petrol/Hybrid", image: "imgs/NEW SWIFT.webp" }
    ],
    "Tata": [
        { name: "Safari", price: 1200000, mileage: 13, safety: 0, interior: 3, type: "SUV", fuel: "Diesel", image: "imgs/safari.jpg" },
        { name: "Tiago", price: 500000, mileage: 23, safety: 4, interior: 4, type: "Hatchback", fuel: "Petrol/CNG", image: "imgs/TIAGO.png" },
        { name: "Tigor", price: 600000, mileage: 23, safety: 4, interior: 4, type: "Compact Sedan", fuel: "Petrol/CNG", image: "imgs/tigor .jpg" },
        { name: "Nexon", price: 800000, mileage: 20, safety: 5, interior: 4, type: "Compact SUV", fuel: "Petrol/Diesel", image: "imgs/nexon.jpg" },
        { name: "Hexa", price: 1500000, mileage: 13, safety: 4, interior: 4, type: "SUV", fuel: "Diesel", image: "imgs/hexa .jpg" },
        { name: "Harrier", price: 1500000, mileage: 15, safety: 5, interior: 5, type: "SUV", fuel: "Diesel", image: "imgs/harrier.jpg" },
        { name: "Altroz", price: 650000, mileage: 21, safety: 5, interior: 4, type: "Hatchback", fuel: "Petrol/Diesel", image: "imgs/ALTROZ.webp" },
        { name: "Punch", price: 600000, mileage: 20, safety: 5, interior: 3, type: "Micro-SUV", fuel: "Petrol/CNG", image: "imgs/PUNCH.jpeg" },
        { name: "Safari (New)", price: 1600000, mileage: 15, safety: 5, interior: 5, type: "SUV", fuel: "Diesel", image: "imgs/NEW SAFARI.webp" },
        { name: "Nexon EV", price: 1500000, mileage: 0, range: 312, safety: 5, interior: 4, type: "Electric SUV", fuel: "Electric", image: "imgs/nexon ev.jpg" },
        { name: "Tiago EV", price: 1000000, mileage: 0, range: 250, safety: 4, interior: 4, type: "Electric Hatch", fuel: "Electric", image: "imgs/TIGOR EV.webp" },
        { name: "Curvv", price: 1800000, mileage: 0, range: 400, safety: 5, interior: 5, type: "Coupe-SUV", fuel: "Electric/Petrol", image: "imgs/curvv.jpg" },
        { name: "Avinya", price: 2500000, mileage: 0, range: 500, safety: 5, interior: 5, type: "Electric SUV", fuel: "Electric", image: "imgs/tata_avinya_600x400.avif" }
    ],
    "Mahindra": [
        { name: "Scorpio", price: 1200000, mileage: 13, safety: 4, interior: 4, type: "SUV", fuel: "Diesel", image: "imgs/SCORPIOn.jpg" },
        { name: "Bolero", price: 900000, mileage: 17, safety: 0, interior: 3, type: "SUV", fuel: "Diesel", image: "imgs/BOLERO T.webp" },
        { name: "XUV500", price: 1500000, mileage: 13, safety: 4, interior: 4, type: "SUV", fuel: "Petrol/Diesel", image: "imgs/XUV 500.webp" },
        { name: "XUV300", price: 900000, mileage: 18, safety: 5, interior: 4, type: "Compact SUV", fuel: "Petrol/Diesel", image: "imgs/XUV 300.jpg" },
        { name: "Thar", price: 1300000, mileage: 12, safety: 4, interior: 4, type: "Off-roader", fuel: "Petrol/Diesel", image: "imgs/THAR BLACK.webp" },
        { name: "Marazzo", price: 1200000, mileage: 17, safety: 4, interior: 4, type: "MPV", fuel: "Diesel", image: "imgs/MARAZZO.jpg" },
        { name: "Alturas G4", price: 2800000, mileage: 13, safety: 0, interior: 5, type: "Premium SUV", fuel: "Diesel", image: "imgs/ALTRUS.avif" },
        { name: "KUV100", price: 600000, mileage: 20, safety: 2, interior: 3, type: "Micro SUV", fuel: "Petrol/Diesel", image: "imgs/KUV 100.jpg" },
        { name: "TUV300", price: 900000, mileage: 16, safety: 3, interior: 3, type: "Compact SUV", fuel: "Diesel", image: "imgs/TUV 300.jpg" },
        { name: "XUV400", price: 1600000, mileage: 0, range: 375, safety: 5, interior: 4, type: "Electric SUV", fuel: "Electric", image: "imgs/XUV 400.jpg" },
        { name: "Scorpio-N", price: 1400000, mileage: 15, safety: 5, interior: 5, type: "SUV", fuel: "Petrol/Diesel", image: "imgs/scorpion.jpg" },
        { name: "Bolero Neo", price: 1000000, mileage: 17, safety: 3, interior: 3, type: "Compact SUV", fuel: "Diesel", image: "imgs/BOLERO NEO.jpg" },
        { name: "XUV700", price: 1600000, mileage: 15, safety: 5, interior: 5, type: "SUV", fuel: "Petrol/Diesel", image: "imgs/XUV 700.jpg" },
        { name: "BE.05", price: 2500000, mileage: 0, range: 450, safety: 5, interior: 5, type: "Coupe-SUV", fuel: "Electric", image: "imgs/BE05.jpeg" },
        { name: "XUV.e9", price: 2800000, mileage: 0, range: 400, safety: 5, interior: 5, type: "Electric SUV", fuel: "Electric", image: "imgs/XEV 9e.webp" }
    ],
    "Hyundai": [
        { name: "Grand i10", price: 700000, mileage: 22, safety: 3, interior: 4, type: "Hatchback", fuel: "Petrol/Diesel", image: "imgs/grand i10.jpeg" },
        { name: "i20", price: 700000, mileage: 20, safety: 3, interior: 4, type: "Hatchback", fuel: "Petrol/Diesel", image: "imgs/i20.jpeg" },
        { name: "Aura", price: 750000, mileage: 24, safety: 3, interior: 4, type: "Compact Sedan", fuel: "Petrol/Diesel", image: "imgs/aura.jpeg" },
        { name: "Verna", price: 1100000, mileage: 20, safety: 5, interior: 5, type: "Sedan", fuel: "Petrol/Diesel", image: "imgs/Verna.jpeg" },
        { name: "Elantra", price: 1800000, mileage: 15, safety: 3, interior: 5, type: "Sedan", fuel: "Petrol", image: "imgs/Elantra.jpeg" },
        { name: "Creta", price: 1100000, mileage: 18, safety: 3, interior: 5, type: "Compact SUV", fuel: "Petrol/Diesel", image: "imgs/Creta.jpeg" },
        { name: "Venue", price: 800000, mileage: 20, safety: 4, interior: 4, type: "Compact SUV", fuel: "Petrol/Diesel", image: "imgs/Venue.jpeg" },
        { name: "Tucson", price: 2500000, mileage: 14, safety: 5, interior: 5, type: "Premium SUV", fuel: "Petrol/Diesel", image: "imgs/Tucson.jpeg" },
        { name: "Kona Electric", price: 2400000, mileage: 0, range: 452, safety: 5, interior: 5, type: "Electric SUV", fuel: "Electric", image: "imgs/Kona Electric.jpeg" },
        { name: "Alcazar", price: 1600000, mileage: 15, safety: 4, interior: 5, type: "3-Row SUV", fuel: "Petrol/Diesel", image: "imgs/Alcazar.jpeg" },
        { name: "Ioniq 5", price: 4500000, mileage: 0, range: 631, safety: 5, interior: 5, type: "Electric SUV", fuel: "Electric", image: "imgs/Ioniq 5EV.jpeg" },
        { name: "Exter", price: 600000, mileage: 23, safety: 4, interior: 4, type: "Compact SUV", fuel: "Petrol/CNG", image: "imgs/Exter.jpeg" },
        { name: "New Creta (Facelift)", price: 1200000, mileage: 19, safety: 0, interior: 5, type: "Compact SUV", fuel: "Petrol/Diesel", image: "imgs/New Creta.jpeg" }
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    displayAllCars();
    populateComparisonDropdowns();
    
    // Form step navigation
    document.getElementById('next-step-1').addEventListener('click', nextStep1);
    document.getElementById('next-step-2').addEventListener('click', nextStep2);
    document.getElementById('next-step-3').addEventListener('click', nextStep3);
    
    // Filter cars
    document.getElementById('filter-cars').addEventListener('click', filterCars);
    
    // Compare cars
    document.getElementById('compare-button').addEventListener('click', compareCars);
});

function nextStep1() {
    const budget = document.getElementById('budget').value;
    if (budget) {
        document.getElementById('step-budget').style.display = 'none';
        document.getElementById('step-type').style.display = 'block';
    } else {
        alert('Please enter your budget first');
    }
}

function nextStep2() {
    document.getElementById('step-type').style.display = 'none';
    document.getElementById('step-fuel').style.display = 'block';
}

function nextStep3() {
    document.getElementById('step-fuel').style.display = 'none';
    document.getElementById('step-priority').style.display = 'block';
}

// Display all cars
function displayAllCars() {
    const carGrid = document.getElementById('car-available');
    carGrid.innerHTML = '';
    
    for (let brand in cars) {
        cars[brand].forEach(car => {
            const carCard = createCarCard(car, brand);
            carGrid.appendChild(carCard);
        });
    }
}

// Create car card element
function createCarCard(car, brand) {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');
    
    carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Car+Image'">
        <h3>${brand} ${car.name}</h3>
        <p class="price">₹${car.price.toLocaleString()}</p>
        <p>Type: ${car.type}</p>
        <p>Fuel: ${car.fuel}</p>
        <p>Mileage: ${car.mileage > 0 ? car.mileage + " km/l" : "N/A"}</p>
        <p>Safety Rating: ${'⭐'.repeat(car.safety)}</p>
        <p>Interior Rating: ${'⭐'.repeat(car.interior)}</p>
    `;
    
    return carCard;
}

// Filter cars based on selections
function filterCars() {
    const budget = parseInt(document.getElementById('budget').value) || Infinity;
    const type = document.getElementById('type').value;
    const fuel = document.getElementById('fuel').value;
    const priority = document.getElementById('priority').value;
    
    const filteredCars = [];
    for (let brand in cars) {
        cars[brand].forEach(car => {
            if (car.price <= budget) {
                if ((!type || car.type === type) && 
                    (!fuel || car.fuel.includes(fuel))) {
                    filteredCars.push({...car, brand});
                }
            }
        });
    }
    
    // Sort based on priority
    const sortedCars = filteredCars.sort((a, b) => {
        if (priority === "Safety") return b.safety - a.safety;
        if (priority === "Mileage") return b.mileage - a.mileage;
        if (priority === "Price") return a.price - b.price;
        if (priority === "Interior") return b.interior - a.interior;
        return 0;
    });
    
    displayFilteredCars(sortedCars);
}

// Display filtered cars
function displayFilteredCars(cars) {
    const carGrid = document.getElementById('car-recommendations');
    carGrid.innerHTML = '';
    
    if (cars.length === 0) {
        carGrid.innerHTML = '<p class="no-results">No cars match your criteria. Please try different filters.</p>';
        return;
    }
    
    cars.forEach(car => {
        const carCard = createCarCard(car, car.brand);
        carGrid.appendChild(carCard);
    });
}

// Populate comparison dropdowns
function populateComparisonDropdowns() {
    const select1 = document.getElementById('compare-car-1');
    const select2 = document.getElementById('compare-car-2');
    
    select1.innerHTML = '<option value="">Select First Car</option>';
    select2.innerHTML = '<option value="">Select Second Car</option>';
    
    for (let brand in cars) {
        cars[brand].forEach(car => {
            const option1 = document.createElement('option');
            option1.value = JSON.stringify({...car, brand});
            option1.textContent = `${brand} ${car.name}`;
            select1.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = JSON.stringify({...car, brand});
            option2.textContent = `${brand} ${car.name}`;
            select2.appendChild(option2);
        });
    }
}

// Compare two selected cars
function compareCars() {
    const car1Value = document.getElementById('compare-car-1').value;
    const car2Value = document.getElementById('compare-car-2').value;
    
    if (!car1Value || !car2Value) {
        alert('Please select two cars to compare');
        return;
    }
    
    const car1 = JSON.parse(car1Value);
    const car2 = JSON.parse(car2Value);
    
    if (car1.name === car2.name && car1.brand === car2.brand) {
        alert('Please select two different cars to compare');
        return;
    }
    
    displayComparisonResults(car1, car2);
}

// Display comparison results with recommendation
function displayComparisonResults(car1, car2) {
    const resultsDiv = document.getElementById('comparison-results');
    const bestCar = determineBestCar(car1, car2);
    
    let recommendationHtml = '';
    if (bestCar) {
        recommendationHtml = `
            <div class="recommendation">
                <h3>Our Recommendation</h3>
                <div class="recommended-car">
                    <img src="${bestCar.car.image}" alt="${bestCar.car.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Car+Image'">
                    <div>
                        <h4>${bestCar.car.brand} ${bestCar.car.name}</h4>
                        <p>We recommend this car because it has ${bestCar.reason}.</p>
                        <p class="price">₹${bestCar.car.price.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        recommendationHtml = `
            <div class="recommendation">
                <h3>Our Analysis</h3>
                <p>Both cars are very similar in terms of features and value. Your choice should depend on personal preference.</p>
            </div>
        `;
    }
    
    resultsDiv.innerHTML = `
        ${recommendationHtml}
        <div class="comparison-cards">
            <div class="comparison-card">
                <h3>${car1.brand} ${car1.name}</h3>
                <img src="${car1.image}" alt="${car1.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Car+Image'">
                <div class="comparison-spec"><span>Price:</span> <span class="${car1.price < car2.price ? 'highlight' : ''}">₹${car1.price.toLocaleString()}</span></div>
                <div class="comparison-spec"><span>Type:</span> <span>${car1.type}</span></div>
                <div class="comparison-spec"><span>Fuel:</span> <span>${car1.fuel}</span></div>
                <div class="comparison-spec"><span>Mileage:</span> <span class="${car1.mileage > car2.mileage ? 'highlight' : ''}">${car1.mileage > 0 ? car1.mileage + " km/l" : "N/A"}</span></div>
                <div class="comparison-spec"><span>Safety:</span> <span class="${car1.safety > car2.safety ? 'highlight' : ''}">${'⭐'.repeat(car1.safety)}</span></div>
                <div class="comparison-spec"><span>Interior:</span> <span class="${car1.interior > car2.interior ? 'highlight' : ''}">${'⭐'.repeat(car1.interior)}</span></div>
            </div>
            <div class="comparison-card">
                <h3>${car2.brand} ${car2.name}</h3>
                <img src="${car2.image}" alt="${car2.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Car+Image'">
                <div class="comparison-spec"><span>Price:</span> <span class="${car2.price < car1.price ? 'highlight' : ''}">₹${car2.price.toLocaleString()}</span></div>
                <div class="comparison-spec"><span>Type:</span> <span>${car2.type}</span></div>
                <div class="comparison-spec"><span>Fuel:</span> <span>${car2.fuel}</span></div>
                <div class="comparison-spec"><span>Mileage:</span> <span class="${car2.mileage > car1.mileage ? 'highlight' : ''}">${car2.mileage > 0 ? car2.mileage + " km/l" : "N/A"}</span></div>
                <div class="comparison-spec"><span>Safety:</span> <span class="${car2.safety > car1.safety ? 'highlight' : ''}">${'⭐'.repeat(car2.safety)}</span></div>
                <div class="comparison-spec"><span>Interior:</span> <span class="${car2.interior > car1.interior ? 'highlight' : ''}">${'⭐'.repeat(car2.interior)}</span></div>
            </div>
        </div>
    `;
}

// Determine the best car based on multiple factors
function determineBestCar(car1, car2) {
    // Score each car (higher is better)
    const scoreCar1 = (car1.safety * 3) + (car1.mileage * 2) + (5 - car1.price / 400000) + car1.interior;
    const scoreCar2 = (car2.safety * 3) + (car2.mileage * 2) + (5 - car2.price / 400000) + car2.interior;
    
    if (scoreCar1 > scoreCar2) {
        return { car: car1, reason: getWinningReason(car1, car2) };
    } else if (scoreCar2 > scoreCar1) {
        return { car: car2, reason: getWinningReason(car2, car1) };
    } else {
        return null; // It's a tie
    }
}

// Generate reasons why one car is better than another
function getWinningReason(winner, loser) {
    const reasons = [];
    
    if (winner.safety > loser.safety) {
        reasons.push(`better safety (${winner.safety}⭐ vs ${loser.safety}⭐)`);
    }
    if (winner.mileage > loser.mileage) {
        reasons.push(`better mileage (${winner.mileage}kmpl vs ${loser.mileage}kmpl)`);
    }
    if (winner.price < loser.price) {
        reasons.push(`lower price (₹${winner.price.toLocaleString()} vs ₹${loser.price.toLocaleString()})`);
    }
    if (winner.interior > loser.interior) {
        reasons.push(`better interior (${winner.interior}⭐ vs ${loser.interior}⭐)`);
    }
    
    return reasons.join(', ');
}

// Scroll functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToFooter() {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
}

// Chatbot functions
function toggleChat() {
    const chat = document.getElementById("chatContainer");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
    if (chat.style.display === "flex") {
        document.getElementById("userInput").focus();
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const userText = input.value.trim();
    if (userText === "") return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.classList.add('msg', 'user');
    userMsg.textContent = userText;
    chatBox.appendChild(userMsg);

    // Process and get bot response
    setTimeout(() => {
        const botReply = getBotResponse(userText);
        const botMsg = document.createElement('div');
        botMsg.classList.add('msg', 'bot');
        botMsg.innerHTML = botReply;
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enhanced chatbot response system
function getBotResponse(msg) {
    msg = msg.toLowerCase();
    const carNames = Object.values(cars).flat().map(car => car.name.toLowerCase());

    // Compare two cars
    if (msg.includes("compare") && msg.includes("with")) {
        const parts = msg.split("compare")[1].split("with");
        const car1 = parts[0].trim();
        const car2 = parts[1].trim();
        
        // Find car objects
        const foundCar1 = findCarByName(car1);
        const foundCar2 = findCarByName(car2);
        
        if (foundCar1 && foundCar2) {
            return generateComparisonResponse(foundCar1, foundCar2);
        } else {
            return "I couldn't find both cars. Please check the names and try again.";
        }
    }

    // Best car under budget
    if (msg.includes("best car under") || msg.includes("cars under")) {
        const price = parseInt(msg.match(/\d+/g));
        if (price) {
            const filtered = [];
            for (let brand in cars) {
                cars[brand].forEach(car => {
                    if (car.price <= price * 100000) {
                        filtered.push(car);
                    }
                });
            }
            
            if (filtered.length > 0) {
                const sorted = filtered.sort((a, b) => (b.safety * 3 + b.mileage * 2 + b.interior) - (a.safety * 3 + a.mileage * 2 + a.interior));
                let response = `Here are the best cars under ₹${price} lakhs:<br>`;
                sorted.slice(0, 3).forEach(car => {
                    response += `<br>- <b>${car.name}</b> (₹${(car.price/100000).toFixed(1)}L, ${car.mileage}kmpl, ${car.safety}⭐ safety)`;
                });
                return response;
            } else {
                return `I couldn't find cars under ₹${price} lakhs. Try increasing your budget.`;
            }
        }
    }

    // Car details
    if (msg.includes("details") || msg.includes("tell me about") || msg.includes("info")) {
        const carName = msg.split("about")[1] || msg.split("details of")[1] || msg.split("info on")[1];
        if (carName) {
            const foundCar = findCarByName(carName.trim());
            if (foundCar) {
                return generateCarDetailsResponse(foundCar);
            }
        }
    }

    // Help
    if (msg.includes("help") || msg.includes("what can you do")) {
        return "I can help you with:<br>- Comparing cars (e.g., 'Compare Swift with Baleno')<br>- Suggesting cars under budget (e.g., 'Best cars under 10 lakh')<br>- Providing car details (e.g., 'Tell me about Thar')";
    }
    if (msg.includes("help") || msg.includes("Hello")) {
        return "hello how can i help you";
    }


    // Default response
    return "I'm not sure I understand. Try asking:<br>- Compare Swift with Baleno<br>- Best car under 10 lakh<br>- Tell me about Thar";
}

// Helper function to find car by name
function findCarByName(name) {
    name = name.toLowerCase();
    for (let brand in cars) {
        const found = cars[brand].find(car => car.name.toLowerCase().includes(name));
        if (found) return {...found, brand};
    }
    return null;
}

// Generate comparison response
function generateComparisonResponse(car1, car2) {
    return `Comparing <b>${car1.brand} ${car1.name}</b> and <b>${car2.brand} ${car2.name}</b>:<br><br>
            - <b>Price</b>: ₹${car1.price.toLocaleString()} vs ₹${car2.price.toLocaleString()}<br>
            - <b>Mileage</b>: ${car1.mileage}kmpl vs ${car2.mileage}kmpl<br>
            - <b>Safety</b>: ${'⭐'.repeat(car1.safety)} vs ${'⭐'.repeat(car2.safety)}<br>
            - <b>Interior</b>: ${'⭐'.repeat(car1.interior)} vs ${'⭐'.repeat(car2.interior)}<br><br>
            ${car1.safety > car2.safety ? `${car1.name} is safer` : `${car2.name} is safer`}`;
}

// Generate car details response
function generateCarDetailsResponse(car) {
    return `<b>${car.brand} ${car.name}</b> details:<br><br>
            - <b>Price</b>: ₹${car.price.toLocaleString()}<br>
            - <b>Type</b>: ${car.type}<br>
            - <b>Fuel</b>: ${car.fuel}<br>
            - <b>Mileage</b>: ${car.mileage}kmpl<br>
            - <b>Safety Rating</b>: ${'⭐'.repeat(car.safety)}<br>
            - <b>Interior Rating</b>: ${'⭐'.repeat(car.interior)}`;
}