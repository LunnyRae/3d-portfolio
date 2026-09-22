// ==========================================
// LUNAR BLOOM - SCRIPT.JS
// ==========================================


// ==========================================
// SEARCH DATA
// ==========================================

const portfolioSearchItems = [

    {
        title: "Aura Rosa",
        description: "Fantasy countryside environment",
        keywords: [
            "aura",
            "aura rosa",
            "countryside",
            "environment",
            "map",
            "blender",
            "3d",
            "windmill",
            "stables",
            "waterwheel"
        ],
        url: "aura-rosa.html",
        icon: "✿"
    },

    {
        title: "Crystal Caverns",
        description: "Fantasy crystal environment",
        keywords: [
            "crystal",
            "crystals",
            "crystal caverns",
            "cavern",
            "cave",
            "environment",
            "blender",
            "3d",
            "fantasy"
        ],
        url: "crystal-caverns.html",
        icon: "♦"
    },

    {
        title: "Overgrown Ruins",
        description: "Overgrown fantasy environment",
        keywords: [
            "overgrown",
            "ruins",
            "overgrown ruins",
            "plants",
            "nature",
            "environment",
            "blender",
            "3d"
        ],
        url: "overgrown-ruins.html",
        icon: "♜"
    },

    {
        title: "Fairy Props",
        description: "Fantasy props and 3D models",
        keywords: [
            "fairy",
            "fairy props",
            "props",
            "models",
            "modeling",
            "accessories",
            "plants",
            "lanterns",
            "blender",
            "3d"
        ],
        url: "fairy-props.html",
        icon: "♧"
    },

    {
        title: "Wonderlight Park",
        description: "Environment currently in production",
        keywords: [
            "wonderlight",
            "wonderlight park",
            "park",
            "production",
            "environment",
            "world building"
        ],
        url: "projects.html",
        icon: "✦"
    },

    {
        title: "All Projects",
        description: "Explore my complete portfolio",
        keywords: [
            "projects",
            "project",
            "portfolio",
            "work",
            "my work",
            "gallery",
            "models",
            "environments"
        ],
        url: "projects.html",
        icon: "▣"
    },

    {
        title: "About Me",
        description: "Learn more about me and my work",
        keywords: [
            "about",
            "about me",
            "artist",
            "3d artist",
            "modeler",
            "experience",
            "skills",
            "blender",
            "roblox",
            "roblox studio"
        ],
        url: "about.html",
        icon: "●"
    },

    {
        title: "Prices & Commissions",
        description: "View services and pricing",
        keywords: [
            "price",
            "prices",
            "pricing",
            "commission",
            "commissions",
            "cost",
            "costs",
            "service",
            "services",
            "hire",
            "quote",
            "custom quote",
            "maps",
            "accessories"
        ],
        url: "prices.html",
        icon: "£"
    },

    {
        title: "Contact",
        description: "Get in touch with me",
        keywords: [
            "contact",
            "email",
            "instagram",
            "discord",
            "message",
            "hire",
            "freelance",
            "commission"
        ],
        url: "contact.html",
        icon: "✉"
    }

];


// ==========================================
// SEARCH ELEMENTS
// ==========================================

const searchInput = document.getElementById("searchInput");


// Only create search if the search bar exists
if (searchInput) {

    const searchContainer = searchInput.parentElement;

    searchContainer.style.position = "relative";


    // ==========================================
    // CREATE RESULTS DROPDOWN
    // ==========================================

    const searchResults = document.createElement("div");

    searchResults.id = "searchResults";

    searchResults.style.position = "absolute";
    searchResults.style.top = "calc(100% + 10px)";
    searchResults.style.left = "0";
    searchResults.style.width = "100%";
    searchResults.style.minWidth = "310px";
    searchResults.style.maxHeight = "390px";
    searchResults.style.overflowY = "auto";
    searchResults.style.padding = "8px";
    searchResults.style.background = "#ffffff";
    searchResults.style.border = "1px solid #f0e7ea";
    searchResults.style.borderRadius = "18px";
    searchResults.style.boxShadow =
        "0 15px 40px rgba(70, 50, 60, 0.14)";
    searchResults.style.zIndex = "9999";
    searchResults.style.display = "none";

    searchContainer.appendChild(searchResults);


    // ==========================================
    // NORMALIZE TEXT
    // ==========================================

    function normalizeText(text) {

        return text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ");

    }


    // ==========================================
    // SEARCH
    // ==========================================

    function searchPortfolio(query) {

        const cleanQuery = normalizeText(query);

        if (!cleanQuery) {
            return [];
        }

        const words = cleanQuery.split(" ");


        return portfolioSearchItems
            .map(item => {

                const searchableText = normalizeText(

                    item.title + " " +
                    item.description + " " +
                    item.keywords.join(" ")

                );


                let score = 0;


                // Exact title match
                if (
                    normalizeText(item.title) === cleanQuery
                ) {
                    score += 100;
                }


                // Title contains search
                if (
                    normalizeText(item.title)
                        .includes(cleanQuery)
                ) {
                    score += 50;
                }


                // Keyword matches
                item.keywords.forEach(keyword => {

                    const cleanKeyword =
                        normalizeText(keyword);

                    if (cleanKeyword === cleanQuery) {
                        score += 35;
                    }

                    else if (
                        cleanKeyword.includes(cleanQuery)
                    ) {
                        score += 20;
                    }

                });


                // Every word searched
                words.forEach(word => {

                    if (searchableText.includes(word)) {
                        score += 5;
                    }

                });


                return {
                    ...item,
                    score
                };

            })

            .filter(item => item.score > 0)

            .sort((a, b) => b.score - a.score);

    }


    // ==========================================
    // CREATE ONE RESULT
    // ==========================================

    function createResult(item) {

        const result = document.createElement("a");

        result.href = item.url;

        result.style.display = "grid";
        result.style.gridTemplateColumns =
            "45px 1fr 30px";

        result.style.alignItems = "center";
        result.style.gap = "12px";
        result.style.padding = "12px";
        result.style.margin = "2px 0";
        result.style.borderRadius = "13px";
        result.style.textDecoration = "none";
        result.style.color = "#56545d";
        result.style.transition = "0.2s";


        // ICON
        const icon = document.createElement("span");

        icon.textContent = item.icon;

        icon.style.width = "43px";
        icon.style.height = "43px";
        icon.style.display = "flex";
        icon.style.alignItems = "center";
        icon.style.justifyContent = "center";
        icon.style.borderRadius = "13px";
        icon.style.background = "#fff0f4";
        icon.style.color = "#e987a3";
        icon.style.fontSize = "19px";


        // TEXT
        const text = document.createElement("div");


        const title = document.createElement("strong");

        title.textContent = item.title;

        title.style.display = "block";
        title.style.marginBottom = "2px";
        title.style.fontSize = "13px";


        const description =
            document.createElement("span");

        description.textContent =
            item.description;

        description.style.display = "block";
        description.style.color = "#aaa5aa";
        description.style.fontSize = "11px";


        text.appendChild(title);
        text.appendChild(description);


        // ARROW
        const arrow = document.createElement("span");

        arrow.textContent = "→";

        arrow.style.color = "#ff9db8";
        arrow.style.fontSize = "17px";
        arrow.style.textAlign = "center";


        result.appendChild(icon);
        result.appendChild(text);
        result.appendChild(arrow);


        // HOVER
        result.addEventListener(
            "mouseenter",
            () => {

                result.style.background =
                    "#fff7f9";

            }
        );


        result.addEventListener(
            "mouseleave",
            () => {

                result.style.background =
                    "transparent";

            }
        );


        return result;

    }


    // ==========================================
    // DISPLAY RESULTS
    // ==========================================

    function displaySearchResults(query) {

        searchResults.innerHTML = "";


        if (!query.trim()) {

            searchResults.style.display = "none";

            return;

        }


        const results =
            searchPortfolio(query);


        if (results.length === 0) {

            const noResults =
                document.createElement("div");

            noResults.style.padding = "18px";
            noResults.style.textAlign = "center";
            noResults.style.color = "#aaa5aa";
            noResults.style.fontSize = "12px";

            noResults.textContent =
                `No results found for "${query}"`;

            searchResults.appendChild(noResults);

            searchResults.style.display =
                "block";

            return;

        }


        results
            .slice(0, 6)
            .forEach(item => {

                searchResults.appendChild(
                    createResult(item)
                );

            });


        searchResults.style.display =
            "block";

    }


    // ==========================================
    // USER TYPES
    // ==========================================

    searchInput.addEventListener(
        "input",
        () => {

            displaySearchResults(
                searchInput.value
            );

        }
    );


    // ==========================================
    // PRESS ENTER
    // ==========================================

    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                const results =
                    searchPortfolio(
                        searchInput.value
                    );


                if (results.length > 0) {

                    window.location.href =
                        results[0].url;

                }

            }


            if (event.key === "Escape") {

                searchResults.style.display =
                    "none";

                searchInput.blur();

            }

        }
    );


    // ==========================================
    // FOCUS SEARCH
    // ==========================================

    searchInput.addEventListener(
        "focus",
        () => {

            if (searchInput.value.trim()) {

                displaySearchResults(
                    searchInput.value
                );

            }

        }
    );


    // ==========================================
    // CLICK OUTSIDE SEARCH
    // ==========================================

    document.addEventListener(
        "click",
        event => {

            if (
                !searchContainer.contains(
                    event.target
                )
            ) {

                searchResults.style.display =
                    "none";

            }

        }
    );

}


// ==========================================
// HERO DOTS
// ==========================================

const heroDots =
    document.querySelectorAll(".hero-dot");


heroDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                heroDots.forEach(
                    item => {
                        item.classList.remove(
                            "active"
                        );
                    }
                );

                dot.classList.add("active");

            }
        );

    }
);


// ==========================================
// END
// ==========================================
