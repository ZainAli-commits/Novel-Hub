const chapters = {
    1: {
        title: "Chapter 1: The Beginning",
        text: "It was a quiet night when everything changed..."
    },
    2: {
        title: "Chapter 2: The Silence",
        text: "Silence wrapped the city like a curse..."
    }
};
const params = new URLSearchParams(window.location.search);
const chapterNumber = params.get("chapter");

document.getElementById("chapterTitle").innerText =
    chapters[chapterNumber].title;

document.getElementById("chapterText").innerText =
    chapters[chapterNumber].text;
