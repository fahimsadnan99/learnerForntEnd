import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

/**
 * The reading page every lesson sits in: a back button, the title over a
 * ledger rule, a narrow reading column, a reading-progress line, and
 * click-to-enlarge chart images. Purely presentational: no data, no auth.
 */
const ArticleShell = ({ title, children }) => {
  const navigate = useNavigate();
  const bodyRef = useRef(null);
  const barRef = useRef(null);
  const closeRef = useRef(null);
  const [zoomed, setZoomed] = useState(null);

  const goBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  // Reading progress: written straight to the DOM so scrolling never re-renders.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Make every chart image reachable and operable from the keyboard.
  useEffect(() => {
    const imgs = bodyRef.current ? bodyRef.current.querySelectorAll("img") : [];
    imgs.forEach((img) => {
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", (img.alt || "Image") + ", enlarge");
    });
  }, [children]);

  const openImage = (img) =>
    setZoomed({ src: img.currentSrc || img.src, alt: img.alt || "" });

  const onBodyClick = (e) => {
    if (e.target.tagName === "IMG") openImage(e.target);
  };

  const onBodyKeyDown = (e) => {
    if (e.target.tagName === "IMG" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openImage(e.target);
    }
  };

  // Lightbox: close on Escape, lock page scroll, put focus on the close button.
  useEffect(() => {
    if (!zoomed) return undefined;
    const opener = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") setZoomed(null);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (opener && typeof opener.focus === "function") opener.focus();
    };
  }, [zoomed]);

  return (
    <article className="article">
      <div className="article-progress" aria-hidden="true">
        <div className="article-progress__bar" ref={barRef} />
      </div>

      <div className="article__inner">
        <button type="button" className="btn-quiet article__back" onClick={goBack}>
          <ArrowLeft size={18} aria-hidden="true" />
          Back
        </button>

        <header className="article__head">
          <h1 className="article__title">{title}</h1>
        </header>
        <hr className="ledger-rule" />

        {/* Click and key handling is delegated to the images inside */}
        <div
          className="article-body"
          ref={bodyRef}
          onClick={onBodyClick}
          onKeyDown={onBodyKeyDown}
        >
          {children}
        </div>

        <hr className="ledger-rule article__end-rule" />
        <button type="button" className="btn-quiet article__back" onClick={goBack}>
          <ArrowLeft size={18} aria-hidden="true" />
          Back
        </button>
      </div>

      {zoomed && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt || "Enlarged image"}
          onClick={() => setZoomed(null)}
        >
          <button
            type="button"
            ref={closeRef}
            className="icon-btn lightbox__close"
            onClick={() => setZoomed(null)}
            aria-label="Close image"
          >
            <X size={24} />
          </button>
          <img
            className="lightbox__img"
            src={zoomed.src}
            alt={zoomed.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </article>
  );
};

export default ArticleShell;
