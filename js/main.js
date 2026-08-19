// tsParticles
(async () => {
    await loadSlim(tsParticles);

    await tsParticles.load({
        id: "tsparticles",

        options: {
            fullScreen: {
                enable: false
            },

            particles: {
                number: {
                    value: 120,
                    density: {
                        enable: true
                    }
                },

                color: {
                    value: "#35C0C5"
                },

                opacity: {
                    value: 0.4
                },

                size: {
                    value: {
                        min: 1,
                        max: 3
                    }
                },

                links: {
                    enable: true,
                    distance: 150,
                    color: "#35C0C5",
                    opacity: 0.3,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 0.7,
                    random: true,
                    outModes: {
                        default: "bounce"
                    }
                }
            },

            detectRetina: true
        }
    });
})();