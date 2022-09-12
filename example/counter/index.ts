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

// Load
document.body.append(app.render());
