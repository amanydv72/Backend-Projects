const axios = require("axios");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("7004065450:AAG88VDn-Pc1eIi_EpNufeXwLDFX7VJdLHg");

bot.start((ctx) =>
  ctx.reply("Welcome to the new coding bot made by Aman Yadav")
);

let binarysearch = `
// C++ program to implement iterative Binary Search
#include <bits/stdc++.h>
using namespace std;

// An iterative binary search function.
int binarySearch(int arr[], int low, int high, int x)
{
    while (low <= high) {
        int mid = low + (high - low) / 2;

        // Check if x is present at mid
        if (arr[mid] == x)
            return mid;

        // If x greater, ignore left half
        if (arr[mid] < x)
            low = mid + 1;

        // If x is smaller, ignore right half
        else
            high = mid - 1;
    }

    // If we reach here, then element was not present
    return -1;
}

`;

bot.command("binarysearch", (ctx) => ctx.reply(binarysearch));
bot.command("howmadethis", (ctx) => ctx.reply("Aman Yadav"));
bot.command("twoSum", async function (ctx) {
  const response = await axios.get(
    "https://raw.githubusercontent.com/amanydv72/Backend-practice/master/js/doubt_in_promise.js"
  );
    console.log(response.data);
  return ctx.reply(response.data);
});

bot.on("sticker", (ctx) => ctx.reply("🙃"));

bot.launch();
