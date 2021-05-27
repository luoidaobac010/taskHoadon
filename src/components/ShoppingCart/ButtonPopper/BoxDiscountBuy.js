import React from 'react';


function BoxDiscountBuy(){
    const [num, setNum] = React.useState(0);  
    return(
        <>
              <div>{num} %</div>
              <label>
                Giảm giá
                <input
                    type="number"
                    min={0}
                    max={100}
                    step={1}
                    value={num}
                    onChange={e => setNum(e.target.value)}
                  />
                <button type="button" className="btn btn-success"> % </button>
                <button type="button" className="btn btn-default">VND</button>
              </label>
        </>
    );
}
export default BoxDiscountBuy;