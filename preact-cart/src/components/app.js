import { CartItem } from "./CartItem";
const items = [
	{
		id: '01',
		image: "https://dummyimage.com/600x400/000/fff",
		name: "Produto 1",
		description: "Lorem ipsum dolor sit",
		price: 999.90,
	},
	{
		id: '02',
		image: "https://dummyimage.com/600x400/000/fff",
		name: "Produto 2",
		description: "Lorem ipsum dolor sit",
		price: 919.90,
	},
	{
		id: '03',
		image: "https://dummyimage.com/600x400/000/fff",
		name: "Produto 3",
		description: "Lorem ipsum dolor sit",
		price: 629.90,
	}
]

const App = () => (
	<main className="container">
		<h1>Meu carrinho</h1>
		<div className="content">
			<div className="items">
				{items.map(item => {
					return (
						<CartItem {...item} />
					)
				})}
			</div>
			<div className="order">
				<h2>Resumo do pedido</h2>
				<div className="order-item">
					<span>subtotal (3 produtos)</span>
					<span>R$ 999,99</span>
				</div>
				<div className="order-item">
					<span>frete</span>
					<span>R$ 999,99</span>
				</div>
				<div className="order-item">
					<span>total (3 produtos)</span>
					<span>R$ 999,99</span>
				</div>
				<button>Continuar</button>
				<p>possui cupom ou vale? você poderá usá-los na etapa de pagamento</p>
			</div>
		</div>
	</main>
)

export default App;
