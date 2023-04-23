Object.defineProperty(global.navigator, "geolocation", {
    writable: true,
    value: {
        watchPosition: jest.fn(),
        getCurrentPosition: jest.fn(),
        clearWatch: jest.fn()
    },
});