/*<div>
            <input
              className={styles.quantityButton}
              type="button"
              onClick={event => handleQtyChange(event)}
              value="-"
            />
            <input
              className={styles.quantityButton}
              type="button"
              onClick={event => handleQtyChange(event)}
              value="+"
            />
            <input
              type="number"
              step="1"
              min="0"
              value={qtyCount}
              title="qty"
            />
          </div>
          
          
          const [qtyCount, setQtyCount] = useState(1)

  function handleQtyChange(event) {
    if (event.target.value === "-" && qtyCount <= 1) return
    event.target.value === "+"
      ? setQtyCount(qtyCount + 1)
      : setQtyCount(qtyCount - 1)
  }*/

          