import React from 'react';

class BoxDiscountBuy extends React.Component {
  
    constructor() {
        super();
        this.state = {
            discount: 0,
        }

        this.handleChange = this.handleChange.bind(this);

    }
  
    /* update values on change */
    handleChange(event) {
        this.setState(
            {
                [event.target.name] : event.target.value
            },
            () => {
                this.setState({
                    total: this.totalDiscount(),
                    
                })
            }
        );
    }
  
    /* calculate and return total discount */
    totalDiscount() {
        return (Math.abs((this.state.discount)));
    }
      
  render() {
    return <div>
              <h1>{this.state.total} %</h1>
              <label>
                Giảm giá
                <input 
                  name="discount" 
                  value={this.state.discount}
                  onChange={this.handleChange}
                  type="number"
                  min="0"/>
                
              </label>

               
           </div>
  }
}

export default BoxDiscountBuy;

