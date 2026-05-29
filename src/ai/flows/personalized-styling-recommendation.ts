'use server';
/**
 * @fileOverview An AI styling concierge that recommends personalized hairstyles, braids, or grooming treatments.
 *
 * - personalizeStylingRecommendation - A function that handles the styling recommendation process.
 * - PersonalizedStylingRecommendationInput - The input type for the personalizeStylingRecommendation function.
 * - PersonalizedStylingRecommendationOutput - The return type for the personalizeStylingRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedStylingRecommendationInputSchema = z
  .object({
    photoDataUri: z
      .string()
      .optional()
      .describe(
        "An optional photo of the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
      ),
    stylePreferences: z
      .string()
      .optional()
      .describe('Optional description of desired style preferences.'),
    hairType: z
      .string()
      .optional()
      .describe('Optional description of the user\'s hair type (e.g., curly, straight, coily).'),
    faceShape: z
      .string()
      .optional()
      .describe('Optional description of the user\'s face shape (e.g., oval, round, square).'),
    occasion: z
      .string()
      .optional()
      .describe(
        'Optional description of the occasion for the styling (e.g., wedding, everyday, party).'
      ),
  })
  .refine(
    data => data.photoDataUri || data.stylePreferences,
    'Either a photoDataUri or stylePreferences must be provided.'
  );

export type PersonalizedStylingRecommendationInput = z.infer<
  typeof PersonalizedStylingRecommendationInputSchema
>;

const RecommendationItemSchema = z.object({
  name: z.string().describe('The name of the recommended style or treatment.'),
  description: z
    .string()
    .describe('A detailed description of the recommended style or treatment, including why it\'s suitable and how it aligns with the brand\'s aesthetic.'),
  exampleImageDescription: z
    .string()
    .optional()
    .describe(
      'A description of an ideal example image that represents this recommendation. This is not a URL, but a text description that could be used to find or generate an image (e.g., "A stock photo of a woman with a sleek ponytail braid, facing left, with soft lighting and a luxurious background.").'
    ),
});

const PersonalizedStylingRecommendationOutputSchema = z.object({
  recommendations: z
    .array(RecommendationItemSchema)
    .describe('A list of personalized styling recommendations.'),
  generalAdvice: z
    .string()
    .describe(
      'General styling advice and tips tailored to the user\'s input, aligning with Lushways Unisex Salon & Spa\'s premium and elegant brand.'
    ),
});

export type PersonalizedStylingRecommendationOutput = z.infer<
  typeof PersonalizedStylingRecommendationOutputSchema
>;

export async function personalizeStylingRecommendation(
  input: PersonalizedStylingRecommendationInput
): Promise<PersonalizedStylingRecommendationOutput> {
  return personalizedStylingRecommendationFlow(input);
}

const personalizedStylingPrompt = ai.definePrompt({
  name: 'personalizedStylingPrompt',
  input: { schema: PersonalizedStylingRecommendationInputSchema },
  output: { schema: PersonalizedStylingRecommendationOutputSchema },
  prompt: `You are an expert styling concierge for "Lushways Unisex Salon & Spa", a premium beauty brand in Uyo, Nigeria. Your goal is to provide personalized, luxurious, feminine, classy, and elegant styling recommendations.

The brand's aesthetic is minimal luxury, spacious, soft shadows, smooth animations, and rich visuals. Avoid generic salon designs. Think high-end beauty spa in Dubai or Lagos.

BRAND COLORS: Deep Royal Blue, White, Warm cream, Soft nude beige, Light gold accents.
TYPOGRAPHY: Elegant serif fonts for headings (Playfair Display, Cormorant Garamond), modern clean fonts for body text (Inter, Poppins).

Based on the following information, recommend personalized hairstyles, braids, or grooming treatments. Provide detailed descriptions for each recommendation and general styling advice.

User Input:
{{#if photoDataUri}}
Photo: {{media url=photoDataUri}}
{{/if}}
{{#if stylePreferences}}
Style Preferences: {{{stylePreferences}}}
{{/if}}
{{#if hairType}}
Hair Type: {{{hairType}}}
{{/if}}
{{#if faceShape}}
Face Shape: {{{faceShape}}}
{{/if}}
{{#if occasion}}
Occasion: {{{occasion}}}
{{/if}}

If a photo is provided, carefully analyze the user's features, hair texture, and current style. If style preferences are provided, prioritize them. If both are present, blend them thoughtfully.

For each recommendation, suggest an "exampleImageDescription" that could represent the style. This should be a descriptive phrase, not a URL, that captures the essence of the recommended look in a high-quality, luxurious aesthetic suitable for our brand.

Ensure the output is in valid JSON format according to the provided schema.`,
});

const personalizedStylingRecommendationFlow = ai.defineFlow(
  {
    name: 'personalizedStylingRecommendationFlow',
    inputSchema: PersonalizedStylingRecommendationInputSchema,
    outputSchema: PersonalizedStylingRecommendationOutputSchema,
  },
  async (input) => {
    const { photoDataUri } = input;
    // Determine the model based on whether a photo is provided.
    // If photoDataUri is present, use a multi-modal model. Otherwise, use a text-only model.
    const modelToUse = photoDataUri ? ai.model('googleai/gemini-2.5-flash-image') : ai.model('googleai/gemini-2.5-flash');

    const { output } = await personalizedStylingPrompt(input, {
      model: modelToUse,
    });
    return output!;
  }
);