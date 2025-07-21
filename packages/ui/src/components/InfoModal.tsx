import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from '../i18n/useTranslation.js';

export function InfoModal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside, true);
      document.addEventListener("click", handleClickOutside, true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("mousedown", handleClickOutside, true);
        document.removeEventListener("click", handleClickOutside, true);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  // Obfuscate email to prevent scraping
  const emailParts = ["GetGrix", "@", "gmail", ".", "com"];
  const emailAddress = emailParts.join("");

  return (
    <>
      {/* Info Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-20 z-40 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center"
        title={t('info.about')}
      >
        <span className="text-sm font-bold text-blue-600">ℹ️</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto info-modal-scrollable"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                {/* Grix Logo */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="flex-shrink-0"
                >
                  <rect width="32" height="32" fill="#2563eb" rx="6" />
                  <g stroke="#60A5FA" strokeWidth="0.5" opacity="0.6">
                    <line x1="8" y1="4" x2="8" y2="28" />
                    <line x1="16" y1="4" x2="16" y2="28" />
                    <line x1="24" y1="4" x2="24" y2="28" />
                    <line x1="4" y1="8" x2="28" y2="8" />
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <line x1="4" y1="24" x2="28" y2="24" />
                  </g>
                  <g stroke="#FFFFFF" strokeWidth="1">
                    <line x1="16" y1="4" x2="16" y2="28" />
                    <line x1="4" y1="16" x2="28" y2="16" />
                  </g>
                  <line
                    x1="16"
                    y1="16"
                    x2="24"
                    y2="8"
                    stroke="#22C55E"
                    strokeWidth="2"
                  />
                  <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
                  <circle cx="24" cy="8" r="1.5" fill="#22C55E" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900">{t('info.about')}</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('info.subtitle')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('info.description')}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">
                  {t('info.keyFeatures')}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• {t('info.features.interactive')}</li>
                  <li>• {t('info.features.realtime')}</li>
                  <li>• {t('info.features.educational')}</li>
                  <li>• {t('info.features.touch')}</li>
                  <li>• {t('info.features.progressive')}</li>
                </ul>
              </div>

              {/* Open Source */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-md font-semibold text-green-800 mb-2">
                  🌟 {t('info.opensource')}
                </h4>
                <p className="text-green-700 text-sm mb-3">
                  {t('info.opensource.description')}
                </p>
                <a
                  href="https://github.com/getgrix/grix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium text-sm underline"
                >
                  <span>📁</span>
{t('info.viewGithub')}
                </a>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">
                  {t('info.contact')}
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  {t('info.contact.description')}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">📧</span>
                  <span
                    className="text-sm text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={() => {
                      // Use JavaScript to construct email link to avoid easy scraping
                      const email = emailAddress;
                      window.location.href = `mailto:${email}?subject=Grix Feedback`;
                    }}
                    title="Click to send email"
                  >
                    {emailAddress}
                  </span>
                </div>
              </div>

              {/* Version Info */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  {t('info.madeWith')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
