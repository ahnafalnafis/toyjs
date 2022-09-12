document.body.style.backgroundColor = "dimgrey";
const bulb = new Box({
    child: new Box({
        id: "bulb",
        style: {
            width: px(200),
            height: px(200),
            border: "none",
            borderRadius: "50%",
            backgroundColor: "lightgrey",
        },
        on: {
            click: () => {
                let bulb = document.getElementById("bulb");
                if (bulb?.style.backgroundColor == "lightgrey") {
                    bulb.style.backgroundColor = "yellow";
                } else {
                    bulb.style.backgroundColor = "lightgrey";
                }
                console.log("fuck up!");
            },
        },
    }),
    style: {
        display: "flex",
        justifyContent: "center",
    },
});

// Load
document.body.append(bulb.render());
