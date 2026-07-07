import { Images } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const memories = [
  { id: 1, url: '/img/KakaoTalk_20260707_090558538.jpg', title: '03/31 벚꽃' },
  { id: 2, url: '/img/KakaoTalk_20260707_090723177.JPG', title: '04/18 속초' },
  { id: 3, url: '/img/KakaoTalk_20260707_090754496.JPG', title: '04/24 상암 vct' },
  { id: 4, url: '/img/KakaoTalk_20260707_090814535.JPG', title: '05/18 경주' },
  { id: 5, url: '/img/KakaoTalk_20260707_091029265.JPG', title: '06/05 송정해수욕장' },
  // { id: 6, url: '/img/IMG_0831.JPG', title: '10/24 강릉' },
  // { id: 7, url: '/img/IMG_E0556.JPG', title: '06/25 부산 광안리' },
  // { id: 8, url: '/img/IMG_E0655.JPG', title: '07/18 지브리전시' },
];

function PhotoCard({ memory, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="photo-card" onClick={() => onClick(memory)}>
      {/* 사진이 로딩되기 전까지 보여줄 스켈레톤 애니메이션 */}
      {!isLoaded && <div className="skeleton-loader" />}

      <img
        src={memory.url}
        alt={memory.title}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)} // 사진 다운로드가 끝나면 isLoaded를 true로!
        style={{
          opacity: isLoaded ? 1 : 0, // 로딩 전엔 투명하게, 완료되면 나타나게
          transition: 'opacity 0.5s ease , transform 0.35s ease',
        }}
      />
      <div className="photo-overlay">
        <p className="photo-title">{memory.title}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();
  const handleTextClick = () => {
    navigate('/P2025'); 
  };

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

        .gallery-title-link {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .gallery-title-link:hover {
          color: #FF69B4; 
          transform: translateY(-3px); 
        }
        .gallery-title-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          bottom: -4px;
          left: 0;
          background-color: #FF69B4;
          transition: width 0.3s ease;
        }
        .gallery-title-link:hover::after {
          width: 100%; 
        }
        .gallery-title-link:active {
          transform: translateY(1px); 
          opacity: 0.8;
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

        .skeleton-loader {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s infinite;
        }
        @keyframes skeleton-loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
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
            <Images size={32} color="#FF69B4" />
            <h1 
              className="gallery-title gallery-title-link"
              onClick={handleTextClick}
            >나의 2026</h1>
          </div>
          <p className="gallery-subtitle">소중한 순간들을 담은 갤러리</p>
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {memories.map((memory) => (
            <PhotoCard 
              key={memory.id} 
              memory={memory} 
              onClick={setSelected} 
            />
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