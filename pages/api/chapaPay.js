// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from "request";

export default function handler(req, res) {
  return new Promise((resolve) => {
    if (req.method === "POST") {
      var options = {
        method: "POST",
        url: process.env.CHAPA_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_LIVE_API_KEY}`,
        },
        formData: {
          amount: req.body.amount,
          currency: "ETB",
          email: "example@example.com",
          first_name: "First Name",
          last_name: "Last Name",
          tx_ref: req.body.tx_ref,
          return_url: `${process.env.MAIN_URL}/successful`,
          "customization[title]": "Donation",
          "customization[description]": "Thank you",
        },
      };
      request(options, function (error, response) {
        if (error) return res.status(500).json(error);

        let temp = JSON.parse(response.body);

        if (!temp.data) return res.end();

        let url = temp.data["checkout_url"];

        res.status(200).send(url);
        resolve();
      });
    }
  });
}
