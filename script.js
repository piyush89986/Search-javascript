let users = [
    {
        name: "atul mourya",
        pic: "https://images.unsplash.com/photo-1756748371390-099e4e6683ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "silent chos in a loud word| not for everyone"
    },
    {
        name: "hariom pashwan",
        pic: "https://images.unsplash.com/photo-1668852601788-f2c34060ffb4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "dreamer | coffee lover | chasing sunsets"

    },
    {
        name: "tejash patil",
        pic: "https://images.unsplash.com/photo-1630952588300-66bdb3a24286?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "tech geek | always learning | code > sleep"
    },
    {
        name: "nikhi sindhe",
        pic: "https://plus.unsplash.com/premium_photo-1705418263143-11dcad9e64df?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "bookworm | lost in stories | music heals"
    },
    {
        name: "piyush tirole",
        pic: "https://plus.unsplash.com/premium_photo-1705423488829-0f0e3c1761ea?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "quiet observer | deep thinker | seeker of peace"
    },
    {
        name: "pawan gour",
        pic: "https://plus.unsplash.com/premium_photo-1715876267764-1a201d462c64?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "artist at heart | colors and chaos | free spirit"
    },
    {
        name: "pawan patil",
        pic: "https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?q=80&w=606&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "very good player know about team spriti "
    }
];


function showusers(arr) {
    const container = document.querySelector(".flex-gap-10");
    arr.forEach(function (user) {
        // ... create card as before
        // // Create card container
        const card = document.createElement("div");
        card.className = "card";

        // Image
        const img = document.createElement("img");
        img.src = user.pic;
        img.className = "bg-img";

        // Blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.className = "blurred-layer";

        // Content container
        const content = document.createElement("div");
        content.className = "content";

        // Title
        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        // Paragraph
        const p = document.createElement("p");
        p.textContent = user.bio;

        // Append children
        content.appendChild(h3);
        content.appendChild(p);


        card.appendChild(blurredLayer);
        card.appendChild(img);

        card.appendChild(content);

        // Append card to body (or any container)
        document.querySelector(".cards").appendChild(card);

    });

};

showusers(users);


let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
    let newusers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });

    document.querySelector(".cards").innerHTML = "";
    showusers(newusers);




    if (newusers.length === 0) {
        h2.style.display = "flex";
    } else {
        h2.style.display = "none";
    }


});


