"use client";
import React from "react";
import UploadFormInput from "./upload-form-input";

import { file, refine, z } from "zod";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size must be less then 20MB",
    })

    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

export default function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    //validating the fields
    const validatedFields = schema.safeParse({file})

    console.log(validatedFields)

    if(!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File")
        return;
    }

    //schema with zod
    //upload the file to uploadthing
    //parse the pdf using lang chain
    //summarize the pdf using AI
    //save the summary to the database
    //redirect to the [id] summary page
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
