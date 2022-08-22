let count = 0;
const counter = Box({
    child: [
        Subtitle({
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
document.body.append(counter.render());
