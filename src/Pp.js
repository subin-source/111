import { Images } from 'lucide-react';
import { useState } from 'react';

const memories = [
  { id: 1, url: '/img/IMG_0427.JPG', title: '04/16 부산 황령산' },
  { id: 2, url: '/img/IMG_0502.JPG', title: '05/12 고척돔' },
  { id: 3, url: '/img/IMG_0636.JPG', title: '07/09 정동진' },
  { id: 4, url: '/img/IMG_0673.JPG', title: '08/16 세븐록프라임' },
  { id: 5, url: '/img/IMG_0767.JPG', title: '10/01 노들섬' },
  { id: 6, url: '/img/IMG_0831.JPG', title: '10/24 강릉' },
  { id: 7, url: '/img/IMG_E0556.JPG', title: '06/25 부산 광안리' },
  { id: 8, url: '/img/IMG_E0655.JPG', title: '07/18 지브리전시' },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-container">
      <style>{`
        .gallery-container {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #fff1f2, #fef3c7, #fce7f3);
        }
        .gallery-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }
        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .gallery-title-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .gallery-title {
          font-size: 2.25rem;
          color: #1f2937;
          margin: 0;
        }
        .gallery-subtitle {
          color: #4b5563;
          margin: 0;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          align-items: start;
        }
        .photo-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: visible;
          border-radius: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          background-color: #000;
          will-change: transform;
        }
        .photo-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }
        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 1rem;
          transition: transform 0.35s ease;
          will-change: transform;
          backface-visibility: hidden;
        }
        .photo-card:hover img {
          transform: scale(1.25);
        }
        .photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.35s ease;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 1rem;
          pointer-events: none;
          border-radius: 1rem;
        }
        .photo-card:hover .photo-overlay {
          opacity: 1;
          transform: scale(1.25);
        }
        .photo-title {
          color: #fff;
          text-align: center;
          margin: 0;
        }
        .gallery-footer {
          text-align: center;
          margin-top: 3rem;
        }
        .gallery-footer-text {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }
        .modal-bg {
          position: fixed;
          inset: 0;
          background-color: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .modal-img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 1rem;
          box-shadow: 0 20px 30px rgba(0,0,0,0.5);
        }
      `}</style>

      <div className="gallery-wrapper">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-title-container">
            <Images size={32} color="#f43f5e" />
            <h1 className="gallery-title">나의 2025</h1>
          </div>
          <p className="gallery-subtitle">소중한 순간들을 담은 갤러리</p>
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="photo-card"
              onClick={() => setSelected(memory)}
            >
              <img
                src={memory.url}
                alt={memory.title}
                loading="lazy"
                decoding="async"
              />
              <div className="photo-overlay">
                <p className="photo-title">{memory.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="gallery-footer">
          <p className="gallery-footer-text">괜찮았던 날들의 기록.</p>
        </div>
      </div>

      {/* 모달 영역 */}
      {selected && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <img
            src={selected.url}
            alt={selected.title}
            className="modal-img"
          />
        </div>
      )}
    </div>
  );
}