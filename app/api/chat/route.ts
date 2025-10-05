import {
  consumeStream,
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const prompt = convertToModelMessages(messages);

  const result = streamText({
    // Using Vercel AI Gateway default. Fast, safe default model.
    model: "openai/gpt-5-mini",
    prompt,
    abortSignal: req.signal,
    maxOutputTokens: 1200,
    system: `
    Your a helpfull support assistant from sara creations. you neeed answere question based on only the given information to you

    General Pricing and Policy
Q1. What is the overall SMM Package price? 
The full Social Media Marketing (SMM) package is Rs. 18,000
Q2. Is GST included in the prices mentioned? 
No, GST is not included in the given sheet.
Q3. How are ad campaigns billed? 
Running ad campaigns on social media will be billed on actuals charged by META. 
Q4. What is the suggested budget to use for meta ad campaigns on social media per day?
For Awareness/Reach: Start with ₹200–₹400 per day.
For Traffic/Engagement (Clicks): A modest starting point for testing is ₹100 to ₹500 per day, with some suggesting ₹500–₹800 per day for better results.
For Leads/Sales (Conversions): To give Meta's algorithm enough data to optimize for conversions, a higher budget of ₹1,000–₹1,800 per day is often recommended.
Q5. Is editing of long-form content included in the package? 
No, editing of long form content such as podcasts, tutorials, or discussions will be charged separately.
Social Media Marketing (SMM) Content Plans
Q1. What is included in the video-focused SMM plan? 
This plan includes 4 Video Posts (Reels) per month + SEO & Content creations. It also Includes free Static & Festive posts and stories.
Q2. What is included in the static/carousel-focused SMM plan? 
This plan includes 4 Static Posts + 2 Carousels per month + SEO & Content creations. It also includes free Festive posts and stories.
Q3. What is the cost for the optional Content Shooting (Videography) Session? 
The optional Content Shooting (Videography) Session costs Rs. 5,000
Q4. What does the optional Content Shooting Session cover? 
One day will be utilized to plan and shoot all content for the whole month on a mutually decided date.
Logo Design
Q1. What is the minimum starting price for a logo design? 
Logo design starts at Rs. 3,500 onwards. And the final price will depend on the complexity and number of revisions opted by the client.
Q2. What is the price range for a Typography Logo (Wordmark/Lettermark)? 
The cost for a Typography Logo is  ₹3,500 - ₹5,000. And the final price will depend on the complexity and number of revisions opted by the client.
Q3. How much does a Combination Logo (Text + Symbol / Icon) cost? 
A Combination Logo costs between ₹6,000 - ₹8,500. And the final price will depend on the complexity and number of revisions opted by the client.
Q4. What is the price range for an Emblem Logo? 
An Emblem Logo costs between ₹8,000 - ₹10,000. And the final price will depend on the complexity and number of revisions opted by the client.
Q5. How many design revisions are included with a logo? 
Up to 3 free design revisions are included.
Design & Content Services
Q1. How much does a single static social media post cost? 
A single static post costs ₹700.
Q2. What is the starting price for a single carousel post? 
A single carousel post is ₹1,500 onwards.
Q3. What is the cost for a Banner or Poster design? 
Banner/poster designs cost ₹2,000 per design.
Q4. What is the starting price for a Pitchdeck? 
Pitchdecks are priced at ₹5,000 onwards.
Q5. What is the starting price for Content Writing services? 
Content writing services start at ₹2,000 onwards.
E-commerce Website Development
Q1. What is the starting price for an E-commerce website? 
An E-commerce website starts at Rs. 35,000 onwards. The final price may differ depending on the total number of pages, number of products that need to be uploaded, number of additional pages, content creation, photo edits, video edits.
Q2. What is the included charge for the Website Host for the first year? 
The Website Host charge for the first year is Rs. 4,000  (included in the total price). And it may increase the following year depending on the market.
Q3. How many free product uploads are included in the E-commerce website plan? 
20 free product uploads are included.
Q4. What are the four pages included in the base plan? 
The 4-page plan includes: Home, Store, About, Contact. Any additional page will be charged RS. 5000 per page.
Q5. Are blogs included in the E-commerce website plan? 
No, blogs are a feature that is charged separately.
Standard Website Development
Q1. What is the price for a Standard Website? 
A standard website is priced at Rs. 25,000. The final price may differ depending on the total number of pages, number of additional pages, content creation, photo edits, video edits.
Q2. What is the included charge for the Domain for the first year? 
The Domain charge for the first year is Rs. 4,000 (included in the total price).
Q3. Who is responsible for providing the content for the website? 
The Raw Content is to be provided by the client. Editing and compilation will be done by the agency.
Q4. Are additional pages charged extra? 
Yes, any additional pages not mentioned in the plan will be charged separately. Rs. 5000 per page
    
    `,
  });

  return result.toUIMessageStreamResponse({
    consumeSseStream: consumeStream,
  });
}
