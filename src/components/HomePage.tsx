// home_page.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
  {
    title: "Nyt dokument frigivet: CO2-data for 2023",
    summary: "Offentliggjorte målinger viser nye tendenser i udledninger.",
    date: "2025-04-10",
    tags: ["#miljø", "#data"]
  },
  {
    title: "Analyse: Offentlighedsloven og aktindsigt i 2030",
    summary: "Hvordan udvikler reglerne sig, og hvem vinder retten til indsigt?",
    date: "2025-04-08",
    tags: ["#jura", "#forvaltning"]
  }
];

const ongoingInsights = [
  {
    title: "Kortlægning af overvågning i skoleområdet",
    status: "Pågår"
  },
  {
    title: "Dataetik i borgerdialog – version 2",
    status: "Afventer bidrag"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/insta-nr-1.png')" }}>
      <div className="backdrop-blur-sm bg-white/80 min-h-screen px-6 py-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-serif font-bold">The Real Truth</h1>
          <div className="space-x-4">
            <Button variant="outline">Arkiv</Button>
            <Button>Login</Button>
          </div>
        </header>

        <section className="text-center py-16">
          <h2 className="text-3xl font-semibold mb-4">Uncovering verified facts, one document at a time</h2>
          <div className="space-x-4 mt-6">
            <Button variant="default">Gå til Arkiv</Button>
            <Button variant="outline">Medlemslogin</Button>
          </div>
        </section>

        <section className="my-16">
          <h3 className="text-2xl font-bold mb-6">🔦 Belyste områder</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, idx) => (
              <Card key={idx} className="rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-1">{item.date}</p>
                  <p className="text-base mb-3">{item.summary}</p>
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="my-16">
          <h3 className="text-2xl font-bold mb-6">⏳ Igangværende indsigter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingInsights.map((insight, idx) => (
              <Card key={idx} className="rounded-xl border border-dashed">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium mb-2">{insight.title}</h4>
                  <span className="text-sm text-blue-700 font-semibold">{insight.status}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="text-center mt-20 text-sm text-gray-600">
          © 2025 The Real Truth • Kontakt • Manifest • Open Source
        </footer>
      </div>
    </div>
  );
}
