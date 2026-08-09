export function PosPreview() {
  return (
    <div className="preview preview--pos">
      <div className="preview__browser">
        <span />
        <span />
        <span />
      </div>

      <div className="preview-pos__layout">
        <div className="preview-pos__sidebar">
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className="preview-pos__content">
          <div className="preview-pos__products">
            {[1, 2, 3, 4, 5, 6].map(
              (item) => (
                <div key={item}>
                  <span />
                  <small />
                </div>
              ),
            )}
          </div>

          <div className="preview-pos__ticket">
            <span />
            <span />
            <span />

            <strong>
              ₡24.500
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
