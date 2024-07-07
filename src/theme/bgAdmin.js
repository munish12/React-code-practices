import bgBody from "../assets/img/background-body-admin.png";

export const bgAdmin = {
  styles: {
    global: {
      "html, body": {
        bgImage: `url(${bgBody})`,
        bgSize: "cover",
        bgPosition: "center 0",
        bgRepeat: "no-repeat",
        height: "100%",
        minHeight: "100%",
      },
    },
  },
};
