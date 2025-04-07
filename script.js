// Global Navigation Handler
function navigate(page) {
    window.location.href = page;
}

// Dummy Notification Function
function showNotification(message) {
    alert(message);
}

// Dynamic Progress Bar Updates
function updateProgressBar(id, value) {
    const progressBar = document.getElementById(id);
    if (progressBar) {
        progressBar.style.width = value + '%';
        progressBar.innerText = value + '% Complete';
    }
}

// Example dynamic updates for monitoring page
function simulateLiveUpdates() {
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            showNotification('Live Data Stream Complete!');
        } else {
            progress += 5;
            updateProgressBar('liveProgress', progress);
        }
    }, 500);
}

// Show warning if device disconnected
function deviceDisconnected(deviceName) {
    showNotification(deviceName + ' disconnected! Please check your connection.');
}

// Simulate AI training progress
function simulateAITraining() {
    let progress = 0;
    const trainingProgress = document.getElementById('aiTrainingProgress');
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            showNotification('AI Training Complete!');
        } else {
            progress += 10;
            trainingProgress.style.width = progress + '%';
            trainingProgress.innerText = progress + '%';
        }
    }, 400);
}

// Add event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const aiTrainingBtn = document.getElementById('startTraining');
    if (aiTrainingBtn) {
        aiTrainingBtn.addEventListener('click', simulateAITraining);
    }

    const liveUpdateBtn = document.getElementById('startLive');
    if (liveUpdateBtn) {
        liveUpdateBtn.addEventListener('click', simulateLiveUpdates);
    }
});

// Form validation (Optional for profile page)
function validateForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    if (!name || !age) {
        showNotification('Please fill out all required fields.');
        return false;
    }
    showNotification('Profile Saved Successfully!');
    return true;
}

// Emergency Alert Simulation
function triggerEmergencyAlert() {
    showNotification('Emergency Alert Sent to Caregivers!');
}

// Auto-SOS Countdown Simulation
function autoSOSCountdown() {
    let countdown = 5;
    const interval = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(interval);
            showNotification('Auto-SOS Triggered!');
        } else {
            console.log('Auto-SOS in: ' + countdown + ' seconds');
            countdown--;
        }
    }, 1000);
}

// Progress Simulation for Neurofeedback
function simulateNeurofeedbackProgress() {
    let progress = 0;
    const progressBar = document.getElementById('neuroProgress');
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            showNotification('Neurofeedback Session Complete!');
        } else {
            progress += 8;
            if (progressBar) {
                progressBar.style.width = progress + '%';
                progressBar.innerText = progress + '%';
            }
        }
    }, 600);
}

// Auto-initialize simulations if IDs are present
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('neuroProgress')) {
        simulateNeurofeedbackProgress();
    }
});
