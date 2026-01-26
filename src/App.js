import {Images } from 'lucide-react';
import { useState } from 'react';
import type { CSSProperties } from 'react';

type Memory = {
  id: number;
  url: string;
  title: string;
};

const memories: Memory[] = [
  { id: 1, url: '/img/IMG_0427.JPG', title: '04/16 부산 황령산' },
  { id: 2, url: '/img/IMG_0502.JPG', title: '05/12 고척돔' },
  { id: 3, url: '/img/IMG_0636.JPG', title: '07/09 정동진' },
  { id: 4, url: '/img/IMG_0673.JPG', title: '08/16 세븐록프라임' },
  { id: 5, url: '/img/IMG_0767.JPG', title: '10/01 노들섬' },
  { id: 6, url: '/img/IMG_0831.JPG', title: '10/24 강릉' },
  { id: 7, url: '/img/IMG_E0556.JPG', title: '06/25 부산 광안리' },
  { id: 8, url: '/img/IMG_E0655.JPG', title: '07/18 지브리전시' },
];

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #fff1f2, #fef3c7, #fce7f3)',
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.25rem',
    color: '#1f2937',
    margin: 0,
  },
  subtitle: {
    color: '#4b5563',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    alignItems: 'start',
  },
  photoCard: {
    position: 'relative',
    width: '100%',
    aspectRatio: '1 / 1',
    overflow: 'visible',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    cursor: 'pointer',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.35s ease',
    display: 'block',
    borderRadius: '1rem',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease, transform 0.35s ease',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '1rem',
    pointerEvents: 'none',
    borderRadius: '1rem',
  },
  overlayVisible: {
    opacity: 1,
  },
  photoTitle: {
    color: '#fff',
    textAlign: 'center',
    margin: 0,
  },
  footer: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  footerText: {
    color: '#6b7280',
    fontSize: '0.875rem',
    margin: 0,
  },

  // 모달 스타일 추가
  modalBg: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  modalImg: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '1rem',
    boxShadow: '0 20px 30px rgba(0,0,0,0.5)',
  },
};

export default function App() {
  const [hoveredId, setHoveredId] = useState(null);

  // 모달 상태 추가
  const [selected, setSelected] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.titleContainer}>
            <Images size={32} color="#f43f5e" />
            <h1 style={styles.title}>나의 2025</h1>
          </div>
          <p style={styles.subtitle}>소중한 순간들을 담은 갤러리</p>
        </div>

        {/* Photo Grid */}
        <div style={styles.grid}>
          {memories.map((memory) => {
            const isHovered = hoveredId === memory.id;

            return (
              <div
                key={memory.id}
                style={{
                  ...styles.photoCard,
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 20px 25px -5px rgba(0, 0, 0, 0.15)'
                    : styles.photoCard.boxShadow,
                  zIndex: isHovered ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredId(memory.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelected(memory)} // 클릭 시 모달 열기
              >
                <img
                  src={memory.url}
                  alt={memory.title}
                  loading="lazy"
                  style={{
                    ...styles.image,
                    transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                  }}
                />

                <div
                  style={{
                    ...styles.overlay,
                    ...(isHovered ? styles.overlayVisible : {}),
                    transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                  }}
                >
                  <p style={styles.photoTitle}>{memory.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>괜찮았던 날들의 기록.</p>
        </div>
      </div>

      {/* 모달 영역 */}
      {selected && (
        <div
          style={styles.modalBg}
          onClick={() => setSelected(null)} // 배경 클릭 시 닫기
        >
          <img
            src={selected.url}
            alt={selected.title}
            style={styles.modalImg}
          />
        </div>
      )}
    </div>
  );
}
