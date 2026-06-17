const defaultSettings = { theme: "light", language: "English", notifications: true };
const userSettings = { theme: "dark" };

const finalSetting = { ...defaultSettings, ...userSettings };
console.log(finalSetting);

// { theme: "dark", language: "English", notifications: true }
// userSettings OVERRIDES defaultSettings!
