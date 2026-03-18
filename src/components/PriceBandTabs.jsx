function PriceBandTabs({ bands, activeBand, onBandChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Price band selection">
      {bands.map((band) => {
        const active = band.id === activeBand;
        return (
          <button
            key={band.id}
            type="button"
            role="tab"
            aria-selected={active}
            className={`tab ${active ? "is-active" : ""}`}
            onClick={() => onBandChange(band.id)}
          >
            <span>{band.label}</span>
            <small>{band.range}</small>
          </button>
        );
      })}
    </div>
  );
}

export default PriceBandTabs;