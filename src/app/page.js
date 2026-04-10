"use client";
import { useState } from "react";
import Navbar from "@/components/Main/Navbar";
import Sidebar from "@/components/Main/Sidebar";
import MobileTabbar from "@/components/Main/BottomBar";
import Hero from "@/components/Home/Hero";
import CtaForm from "@/components/Home/CtaForm";
import Category from "@/components/Home/Category";

export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <Hero />
        <CtaForm />
        <Category />
      </div>

      <MobileTabbar />
    </div>
  );
}