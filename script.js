// ==========================================
// LUNAR BLOOM
// COMPLETE SCRIPT.JS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // SEARCH
    // ======================================

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        const searchBox = searchInput.parentElement;

        searchBox.style.position = "relative";


        // CREATE DROPDOWN
        const dropdown = document.createElement("div");

        dropdown.id = "searchDropdown";

        dropdown.style.cssText = `
            position:absolute;
            top:calc(100% + 10px);
            left:0;
            width:100%;
            min-width:320px;
            background:white;
            border:1px solid #f1e8eb;
            border-radius:16px;
            padding:8px;
            box-shadow:0 15px 35px rgba(70,50,60,.15);
            z-index:99999;
            display:none;
        `;

        searchBox.appendChild(dropdown);


        // SEARCH ITEMS
        const pages = [

            {
                name: "Aura Rosa",
                description: "Fantasy countryside environment",
                icon: "✿",
                link: "aura-rosa.html",
                keywords: "aura rosa countryside house farm windmill stable waterwheel environment blender"
            },

            {
                name: "Crystal Caverns",
                description: "Fantasy crystal environment",
                icon: "♦",
                link: "crystal-caverns.html",
                keywords: "crystal caverns cave purple crystals environment blender fantasy"
            },

            {
                name: "Overgrown Ruins",
                description: "Overgrown environment",
                icon: "♜",
                link: "overgrown-ruins.html",
                keywords: "overgrown ruins plants nature environment doors blender"
            },

            {
                name: "Fairy Props",
                description: "Fantasy props and models",
                icon: "♧",
                link: "fairy-props.html",
                keywords: "fairy props models modeling lantern plants accessories blender"
            },

            {
                name: "Wonderlight Park",
                description: "Currently in production",
                icon: "✦",
                link: "projects.html",
                keywords: "wonderlight park production world environment"
            },

            {
                name: "Projects",
                description: "View all of my work",
                icon: "▣",
                link: "projects.html",
                keywords: "projects portfolio work gallery environments models"
            },

            {
                name: "About Me",
                description: "Learn more about me",
                icon: "●",
                link: "about.html",
                keywords: "about artist experience blender roblox studio skills modeling"
            },

            {
                name: "Prices",
                description: "Services, commissions and pricing",
                icon: "£",
                link: "prices.html",
                keywords: "prices pricing commissions cost quote hire services maps accessories"
            },

            {
                name: "Contact",
                description: "Get in touch",
                icon: "✉",
                link: "contact.html",
                keywords: "contact email instagram discord message freelance commission"
            }

        ];


        // CREATE RESULT
        function makeResult(page) {

            const result = document.createElement("a");

            result.href = page.link;

            result.style.cssText = `
                display:grid;
                grid-template-columns:42px 1fr 25px;
                align-items:center;
                gap:12px;
                padding:11px;
                border-radius:12px;
                text-decoration:none;
                color:#56545d;
            `;


            result.innerHTML = `

                <span style="
                    width:42px;
                    height:42px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius:12px;
                    background:#fff0f4;
                    color:#e987a3;
                    font-size:18px;
                ">
                    ${page.icon}
                </span>

                <span>

                    <strong style="
                        display:block;
                        font-size:13px;
                        margin-bottom:2px;
                    ">
                        ${page.name}
                    </strong>

                    <small style="
                        color:#aaa5aa;
                        font-size:11px;
                    ">
                        ${page.description}
                    </small>

                </span>

                <span style="
                    color:#ff9db8;
                    font-size:17px;
                ">
                    →
                </span>
            `;


            result.addEventListener("mouseenter", function () {
                result.style.background = "#fff7f9";
            });


            result.addEventListener("mouseleave", function () {
                result.style.background = "transparent";
            });


            return result;

        }


        // SEARCH FUNCTION
        function search() {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();


            dropdown.innerHTML = "";


            if (query === "") {

                dropdown.style.display = "none";

                return;

            }


            const results = pages.filter(function (page) {

                const searchable =
                    (
                        page.name +
                        " " +
                        page.description +
                        " " +
                        page.keywords
                    ).toLowerCase();


                return searchable.includes(query);

            });


            if (results.length === 0) {

                const empty =
                    document.createElement("div");

                empty.textContent =
                    `No results found for "${searchInput.value}"`;

                empty.style.cssText = `
                    padding:18px;
                    text-align:center;
                    color:#aaa5aa;
                    font-size:12px;
                `;

                dropdown.appendChild(empty);

            }

            else {

                results
                    .slice(0, 6)
                    .forEach(function (page) {

                        dropdown.appendChild(
                            makeResult(page)
                        );

                    });

            }


            dropdown.style.display = "block";

        }


        // TYPE
        searchInput.addEventListener(
            "input",
            search
        );


        // PRESS ENTER
        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    const query =
                        searchInput.value
                            .toLowerCase()
                            .trim();


                    const result =
                        pages.find(function (page) {

                            const searchable =
                                (
                                    page.name +
                                    " " +
                                    page.description +
                                    " " +
                                    page.keywords
                                ).toLowerCase();


                            return searchable.includes(query);

                        });


                    if (result) {

                        window.location.href =
                            result.link;

                    }

                }


                if (event.key === "Escape") {

                    dropdown.style.display =
                        "none";

                    searchInput.blur();

                }

            }
        );


        // CLICK OUTSIDE
        document.addEventListener(
            "click",
            function (event) {

                if (!searchBox.contains(event.target)) {

                    dropdown.style.display =
                        "none";

                }

            }
        );

    }


    // ======================================
    // HERO DOTS
    // ======================================

    const heroDots =
        document.querySelectorAll(".hero-dot");


    heroDots.forEach(function (dot) {

        dot.addEventListener(
            "click",
            function () {

                heroDots.forEach(
                    function (otherDot) {

                        otherDot.classList.remove(
                            "active"
                        );

                    }
                );


                dot.classList.add(
                    "active"
                );

            }
        );

    });

});


// ==========================================
// END OF SCRIPT.JS
// ==========================================
