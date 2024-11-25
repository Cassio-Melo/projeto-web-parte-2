document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector(".gallery--container");
    const galleryList = carouselContainer.querySelector(".galleryList");
    const items = galleryList.querySelectorAll(".galleryList--item");
    const itemCount = items.length;
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

    galleryList.style.width = `${itemCount * itemWidth}px`;

    function moveToNext() {
        galleryList.appendChild(galleryList.firstElementChild.cloneNode(true));
        galleryList.style.transition = "transform 0.5s ease";
        galleryList.style.transform = `translateX(-${itemWidth}px)`;

        setTimeout(() => {
            galleryList.style.transition = "none";
            galleryList.style.transform = "translateX(0)";
            galleryList.removeChild(galleryList.firstElementChild);
        }, 500);
    }

    function moveToPrev() {
        const lastItem = galleryList.lastElementChild;
        const clonedItem = lastItem.cloneNode(true);
        galleryList.insertBefore(clonedItem, galleryList.firstElementChild);
        galleryList.style.transition = "none";
        galleryList.style.transform = `translateX(-${itemWidth}px)`;

        setTimeout(() => {
            galleryList.style.transition = "transform 0.5s ease";
            galleryList.style.transform = "translateX(0)";
            galleryList.removeChild(lastItem);
        }, 50);
    }

    document.querySelector(".gallery--prev").addEventListener("click", moveToPrev);
    document.querySelector(".gallery--next").addEventListener("click", moveToNext);
});