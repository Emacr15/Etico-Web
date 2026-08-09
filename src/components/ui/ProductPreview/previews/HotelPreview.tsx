import { BedDouble } from "lucide-react";

export function HotelPreview() {
  return (
    <div className="preview preview--hotel">
      <div className="preview__browser">
        <span />
        <span />
        <span />
      </div>

      <div className="preview-hotel__top">
        <div>
          <BedDouble size={13} />
          <span>
            Habitaciones
          </span>
        </div>

        <small>
          20
        </small>
      </div>

      <div className="preview-hotel__calendar">
        {[1, 2, 3, 4, 5].map((row) => (
          <div key={row}>
            {[1, 2, 3, 4].map((cell) => (
              <span
                key={cell}
                className={
                  row === 2 && cell === 2
                    ? "is-active"
                    : ""
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
