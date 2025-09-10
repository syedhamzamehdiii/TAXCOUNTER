// Tax slabs display data
const taxSlabsData = {
    '2025-26': {
        title: 'Income Tax Slabs 2025-2026',
        slabs: [
            { range: 'Up to Rs. 600,000', rate: '0%', fixed: '0' },
            { range: 'Rs. 600,001 to Rs. 1,200,000', rate: '1%', fixed: '0 + 1% of excess over Rs. 600,000' },
            { range: 'Rs. 1,200,001 to Rs. 2,200,000', rate: '11%', fixed: 'Rs. 6,000 + 11% of excess over Rs. 1,200,000' },
            { range: 'Rs. 2,200,001 to Rs. 3,200,000', rate: '23%', fixed: 'Rs. 116,000 + 23% of excess over Rs. 2,200,000' },
            { range: 'Rs. 3,200,001 to Rs. 4,100,000', rate: '30%', fixed: 'Rs. 346,000 + 30% of excess over Rs. 3,200,000' },
            { range: 'Above Rs. 4,100,000', rate: '35%', fixed: 'Rs. 616,000 + 35% of excess over Rs. 4,100,000' }
        ]
    },
    '2024-25': {
        title: 'Income Tax Slabs 2024-2025',
        slabs: [
            { range: 'Up to Rs. 600,000', rate: '0%', fixed: '0' },
            { range: 'Rs. 600,001 to Rs. 1,200,000', rate: '5%', fixed: '5% of excess over Rs. 600,000' },
            { range: 'Rs. 1,200,001 to Rs. 2,200,000', rate: '15%', fixed: 'Rs. 30,000 + 15% of excess over Rs. 1,200,000' },
            { range: 'Rs. 2,200,001 to Rs. 3,200,000', rate: '25%', fixed: 'Rs. 180,000 + 25% of excess over Rs. 2,200,000' },
            { range: 'Rs. 3,200,001 to Rs. 4,100,000', rate: '30%', fixed: 'Rs. 430,000 + 30% of excess over Rs. 3,200,000' },
            { range: 'Above Rs. 4,100,000', rate: '35%', fixed: 'Rs. 700,000 + 35% of excess over Rs. 4,100,000' }
        ]
    },
    '2023-24': {
        title: 'Income Tax Slabs 2023-2024',
        slabs: [
            { range: 'Up to Rs. 600,000', rate: '0%', fixed: '0' },
            { range: 'Rs. 600,001 to Rs. 1,200,000', rate: '2.5%', fixed: '2.5% of excess over Rs. 600,000' },
            { range: 'Rs. 1,200,001 to Rs. 2,400,000', rate: '12.5%', fixed: 'Rs. 15,000 + 12.5% of excess over Rs. 1,200,000' },
            { range: 'Rs. 2,400,001 to Rs. 3,600,000', rate: '22.5%', fixed: 'Rs. 165,000 + 22.5% of excess over Rs. 2,400,000' },
            { range: 'Rs. 3,600,001 to Rs. 6,000,000', rate: '27.5%', fixed: 'Rs. 435,000 + 27.5% of excess over Rs. 3,600,000' },
            { range: 'Above Rs. 6,000,000', rate: '35%', fixed: 'Rs. 1,095,000 + 35% of excess over Rs. 6,000,000' }
        ]
    },
    '2022-23': {
        title: 'Income Tax Slabs 2022-2023',
        slabs: [
            { range: 'Up to Rs. 600,000', rate: '0%', fixed: '0' },
            { range: 'Rs. 600,001 to Rs. 1,200,000', rate: '2.5%', fixed: '2.5% of excess over Rs. 600,000' },
            { range: 'Rs. 1,200,001 to Rs. 2,400,000', rate: '12.5%', fixed: 'Rs. 15,000 + 12.5% of excess over Rs. 1,200,000' },
            { range: 'Rs. 2,400,001 to Rs. 3,600,000', rate: '20%', fixed: 'Rs. 165,000 + 20% of excess over Rs. 2,400,000' },
            { range: 'Rs. 3,600,001 to Rs. 6,000,000', rate: '25%', fixed: 'Rs. 405,000 + 25% of excess over Rs. 3,600,000' },
            { range: 'Rs. 6,000,001 to Rs. 12,000,000', rate: '32.5%', fixed: 'Rs. 1,005,000 + 32.5% of excess over Rs. 6,000,000' },
            { range: 'Above Rs. 12,000,000', rate: '35%', fixed: 'Rs. 2,955,000 + 35% of excess over Rs. 12,000,000' }
        ]
    },
    '2021-22': {
        title: 'Income Tax Slabs 2021-2022',
        slabs: [
            { range: 'Up to Rs. 600,000', rate: '0%', fixed: '0' },
            { range: 'Rs. 600,001 to Rs. 1,200,000', rate: '5%', fixed: '5% of excess over Rs. 600,000' },
            { range: 'Rs. 1,200,001 to Rs. 1,800,000', rate: '10%', fixed: 'Rs. 30,000 + 10% of excess over Rs. 1,200,000' },
            { range: 'Rs. 1,800,001 to Rs. 2,500,000', rate: '15%', fixed: 'Rs. 90,000 + 15% of excess over Rs. 1,800,000' },
            { range: 'Rs. 2,500,001 to Rs. 3,500,000', rate: '17.5%', fixed: 'Rs. 195,000 + 17.5% of excess over Rs. 2,500,000' },
            { range: 'Rs. 3,500,001 to Rs. 5,000,000', rate: '20%', fixed: 'Rs. 370,000 + 20% of excess over Rs. 3,500,000' },
            { range: 'Rs. 5,000,001 to Rs. 8,000,000', rate: '22.5%', fixed: 'Rs. 670,000 + 22.5% of excess over Rs. 5,000,000' },
            { range: 'Above Rs. 8,000,000', rate: '25%', fixed: 'Rs. 1,345,000 + 25% of excess over Rs. 8,000,000' }
        ]
    }
};

// Navigation functionality
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName).classList.add('active');
}

// Function to switch to specific calculator from footer
function switchToCalculator(calcType) {
    document.querySelectorAll('.calc-type').forEach(t => t.classList.remove('active'));
    
    const selectedCalcType = document.querySelector(`.calc-type[data-type="${calcType}"]`);
    if (selectedCalcType) {
        selectedCalcType.classList.add('active');
    }
    
    document.querySelectorAll('.calculator-section').forEach(calc => calc.classList.add('hidden'));
    
    const selectedCalcSection = document.getElementById(calcType + '-calc');
    if (selectedCalcSection) {
        selectedCalcSection.classList.remove('hidden');

        setTimeout(() => {
            selectedCalcSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    }
}

// Switch calculator types with auto-scroll
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.calc-type').forEach(type => {
        type.addEventListener('click', function() {
            const calcType = this.dataset.type;
            
            document.querySelectorAll('.calc-type').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.calculator-section').forEach(calc => calc.classList.add('hidden'));
            const targetCalc = document.getElementById(calcType + '-calc');
            targetCalc.classList.remove('hidden');
            
            setTimeout(() => {
                targetCalc.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        });
    });

    // Initialize tax slabs display
    showTaxSlabs();
    
    // Load news when blog section is visited
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'blog') {
                loadLatestTaxNews();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        observer.observe(blogSection);
    }
});

// Business Calculator Functions
function showBusinessType(type) {
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.business-type-calc').forEach(calc => calc.classList.add('hidden'));
    
    if (type === 'aop') {
        document.querySelector('.toggle-btn:first-child').classList.add('active');
        document.getElementById('aop-calculator').classList.remove('hidden');
    } else {
        document.querySelector('.toggle-btn:last-child').classList.add('active');
        document.getElementById('individuals-calculator').classList.remove('hidden');
    }
}

function calculateAOPTax() {
    const income = parseFloat(document.getElementById('aop-amount').value);
    const year = document.getElementById('aop-year').value;
    
    if (!income || income <= 0) {
        document.getElementById('aop-results').style.display = 'none';
        return;
    }
    
    const slabs = aopTaxSlabs[year] || aopTaxSlabs['2024-25'];
    let tax = 0;
    
    for (let slab of slabs) {
        if (income > slab.min) {
            const taxableInThisSlab = Math.min(income, slab.max) - slab.min;
            if (slab.rate === 0 && slab.fixed > 0) {
                tax = slab.fixed;
            } else {
                tax = slab.fixed + (taxableInThisSlab * slab.rate);
            }
        } else {
            break;
        }
    }
    
    const afterTax = income - tax;
    
    document.getElementById('aop-profit').textContent = formatCurrency(income);
    document.getElementById('aop-tax').textContent = formatCurrency(tax);
    document.getElementById('aop-after-tax').textContent = formatCurrency(afterTax);
    
    document.getElementById('aop-results').style.display = 'block';
}

function calculateIndividualBusinessTax() {
    const income = parseFloat(document.getElementById('individual-amount').value);
    const year = document.getElementById('individual-year').value;
    
    if (!income || income <= 0) {
        document.getElementById('individual-business-results').style.display = 'none';
        return;
    }
    
    const slabs = individualBusinessSlabs[year] || individualBusinessSlabs['2024-25'];
    let tax = 0;
    
    for (let slab of slabs) {
        if (income > slab.min) {
            const taxableInThisSlab = Math.min(income, slab.max) - slab.min;
            if (slab.rate === 0 && slab.fixed > 0) {
                tax = slab.fixed;
            } else {
                tax = slab.fixed + (taxableInThisSlab * slab.rate);
            }
        } else {
            break;
        }
    }
    
    const afterTax = income - tax;
    
    document.getElementById('individual-profit').textContent = formatCurrency(income);
    document.getElementById('individual-tax').textContent = formatCurrency(tax);
    document.getElementById('individual-after-tax').textContent = formatCurrency(afterTax);
    
    document.getElementById('individual-business-results').style.display = 'block';
}

// Tax calculation functions
function calculateSalaryTax() {
    const monthlySalary = parseFloat(document.getElementById('salary-amount').value);
    const year = document.getElementById('salary-year').value;
    
    if (!monthlySalary || monthlySalary <= 0) {
        document.getElementById('salary-results').style.display = 'none';
        return;
    }   
    
    const annualSalary = monthlySalary * 12;
    const slabs = salaryTaxSlabs[year];
    
    let tax = 0;
    
    for (let slab of slabs) {
        if (annualSalary > slab.min) {
            const taxableInThisSlab = Math.min(annualSalary, slab.max) - slab.min;
            if (slab.rate === 0 && slab.fixed > 0) {
                tax = slab.fixed;
            } else {
                tax = slab.fixed + (taxableInThisSlab * slab.rate);
            }
        } else {
            break;
        }
    }
    
    const monthlyTax = tax / 12;
    const monthlyAfterTax = monthlySalary - monthlyTax;
    const yearlyAfterTax = annualSalary - tax;
    
    document.getElementById('monthly-income').textContent = formatCurrency(monthlySalary);
    document.getElementById('monthly-tax').textContent = formatCurrency(monthlyTax);
    document.getElementById('monthly-after-tax').textContent = formatCurrency(monthlyAfterTax);
    document.getElementById('yearly-income').textContent = formatCurrency(annualSalary);
    document.getElementById('yearly-tax').textContent = formatCurrency(tax);
    document.getElementById('yearly-after-tax').textContent = formatCurrency(yearlyAfterTax);
    
    document.getElementById('salary-results').style.display = 'block';
}

function calculateFreelancerTax() {
    const income = parseFloat(document.getElementById('freelancer-income').value);
    const type = document.getElementById('freelancer-type').value;
    
    if (!income || income <= 0) {
        document.getElementById('freelancer-results').style.display = 'none';
        return;
    }            
    
    let tax = 0;
    
    if (type === 'export-pseb') {
        tax = income * 0.0025;
    } else if (type === 'export-non-pseb') {
        tax = income * 0.01;
    } else if (type === 'local') {
        const localSlabs = [
            { min: 0, max: 600000, rate: 0, fixed: 0 },
            { min: 600001, max: 1200000, rate: 0.15, fixed: 0 },
            { min: 1200001, max: 1600000, rate: 0.20, fixed: 90000 },
            { min: 1600001, max: 3200000, rate: 0.30, fixed: 170000 },
            { min: 3200001, max: 5600000, rate: 0.40, fixed: 650000 },
            { min: 5600001, max: Infinity, rate: 0.45, fixed: 1610000 }
        ];
        
        for (let slab of localSlabs) {
            if (income > slab.min) {
                const taxableInThisSlab = Math.min(income, slab.max) - slab.min;
                tax = slab.fixed + (taxableInThisSlab * slab.rate);
            } else {
                break;
            }
        }
    }
    
    const afterTax = income - tax;
    
    document.getElementById('freelancer-annual-income').textContent = formatCurrency(income);
    document.getElementById('freelancer-tax').textContent = formatCurrency(tax);
    document.getElementById('freelancer-after-tax').textContent = formatCurrency(afterTax);
    
    document.getElementById('freelancer-results').style.display = 'block';
}

// Tax Slabs Display Function
function showTaxSlabs() {
    const selectedYear = document.getElementById('slab-year').value;
    const data = taxSlabsData[selectedYear];
    
    if (!data) return;
    
    const content = document.getElementById('tax-slabs-content');
    content.innerHTML = `
        <h3 style="color: #4CAF50; text-align: center; margin-bottom: 20px;">${data.title}</h3>
        <table class="tax-slabs-table">
            <thead>
                <tr>
                    <th>Income Range</th>
                    <th>Tax Rate</th>
                    <th>Tax Calculation</th>
                </tr>
            </thead>
            <tbody>
                ${data.slabs.map(slab => `
                    <tr>
                        <td>${slab.range}</td>
                        <td>${slab.rate}</td>
                        <td>${slab.fixed}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Blog News API Integration - Using Mediastack API for Pakistan tax news
async function loadLatestTaxNews() {
    try {
        // Using your working API
        const response = await fetch(`https://api.mediastack.com/v1/news?access_key=f5932685d787583245850202af44758d&keywords=Pakistan%20tax&languages=en&limit=10`);

        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        
        // Check if we have data in the expected format
        if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
            displayNewsFromAPI(data.data);
        } else {
            console.log('No articles found in API response, showing fallback articles');
            showFallbackArticles();
        }
    } catch (error) {
        console.log('API failed, showing fallback articles:', error);
        showFallbackArticles();
    }
}

function displayNewsFromAPI(articles) {
    const blogGrid = document.getElementById('blog-articles');
    const loadingState = document.getElementById('loading-state');
    
    // Hide loading state
    loadingState.style.display = 'none';
    
    let newsHTML = '';
    
    // Process up to 6 articles
    articles.slice(0, 6).forEach(article => {
        // Format the published date
        let publishedDate = 'Recent';
        if (article.published_at) {
            try {
                publishedDate = new Date(article.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            } catch (e) {
                publishedDate = 'Recent';
            }
        }
        
        // Get article title
        const title = article.title || 'Tax News Update';
        
        // Get and clean description
        let description = article.description || 'Read more about this Pakistan tax news update...';
        
        // Truncate description if too long
        if (description.length > 150) {
            description = description.substring(0, 150) + '...';
        }
        
        // Clean HTML tags from description
        const cleanDescription = description.replace(/<[^>]*>/g, '');
        
        // Get article URL
        const articleUrl = article.url || '#';
        
        // Generate the HTML for this article
        newsHTML += `
            <div class="blog-card">
                <div class="blog-meta">${publishedDate}</div>
                <h3>${title}</h3>
                <p>${cleanDescription}</p>
                <a href="${articleUrl}" target="_blank" class="read-more">Read More →</a>
            </div>
        `;
    });
    
    // If we have news HTML, display it; otherwise show fallback
    if (newsHTML.trim()) {
        blogGrid.innerHTML = newsHTML;
    } else {
        showFallbackArticles();
    }
}


function showFallbackArticles() {
    const loadingState = document.getElementById('loading-state');
    const fallbackArticles = document.getElementById('fallback-articles');
    
    // Hide loading state and show fallback articles
    if (loadingState) {
        loadingState.style.display = 'none';
    }
    if (fallbackArticles) {
        fallbackArticles.style.display = 'grid';
    }
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Math.round(amount)).replace('PKR', '').trim() + ' PKR';
}// Tax slabs data
const salaryTaxSlabs = {
    '2025-26': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.01, fixed: 0 },
        { min: 1200001, max: 2200000, rate: 0.11, fixed: 6000 },
        { min: 2200001, max: 3200000, rate: 0.23, fixed: 116000 },
        { min: 3200001, max: 4100000, rate: 0.30, fixed: 346000 },
        { min: 4100001, max: Infinity, rate: 0.35, fixed: 616000 }
    ],
    '2024-25': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 2200000, rate: 0.15, fixed: 30000 },
        { min: 2200001, max: 3200000, rate: 0.25, fixed: 180000 },
        { min: 3200001, max: 4100000, rate: 0.30, fixed: 430000 },
        { min: 4100001, max: Infinity, rate: 0.35, fixed: 700000 }
    ],
    '2023-24': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200001, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400001, max: 3600000, rate: 0.225, fixed: 165000 },
        { min: 3600001, max: 6000000, rate: 0.275, fixed: 435000 },
        { min: 6000001, max: Infinity, rate: 0.35, fixed: 1095000 }
    ],
    '2022-23': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200001, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400001, max: 3600000, rate: 0.20, fixed: 165000 },
        { min: 3600001, max: 6000000, rate: 0.25, fixed: 405000 },
        { min: 6000001, max: 12000000, rate: 0.325, fixed: 1005000 },
        { min: 12000001, max: Infinity, rate: 0.35, fixed: 2955000 }
    ],
    '2021-22': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 1800000, rate: 0.10, fixed: 30000 },
        { min: 1800001, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500001, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500001, max: 5000000, rate: 0.20, fixed: 370000 },
        { min: 5000001, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000001, max: Infinity, rate: 0.25, fixed: 1345000 }
    ]
};

/* 
AOP Tax Slabs Comments for Verification:
2024-25: 0%, 15%, 20%, 30%, 40%, 45% (Non-salary individual rates)
2023-24: 0%, 2.5%, 12.5%, 22.5%, 27.5%, 35% (Progressive structure)
2022-23: 0%, 2.5%, 12.5%, 20%, 25%, 32.5%, 35% (7 slabs)
2021-22: 0%, 5%, 10%, 15%, 17.5%, 20%, 22.5%, 25% (8 slabs)
2020-21: 0%, 5%, 10%, 15%, 17.5%, 20%, 22.5%, 25%, 27.5%, 30%, 32.5%, 35% (12 slabs)
2019-20: Same as 2020-21 (Complex structure)
2018-19: 0%, Fixed Rs.1000, Fixed Rs.2000, 5%, 15%, 20%, 25% (Simplified structure)
2017-18: 0%, 2%, 5%, 10%, 12.5%, 15%, 17.5%, 20%, 22.5%, 25%, 27.5%, 30% (13 slabs)
2016-17: Same as 2017-18 
2015-16: 0%, 5%, 10%, 12.5%, 15%, 17.5%, 20%, 22.5%, 25%, 27.5%, 30% (11 slabs)
*/
const aopTaxSlabs = {
    '2024-25': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.15, fixed: 0 },
        { min: 1200001, max: 1600000, rate: 0.20, fixed: 90000 },
        { min: 1600001, max: 3200000, rate: 0.30, fixed: 170000 },
        { min: 3200001, max: 5600000, rate: 0.40, fixed: 650000 },
        { min: 5600001, max: Infinity, rate: 0.45, fixed: 1610000 }
    ],
    '2023-24': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200001, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400001, max: 3600000, rate: 0.225, fixed: 165000 },
        { min: 3600001, max: 6000000, rate: 0.275, fixed: 435000 },
        { min: 6000001, max: Infinity, rate: 0.35, fixed: 1095000 }
    ],
    '2022-23': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200001, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400001, max: 3600000, rate: 0.20, fixed: 165000 },
        { min: 3600001, max: 6000000, rate: 0.25, fixed: 405000 },
        { min: 6000001, max: 12000000, rate: 0.325, fixed: 1005000 },
        { min: 12000001, max: Infinity, rate: 0.35, fixed: 2955000 }
    ],
    '2021-22': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 1800000, rate: 0.10, fixed: 30000 },
        { min: 1800001, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500001, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500001, max: 5000000, rate: 0.20, fixed: 370000 },
        { min: 5000001, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000001, max: Infinity, rate: 0.25, fixed: 1345000 }
    ],
    '2020-21': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 1800000, rate: 0.10, fixed: 30000 },
        { min: 1800001, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500001, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500001, max: 5000000, rate: 0.20, fixed: 370000 },
        { min: 5000001, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000001, max: 12000000, rate: 0.25, fixed: 1345000 },
        { min: 12000001, max: 30000000, rate: 0.275, fixed: 2345000 },
        { min: 30000001, max: 50000000, rate: 0.30, fixed: 7295000 },
        { min: 50000001, max: 75000000, rate: 0.325, fixed: 13295000 },
        { min: 75000001, max: Infinity, rate: 0.35, fixed: 21420000 }
    ],
    '2019-20': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 1800000, rate: 0.10, fixed: 30000 },
        { min: 1800001, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500001, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500001, max: 5000000, rate: 0.20, fixed: 370000 },
        { min: 5000001, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000001, max: 12000000, rate: 0.25, fixed: 1345000 },
        { min: 12000001, max: 30000000, rate: 0.275, fixed: 2345000 },
        { min: 30000001, max: 50000000, rate: 0.30, fixed: 7295000 },
        { min: 50000001, max: 75000000, rate: 0.325, fixed: 13295000 },
        { min: 75000001, max: Infinity, rate: 0.35, fixed: 21420000 }
    ],
    '2018-19': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 800000, rate: 0, fixed: 1000 },
        { min: 800001, max: 1200000, rate: 0, fixed: 2000 },
        { min: 1200001, max: 2500000, rate: 0.05, fixed: 2000 },
        { min: 2500001, max: 4000000, rate: 0.15, fixed: 65000 },
        { min: 4000001, max: 8000000, rate: 0.20, fixed: 290000 },
        { min: 8000001, max: Infinity, rate: 0.25, fixed: 1090000 }
    ],
    '2017-18': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 500000, rate: 0.02, fixed: 0 },
        { min: 500001, max: 750000, rate: 0.05, fixed: 2000 },
        { min: 750001, max: 1400000, rate: 0.10, fixed: 14500 },
        { min: 1400001, max: 1500000, rate: 0.125, fixed: 79500 },
        { min: 1500001, max: 1800000, rate: 0.15, fixed: 92000 },
        { min: 1800001, max: 2500000, rate: 0.175, fixed: 137000 },
        { min: 2500001, max: 3000000, rate: 0.20, fixed: 259500 },
        { min: 3000001, max: 3500000, rate: 0.225, fixed: 359500 },
        { min: 3500001, max: 4000000, rate: 0.25, fixed: 472000 },
        { min: 4000001, max: 7000000, rate: 0.275, fixed: 597000 },
        { min: 7000001, max: Infinity, rate: 0.30, fixed: 1422000 }
    ],
    '2016-17': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 500000, rate: 0.02, fixed: 0 },
        { min: 500001, max: 750000, rate: 0.05, fixed: 2000 },
        { min: 750001, max: 1400000, rate: 0.10, fixed: 14500 },
        { min: 1400001, max: 1500000, rate: 0.125, fixed: 79500 },
        { min: 1500001, max: 1800000, rate: 0.15, fixed: 92000 },
        { min: 1800001, max: 2500000, rate: 0.175, fixed: 137000 },
        { min: 2500001, max: 3000000, rate: 0.20, fixed: 259500 },
        { min: 3000001, max: 3500000, rate: 0.225, fixed: 359500 },
        { min: 3500001, max: 4000000, rate: 0.25, fixed: 472000 },
        { min: 4000001, max: 7000000, rate: 0.275, fixed: 597000 },
        { min: 7000001, max: Infinity, rate: 0.30, fixed: 1422000 }
    ],
    '2015-16': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 750000, rate: 0.05, fixed: 0 },
        { min: 750001, max: 1400000, rate: 0.10, fixed: 17500 },
        { min: 1400001, max: 1500000, rate: 0.125, fixed: 82500 },
        { min: 1500001, max: 1800000, rate: 0.15, fixed: 95000 },
        { min: 1800001, max: 2500000, rate: 0.175, fixed: 140000 },
        { min: 2500001, max: 3000000, rate: 0.20, fixed: 262500 },
        { min: 3000001, max: 3500000, rate: 0.225, fixed: 362500 },
        { min: 3500001, max: 4000000, rate: 0.25, fixed: 475000 },
        { min: 4000001, max: 7000000, rate: 0.275, fixed: 600000 },
        { min: 7000001, max: Infinity, rate: 0.30, fixed: 1425000 }
    ]
};

/* 
Individual Business Tax Slabs Comments for Verification:
These slabs are for non-salaried individuals and follow the same structure as AOPs
2024-25: Progressive 0%-45% structure for non-salary individuals
2023-24: 0%-35% with enhanced middle brackets
2022-23: 0%-35% with 7-slab system  
2021-22: 0%-25% with 8 slabs
2020-21: Complex 12-slab system (0%-35%)
2019-20: Same as 2020-21
2018-19: Fixed amounts for certain brackets
2017-18 & 2016-17: 13-slab progressive system
2015-16: 11-slab system starting from Rs.400,000
*/
const individualBusinessSlabs = {
    '2024-25': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.15, fixed: 0 },
        { min: 1200001, max: 1600000, rate: 0.20, fixed: 90000 },
        { min: 1600001, max: 3200000, rate: 0.30, fixed: 170000 },
        { min: 3200001, max: 5600000, rate: 0.40, fixed: 650000 },
        { min: 5600001, max: Infinity, rate: 0.45, fixed: 1610000 }
    ],
    '2023-24': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200001, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400001, max: 3600000, rate: 0.225, fixed: 165000 },
        { min: 3600001, max: 6000000, rate: 0.275, fixed: 435000 },
        { min: 6000001, max: Infinity, rate: 0.35, fixed: 1095000 }
    ],
    '2022-23': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200001, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400001, max: 3600000, rate: 0.20, fixed: 165000 },
        { min: 3600001, max: 6000000, rate: 0.25, fixed: 405000 },
        { min: 6000001, max: 12000000, rate: 0.325, fixed: 1005000 },
        { min: 12000001, max: Infinity, rate: 0.35, fixed: 2955000 }
    ],
    '2021-22': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 1800000, rate: 0.10, fixed: 30000 },
        { min: 1800001, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500001, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500001, max: 5000000, rate: 0.20, fixed: 370000 },
        { min: 5000001, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000001, max: Infinity, rate: 0.25, fixed: 1345000 }
    ],
    '2020-21': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 1800000, rate: 0.10, fixed: 30000 },
        { min: 1800001, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500001, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500001, max: 5000000, rate: 0.20, fixed: 370000 },
        { min: 5000001, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000001, max: 12000000, rate: 0.25, fixed: 1345000 },
        { min: 12000001, max: 30000000, rate: 0.275, fixed: 2345000 },
        { min: 30000001, max: 50000000, rate: 0.30, fixed: 7295000 },
        { min: 50000001, max: 75000000, rate: 0.325, fixed: 13295000 },
        { min: 75000001, max: Infinity, rate: 0.35, fixed: 21420000 }
    ],
    '2019-20': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600001, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200001, max: 1800000, rate: 0.10, fixed: 30000 },
        { min: 1800001, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500001, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500001, max: 5000000, rate: 0.20, fixed: 370000 },
        { min: 5000001, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000001, max: 12000000, rate: 0.25, fixed: 1345000 },
        { min: 12000001, max: 30000000, rate: 0.275, fixed: 2345000 },
        { min: 30000001, max: 50000000, rate: 0.30, fixed: 7295000 },
        { min: 50000001, max: 75000000, rate: 0.325, fixed: 13295000 },
        { min: 75000001, max: Infinity, rate: 0.35, fixed: 21420000 }
    ],
    '2018-19': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 800000, rate: 0, fixed: 1000 },
        { min: 800001, max: 1200000, rate: 0, fixed: 2000 },
        { min: 1200001, max: 2500000, rate: 0.05, fixed: 2000 },
        { min: 2500001, max: 4000000, rate: 0.15, fixed: 65000 },
        { min: 4000001, max: 8000000, rate: 0.20, fixed: 290000 },
        { min: 8000001, max: Infinity, rate: 0.25, fixed: 1090000 }
    ],
    '2017-18': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 500000, rate: 0.02, fixed: 0 },
        { min: 500001, max: 750000, rate: 0.05, fixed: 2000 },
        { min: 750001, max: 1400000, rate: 0.10, fixed: 14500 },
        { min: 1400001, max: 1500000, rate: 0.125, fixed: 79500 },
        { min: 1500001, max: 1800000, rate: 0.15, fixed: 92000 },
        { min: 1800001, max: 2500000, rate: 0.175, fixed: 137000 },
        { min: 2500001, max: 3000000, rate: 0.20, fixed: 259500 },
        { min: 3000001, max: 3500000, rate: 0.225, fixed: 359500 },
        { min: 3500001, max: 4000000, rate: 0.25, fixed: 472000 },
        { min: 4000001, max: 7000000, rate: 0.275, fixed: 597000 },
        { min: 7000001, max: Infinity, rate: 0.30, fixed: 1422000 }
    ],
    '2016-17': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 500000, rate: 0.02, fixed: 0 },
        { min: 500001, max: 750000, rate: 0.05, fixed: 2000 },
        { min: 750001, max: 1400000, rate: 0.10, fixed: 14500 },
        { min: 1400001, max: 1500000, rate: 0.125, fixed: 79500 },
        { min: 1500001, max: 1800000, rate: 0.15, fixed: 92000 },
        { min: 1800001, max: 2500000, rate: 0.175, fixed: 137000 },
        { min: 2500001, max: 3000000, rate: 0.20, fixed: 259500 },
        { min: 3000001, max: 3500000, rate: 0.225, fixed: 359500 },
        { min: 3500001, max: 4000000, rate: 0.25, fixed: 472000 },
        { min: 4000001, max: 7000000, rate: 0.275, fixed: 597000 },
        { min: 7000001, max: Infinity, rate: 0.30, fixed: 1422000 }
    ],
    '2015-16': [
        { min: 0, max: 400000, rate: 0, fixed: 0 },
        { min: 400001, max: 750000, rate: 0.05, fixed: 0 },
        { min: 750001, max: 1400000, rate: 0.10, fixed: 17500 },
        { min: 1400001, max: 1500000, rate: 0.125, fixed: 82500 },
        { min: 1500001, max: 1800000, rate: 0.15, fixed: 95000 },
        { min: 1800001, max: 2500000, rate: 0.175, fixed: 140000 },
        { min: 2500001, max: 3000000, rate: 0.20, fixed: 262500 },
        { min: 3000001, max: 3500000, rate: 0.225, fixed: 362500 },
        { min: 3500001, max: 4000000, rate: 0.25, fixed: 475000 },
        { min: 4000001, max: 7000000, rate: 0.275, fixed: 600000 },
        { min: 7000001, max: Infinity, rate: 0.30, fixed: 1425000 }
    ]
};
