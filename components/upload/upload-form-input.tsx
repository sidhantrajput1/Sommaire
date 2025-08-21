"use clinet";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "../ui/input";

interface UploadInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: UploadInputProps) {
  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex justify-end items-center gap-1.5">
        <Input
          id="file"
          type="file"
          name="file"
          accept="application/pdf"
          required
          className=""
        />
        <Button>Upload You PDF</Button>
      </div>
    </form>
  );
}
