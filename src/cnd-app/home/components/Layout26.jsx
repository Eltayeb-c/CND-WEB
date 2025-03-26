"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mineral-green/90 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-white/80">Connect</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white">
              Discover the Future of EV Charging Today
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-white/80">
              Join a community that's transforming the way EV owners charge. Our
              platform connects you with hosts offering convenient charging
              solutions.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl text-white">
                  __%
                </h3>
                <p className="text-white/80">User satisfaction rate among our EV owners.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl text-white">
                  __%
                </h3>
                <p className="text-white/80">Hosts report increased earnings from unused chargers.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary" className="bg-white hover:bg-french-gray text-mineral-green font-bold">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="text-white hover:text-malachite"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1558425845-7a1b6d3e6f7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="EV charging video thumbnail"
                className="size-full object-cover rounded-xl shadow-xl"
              />
              <span className="absolute inset-0 z-10 bg-black/50 rounded-xl" />
              <FaCirclePlay className="absolute z-20 size-16 text-malachite hover:text-white transition-colors duration-300" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video="https://www.youtube.com/embed/RaGVoB4Zn-Y" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
