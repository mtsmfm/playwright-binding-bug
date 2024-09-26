import { chromium } from "playwright";
import { fork } from "node:child_process";
import { fileURLToPath } from "url";

const main = async () => {
  if (process.argv[2] === "child") {
    await chromium.connectOverCDP("http://localhost:12345");
  } else {
    const browser = await chromium.launch({
      args: ["--remote-debugging-port=12345"],
      headless: false,
    });
    const context = await browser.newContext();
    context.exposeBinding("hello", async ({}) => {});
    const page = await context.newPage();
    page.on("pageerror", (error) => {
      console.log(error);
    });

    await page.evaluate(() => {
      setInterval(() => {
        window.hello();
      }, 500);
    });

    const controller = new AbortController();
    const { signal } = controller;
    fork(fileURLToPath(import.meta.url), ["child"], { signal });

    await page.pause();

    controller.abort();

    await context.close();
    await browser.close();
  }
};

main();
