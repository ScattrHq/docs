import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div class="font-lato  bg-minimal-bg max-w-[full] max-h-[full] mx-auto">
      <nav class="flex items-center justify-between tab:justify-center px-[10%] border-b">

      </nav>

      <main class="hero-section text-center">
        <section class="hero-info flex flex-col gap-5 items-center mt-14 mobile:mt-7">
          <p class="text-secondary-text mobile:text-sm ">
            The Smart Way to Spread Your Writings
          </p>

          <h1 class="font-bold text-[40px] sm:text-3xl mobile:text-2xl max-w-[500px] leading-snug">
            Post 🚀 your article on multiple platforms in 1-click
          </h1>

          <p class="text-lg sm:text-base max-w-[700px] md:px-10 tab:px-4">
            This easy-to-use tool makes it simple to post your articles in
            seconds across multiple platforms, and helps you reach a wider
            audience with ease.
          </p>

          <div class="cta my-5">
            <Link
              class="bg-primary hover:bg-primary-dark text-white p-2 rounded-md px-5"
              to="/signin"
            >
Read the Docs 📖
            </Link>
          </div>
        </section>
        <section class="hero-illustration mt-14">
          <div class="w-[70%] md:w-[80%] tab:w-[90%] mx-auto pb-10">
            <br></br>
            <br></br>
          </div>
        </section>
      </main>
    </div>
  );
}
