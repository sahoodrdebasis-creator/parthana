/* =====================================================
   SPECIAL WEBSITE - FIXED JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ JavaScript loaded successfully!");

    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const enterBtn = document.getElementById("enterBtn");
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");

    const heartsContainer =
        document.getElementById("hearts-container");

    const musicBtn =
        document.getElementById("musicBtn");

    const music =
        document.getElementById("backgroundMusic");

    const secretBtn =
        document.getElementById("secretBtn");

    const secretMessage =
        document.getElementById("secretMessage");

    const finalBtn =
        document.getElementById("finalBtn");

    const finalMessage =
        document.getElementById("finalMessage");

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const closeModal =
        document.getElementById("closeModal");


    /* =====================================================
       1. ENTER WEBSITE
    ===================================================== */

    if (enterBtn && intro && mainContent) {

        enterBtn.addEventListener("click", () => {

            console.log("✨ Enter button clicked");

            intro.style.transition = "opacity 0.8s ease";
            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";

                mainContent.classList.remove("hidden");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 800);

        });

    } else {

        console.error(
            "❌ Enter button elements are missing!"
        );

    }


    /* =====================================================
       2. FLOATING HEARTS
    ===================================================== */

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "🌸",
        "✨"
    ];

    function createHeart() {

        if (!heartsContainer) return;

        const heart =
            document.createElement("div");

        heart.className = "floating-heart";

        heart.textContent =
            heartSymbols[
                Math.floor(
                    Math.random() * heartSymbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 12000);

    }

    if (heartsContainer) {

        setInterval(createHeart, 900);

    }


    /* =====================================================
       3. MUSIC
    ===================================================== */

    let musicPlaying = false;

    if (musicBtn && music) {

        musicBtn.addEventListener("click", async () => {

            console.log("🎵 Music button clicked");

            try {

                if (!musicPlaying) {

                    await music.play();

                    musicPlaying = true;

                    musicBtn.textContent =
                        "⏸️ Pause Music";

                } else {

                    music.pause();

                    musicPlaying = false;

                    musicBtn.textContent =
                        "🎵 Music";

                }

            } catch (error) {

                console.error(
                    "Music error:",
                    error
                );

                alert(
                    "Add your music file at: music/song.mp3 ❤️"
                );

            }

        });

    }


    /* =====================================================
       4. SECRET MESSAGE
    ===================================================== */

    if (secretBtn && secretMessage) {

        secretBtn.addEventListener("click", () => {

            console.log("💌 Secret button clicked");

            secretMessage.classList.toggle("hidden");

            const isVisible =
                !secretMessage.classList.contains("hidden");

            if (isVisible) {

                secretBtn.textContent =
                    "You Found The Secret ❤️";

                createHeartBurst();

            } else {

                secretBtn.textContent =
                    "Open The Secret 💌";

            }

        });

    }


    /* =====================================================
       5. FINAL MESSAGE
    ===================================================== */

    if (finalBtn && finalMessage) {

        finalBtn.addEventListener("click", () => {

            console.log("❤️ Final button clicked");

            finalMessage.classList.toggle("hidden");

            const isVisible =
                !finalMessage.classList.contains("hidden");

            if (isVisible) {

                finalBtn.textContent = "❤️";

                createHeartBurst();

            } else {

                finalBtn.textContent =
                    "One More Thing ❤️";

            }

        });

    }


    /* =====================================================
       6. HEART BURST
    ===================================================== */

    function createHeartBurst() {

        if (!heartsContainer) return;

        for (let i = 0; i < 25; i++) {

            const heart =
                document.createElement("div");

            heart.className = "floating-heart";

            heart.textContent =
                heartSymbols[
                    Math.floor(
                        Math.random() *
                        heartSymbols.length
                    )
                ];

            heart.style.left =
                (40 + Math.random() * 20) + "%";

            heart.style.bottom =
                "40%";

            heart.style.fontSize =
                (15 + Math.random() * 20) + "px";

            heart.style.animationDuration =
                (2 + Math.random() * 2) + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 5000);

        }

    }


    /* =====================================================
       7. IMAGE GALLERY
    ===================================================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img"
        );

    console.log(
        "📸 Gallery images found:",
        galleryImages.length
    );

    galleryImages.forEach((image) => {

        image.addEventListener("click", () => {

            if (!modal || !modalImage) return;

            console.log(
                "📸 Image clicked:",
                image.src
            );

            modalImage.src = image.src;

            modal.classList.add("active");

        });

    });


    /* =====================================================
       8. CLOSE IMAGE
    ===================================================== */

    if (closeModal && modal) {

        closeModal.addEventListener("click", () => {

            modal.classList.remove("active");

        });

    }


    if (modal) {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {

                modal.classList.remove("active");

            }

        });

    }


    /* =====================================================
       9. ESC KEY
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal
        ) {

            modal.classList.remove("active");

        }

    });


    /* =====================================================
       10. SCROLL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".timeline-card, .reason-card, .gallery-item, .letter"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.style.animation =
                                "fadeUp 0.8s ease forwards";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        revealElements.forEach((element) => {

            element.style.opacity = "0";

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.style.opacity = "1";

        });

    }


    /* =====================================================
       FINAL TEST
    ===================================================== */

    console.log(
        "%c❤️ Special Website Loaded Successfully!",
        "font-size:20px;font-weight:bold;"
    );

});