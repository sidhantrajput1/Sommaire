"use client";
import React from "react";
import UploadFormInput from "./upload-form-input";

import { file, refine, z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { error } from "console";
import generatePdfSummary from "@/actions/upload-action";
// import { useUploadThing } from "@/utils/uploadthing";

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
  // const {toast} = useSonner();

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
  onClientUploadComplete: () => {
    toast.success("✅ Uploaded successfully!");
  },
  onUploadError: (err) => {
    toast.error("❌ Upload failed", {
      description: err.message,
    });
  },
  onUploadBegin: () => {
    console.log("Upload has begun");
  },
});



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    //validating the fields
    const validatedFields = schema.safeParse({ file });

    console.log(validatedFields);

    if (!validatedFields.success) {
      // console.log(
      //   validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File"
      // );
      toast.error("❌ Invalid file", {
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          "Invalid file",
      });

      return;
    }

    toast("📑 Processing PDF", {
      description: "Hang tight! Our AI is reading your document ✨",
    });

    //schema with zod
    //upload the file to uploadthing

    const resp = await startUpload([file]);
    if (!resp) {
      toast.error(" Something went wrong", {
        description: "Please use a different file",
      });
      return;
    }

    //parse the pdf using lang chain
    const summary = await generatePdfSummary(resp);
    console.log({summary})
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
