import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/product/Product';
import path from '../../path';

//css
import './home.scss';
const Home = ({ cart }) => {
	// const [data, setData] = useState(null);

	// const fetchData = async () => {
	// 	const response = await fetch('https://fakestoreapi.com/products');
	// 	const resData = await response.json();
	// 	setData(resData);
	// };

	useEffect(() => {
		// fetchData();
	}, []);

	// console.log(cart);
	return (
		<>
			<div className="home">
				<div className="container">
					<div
						className="banner"
						style={{
							backgroundImage:
								'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg)',
						}}></div>
					<div className="products">
						<div className="row">
							<Product
								name="Women's t-short"
								price={109.95}
								imgSrc={`${path}/images/product/product2.jpg`}
								rating={5}
								id={6}
							/>
							<Product
								name="Men's t-short"
								price={109.95}
								imgSrc={`${path}/images/product/product3.jpg`}
								rating={4}
								id={1}
							/>
						</div>

						<div className="row">
							<Product
								name="Fits 15 Laptops"
								price={109.95}
								imgSrc={`${path}/images/product/product4.jpg`}
								rating={3}
								id={2}
							/>

							<Product
								name="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
								price={109.95}
								imgSrc={`${path}/images/product/product5.jpg`}
								rating={4}
								id={3}
							/>

							<Product
								name="Backpack, Fits 15 Laptops"
								price={109.95}
								imgSrc={`${path}/images/product/product6.jpg`}
								rating={5}
								id={4}
							/>
						</div>
						<div className="row">
							<Product
								name="4k gaming monitor"
								price={109.95}
								imgSrc={`${path}/images/product/product1.jpg`}
								rating={4}
								id={5}
							/>
						</div>
					</div>
				</div>
			</div>
			<footer className="footer">I'm footer</footer>
		</>
	);
};

const mapStateToProps = state => ({
	cart: state.cart,
});

export default connect(mapStateToProps)(Home);
