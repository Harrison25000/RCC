export const ProductCard = () => {
    return (
        <div className="ProductCard">
            <img id="productImage" src="https://images.asos-media.com/products/adidas-originals-sports-resort-swim-shorts-in-yellow/201829348-1-yellow?$n_240w$&wid=120&fit=constrain" />
            <h2 id="title">Swimming Trunks</h2>
            <p id="description">White swimming trunks by QuickSilver</p>
            <p id="sizes">Sizes: S,M</p>
            <p id="colour">Colour: White </p>
            <p id="availability">Availability: Buy or Rent</p>
            <p id="buyPrice">Buy Price: £30</p>
            <p id="rentPrice">Rent Price: £15</p>
            <div className="ProductPurchaseButtons">
                <button type="submit" id="purchaseButton">Buy</button>
                <button type="submit" id="purchaseButton">Rent</button>
            </div>
        </div >
    )
}