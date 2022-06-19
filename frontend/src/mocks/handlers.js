import { rest } from "msw";

export const handlers = [
    rest.get(
        "https://sundae-server-app.herokuapp.com/scoops",
        (req, res, ctx) => {
            return res(
                ctx.json([
                    { name: "Chocolate", imagePath: "/images/chocolate.png" },
                    { name: "Vanilla", imagePath: "/images/vanilla.png" },
                ])
            );
        }
    ),
    rest.get(
        "https://sundae-server-app.herokuapp.com/toppings",
        (req, res, ctx) => {
            return res(
                ctx.json([
                    { name: "Cherries", imagePath: "/images/cherries.png" },
                    { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
                    { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
                ])
            );
        }
    ),
    rest.post(
        "https://sundae-server-app.herokuapp.com/order",
        (req, res, ctx) => {
            return res(ctx.json({ orderNumber: 123455676 }));
        }
    ),
];