import express, { Express, Request, Response } from "express";
import { MikroORM, RequiredEntityData } from "@mikro-orm/core";
import dotenv from "dotenv";
import { Clothing } from "./entities/Clothing";
import { __prod__ } from "./constants";

dotenv.config();

const main = async () => {
  try {
    const orm = await MikroORM.init({
      entities: [Clothing],
      dbName: "postgres",
      password: process.env.DB_PW,
      type: "postgresql",
      user: "postgres",
      debug: !__prod__,
    });

    const em = orm.em.fork();
    const item = em.create(Clothing, {
      link: "https://www.metmuseum.org/art/collection/search/172904?ft=fashion+shoes&amp;offset=0&amp;rpp=40&amp;pos=8",
      category: "shoes",
      title: "Lady Bloom",
      year: "2013",
      description:
        "The fantastical forms of Noritaka Tatehana’s handcrafted footwear allude to traditional Japanese getas, wooden sandals elevated by flat risers, and in particular the high, lacquered versions worn by elite courtesans, or oiran. The exaggerated arch of Tatehana’s “heelless” shoes also mimics the profile of a Western high-heeled shoe. Elevated footwear has long served as an indicator of status and identity in many cultures. The tall chopines of Renaissance Italy, for example, signified a woman’s status as a noblewoman or courtesan. Like their historical precedents, Tatehana’s shoes necessarily alter the wearer’s gait, precariously shifting one’s balance forward.",
      culture: "Japanese",
      medium: "leather, metal",
      designer: {
        name: "Noritaka Tatehana",
        nationality: "Japanese",
        yob: "1985",
      },
    } as RequiredEntityData<Clothing>);
    console.log(item);
    await em.persistAndFlush(item);
  } catch (err) {
    if (err) console.log(err);
  }
};
main().catch((err) => {
  console.error(err);
});

const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at port https://localhost:${port}`);
});
