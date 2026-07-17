const fs = require('fs');

// Mock a minimal browser environment
global.window = {};
global.document = {
    querySelectorAll: () => [],
    querySelector: (selector) => {
        if (selector === '.current-lang') {
            return { textContent: 'EN' };
        }
        if (selector === '.current-theme') {
            return { setAttribute: () => {} };
        }
        if (selector === '.theme-btn i') {
            return { className: '' };
        }
        return null;
    },
    addEventListener: () => {},
    getElementById: () => null
};
global.localStorage = {
    getItem: () => null,
    setItem: () => null
};
global.Typed = function() {
    this.destroy = () => {};
};
global.IntersectionObserver = function() {
    this.observe = () => {};
};

try {
    const code = fs.readFileSync('scripts/script.js', 'utf8');
    // Run the script
    eval(code);
    console.log("Evaluation successful, no load-time errors.");
} catch (e) {
    console.error("Evaluation failed with error:", e);
}
