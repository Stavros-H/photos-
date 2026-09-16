import React from 'react';

interface PhotoItem {
  id: string;
  title: string;
  description: string;
  url: string;
}

const PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'Bob Ross Painting',
    description: 'A scenic landscape painting by Bob Ross featured at auction.',
    url: 'https://www.orlandosentinel.com/wp-content/uploads/2025/11/Bob_Ross_Auction_05115.jpg?w=1800&resize=1800,1800',
  },
  {
    id: 'photo-2',
    title: 'Graftobian No. 10 Flat Brush',
    description: 'Professional flat brush for precise strokes and smooth application.',
    url: 'images/78053-no10-Flat-min.jpg',
  },
  {
    id: 'photo-3',
    title: 'Bold and Brash',
    description: "Some might say that this isn't a real world example, but they would show boldness and brashness. How painting (what?)",
    url: 'images/Bold_and_Brash.png',
  },
  {
    id: 'photo-4',
    title: 'Ludwig van Beethoven',
    description: 'Portrait of the legendary German composer and pianist. heard this guy turned deaf. How musical!',
    url: 'images/beethoven.jpg',
  },
  {
    id: 'photo-5',
    title: 'A Ture Instument of Musical Glory',
    description: 'What do you mean this is spongebob related? This is an acustic guitar. Truly, musical',
    url: 'images/wooden-guitar-toy.jpg',
  },
  {
    id: 'photo-6',
    title: 'Music Notes',
    description: "I wanted to get a music sheet, but they were all copyrighted. Big sad. Would've been very musical.",
    url: 'images/music-notes-wave-lines-sheet.jpg',
  },
  {
    id: 'photo-7',
    title: 'Minimalist Interior',
    description: 'Clean angles and soft ambient lighting in a modern room.',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'photo-8',
    title: 'Golden Autumn Forest',
    description: 'Vibrant amber foliage glowing in the late afternoon sun.',
    url: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'photo-9',
    title: 'Alpine Snow Peak',
    description: 'Dramatic snow-dusted summit rising into the azure sky.',
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=600&fit=crop&q=80',
  },
];

export function App() {
  return (
    <div id="photo-gallery" className="max-w-5xl mx-auto py-10 px-4">
      <header id="gallery-header" className="text-center mb-8">
        <h1 id="gallery-main-title" className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Photo Gallery
        </h1>
        <p id="gallery-subtitle" className="text-sm text-slate-500">
          A curated 3x3 collection of placeholder photos and captions.
        </p>
      </header>

      <main id="photo-grid-container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PHOTOS.map((photo, index) => (
          <article
            key={photo.id}
            id={`photo-card-${index + 1}`}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
          >
            <div
              id={`photo-img-wrapper-${index + 1}`}
              className="w-full aspect-square bg-slate-100 overflow-hidden relative"
            >
              <img
                id={`photo-img-${index + 1}`}
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div id={`photo-details-${index + 1}`} className="p-4">
              <h2 id={`photo-title-${index + 1}`} className="text-base font-semibold text-slate-900 mb-1">
                {photo.title}
              </h2>
              <p id={`photo-desc-${index + 1}`} className="text-xs text-slate-500 leading-relaxed">
                {photo.description}
              </p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;

