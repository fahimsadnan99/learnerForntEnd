import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

/**
 * Course contents page: a numbered list of lessons with a search box.
 * The number is the lesson's place in the course, so it stays the same
 * while the list is filtered.
 */
const LessonIndex = ({ title, intro, lessons }) => {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lessons
      .map((lesson, i) => ({ ...lesson, number: i + 1 }))
      .filter((lesson) => !q || lesson.title.toLowerCase().includes(q));
  }, [lessons, query]);

  return (
    <div className="wrap lessons">
      <header className="page-head">
        <h1 className="page-head__title">{title}</h1>
        {intro && <p className="page-head__intro">{intro}</p>}
      </header>
      <hr className="ledger-rule" />

      <div className="lessons__toolbar">
        <label className="lessons__search">
          <Search size={18} aria-hidden="true" />
          <span className="visually-hidden">Search lessons</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons"
            autoComplete="off"
          />
        </label>
        <p className="lessons__count" aria-live="polite">
          {query.trim()
            ? `${visible.length} of ${lessons.length} lessons`
            : `${lessons.length} lessons`}
        </p>
      </div>

      {visible.length > 0 ? (
        <ol className="lesson-list">
          {visible.map((lesson) => (
            <li key={lesson.to} value={lesson.number}>
              <Link to={"/" + lesson.to} className="lesson">
                <span className="lesson__number">{lesson.number}</span>
                <img
                  className="lesson__thumb"
                  src={lesson.img}
                  alt=""
                  loading="lazy"
                  width="104"
                  height="78"
                />
                <span className="lesson__title">{lesson.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className="lessons__empty">
          No lessons match “{query.trim()}”. Try a shorter word, or clear the
          search.
        </p>
      )}
    </div>
  );
};

export default LessonIndex;
