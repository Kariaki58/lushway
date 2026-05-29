
"use client"

import React, { useState } from 'react';
import { Sparkles, Camera, Upload, Loader2, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { personalizeStylingRecommendation, type PersonalizedStylingRecommendationOutput } from '@/ai/flows/personalized-styling-recommendation';

export function AIConcierge() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedStylingRecommendationOutput | null>(null);
  const [preferences, setPreferences] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!preferences && !image) return;
    setLoading(true);
    try {
      const output = await personalizeStylingRecommendation({
        stylePreferences: preferences,
        photoDataUri: image || undefined
      });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-concierge" className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">AI Styling Concierge</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Discover Your <span className="italic text-accent">Perfect Look</span></h2>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Not sure which hairstyle or treatment suits you best? Our intelligent concierge uses advanced AI to recommend personalized looks based on your face shape, preferences, and hair type.
            </p>

            <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <Label className="text-white/80">Tell us about your style or the occasion</Label>
                  <Textarea 
                    placeholder="e.g., I'm attending a wedding next weekend and I want something elegant with braids..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-white/80">Optionally upload a photo for better results</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input 
                        type="file" 
                        accept="image/*"
                        className="hidden" 
                        id="photo-upload"
                        onChange={handleImageChange}
                      />
                      <label 
                        htmlFor="photo-upload"
                        className="flex items-center justify-center gap-2 border-2 border-dashed border-white/20 rounded-xl py-4 cursor-pointer hover:bg-white/10 transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        <span className="text-sm font-medium">Upload Image</span>
                      </label>
                    </div>
                    {image && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/20">
                        <img src={image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={loading || (!preferences && !image)}
                  className="w-full bg-accent hover:bg-accent/90 text-primary-foreground font-bold h-14 rounded-xl text-lg"
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-5 h-5" />}
                  Generate My Look
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/2 w-full">
            {result ? (
              <div className="animate-in fade-in slide-in-from-right duration-700 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-accent">Your Personalized Recommendations</h3>
                  <div className="grid gap-6">
                    {result.recommendations.map((rec, idx) => (
                      <Card key={idx} className="bg-white border-none shadow-xl">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 text-primary">
                            <Scissors className="w-4 h-4" />
                            <CardTitle className="text-xl font-headline font-bold">{rec.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground text-sm leading-relaxed">{rec.description}</p>
                          {rec.exampleImageDescription && (
                            <div className="p-3 bg-secondary/50 rounded-lg">
                              <p className="text-[10px] uppercase font-bold text-primary/40 mb-1">Visual Inspiration</p>
                              <p className="text-xs italic text-primary/70">{rec.exampleImageDescription}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-accent/20 border border-accent/30 space-y-2">
                  <h4 className="font-headline font-bold text-accent">Pro Advice</h4>
                  <p className="text-sm text-white/80 font-light leading-relaxed italic">{result.generalAdvice}</p>
                </div>
              </div>
            ) : (
              <div className="h-[500px] border-2 border-dashed border-white/20 rounded-[40px] flex flex-col items-center justify-center p-12 text-center space-y-4">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-accent/50" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold text-white/50">Your Reveal Awaits</h3>
                  <p className="text-white/30 font-light max-w-xs mx-auto">Fill in your preferences to see your personalized style recommendations.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
