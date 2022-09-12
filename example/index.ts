/*************************************
 * Counter test
 *************************************/
let count = 0;

const app = Box({
    child: [
        Subtitle({
            // child: `You have pressed the button ${count} time(s)`,
            child: [
                "You have pressed the button ",
                Field({
                    child: count,
                    id: "count",
                }),
                " time(s)",
            ],
        }),
        Button({
            child: "Increment",
            id: "inc-button",
            style: {
                backgroundColor: "dodgerblue",
                color: "white",
                fontSize: px(16),
                border: "none",
                borderRadius: px(5),
                padding: px(10),
            },
            on: {
                click: () => {
                    count++;
                    $("#count", { child: count, id: "count" });
                },
            },
        }),
    ],
});

/*************************************
 * Light bulb test
 *************************************/
// document.body.style.backgroundColor = "dimgrey";
// const app = Box({
//     child: Box({
//         id: "bulb",
//         style: {
//             width: px(200),
//             height: px(200),
//             border: "none",
//             borderRadius: "50%",
//             backgroundColor: "lightgrey",
//         },
//         on: {
//             click: () => {
//                 let bulb = document.getElementById("bulb");
//                 if (bulb?.style.backgroundColor == "lightgrey") {
//                     bulb.style.backgroundColor = "yellow";
//                 } else {
//                     bulb.style.backgroundColor = "lightgrey";
//                 }
//                 console.log("fuck up!");
//             },
//         },
//     }),
//     style: {
//         display: "flex",
//         justifyContent: "center",
//     },
// });

// Load
document.body.append(app.render());
