import React from "react";

/**
 * A drawn candlestick chart used as the home page's opening image.
 * It is an illustration, not market data: the story it tells is the one the
 * course teaches — a rise to resistance, a pullback into a zone, a breakout.
 */

const W = 640;
const H = 400;
const LEFT = 20;
const N = 36;
const STEP = (W - LEFT * 2) / N;
const BODY = 11;
// Prices run roughly 30 to 82; this maps them onto the full height of the plate.
const y = (v) => 350 - (v - 30) * 5.7;
const x = (i) => LEFT + STEP * (i + 0.5);

// Small deterministic random generator so the drawing is identical on every load.
const rng = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const KEYS = [
  [0, 38], [5, 50], [10, 62], [14, 74], [16, 76], [18, 70],
  [22, 56], [25, 46], [27, 44], [29, 50], [32, 62], [35, 80],
];

const closeAt = (i) => {
  for (let k = 0; k < KEYS.length - 1; k++) {
    const [a, va] = KEYS[k];
    const [b, vb] = KEYS[k + 1];
    if (i >= a && i <= b) return va + ((vb - va) * (i - a)) / (b - a);
  }
  return KEYS[KEYS.length - 1][1];
};

const candles = (() => {
  const rand = rng(11);
  const out = [];
  let prev = 36;
  for (let i = 0; i < N; i++) {
    const close = i === N - 1 ? 80 : closeAt(i) + (rand() - 0.5) * 4.4;
    const open = prev;
    const high = Math.min(98, Math.max(open, close) + 1 + rand() * 3.2);
    const low = Math.max(2, Math.min(open, close) - 1 - rand() * 3.2);
    out.push({ open, close, high, low });
    prev = close;
  }
  return out;
})();

const RESISTANCE = 79;
const ZONE_FROM = 22;
const ZONE_TO = 31;

const CandlePlate = () => {
  const hLines = [30, 40, 50, 60, 70, 80];
  const vLines = Array.from({ length: 9 }, (_, k) => LEFT + (k + 1) * STEP * 4);

  return (
    <figure className="plate">
      <svg
        className="plate__svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Illustration of a candlestick chart: price rises to a resistance line, pulls back into a support zone, then breaks above resistance."
      >
        <g className="cp-grid">
          {hLines.map((v) => (
            <line key={v} x1={LEFT} x2={W - LEFT} y1={y(v)} y2={y(v)} />
          ))}
          {vLines.map((px) => (
            <line key={px} x1={px} x2={px} y1={36} y2={364} />
          ))}
        </g>

        <g className="cp-note">
          <rect
            className="cp-zone"
            x={x(ZONE_FROM) - 10}
            y={y(48)}
            width={x(ZONE_TO) - x(ZONE_FROM) + 20}
            height={y(39) - y(48)}
          />
          <text className="cp-label" x={x(ZONE_FROM) - 6} y={y(39) + 24}>
            Zone
          </text>
          <line
            className="cp-resistance"
            x1={LEFT}
            x2={W - LEFT}
            y1={y(RESISTANCE)}
            y2={y(RESISTANCE)}
          />
          <text
            className="cp-label"
            x={LEFT + 4}
            y={y(RESISTANCE) - 10}
          >
            Resistance
          </text>
        </g>

        {candles.map((c, i) => {
          const bull = c.close >= c.open;
          const top = y(Math.max(c.open, c.close));
          const bottom = y(Math.min(c.open, c.close));
          return (
            <g
              key={i}
              className={"cp-candle " + (bull ? "cp-bull" : "cp-bear")}
              style={{ "--i": i }}
            >
              <line className="cp-wick" x1={x(i)} x2={x(i)} y1={y(c.high)} y2={y(c.low)} />
              <rect
                className="cp-body"
                x={x(i) - BODY / 2}
                y={top}
                width={BODY}
                height={Math.max(2, bottom - top)}
              />
            </g>
          );
        })}
      </svg>
      <figcaption className="plate__caption">
        Illustration, not a real market chart.
      </figcaption>
    </figure>
  );
};

export default CandlePlate;
