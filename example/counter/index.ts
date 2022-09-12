let count = 0;

const counter = new Box({
    child: [
        new Subtitle({
            // child: `You have pressed the button ${count} time(s)`,
            child: [
                "You have pressed the button ",
                new Field({
                    child: count,
                    id: "count",
                }),
                " time(s)",
            ],
        }),
        new Button({
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
document.body.append(counter.render());
