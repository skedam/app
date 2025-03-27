import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Patient Lookup - Access Comprehensive Patient Information",
  description:
    "Explore detailed patient profiles with our Patient Lookup feature. Find contact details, medical history, and case information for efficient healthcare management.",
  //ogTitle:'...'
};

export default function FrameOnePage() {
  return <Page />;
}
