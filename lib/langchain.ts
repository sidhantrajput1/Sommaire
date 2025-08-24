// Import PDFLoader from LangChain community package
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

/**
 * Fetch a remote PDF by URL, load it, and extract plain text.
 * @param fileUrl - The URL of the uploaded PDF file
 * @returns Extracted text from all pages of the PDF
 */
export default async function fetchAndExtractPdfText(fileUrl: string) {
  // 1. Fetch the PDF file from the given URL
  const response = await fetch(fileUrl);

  // 2. Convert the response into a Blob (binary large object)
  const blob = await response.blob();

  // 3. Convert the Blob into an ArrayBuffer (raw binary data)
  const arrayBuffer = await blob.arrayBuffer();

  // 4. Create a new PDFLoader instance with the PDF data
  //    - PDFLoader accepts a Blob or File in the browser
  const loader = new PDFLoader(new Blob([arrayBuffer]));

  // 5. Load the PDF and split it into "documents" (one per page)
  const docs = await loader.load();

  // 6. Extract text content from each page and join them together
  const combinedText = docs.map((doc) => doc.pageContent).join("\n");

  // 7. Return the combined plain text from the entire PDF
  return combinedText;
}
