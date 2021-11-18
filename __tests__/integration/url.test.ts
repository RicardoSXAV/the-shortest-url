import request from "supertest";
import Url from "../../src/database/models/Url";
import app from "../../src/server";

beforeEach(async () => {
  await Url.sync({ force: true });
});

afterEach(async () => {
  await Url.drop();
});

describe("Encode", () => {
  it("should return an URL starting with our server host", async () => {
    const url = "www.test.com";

    const response: any = await request(app)
      .post("/url/encode")
      .type("form")
      .send({ url });

    expect(
      response.body.shortUrl.includes("http://localhost:5000/")
    ).toBeTruthy();
  });
});

describe("Decode", () => {
  it("should return 401 when sending an URL that's not in database", async () => {
    const url = "www.test.com";

    const response: any = await request(app)
      .post("/url/decode")
      .type("form")
      .send({ url });

    expect(response.status).toBe(401);
  });

  it("should return original URL when passing an existing short URL", async () => {
    const original = "www.test.com";

    const encode: any = await request(app)
      .post("/url/encode")
      .type("form")
      .send({ url: original });

    const short = encode.body.shortUrl;

    const decode: any = await request(app)
      .post("/url/decode")
      .type("form")
      .send({ url: short });

    expect(decode.body.originalUrl).toEqual(original);
  });
});
