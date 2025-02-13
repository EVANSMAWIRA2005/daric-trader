// Toggle options menu
function toggleOptions() {
    const optionsMenu = document.getElementById('optionsMenu');
    const overlay = document.querySelector('.overlay');
  
    if (optionsMenu.classList.contains('active')) {
      optionsMenu.classList.remove('active');
      overlay.style.display = 'none';
    } else {
      optionsMenu.classList.add('active');
      overlay.style.display = 'block';
    }
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    const optionsMenu = document.getElementById('optionsMenu');
    const optionsButton = document.getElementById('optionsButton');
    const overlay = document.querySelector('.overlay');
  
    if (
      !optionsMenu.contains(event.target) &&
      !optionsButton.contains(event.target)
    ) {
      optionsMenu.classList.remove('active');
      overlay.style.display = 'none';
    }
  });
  
  // Handle option selection
  function selectOption(option) {
    const contentArea = document.getElementById('contentArea');
    contentArea.value = `You selected: ${option}`;
    toggleOptions(); // Close the menu after selection
  }
  
  // Existing functions
  function showAnalysis() {
    const contentArea = document.getElementById('contentArea');
    contentArea.value = "Step-by-step guide on how to access your analysis:\n1. Log in to your account.\n2. Navigate to the 'Analysis' section.\n3. Download or view your analysis report.";
  }
  
  function exploreFundamentals() {
    const contentArea = document.getElementById('contentArea');
    contentArea.value = "Explore the fundamentals of Forex trading:\n- Currency Pairs\n- Market Analysis\n- Risk Management\n- Trading Strategies\n- Market Influencing Factors";
  }