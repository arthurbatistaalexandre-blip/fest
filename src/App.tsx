import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DecorCatalogSection } from './components/DecorCatalogSection';
import { OnSiteServiceSection } from './components/OnSiteServiceSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [prefill, setPrefill] = useState<{ text: string; id: number } | null>(null);

  const handleToggleItem = (itemName: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  const scrollToContactWithNote = (text: string) => {
    setPrefill({ text, id: Date.now() });
    const el = document.getElementById('contato');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <DecorCatalogSection
          selectedItems={selectedItems}
          onToggleItem={handleToggleItem}
          onRequestDecorQuote={(categoryLabel) =>
            scrollToContactWithNote(
              `Gostaria de solicitar um orçamento de decoração para ${categoryLabel}.`
            )
          }
        />
        <OnSiteServiceSection
          onSelectLocationType={(locationType) =>
            scrollToContactWithNote(
              `Quero montar a decoração ${locationType.toLowerCase()} em Catalão.`
            )
          }
        />
        <GallerySection />
        <ContactSection
          prefill={prefill}
          selectedItems={selectedItems}
        />
      </main>
      <Footer />
    </div>
  );
}
