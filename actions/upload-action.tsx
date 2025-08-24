"use server";

import  fetchAndExtractPdfText  from "@/lib/langchain";

export default async function generatePdfSummary(
  uploadResponse: {
    ufsUrl: string;
    fileKey: string;
    name: string;
  }[]
) {
  if (!uploadResponse || uploadResponse.length === 0) {
    return {
      success: false,
      message: "File Upload Failed",
      data: null,
    };
  }

  const { ufsUrl: fileUrl, name } = uploadResponse[0];

  try {
    const pdfText = await fetchAndExtractPdfText(fileUrl);

    return {
      success: true,
      message: "PDF extracted successfully",
      data: {
        fileName: name,
        pdfText,
      },
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || "Error while processing PDF",
      data: null,
    };
  }
}
