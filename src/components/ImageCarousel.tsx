import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  projectTitle: string;
}

export default function ImageCarousel({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  projectTitle,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Update current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Handle modal visibility with transition
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to ensure the component is rendered before starting transition
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
      const timer = setTimeout(() => setIsVisible(false), 300); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case "Escape":
          event.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToNext, goToPrevious, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isVisible || images.length === 0) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        shouldAnimate ? "bg-black bg-opacity-60" : "bg-black bg-opacity-0"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-all duration-300 p-2 ${
          shouldAnimate
            ? "translate-x-0 opacity-100"
            : "translate-x-4 opacity-0"
        }`}
        aria-label="Close carousel"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`absolute left-4 z-60 text-white hover:text-gray-300 transition-all duration-300 p-2 ${
              shouldAnimate
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }`}
            aria-label="Previous image"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-4 z-60 text-white hover:text-gray-300 transition-all duration-300 p-2 ${
              shouldAnimate
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
            aria-label="Next image"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Main image container */}
      <div
        className={`relative w-full h-full max-w-6xl max-h-[80vh] mx-4 transition-all duration-300 ${
          shouldAnimate
            ? "transform scale-100 opacity-100"
            : "transform scale-95 opacity-0"
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Image counter and thumbnails */}
      <div
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60 transition-all duration-300 delay-150 ${
          shouldAnimate
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        <div className="text-center">
          {/* Image counter */}
          <div className="text-white text-sm mb-4">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail navigation */}
          {images.length > 1 && (
            <div className="flex space-x-2 justify-center">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-16 h-12 relative overflow-hidden rounded border-2 transition-all ${
                    index === currentIndex
                      ? "border-white opacity-100"
                      : "border-gray-400 opacity-60 hover:opacity-80"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`${projectTitle} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close carousel"
      />
    </div>
  );
}
