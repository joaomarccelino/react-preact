export function CartItem({image, name, description, price}) {
  return (
    <div className="item">
      <img src={image} alt="Imagem" />
      <div className="title">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="amount">
        <input type="number" name="" id="" placeholder="2" />
        <span>10 disponíveis</span>
      </div>
      <span className="price">{price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, style: "currency", currency: "BRL" })}</span>
    </div>
  )
}