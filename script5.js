<script>
    // SET EVENT DATE HERE
    const eventDate = new Date("2026-03-10 10:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const gap = eventDate - now;

        if (gap < 0) return;

        document.getElementById("days").innerText =
            Math.floor(gap / (1000 * 60 * 60 * 24));

        document.getElementById("hours").innerText =
            Math.floor((gap / (1000 * 60 * 60)) % 24);

        document.getElementById("minutes").innerText =
            Math.floor((gap / (1000 * 60)) % 60);

        document.getElementById("seconds").innerText =
            Math.floor((gap / 1000) % 60);
    }, 1000);
</script>